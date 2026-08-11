import { useState, useEffect, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

/** A selected area, stored in canvas coordinates so it pans and zooms with the frames. */
export interface Area {
  id: string;
  n: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

/** A described change, bundling one or more areas. */
export interface Change {
  id: string;
  text: string;
  areas: Area[];
}

interface Props {
  /** Canvas transform, so screen positions can be derived from canvas coords. */
  pan: { x: number; y: number };
  scale: number;
  /** Areas selected but not yet described. */
  areas: Area[];
  /** Already-described changes — their boxes stay pinned to the canvas. */
  changes: Change[];
  /** Draft rectangle being dragged out right now, in canvas coords. */
  draft: { x: number; y: number; w: number; h: number } | null;
  /** Shown next to a lone selection until a second area is added. */
  showInlineInput: boolean;
  onDescribe: (text: string) => void;
  onRemoveArea: (id: string) => void;
  /** How many changes have been written so far — gates "Apply all changes". */
  changeCount: number;
  onExitAnnotate: () => void;
  onApplyAll: () => void;
}

// ── Layer ────────────────────────────────────────────────────────────────────

export function AnnotationLayer({
  pan, scale, areas, changes, draft, showInlineInput, onDescribe, onRemoveArea,
  changeCount, onExitAnnotate, onApplyAll,
}: Props) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the describe field as soon as it appears.
  useEffect(() => {
    if (showInlineInput) {
      setValue("");
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [showInlineInput, areas.length]);

  const toScreen = (x: number, y: number) => ({ x: pan.x + x * scale, y: pan.y + y * scale });

  const last = areas[areas.length - 1];

  return (
    <div className="absolute inset-0 z-[12] pointer-events-none">
      {/* Tip pill + the always-available exit / apply actions */}
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] pointer-events-auto animate-in fade-in slide-in-from-top-1 duration-200">
        <div className="flex items-center gap-[7px] px-[13px] h-[30px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.72)] border border-[rgba(218,220,224,0.15)] shadow-[0px_4px_14px_rgba(0,0,0,0.4)]">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <rect x="1.9" y="1.9" width="5.4" height="5.4" rx="1.4" stroke="#a89ff8" strokeWidth="1.3" />
            <rect x="8.7" y="8.7" width="5.4" height="5.4" rx="1.4" stroke="#a89ff8" strokeWidth="1.3" strokeDasharray="1.6 1.4" />
          </svg>
          <span className="text-[12px] text-[rgba(255,255,255,0.72)] whitespace-nowrap">
            Select more areas to apply a single change
          </span>
        </div>

        {/* Always available */}
        <button
          onClick={onExitAnnotate}
          title="Leave annotate mode (Esc)"
          className="flex items-center h-[30px] px-[13px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.72)] border border-[rgba(218,220,224,0.15)] shadow-[0px_4px_14px_rgba(0,0,0,0.4)] text-[12px] font-medium text-[rgba(255,255,255,0.72)] hover:text-[#f1f3f4] hover:bg-[rgba(56,59,61,0.8)] transition-colors whitespace-nowrap"
        >
          Exit annotate
        </button>

        {/* Appears as soon as there is at least one written change */}
        {changeCount > 0 && (
          <button
            onClick={onApplyAll}
            title="Apply every change you've written"
            className="flex items-center gap-[6px] h-[30px] px-[13px] rounded-full bg-[#f1f3f4] hover:bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.4)] transition-colors whitespace-nowrap animate-in fade-in zoom-in-95 duration-200"
          >
            <span className="text-[12px] font-semibold text-[#202124]">
              Apply {changeCount} {changeCount === 1 ? "change" : "changes"}
            </span>
          </button>
        )}
      </div>

      {/* Described changes — these stay pinned to the canvas for the rest of
          the session, so every area you've marked up remains visible. They
          only disappear when the change is deleted from the left panel. */}
      {changes.map((c, ci) =>
        c.areas.map((a) => {
          const p = toScreen(a.x, a.y);
          return (
            <div
              key={a.id}
              className="absolute group"
              style={{ left: p.x, top: p.y, width: a.w * scale, height: a.h * scale }}
            >
              <div className="absolute inset-0 rounded-[8px] border-2 border-[#7168f6] bg-[rgba(113,104,246,0.1)]" />
              {/* Number badge, with the change it belongs to */}
              <div className="absolute -top-[11px] -right-[11px] flex items-center justify-center size-[22px] rounded-full bg-[#7168f6] shadow-[0px_2px_6px_rgba(0,0,0,0.4)]">
                <span className="text-white text-[11px] font-bold leading-none">{a.n}</span>
              </div>
              {/* The description, on hover */}
              <div className="absolute -top-[9px] left-0 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="max-w-[240px] px-[9px] py-[5px] rounded-[8px] bg-[#0d0e0f] border border-[rgba(255,255,255,0.12)] shadow-[0px_4px_14px_rgba(0,0,0,0.5)]">
                  <span className="block text-[11px] leading-[15px] text-[#f1f3f4] line-clamp-2">
                    <span className="text-[rgba(255,255,255,0.4)]">{ci + 1}. </span>
                    {c.text}
                  </span>
                </div>
              </div>
            </div>
          );
        }),
      )}

      {/* Pending areas — selected, not yet described */}
      {areas.map((a) => {
        const p = toScreen(a.x, a.y);
        const w = a.w * scale;
        const h = a.h * scale;
        return (
          <div key={a.id} className="absolute animate-in fade-in zoom-in-95 duration-150" style={{ left: p.x, top: p.y, width: w, height: h }}>
            <div className="absolute inset-0 rounded-[8px] border-2 border-[#ff4d4f] bg-[rgba(255,77,79,0.08)]" />
            {/* Number badge */}
            <div className="absolute -top-[11px] -right-[11px] flex items-center justify-center size-[22px] rounded-full bg-[#ff4d4f] shadow-[0px_2px_6px_rgba(0,0,0,0.4)] pointer-events-auto">
              <span className="text-white text-[11px] font-bold leading-none">{a.n}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onRemoveArea(a.id); }}
                title="Remove this area"
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 bg-[#202124] flex items-center justify-center transition-opacity"
              >
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="#f1f3f4" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}

      {/* Draft rectangle while dragging */}
      {draft && (() => {
        const p = toScreen(draft.x, draft.y);
        return (
          <div
            className="absolute rounded-[8px] border-2 border-dashed border-[#7168f6] bg-[rgba(113,104,246,0.12)]"
            style={{ left: p.x, top: p.y, width: draft.w * scale, height: draft.h * scale }}
          />
        );
      })()}

      {/* Inline "Describe a change…" beside a single selection */}
      {showInlineInput && last && (() => {
        const p = toScreen(last.x, last.y);
        const w = last.w * scale;
        const W = 288;
        let left = p.x + w + 14;
        if (left + W > window.innerWidth - 16) left = Math.max(16, p.x - W - 14);
        const top = Math.min(Math.max(12, p.y - 6), window.innerHeight - 120);
        return (
          <div
            className="absolute pointer-events-auto animate-in fade-in slide-in-from-left-2 duration-200"
            style={{ left, top, width: W }}
          >
            <div className="bg-[#28292d] border border-[rgba(255,255,255,0.1)] rounded-[12px] shadow-[0px_10px_30px_rgba(0,0,0,0.55)] px-[12px] py-[10px]">
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  e.stopPropagation();
                  if (e.key === "Enter" && value.trim()) { onDescribe(value.trim()); setValue(""); }
                }}
                placeholder="Describe a change…"
                className="w-full bg-transparent border-0 border-b border-[rgba(255,255,255,0.18)] focus:border-[rgba(113,104,246,0.8)] outline-none pb-[6px] text-[13px] text-[#f1f3f4] placeholder-[rgba(255,255,255,0.38)] transition-colors"
              />
              <span className="block text-[10.5px] text-[rgba(255,255,255,0.35)] mt-[7px]">
                Enter to save · then select another area
              </span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ── Selection chips (prompt bar + change rows) ───────────────────────────────

/** The little component-preview chip with its number, used in the prompt bar. */
export function AreaChip({ area, onRemove }: { area: Area; onRemove?: () => void }) {
  return (
    <div className="relative flex items-center gap-[8px] pl-[8px] pr-[9px] h-[38px] rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] shrink-0">
      {/* mini component preview */}
      <div className="w-[38px] h-[22px] rounded-[5px] bg-[#1b1c1e] border border-[rgba(255,255,255,0.12)] flex items-center justify-center">
        <div className="w-[22px] h-[3px] rounded-full bg-[rgba(255,255,255,0.55)]" />
      </div>
      <span className="flex items-center justify-center size-[18px] rounded-full bg-[#ff4d4f] text-white text-[10px] font-bold leading-none shrink-0">
        {area.n}
      </span>
      {onRemove && (
        <button
          onClick={onRemove}
          title="Remove"
          className="flex items-center justify-center size-[18px] rounded-full hover:bg-[rgba(255,255,255,0.12)] transition-colors shrink-0"
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M3 3l6 6M9 3l-6 6" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
