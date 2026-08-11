// Direct-manipulation colour picker: saturation/value field, hue rail, hex.
//
// Dragging reports on every move so the preview above it repaints live — the
// point of the editor is that you see the theme change under your hand, not
// after a commit.

import { useEffect, useState } from "react";
import { hexToHsv, hsvToHex, isHex, normalizeHex, type HSV } from "./color";

const HUE_RAIL =
  "linear-gradient(to right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)";

/** Pointer position inside an element, as 0–1 on both axes. */
function ratio(el: HTMLElement, e: { clientX: number; clientY: number }) {
  const r = el.getBoundingClientRect();
  return {
    x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
    y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)),
  };
}

/** Drag handling shared by the field and the rail. */
function useDrag(onMove: (el: HTMLElement, e: PointerEvent | React.PointerEvent) => void) {
  return (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    onMove(el, e);
    const move = (ev: PointerEvent) => onMove(el, ev);
    const up = () => {
      el.releasePointerCapture(e.pointerId);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
  };
}

export default function ColorPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (hex: string) => void;
}) {
  // HSV is the editing state: hue survives dragging into the black or grey
  // corners, which a hex round-trip would lose.
  const [hsv, setHsv] = useState<HSV>(() => hexToHsv(value));
  const [text, setText] = useState(value);

  // Re-sync when the colour changes from outside (seed swatches, role swaps).
  useEffect(() => {
    if (hsvToHex(hsv) !== normalizeHex(value)) setHsv(hexToHsv(value));
    setText(normalizeHex(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  function commit(next: HSV) {
    setHsv(next);
    onChange(hsvToHex(next));
  }

  const onFieldDrag = useDrag((el, e) => {
    const { x, y } = ratio(el, e);
    commit({ ...hsv, s: x, v: 1 - y });
  });

  const onHueDrag = useDrag((el, e) => {
    commit({ ...hsv, h: ratio(el, e).x * 360 });
  });

  function nudge(e: React.KeyboardEvent, axis: "h" | "s" | "v", step: number) {
    const dir = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const at = hsv[axis] + dir * step;
    commit({ ...hsv, [axis]: axis === "h" ? (at + 360) % 360 : Math.min(1, Math.max(0, at)) });
  }

  const pure = hsvToHex({ h: hsv.h, s: 1, v: 1 });

  return (
    <div className="flex flex-col gap-[12px] pt-[12px]">
      {/* Saturation / value field */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Saturation and brightness"
        aria-valuetext={`Saturation ${Math.round(hsv.s * 100)}%, brightness ${Math.round(hsv.v * 100)}%`}
        onPointerDown={onFieldDrag}
        onKeyDown={(e) => nudge(e, e.key === "ArrowUp" || e.key === "ArrowDown" ? "v" : "s", 0.02)}
        className="relative h-[148px] rounded-[10px] cursor-crosshair touch-none outline-none focus-visible:ring-2 focus-visible:ring-[#7168f6]"
        style={{
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), ${pure}`,
        }}
      >
        <span
          className="absolute size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_1px_4px_rgba(0,0,0,0.55)] pointer-events-none"
          style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%`, background: hsvToHex(hsv) }}
        />
      </div>

      {/* Hue rail */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Hue"
        aria-valuemin={0}
        aria-valuemax={360}
        aria-valuenow={Math.round(hsv.h)}
        onPointerDown={onHueDrag}
        onKeyDown={(e) => nudge(e, "h", 4)}
        className="relative h-[14px] rounded-full cursor-pointer touch-none outline-none focus-visible:ring-2 focus-visible:ring-[#7168f6]"
        style={{ background: HUE_RAIL }}
      >
        <span
          className="absolute top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_1px_4px_rgba(0,0,0,0.55)] pointer-events-none"
          style={{ left: `${(hsv.h / 360) * 100}%`, background: pure }}
        />
      </div>

      {/* Hex */}
      <div className="flex items-center gap-[10px] h-[36px] px-[12px] rounded-[10px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.09)] focus-within:border-[rgba(113,104,246,0.6)] transition-colors">
        <input
          value={text}
          onChange={(e) => {
            const v = e.target.value;
            setText(v);
            if (isHex(v)) {
              const hex = normalizeHex(v);
              setHsv(hexToHsv(hex));
              onChange(hex);
            }
          }}
          onBlur={() => setText(normalizeHex(value))}
          spellCheck={false}
          aria-label="Hex value"
          className="flex-1 min-w-0 bg-transparent outline-none text-[13px] text-[#f1f3f4] tracking-[0.02em]"
        />
        <span
          className="size-[18px] rounded-full shrink-0 ring-1 ring-[rgba(255,255,255,0.18)]"
          style={{ background: hsvToHex(hsv) }}
        />
      </div>
    </div>
  );
}
