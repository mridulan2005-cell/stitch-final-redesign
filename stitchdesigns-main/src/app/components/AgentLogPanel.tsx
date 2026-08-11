import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/Frame13/svg-w83i7d1cya";

// ── SVG icons ──────────────────────────────────────────────────────────────────

/**
 * The agent's mark — a white pill with two dots. Doubles as the collapse control
 * in the panel header and as the whole surface of the collapsed bubble.
 */
export function LogoPill({ size = "md" }: { size?: "md" | "lg" }) {
  // "lg" is the collapsed bubble's mark — 40×16 inside a 65px tile (Figma 264:4919).
  const lg = size === "lg";
  return (
    <div
      className={`flex items-center justify-center bg-white rounded-full shrink-0 ${
        lg ? "h-[16px] w-[40px] gap-[5px]" : "h-[21px] w-[43px] gap-[5px]"
      }`}
    >
      {[0, 1].map((i) => (
        <span key={i} className="rounded-full bg-[#202124] size-[5px]" />
      ))}
    </div>
  );
}

function HistoryIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p2cb59880} fill={active ? "white" : "rgba(255,255,255,0.6)"} />
    </svg>
  );
}

// Prompt-row actions. All draw with `currentColor` so the button controls colour.

function CopyIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="5.5" y="5.5" width="8.1" height="8.1" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M10.6 5.4V4.2a1.8 1.8 0 0 0-1.8-1.8H4.2a1.8 1.8 0 0 0-1.8 1.8v4.6a1.8 1.8 0 0 0 1.8 1.8h1.2"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function TickIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8.4l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open, size = 16 }: { open?: boolean; size?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 16 16" fill="none"
      className={`transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 6.2L8 10.2l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RegenerateIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M13.2 8a5.2 5.2 0 1 1-1.7-3.85" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M13.4 2.2v3h-3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PencilIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M10.9 2.7l2.4 2.4M2.6 13.4l.45-2.6 7.15-7.15 2.4 2.4-7.15 7.15-2.85.2z"
        stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Stop control that ends a run — a bordered tile holding a solid white square,
 * sized to sit as the prompt row's main affordance.
 */
function StopButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      title="Pause generating"
      className="shrink-0 flex items-center justify-center size-[30px] rounded-[9px] border border-[rgba(218,220,224,0.28)] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(218,220,224,0.5)] transition-colors"
    >
      <span className="block size-[12px] rounded-[3px] bg-white" />
    </button>
  );
}

/** Ticked circle marking a version that has been generated. */
function VersionTick({ muted }: { muted?: boolean }) {
  const c = muted ? "rgba(255,255,255,0.45)" : "#f1f3f4";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="6.35" stroke={c} strokeWidth="1.25" />
      <path d="M5.4 8.15l1.85 1.85L10.7 6.5" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TickCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p3b247780} fill="white" fillOpacity="0.46" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="animate-spin"
      style={{ animationDuration: "1s" }}
    >
      <path d={svgPaths.p34cd2d80} fill="white" />
    </svg>
  );
}

// ── Dropdown shell ─────────────────────────────────────────────────────────────

function Dropdown({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute top-[calc(100%+6px)] right-0 z-50 min-w-[220px] bg-[#232527] border border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-[0px_8px_32px_rgba(0,0,0,0.6)] overflow-hidden py-[4px]">
        {children}
      </div>
    </>
  );
}

function DropdownSection({ label }: { label: string }) {
  return (
    <div className="px-[12px] pt-[10px] pb-[4px]">
      <span className="text-[rgba(255,255,255,0.4)] text-[11px] font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

// ── Version history ────────────────────────────────────────────────────────────

/** A version is minted every time a prompt finishes generating. */
export interface AgentVersion {
  id: string;
  /** The prompt that produced this version. */
  label: string;
  /** False until it has been checked out from the history list. */
  seen: boolean;
}

function HistoryDropdown({
  versions,
  activeId,
  onSelect,
  onClose,
}: {
  versions: AgentVersion[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <Dropdown onClose={onClose}>
      <DropdownSection label="Version history" />

      {versions.length === 0 ? (
        <div className="px-[12px] pb-[10px]">
          <span className="text-[rgba(255,255,255,0.35)] text-[12.5px]">No versions yet</span>
        </div>
      ) : (
        // Fixed width so long prompts truncate instead of stretching the menu
        // out past the panel edge.
        <div className="w-[266px] flex flex-col gap-[2px] px-[5px] pb-[5px] max-h-[260px] overflow-y-auto no-scrollbar">
          {versions.map((v) => {
            const active = v.id === activeId;
            return (
              <button
                key={v.id}
                onClick={() => { onSelect(v.id); onClose(); }}
                title={v.label}
                className={`w-full flex items-center gap-[9px] pl-[8px] pr-[10px] py-[7px] rounded-full transition-colors text-left ${
                  active ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[rgba(255,255,255,0.06)]"
                }`}
              >
                <VersionTick muted={!active && v.seen} />
                <span className={`flex-1 min-w-0 text-[13px] font-semibold truncate ${active ? "text-white" : "text-[#f1f3f4]"}`}>
                  {v.label}
                </span>
                {/* Not checked out yet — the same signal the header badge counts. */}
                {!v.seen && <span className="size-[6px] rounded-full bg-[#7168f6] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </Dropdown>
  );
}

// ── Status steps ───────────────────────────────────────────────────────────────

interface Step {
  label: string;
  state: "done" | "active" | "pending";
}

function StatusSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="flex flex-col items-start w-full gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-start w-full">
          <div className="flex items-center gap-[6px]">
            {step.state === "done" ? (
              <TickCircle />
            ) : step.state === "active" ? (
              <SpinnerIcon />
            ) : (
              <div className="size-[18px] rounded-full border border-[rgba(255,255,255,0.2)]" />
            )}
            <span
              className={`text-[14px] leading-[20px] ${
                step.state === "done"
                  ? "text-[rgba(255,255,255,0.46)] italic"
                  : step.state === "active"
                  ? "text-white italic"
                  : "text-[rgba(255,255,255,0.3)] italic"
              }`}
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              {step.state === "done" ? step.label.replace(/ing$/, "ed") : step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="ml-[9px] w-px h-[14px] bg-[rgba(255,255,255,0.2)]" />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Message types ──────────────────────────────────────────────────────────────

export interface AgentMessage {
  id: string;
  /**
   * Which turn this belongs to (the prompt's own id). The log shows one turn at
   * a time, so a new prompt — or checking out a version — swaps the whole thread
   * rather than appending to it.
   */
  turnId?: string;
  role: "user" | "assistant";
  content: string;
  status?: "creating" | "done";
  steps?: Step[];
  followUps?: string[];
  /** Set when the run was paused — swaps the status line for the retry actions. */
  interrupted?: boolean;
}

// ── Main component ─────────────────────────────────────────────────────────────

interface Props {
  messages: AgentMessage[];
  /** Fired by the logo — collapses the panel into its floating bubble. */
  onCollapse?: () => void;
  /** Stop the run started by this prompt. */
  onPause?: (messageId: string) => void;
  /** Run the prompt again after it was interrupted. */
  onRegenerate?: (messageId: string) => void;
  /** Drop the prompt back into the canvas prompt box for editing. */
  onEditPrompt?: (text: string) => void;
  versions?: AgentVersion[];
  activeVersionId?: string | null;
  onSelectVersion?: (id: string) => void;
}

export function AgentLogPanel({
  messages, onCollapse,
  onPause, onRegenerate, onEditPrompt,
  versions = [], activeVersionId = null, onSelectVersion,
}: Props) {
  const [historyOpen, setHistoryOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const lastRef = useRef<HTMLDivElement>(null);

  /** Versions generated but never checked out — the count on the history badge. */
  const unseen = versions.filter((v) => !v.seen).length;

  function toggleExpanded(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  function copyPrompt(id: string, text: string) {
    void navigator.clipboard?.writeText(text);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1400);
  }

  // Follow the conversation as it lands. A reply that fits is left resting at the
  // bottom (its follow-ups clear of the edge thanks to the list's bottom padding);
  // a reply taller than the viewport is parked at its own top instead, so you read
  // it from the first line rather than arriving halfway down it.
  useEffect(() => {
    const list = listRef.current;
    const last = lastRef.current;
    if (!list || !last) return;
    const id = requestAnimationFrame(() => {
      const overflows = last.offsetHeight > list.clientHeight - 48;
      list.scrollTo({
        top: overflows ? Math.max(last.offsetTop - 16, 0) : list.scrollHeight,
        behavior: "smooth",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [messages]);

  return (
    // Same glass material as the prompt bar — blur, fill, border and shadow all
    // match, so the log and the prompt read as one surface. The 16px radius is
    // the collapsed bubble's (Figma 264:4915), which this folds into.
    <div className="relative flex flex-col h-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-visible">

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-[12px] py-[11px] shrink-0">
        {/* The mark alone — clicking it collapses the panel into the bubble.
            It is deliberately inert on hover/press: the mark never changes,
            only the panel around it does. */}
        <button onClick={onCollapse} title="Collapse agent log" className="rounded-full shrink-0">
          <LogoPill />
        </button>

        {/* Version history */}
        <div className="relative shrink-0">
          <button
            onClick={() => setHistoryOpen((o) => !o)}
            className={`flex items-center justify-center size-[28px] rounded-[6px] transition-colors ${historyOpen ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[rgba(255,255,255,0.06)]"}`}
            title={unseen > 0 ? `Version history — ${unseen} not checked out` : "Version history"}
          >
            <HistoryIcon active={historyOpen} />
          </button>

          {/* Versions generated since you last checked one out */}
          {unseen > 0 && (
            <span className="absolute -top-[3px] -left-[3px] min-w-[16px] h-[16px] px-[4px] rounded-full bg-[#7168f6] border border-[#232527] flex items-center justify-center pointer-events-none animate-in fade-in zoom-in-75 duration-200">
              <span className="text-white text-[10px] font-semibold leading-none">{unseen}</span>
            </span>
          )}

          {historyOpen && (
            <HistoryDropdown
              versions={versions}
              activeId={activeVersionId}
              onSelect={(id) => onSelectVersion?.(id)}
              onClose={() => setHistoryOpen(false)}
            />
          )}
        </div>
      </div>

      {/* ── Message list ────────────────────────────────────── */}
      <div
        ref={listRef}
        className="relative flex-1 overflow-y-auto no-scrollbar px-[12px] pt-[12px] pb-[32px] flex flex-col gap-[20px]"
      >
        {messages.map((msg, i) => {
          const running = msg.role === "user" && !msg.interrupted && !!msg.steps?.some((s) => s.state === "active");
          const isOpen = expanded.has(msg.id);
          const copied = copiedId === msg.id;

          return (
          <div
            key={msg.id}
            ref={i === messages.length - 1 ? lastRef : undefined}
            className="flex flex-col gap-[12px] w-full animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out"
          >

            {/* Prompt row — collapsed to one line until expanded */}
            {msg.role === "user" && (
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex items-center gap-[10px] w-full rounded-[16px] border border-[rgba(218,220,224,0.18)] bg-[rgba(255,255,255,0.03)] pl-[14px] pr-[9px] py-[9px]">
                  <p
                    className={`flex-1 min-w-0 text-[rgba(255,255,255,0.6)] text-[13.5px] leading-[19px] ${isOpen ? "break-words" : "truncate"}`}
                    style={{ fontFamily: "Inter,sans-serif", fontWeight: 400 }}
                  >
                    {msg.content}
                  </p>

                  {running ? (
                    <StopButton onClick={() => onPause?.(msg.id)} />
                  ) : (
                    <button
                      onClick={() => toggleExpanded(msg.id)}
                      title={isOpen ? "Collapse prompt" : "Expand prompt"}
                      className="shrink-0 flex items-center justify-center size-[28px] rounded-[8px] text-[rgba(255,255,255,0.55)] hover:text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                    >
                      <ChevronIcon open={isOpen} size={17} />
                    </button>
                  )}
                </div>

                {/* Interrupted: retry actions, then the reason */}
                {msg.interrupted && (
                  <div className="flex flex-col gap-[6px] animate-in fade-in duration-200">
                    <div className="flex items-center gap-[4px]">
                      {[
                        { key: "copy", title: copied ? "Copied" : "Copy", icon: copied ? <TickIcon size={18} /> : <CopyIcon size={18} />, run: () => copyPrompt(msg.id, msg.content) },
                        { key: "regen", title: "Regenerate", icon: <RegenerateIcon size={18} />, run: () => onRegenerate?.(msg.id) },
                        { key: "edit", title: "Edit prompt", icon: <PencilIcon size={18} />, run: () => onEditPrompt?.(msg.content) },
                      ].map((a) => (
                        <button
                          key={a.key}
                          onClick={a.run}
                          title={a.title}
                          className={`flex items-center justify-center size-[30px] rounded-[8px] transition-colors ${
                            a.key === "copy" && copied
                              ? "text-[#a89ff8]"
                              : "text-[rgba(255,255,255,0.55)] hover:text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.1)]"
                          }`}
                        >
                          {a.icon}
                        </button>
                      ))}
                    </div>
                    <span className="text-[12.5px] leading-[18px] text-[rgba(255,255,255,0.4)]">
                      Your response was interrupted
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Status steps */}
            {msg.role === "user" && !msg.interrupted && msg.steps && msg.steps.length > 0 && (
              <StatusSteps steps={msg.steps} />
            )}

            {/* Assistant response */}
            {msg.role === "assistant" && (
              <div
                className="text-[#f1f3f4] text-[14px] leading-[20px] w-full"
                style={{ fontFamily: "Inter,sans-serif", fontWeight: 500 }}
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
}
