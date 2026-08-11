// Component-level selection on the canvas.
//
// Sweeping a screen outlines the piece under the cursor; clicking it pins the
// selection and hangs the Edit Element menu off it (Figma 268:8 — dot, leader
// line, glass menu). "Edit text" swaps the menu for an inline field over the
// same anchor, so the two never fight for the space.
//
// Geometry is measured off the live nodes rather than stored, so the outlines
// stay glued to the screens through pan and zoom.

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ElementMenu from "./ElementMenu";
import { currentText, readElement, type ElementSel } from "./elements";

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Props {
  /** The canvas the screens are drawn in — outlines are positioned inside it. */
  canvasRef: React.RefObject<HTMLDivElement | null>;
  /** Off while annotating, or while a full-screen view is up. */
  active: boolean;
  /** Screen whose components are all outlined faintly (toolbar → Edit). */
  hintFrame: string | null;
  selected: ElementSel | null;
  onSelect: (sel: ElementSel | null) => void;
  /**
   * Components that have been deleted. They are hidden from the canvas by a
   * layout effect that runs *after* this one, so an outline measured on a
   * just-deleted node would linger — they are skipped here instead.
   */
  hidden: string[];
  /** Canvas transform — re-measures the outlines when either changes. */
  pan: { x: number; y: number };
  scale: number;
  onEditText: (sel: ElementSel, text: string) => void;
  onEditWithAI: (sel: ElementSel) => void;
  onDelete: (sel: ElementSel) => void;
}

export default function ElementLayer({
  canvasRef, active, hintFrame, selected, onSelect, hidden, pan, scale,
  onEditText, onEditWithAI, onDelete,
}: Props) {
  const [hover, setHover] = useState<ElementSel | null>(null);
  const [hoverBox, setHoverBox] = useState<Box | null>(null);
  const [selBox, setSelBox] = useState<Box | null>(null);
  const [hintBoxes, setHintBoxes] = useState<Box[]>([]);
  /** Non-null while the inline text field is up, holding its draft value. */
  const [draft, setDraft] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /** Node rect in canvas-local coordinates. */
  function boxOf(el: HTMLElement): Box | null {
    const host = canvasRef.current;
    if (!host || !el.isConnected) return null;
    const a = el.getBoundingClientRect();
    const b = host.getBoundingClientRect();
    if (a.width === 0 && a.height === 0) return null;
    return { x: a.left - b.left, y: a.top - b.top, w: a.width, h: a.height };
  }

  // Hover / click on anything marked up as a component.
  useEffect(() => {
    const host = canvasRef.current;
    if (!host || !active) return;

    const move = (e: MouseEvent) => {
      const node = (e.target as HTMLElement)?.closest?.("[data-comp]") as HTMLElement | null;
      const next = node ? readElement(node) : null;
      setHover((prev) => (prev?.key === next?.key ? prev : next));
    };
    const leave = () => setHover(null);
    const click = (e: MouseEvent) => {
      const node = (e.target as HTMLElement)?.closest?.("[data-comp]") as HTMLElement | null;
      if (!node) return;
      const next = readElement(node);
      if (!next) return;
      setDraft(null);
      onSelect(next);
    };

    host.addEventListener("mousemove", move);
    host.addEventListener("mouseleave", leave);
    host.addEventListener("click", click);
    return () => {
      host.removeEventListener("mousemove", move);
      host.removeEventListener("mouseleave", leave);
      host.removeEventListener("click", click);
    };
  }, [canvasRef, active, onSelect]);

  // Clear the hover outline the moment the layer switches off.
  useEffect(() => { if (!active) setHover(null); }, [active]);

  // Re-measure whenever the canvas moves or the target changes.
  useLayoutEffect(() => {
    const live = (sel: ElementSel | null) => (sel && !hidden.includes(sel.key) ? boxOf(sel.el) : null);
    setHoverBox(live(hover));
    setSelBox(live(selected));
    if (!hintFrame) { setHintBoxes([]); return; }
    const frame = canvasRef.current?.querySelector<HTMLElement>(`[data-frame="${hintFrame}"]`);
    const nodes = frame ? Array.from(frame.querySelectorAll<HTMLElement>("[data-comp]")) : [];
    setHintBoxes(
      nodes
        .filter((n) => !hidden.includes(n.dataset.comp!))
        .map(boxOf)
        .filter((b): b is Box => b !== null),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hover, selected, hintFrame, hidden, pan.x, pan.y, scale]);

  // The inline text field opens focused, on the text that is already there.
  useEffect(() => {
    if (draft === null) return;
    const t = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 40);
    return () => clearTimeout(t);
  }, [draft]);

  // Esc backs out — first out of the text field, then out of the selection.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (draft !== null) setDraft(null);
      else onSelect(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, draft, onSelect]);

  if (!active) return null;

  // The menu hangs to the right of the selection, or flips left when there is
  // no room, and is nudged back inside the canvas vertically.
  const host = canvasRef.current;
  const hostW = host?.clientWidth ?? 0;
  const hostH = host?.clientHeight ?? 0;
  const LEAD = 26;
  const MENU_W = 200;
  const flip = selBox ? selBox.x + selBox.w + LEAD + MENU_W > hostW - 12 : false;
  const anchorY = selBox ? Math.min(Math.max(selBox.y + selBox.h / 2 - 18, 12), Math.max(hostH - 190, 12)) : 0;

  return (
    <div data-element-layer className="absolute inset-0 z-[14] pointer-events-none">

      {/* Every component on the screen the toolbar's Edit was pressed on */}
      {hintBoxes.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-[3px] border border-dashed border-[rgba(113,104,246,0.35)]"
          style={{ left: b.x, top: b.y, width: b.w, height: b.h }}
        />
      ))}

      {/* Hover */}
      {hoverBox && hover?.key !== selected?.key && (
        <div
          className="absolute rounded-[3px] border-[1.5px] border-[rgba(113,104,246,0.75)] bg-[rgba(113,104,246,0.07)]"
          style={{ left: hoverBox.x, top: hoverBox.y, width: hoverBox.w, height: hoverBox.h }}
        >
          <span className="absolute left-0 -top-[19px] px-[6px] h-[17px] flex items-center rounded-[4px] bg-[#7168f6] text-white text-[10px] font-medium leading-none whitespace-nowrap">
            {hover?.label}
          </span>
        </div>
      )}

      {/* Selection */}
      {selBox && selected && (
        <>
          <div
            className="absolute rounded-[3px] border-2 border-[#7168f6]"
            style={{ left: selBox.x, top: selBox.y, width: selBox.w, height: selBox.h }}
          >
            <span className="absolute left-0 -top-[20px] px-[6px] h-[18px] flex items-center rounded-[4px] bg-[#7168f6] text-white text-[10px] font-semibold leading-none whitespace-nowrap">
              {selected.label}
            </span>
          </div>

          {/* Leader line + dot, per the Figma menu */}
          <div
            className="absolute h-px bg-[#7168f6]"
            style={{
              left: flip ? selBox.x - LEAD : selBox.x + selBox.w,
              top: selBox.y + selBox.h / 2,
              width: LEAD,
            }}
          />
          <div
            className="absolute size-[7px] rounded-full bg-[#7168f6]"
            style={{
              left: (flip ? selBox.x - LEAD : selBox.x + selBox.w) - 3.5 + (flip ? LEAD : 0),
              top: selBox.y + selBox.h / 2 - 3.5,
            }}
          />

          {/* Menu, or the inline text field once "Edit Text" is picked */}
          <div
            className="absolute pointer-events-auto"
            style={{
              top: anchorY,
              ...(flip
                ? { right: hostW - (selBox.x - LEAD) }
                : { left: selBox.x + selBox.w + LEAD }),
            }}
          >
            {draft === null ? (
              <ElementMenu
                label={selected.label}
                onEditText={() => setDraft(currentText(selected.el))}
                onEditWithAI={() => onEditWithAI(selected)}
                onDelete={() => onDelete(selected)}
                onClose={() => onSelect(null)}
              />
            ) : (
              <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.72)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25),0px_10px_30px_-8px_rgba(0,0,0,0.5)] p-[10px] w-[248px] flex flex-col gap-[8px] animate-in fade-in zoom-in-95 duration-150">
                <span className="text-[rgba(255,255,255,0.5)] text-[11px] leading-[16px] px-[2px]">
                  {selected.label}
                </span>
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onEditText(selected, draft.trim());
                      setDraft(null);
                    }
                  }}
                  placeholder="Type the new text"
                  className="w-full h-[32px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] outline-none focus:border-[rgba(113,104,246,0.7)] text-[#f1f3f4] text-[13px] placeholder-[#6b6e75]"
                />
                <div className="flex items-center gap-[6px] justify-end">
                  <button
                    onClick={() => setDraft(null)}
                    className="h-[28px] px-[12px] rounded-full text-[12px] text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => { onEditText(selected, draft.trim()); setDraft(null); }}
                    className="h-[28px] px-[14px] rounded-full bg-[#f1f3f4] hover:bg-white text-[#202124] text-[12px] font-medium transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
