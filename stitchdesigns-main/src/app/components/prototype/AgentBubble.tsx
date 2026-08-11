// The agent's voice inside the prototype editor.
//
// It sits beside the right rail and stays quiet ("No updates from the agent")
// until preview mode hits a hotspot with nowhere to go — then it proposes a
// screen you can accept as-is, or open up and reword before building.

import { useEffect, useState } from "react";
import { suggestionsFor, type ScreenSuggestion } from "./suggest";

export type AgentState =
  | { kind: "idle" }
  | { kind: "suggest"; hotspot: string; fromScreen: string }
  | { kind: "building"; hotspot: string; title: string }
  | { kind: "done"; hotspot: string; title: string; screenId: string };

/** Small light pill with three dots — the agent's badge, per the Figma. */
function DotsPill() {
  return (
    <div className="flex items-center gap-[3px] h-[18px] px-[8px] rounded-full bg-[#f1f3f4] shrink-0">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-[3px] rounded-full bg-[#202124]" />
      ))}
    </div>
  );
}

function Spinner() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="animate-spin shrink-0" style={{ animationDuration: "0.9s" }}>
      <circle cx="8" cy="8" r="6.5" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <path d="M8 1.5A6.5 6.5 0 0 1 14.5 8" stroke="#a89ff8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M9.5 1.9l2.6 2.6M2 12l.5-2.6 7-7 2.6 2.6-7 7L2 12z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Props {
  state: AgentState;
  /** Build the screen with the (possibly edited) brief. */
  onMakeIt: (title: string, description: string) => void;
  onDismiss: () => void;
  onOpenScreen: (screenId: string) => void;
}

export function AgentBubble({ state, onMakeIt, onDismiss, onOpenScreen }: Props) {
  // Which candidate is on show, and the editable draft of it.
  const [index, setIndex] = useState(0);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<ScreenSuggestion | null>(null);

  const hotspot = state.kind === "idle" ? "" : state.hotspot;
  const fromScreen = state.kind === "suggest" ? state.fromScreen : "";

  // A new hotspot is a new conversation — reset the card.
  useEffect(() => {
    setIndex(0);
    setEditing(false);
    setDraft(null);
  }, [hotspot, state.kind === "suggest"]);

  const candidates = state.kind === "suggest" ? suggestionsFor(hotspot, fromScreen) : [];
  const current = draft ?? candidates[index % Math.max(candidates.length, 1)];

  function update(patch: Partial<ScreenSuggestion>) {
    if (!current) return;
    setDraft({ ...current, ...patch });
  }

  function cycle() {
    const next = (index + 1) % Math.max(candidates.length, 1);
    setIndex(next);
    setDraft(null); // show the next candidate fresh
  }

  function appendRefinement(text: string) {
    if (!current) return;
    const sep = /[.!?]\s*$/.test(current.description.trim()) ? " " : ". ";
    update({ description: `${current.description.trim()}${sep}${text}.` });
  }

  return (
    <div className="w-[316px] relative">
      {/* Bubble */}
      <div className="relative rounded-[18px] overflow-hidden backdrop-blur-[20px] bg-[rgba(18,19,20,0.94)] border border-[rgba(218,220,224,0.15)] shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.75)]">
        {/* Gradient sheen along the top edge (Figma) */}
        <div
          className="absolute inset-x-0 top-0 h-[64px] pointer-events-none opacity-[0.55]"
          style={{
            background:
              "radial-gradient(120% 100% at 30% 0%, rgba(113,104,246,0.45) 0%, rgba(113,104,246,0) 55%), radial-gradient(90% 100% at 72% 0%, rgba(45,212,191,0.28) 0%, rgba(45,212,191,0) 60%)",
          }}
        />

        <div className="relative px-[13px] pt-[12px] pb-[13px] flex flex-col gap-[10px]">
          {/* Badge row */}
          <div className="flex items-center gap-[8px]">
            <DotsPill />
            {state.kind !== "idle" && (
              <button
                onClick={onDismiss}
                title="Dismiss"
                className="ml-auto flex items-center justify-center size-[18px] rounded-full text-[rgba(255,255,255,0.45)] hover:text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-[13px] leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* ── Idle ─────────────────────────────────────────────── */}
          {state.kind === "idle" && (
            <p className="text-[13px] leading-[19px] text-[rgba(255,255,255,0.55)]">No updates from the agent</p>
          )}

          {/* ── Building ─────────────────────────────────────────── */}
          {state.kind === "building" && (
            <div className="flex items-center gap-[8px]">
              <Spinner />
              <span className="text-[13px] leading-[19px] text-[#f1f3f4] italic">Creating {state.title}…</span>
            </div>
          )}

          {/* ── Done ─────────────────────────────────────────────── */}
          {state.kind === "done" && (
            <div className="flex flex-col gap-[8px]">
              <p className="text-[13px] leading-[19px] text-[#f1f3f4]">
                Added <span className="font-semibold">{state.title}</span> and connected it to “{state.hotspot}”.
              </p>
              <button
                onClick={() => onOpenScreen(state.screenId)}
                className="self-start text-[12px] font-medium text-[#a89ff8] hover:text-white transition-colors"
              >
                View screen →
              </button>
            </div>
          )}

          {/* ── Suggestion ───────────────────────────────────────── */}
          {state.kind === "suggest" && current && (
            <>
              <p className="text-[13px] leading-[19px] text-[#f1f3f4]">
                The <span className="font-semibold">{hotspot}</span> button has not been mapped yet.
                <br />
                Here’s a suggested screen for the action:
              </p>

              {/* Suggestion card */}
              <div className="rounded-[12px] bg-[rgba(255,255,255,0.06)] border border-[rgba(218,220,224,0.14)] p-[11px] flex flex-col gap-[7px]">
                {editing ? (
                  <input
                    value={current.title}
                    onChange={(e) => update({ title: e.target.value })}
                    className="w-full bg-transparent border-none outline-none text-[13.5px] font-semibold text-white border-b border-[rgba(255,255,255,0.25)] focus:border-[#a89ff8] pb-[3px] transition-colors"
                  />
                ) : (
                  <span className="text-[13.5px] font-semibold text-white">{current.title}</span>
                )}

                {editing ? (
                  <textarea
                    value={current.description}
                    onChange={(e) => update({ description: e.target.value })}
                    rows={3}
                    autoFocus
                    placeholder="Describe the screen…"
                    className="w-full resize-none bg-transparent outline-none text-[11.5px] leading-[17px] text-[#f1f3f4] placeholder-[rgba(255,255,255,0.3)] border-b border-[rgba(255,255,255,0.25)] focus:border-[#a89ff8] pb-[5px] transition-colors"
                  />
                ) : (
                  <p className="text-[11.5px] leading-[17px] text-[rgba(255,255,255,0.6)]">{current.description}</p>
                )}

                {/* Refinement chips — optional, "make it!" works without them */}
                {editing && (
                  <div className="flex flex-wrap gap-[5px] pt-[1px]">
                    <button
                      onClick={cycle}
                      className="h-[22px] px-[9px] rounded-full border border-[rgba(218,220,224,0.3)] text-[10.5px] text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                    >
                      more like these
                    </button>
                    {current.refinements.map((r) => (
                      <button
                        key={r}
                        onClick={() => appendRefinement(r)}
                        className="h-[22px] px-[9px] rounded-full border border-[rgba(218,220,224,0.3)] text-[10.5px] text-[rgba(255,255,255,0.75)] hover:bg-[rgba(255,255,255,0.1)] hover:text-[#f1f3f4] transition-colors"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-[8px] pt-[2px]">
                  <button
                    onClick={() => setEditing((e) => !e)}
                    className="flex items-center gap-[4px] text-[11.5px] text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4] transition-colors"
                  >
                    <PencilIcon />
                    {editing ? "done" : "edit"}
                  </button>
                  <button
                    onClick={() => onMakeIt(current.title.trim() || "New screen", current.description.trim())}
                    className="ml-auto h-[26px] px-[12px] rounded-[8px] border border-[rgba(218,220,224,0.45)] text-[11.5px] font-medium text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(218,220,224,0.7)] transition-colors"
                  >
                    make it!
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Tail pointing at the rail's "…" button */}
      <div
        className="absolute top-[18px] -right-[5px] size-[11px] rotate-45 bg-[rgba(18,19,20,0.94)] border-r border-t border-[rgba(218,220,224,0.15)]"
      />
    </div>
  );
}
