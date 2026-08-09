import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/Frame13/svg-w83i7d1cya";
import { LibrariesPanel } from "./LibrariesPanel";

// ── SVG icons ──────────────────────────────────────────────────────────────────

function LogoSvg() {
  return (
    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
      <g clipPath="url(#clip-logo)">
        <path d={svgPaths.p3432d900} fill="white" />
        <path d={svgPaths.p184a1980} fill="black" />
        <path d={svgPaths.p32a51f00} fill="black" />
      </g>
      <defs>
        <clipPath id="clip-logo">
          <rect fill="white" height="16" width="40" />
        </clipPath>
      </defs>
    </svg>
  );
}

function HistoryIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p2cb59880} fill={active ? "white" : "rgba(255,255,255,0.6)"} />
    </svg>
  );
}

function ChatIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d={svgPaths.p3d153ac0}
        stroke={active ? "white" : "rgba(255,255,255,0.6)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
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

function DropdownItem({
  primary,
  secondary,
  active,
  onClick,
}: {
  primary: string;
  secondary?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-[8px] px-[12px] py-[8px] hover:bg-[rgba(255,255,255,0.06)] transition-colors text-left group"
    >
      <div className="flex flex-col min-w-0">
        <span className="text-[#f1f3f4] text-[13px] leading-[18px] truncate group-hover:text-white transition-colors">
          {primary}
        </span>
        {secondary && (
          <span className="text-[rgba(255,255,255,0.35)] text-[11px] mt-[1px]">{secondary}</span>
        )}
      </div>
      {active && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d="M2 7l3.5 3.5L12 3.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function DropdownDivider() {
  return <div className="h-px bg-[rgba(255,255,255,0.08)] my-[4px]" />;
}

// ── Chat dropdown ──────────────────────────────────────────────────────────────

function ChatDropdown({ onClose, onNew }: { onClose: () => void; onNew: () => void }) {
  const chats = [
    { id: "c1", name: "Finance App", meta: "3 turns · today", active: true },
    { id: "c2", name: "Todo Dashboard", meta: "8 turns · yesterday", active: false },
    { id: "c3", name: "E-Commerce UI", meta: "5 turns · Aug 6", active: false },
  ];

  return (
    <Dropdown onClose={onClose}>
      {/* New chat */}
      <button
        onClick={() => { onClose(); onNew(); }}
        className="w-full flex items-center gap-[10px] px-[12px] py-[10px] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d="M7 1v12M1 7h12" stroke="#f1f3f4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-[#f1f3f4] text-[13px] font-medium">New chat</span>
      </button>

      <DropdownDivider />
      <DropdownSection label="Conversations" />

      {chats.map((c) => (
        <DropdownItem
          key={c.id}
          primary={c.name}
          secondary={c.meta}
          active={c.active}
          onClick={onClose}
        />
      ))}
    </Dropdown>
  );
}

// ── History dropdown ───────────────────────────────────────────────────────────

function HistoryDropdown({ onClose }: { onClose: () => void }) {
  const versions = [
    { id: "v3", label: "Current version", meta: "just now", active: true },
    { id: "v2", label: "Added dark mode toggle", meta: "2 min ago", active: false },
    { id: "v1", label: "Initial dashboard", meta: "Today, 9:41 AM", active: false },
  ];

  return (
    <Dropdown onClose={onClose}>
      <DropdownSection label="Version history" />
      {versions.map((v) => (
        <DropdownItem
          key={v.id}
          primary={v.label}
          secondary={v.meta}
          active={v.active}
          onClick={onClose}
        />
      ))}
    </Dropdown>
  );
}

// ── Follow-up suggestion row ───────────────────────────────────────────────────

function FollowUp({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[8px] w-full group hover:opacity-80 transition-opacity"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M7 17L17 7" stroke="#D8D8D8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7 7H17V17" stroke="#D8D8D8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
      <span className="text-[#d8d8d8] text-[14px] font-medium leading-[20px]">{text}</span>
    </button>
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
  role: "user" | "assistant";
  content: string;
  status?: "creating" | "done";
  steps?: Step[];
  followUps?: string[];
}

// ── Main component ─────────────────────────────────────────────────────────────

interface Props {
  projectName: string;
  messages: AgentMessage[];
  onFollowUp?: (text: string) => void;
  onNewChat?: () => void;
  onInsertLibraryItem?: (item: { name: string; kind: "component" | "flow" }) => void;
}

export function AgentLogPanel({ projectName, messages, onFollowUp, onNewChat, onInsertLibraryItem }: Props) {
  const [dropdown, setDropdown] = useState<"history" | "chat" | null>(null);
  const [tab, setTab] = useState<"agent" | "libraries">("agent");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tab === "agent") bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, tab]);

  return (
    <div className="relative flex flex-col h-full bg-[#1b1c1e] rounded-[8px] overflow-visible">

      {/* ── Tab header ──────────────────────────────────────── */}
      <div className="flex items-center gap-[4px] px-[10px] pt-[10px] shrink-0">
        {(["agent", "libraries"] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setDropdown(null); }}
            className={`flex-1 h-[34px] rounded-[8px] text-[13px] font-medium capitalize transition-colors ${
              tab === t
                ? "bg-[rgba(255,255,255,0.1)] text-[#f1f3f4]"
                : "text-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.05)] hover:text-[#f1f3f4]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "libraries" ? (
        <LibrariesPanel onInsert={onInsertLibraryItem} />
      ) : (
      <>
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-[12px] py-[11px] border-b border-[rgba(255,255,255,0.12)] shrink-0 mt-[8px]">
        {/* Logo + name */}
        <div className="flex items-center gap-[6px]">
          <LogoSvg />
          <span className="text-[#f1f3f4] text-[13.6px] leading-[22.75px]" style={{ fontFamily: "Inter,sans-serif" }}>
            {projectName}
          </span>
        </div>

        {/* Icon buttons with dropdowns */}
        <div className="flex items-center gap-[12px]">

          {/* History button + dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdown(dropdown === "history" ? null : "history")}
              className={`flex items-center justify-center size-[28px] rounded-[6px] transition-colors ${dropdown === "history" ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[rgba(255,255,255,0.06)]"}`}
              title="Version history"
            >
              <HistoryIcon active={dropdown === "history"} />
            </button>
            {dropdown === "history" && (
              <HistoryDropdown onClose={() => setDropdown(null)} />
            )}
          </div>

          {/* Chat button + dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdown(dropdown === "chat" ? null : "chat")}
              className={`flex items-center justify-center size-[28px] rounded-[6px] transition-colors ${dropdown === "chat" ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[rgba(255,255,255,0.06)]"}`}
              title="Chats"
            >
              <ChatIcon active={dropdown === "chat"} />
            </button>
            {dropdown === "chat" && (
              <ChatDropdown
                onClose={() => setDropdown(null)}
                onNew={() => { setDropdown(null); onNewChat?.(); }}
              />
            )}
          </div>

        </div>
      </div>

      {/* ── Message list ────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-[12px] py-[16px] flex flex-col gap-[20px]">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col gap-[16px] w-full">

            {/* User message */}
            {msg.role === "user" && (
              <div className="flex justify-end">
                <div className="bg-[#323436] rounded-[16px] p-[10px] w-full">
                  <p
                    className="text-[#f1f3f4] text-[14px] leading-[20px]"
                    style={{ fontFamily: "Inter,sans-serif", fontWeight: 500 }}
                  >
                    {msg.content}
                  </p>
                </div>
              </div>
            )}

            {/* Status steps */}
            {msg.role === "user" && msg.steps && msg.steps.length > 0 && (
              <StatusSteps steps={msg.steps} />
            )}

            {/* Assistant response */}
            {msg.role === "assistant" && (
              <div className="flex flex-col gap-[20px] w-full">
                <div
                  className="text-[#f1f3f4] text-[14px] leading-[20px]"
                  style={{ fontFamily: "Inter,sans-serif", fontWeight: 500 }}
                  dangerouslySetInnerHTML={{ __html: msg.content }}
                />

                {msg.followUps && msg.followUps.length > 0 && (
                  <div className="flex flex-col gap-[15px] w-full">
                    <span
                      className="text-[#f1f3f4] text-[14px] leading-[20px]"
                      style={{ fontFamily: "Inter,sans-serif", fontWeight: 700 }}
                    >
                      Follow-ups
                    </span>
                    <div className="flex flex-col gap-[8px] w-full">
                      {msg.followUps.map((fu, i) => (
                        <FollowUp key={i} text={fu} onClick={() => onFollowUp?.(fu)} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      </>
      )}
    </div>
  );
}
