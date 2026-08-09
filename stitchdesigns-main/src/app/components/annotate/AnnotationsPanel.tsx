import { useState, useEffect, useRef } from "react";
import { AreaChip, type Change } from "./AnnotationLayer";

interface Props {
  changes: Change[];
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Left panel while annotating. It starts completely empty — the only things
 * that ever appear here are the changes you describe against selected areas.
 */
export function AnnotationsPanel({ changes, onEdit, onDelete }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingId) inputRef.current?.focus();
  }, [editingId]);

  function startEdit(change: Change) {
    setEditingId(change.id);
    setDraft(change.text);
  }

  function commitEdit() {
    if (editingId && draft.trim()) onEdit(editingId, draft.trim());
    setEditingId(null);
  }

  return (
    <div className="relative flex flex-col h-full bg-[#1b1c1e] rounded-[8px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-[8px] px-[12px] h-[48px] border-b border-[rgba(255,255,255,0.12)] shrink-0">
        <div className="flex items-center gap-[7px] min-w-0">
          <span className="flex items-center justify-center size-[20px] rounded-full bg-[rgba(113,104,246,0.2)] border border-[rgba(113,104,246,0.45)] shrink-0">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <rect x="1.9" y="1.9" width="5.4" height="5.4" rx="1.4" stroke="#a89ff8" strokeWidth="1.4" />
              <rect x="8.7" y="8.7" width="5.4" height="5.4" rx="1.4" stroke="#a89ff8" strokeWidth="1.4" strokeDasharray="1.6 1.4" />
            </svg>
          </span>
          <span className="text-[#f1f3f4] text-[13px] font-semibold truncate">Annotations</span>
          {changes.length > 0 && (
            <span className="text-[rgba(255,255,255,0.35)] text-[11px] shrink-0">{changes.length}</span>
          )}
        </div>
      </div>

      {/* Changes */}
      <div className="flex-1 min-h-0 overflow-y-auto p-[10px] flex flex-col gap-[8px]">
        {changes.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center gap-[6px] flex-1 px-[16px]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-40">
              <rect x="2.6" y="2.6" width="8.4" height="8.4" rx="2" stroke="#f1f3f4" strokeWidth="1.5" />
              <rect x="13" y="13" width="8.4" height="8.4" rx="2" stroke="#f1f3f4" strokeWidth="1.5" strokeDasharray="2.4 2" />
            </svg>
            <span className="text-[12.5px] text-[rgba(255,255,255,0.5)]">No changes yet</span>
            <span className="text-[11px] leading-[16px] text-[rgba(255,255,255,0.3)]">
              Drag a box over any area on the canvas, then describe the change you want.
            </span>
          </div>
        )}

        {changes.map((c, i) => (
          <div
            key={c.id}
            className="rounded-[10px] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.035)] p-[9px] animate-in fade-in slide-in-from-bottom-1 duration-200"
          >
            {/* Selected areas, in a horizontal row */}
            <div className="flex items-center gap-[6px] overflow-x-auto pb-[7px]">
              {c.areas.map((a) => (
                <AreaChip key={a.id} area={a} />
              ))}
            </div>

            {/* The change itself */}
            {editingId === c.id ? (
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitEdit();
                  if (e.key === "Escape") setEditingId(null);
                }}
                onBlur={commitEdit}
                className="w-full bg-transparent border-0 border-b border-[rgba(113,104,246,0.8)] outline-none pb-[4px] text-[12.5px] text-[#f1f3f4]"
              />
            ) : (
              <p className="text-[12.5px] leading-[17px] text-[#f1f3f4]">
                <span className="text-[rgba(255,255,255,0.35)]">{i + 1}. </span>
                {c.text}
              </p>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-[2px] mt-[5px]">
              <button
                onClick={() => onDelete(c.id)}
                className="h-[22px] px-[8px] rounded-[6px] text-[11px] text-[rgba(255,255,255,0.45)] hover:text-[#ff8082] hover:bg-[rgba(255,77,79,0.1)] transition-colors"
              >
                delete
              </button>
              <button
                onClick={() => startEdit(c)}
                className="h-[22px] px-[8px] rounded-[6px] text-[11px] text-[rgba(255,255,255,0.45)] hover:text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
