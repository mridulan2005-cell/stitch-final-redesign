import { useState, useEffect, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export interface ClarifyingQuestion {
  id: string;
  text: string;
  options: string[];
  /** Show a free-text "type your own" radio as the last choice. */
  allowCustom?: boolean;
}

type Answer =
  | { kind: "option"; value: string }
  | { kind: "custom"; value: string };

interface Props {
  open: boolean;
  questions: ClarifyingQuestion[];
  /** Questions shown per page. More than this → paginated with a Next button. */
  perPage?: number;
  onSubmit: (summary: string, answers: Record<string, string>) => void;
  onSkip: () => void;
}

// ── Small pieces ─────────────────────────────────────────────────────────────

function RadioDot({ checked }: { checked: boolean }) {
  return (
    <span
      className={`shrink-0 size-[18px] rounded-full border flex items-center justify-center transition-colors duration-150 ${
        checked ? "border-[#7168f6]" : "border-[rgba(255,255,255,0.3)]"
      }`}
    >
      {checked && <span className="size-[8px] rounded-full bg-[#7168f6]" />}
    </span>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// ── Component ────────────────────────────────────────────────────────────────

export function ClarifyingQuestions({
  open,
  questions,
  perPage = 2,
  onSubmit,
  onSkip,
}: Props) {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const bodyRef = useRef<HTMLDivElement>(null);

  // Reset the flow every time the panel opens for a new prompt.
  useEffect(() => {
    if (open) {
      setPage(0);
      setAnswers({});
      setDrafts({});
    }
  }, [open]);

  const pages = chunk(questions, perPage);
  const totalPages = Math.max(pages.length, 1);
  const current = pages[page] ?? [];
  const isLast = page >= totalPages - 1;

  function selectOption(qid: string, value: string) {
    setAnswers((a) => ({ ...a, [qid]: { kind: "option", value } }));
  }

  function selectCustom(qid: string) {
    setAnswers((a) => ({ ...a, [qid]: { kind: "custom", value: drafts[qid] ?? "" } }));
  }

  function typeCustom(qid: string, value: string) {
    setDrafts((d) => ({ ...d, [qid]: value }));
    setAnswers((a) => ({ ...a, [qid]: { kind: "custom", value } }));
  }

  function handlePrimary() {
    if (!isLast) {
      setPage((p) => p + 1);
      bodyRef.current?.scrollTo({ top: 0 });
      return;
    }
    // Build a compact, human-readable summary of everything answered.
    const flat: Record<string, string> = {};
    const parts: string[] = [];
    for (const q of questions) {
      const a = answers[q.id];
      const value = a?.value?.trim();
      if (value) {
        flat[q.id] = value;
        parts.push(value);
      }
    }
    onSubmit(parts.join(" · "), flat);
  }

  return (
    // Anchored just above the prompt bar and sitting BEHIND it (z-0 vs the
    // prompt bar's z-20). Closed, it is tucked down behind the bar; opening
    // slides it up so it emerges from behind the bar rather than hovering over.
    <div
      aria-hidden={!open}
      className={`absolute left-0 right-0 bottom-[calc(100%+6px)] z-0 transition-all duration-300 ease-out ${
        open
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-[30px] opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full bg-[#28292d] border border-[rgba(255,255,255,0.08)] rounded-[16px] shadow-[0px_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Header ─ title + Skip + Next/Submit */}
        <div className="flex items-center justify-between gap-[12px] px-[16px] pt-[14px] pb-[12px] border-b border-[rgba(255,255,255,0.06)]">
          <p className="text-[rgba(255,255,255,0.55)] text-[13px] leading-[18px] min-w-0">
            A few quick questions so we design exactly what you want
          </p>
          <div className="flex items-center gap-[8px] shrink-0">
            <button
              onClick={onSkip}
              className="h-[30px] px-[12px] rounded-full text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4] text-[13px] font-medium hover:bg-[rgba(255,255,255,0.06)] transition-colors"
            >
              Skip
            </button>
            <button
              onClick={handlePrimary}
              className="flex items-center gap-[5px] h-[30px] pl-[16px] pr-[14px] rounded-full bg-[#f1f3f4] hover:bg-white text-[#202124] text-[13px] font-semibold transition-colors shadow-[0px_2px_8px_rgba(241,243,244,0.15)]"
            >
              {isLast ? "Submit" : "Next"}
              {!isLast && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="#202124" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Body ─ questions for the current page */}
        <div
          ref={bodyRef}
          className="px-[16px] py-[16px] overflow-y-auto flex flex-col gap-[24px]"
          style={{ maxHeight: 360 }}
        >
          <div key={page} className="flex flex-col gap-[24px] animate-in fade-in slide-in-from-bottom-1 duration-200">
            {current.map((q, i) => {
              const number = page * perPage + i + 1;
              const answer = answers[q.id];
              const isCustom = answer?.kind === "custom";
              return (
                <fieldset key={q.id} className="flex flex-col gap-[10px] border-0 p-0 m-0">
                  <legend className="text-[#f1f3f4] text-[14px] font-semibold leading-[20px] p-0">
                    {number}. {q.text}
                  </legend>
                  <div className="flex flex-col gap-[2px]">
                    {q.options.map((opt) => {
                      const selected = answer?.kind === "option" && answer.value === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => selectOption(q.id, opt)}
                          className="flex items-center gap-[11px] px-[8px] py-[8px] rounded-[10px] hover:bg-[rgba(255,255,255,0.04)] transition-colors text-left"
                        >
                          <RadioDot checked={selected} />
                          <span
                            className={`text-[14px] leading-[20px] transition-colors ${
                              selected ? "text-[#f1f3f4]" : "text-[rgba(255,255,255,0.72)]"
                            }`}
                          >
                            {opt}
                          </span>
                        </button>
                      );
                    })}

                    {q.allowCustom && (
                      <div className="flex items-center gap-[11px] px-[8px] py-[6px]">
                        <button
                          type="button"
                          role="radio"
                          aria-checked={isCustom}
                          aria-label="Type your own answer"
                          onClick={() => selectCustom(q.id)}
                          className="shrink-0"
                        >
                          <RadioDot checked={isCustom} />
                        </button>
                        <input
                          type="text"
                          value={drafts[q.id] ?? ""}
                          onChange={(e) => typeCustom(q.id, e.target.value)}
                          onFocus={() => selectCustom(q.id)}
                          placeholder="Type your own…"
                          className={`flex-1 h-[40px] px-[14px] rounded-[10px] bg-[rgba(255,255,255,0.05)] border text-[#f1f3f4] text-[14px] placeholder-[#6b6e75] outline-none transition-colors ${
                            isCustom ? "border-[rgba(113,104,246,0.6)]" : "border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)]"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                </fieldset>
              );
            })}
          </div>
        </div>

        {/* Footer ─ progress dots (+ Back when paginated) */}
        {totalPages > 1 && (
          <div className="relative h-[42px] flex items-center justify-center border-t border-[rgba(255,255,255,0.06)]">
            {page > 0 && (
              <button
                onClick={() => setPage((p) => p - 1)}
                className="absolute left-[12px] flex items-center gap-[3px] h-[28px] px-[10px] rounded-full text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4] text-[12px] font-medium hover:bg-[rgba(255,255,255,0.06)] transition-colors"
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </button>
            )}
            <div className="flex items-center gap-[7px]" role="progressbar" aria-valuenow={page + 1} aria-valuemin={1} aria-valuemax={totalPages} aria-label={`Page ${page + 1} of ${totalPages}`}>
              {pages.map((_, i) => (
                <span
                  key={i}
                  className={`h-[6px] rounded-full transition-all duration-200 ${
                    i === page ? "w-[18px] bg-[#7168f6]" : "w-[6px] bg-[rgba(255,255,255,0.25)]"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
