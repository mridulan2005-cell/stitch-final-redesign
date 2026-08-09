import { useState, useRef, useCallback, useEffect } from "react";
import svgPaths from "../../imports/1920WDefault-1/svg-gxl75wy7zq";
import { AgentLogPanel, AgentMessage } from "./AgentLogPanel";
import { ClarifyingQuestions, ClarifyingQuestion } from "./ClarifyingQuestions";
import PrototypeEditor from "./PrototypeEditor";
import { modifyIcons } from "../../imports/ModifyMenu-svg";
import { AnnotationLayer, AreaChip, type Area, type Change } from "./annotate/AnnotationLayer";
import { AnnotationsPanel } from "./annotate/AnnotationsPanel";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tool = "cursor" | "frame" | "pencil" | "hand" | "rect" | "palette" | "star";

interface Props {
  projectName: string;
  prompt: string;
  onBack: () => void;
}

// ─── Toolbar buttons ──────────────────────────────────────────────────────────

function ToolbarBtn({
  iconPath, iconViewBox = "0 0 18 18", label, chevron = true, onClick,
}: {
  iconPath: string; iconViewBox?: string; label: string; chevron?: boolean; onClick?: () => void;
}) {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => (onClick ? onClick() : setActive(a => !a))}
      className="flex gap-[6px] items-center justify-center px-[10px] py-[7px] rounded-full hover:bg-[rgba(255,255,255,0.06)] transition-colors"
    >
      <svg width="18" height="18" viewBox={iconViewBox} fill="none" className="shrink-0">
        <path d={iconPath} fill="#F1F3F4" />
      </svg>
      <span className="text-[#f1f3f4] text-[14px] font-medium leading-[20px]">{label}</span>
      {chevron && (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d={svgPaths.p3cfe5200} fill="#F1F3F4" />
        </svg>
      )}
    </button>
  );
}

// ─── Modify menu ──────────────────────────────────────────────────────────────

function ModifyMenu({
  open, active, onToggle, onClose, onAnnotate,
}: {
  open: boolean; active: boolean; onToggle: () => void; onClose: () => void; onAnnotate: () => void;
}) {
  const items = [
    { id: "edit", label: "Edit", shortcut: "E", icon: modifyIcons.edit, onClick: onClose },
    { id: "annotate", label: "Annotate", shortcut: "A", icon: modifyIcons.annotate, onClick: onAnnotate },
    { id: "designmd", label: "DESIGN.md", icon: modifyIcons.designMd, onClick: onClose },
  ];

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex gap-[6px] items-center justify-center px-[10px] py-[7px] rounded-full transition-colors ${
          open || active ? "bg-[rgba(110,115,119,0.75)]" : "hover:bg-[rgba(255,255,255,0.06)]"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path d={svgPaths.p1dd14380} fill="#F1F3F4" />
        </svg>
        <span className="text-[#f1f3f4] text-[14px] font-medium leading-[20px]">Modify</span>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d={svgPaths.p3cfe5200} fill="#F1F3F4" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={onClose} />
          <div className="absolute top-[calc(100%+8px)] left-0 z-50 min-w-[168px] backdrop-blur-[20px] bg-[rgba(22,23,24,0.92)] border border-[rgba(218,220,224,0.15)] rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.4),0px_4px_6px_-4px_rgba(0,0,0,0.3)] p-[3.8px] flex flex-col gap-[4px] animate-in fade-in zoom-in-95 slide-in-from-top-1 duration-150">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={it.onClick}
                className="flex items-center justify-between px-[12px] py-[6px] w-full rounded-[20px] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <span className="flex gap-[6px] items-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <path d={it.icon} fill="#F1F3F4" />
                  </svg>
                  <span className="text-[#f1f3f4] text-[12px] font-medium leading-[16px] whitespace-nowrap">{it.label}</span>
                </span>
                {it.shortcut && (
                  <span className="pl-[16px] text-[#bdc1c6] text-[12px] font-bold leading-[16px]">{it.shortcut}</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Canvas Frames ────────────────────────────────────────────────────────────

function ZenithFinanceFrame({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute cursor-pointer rounded-[12px] transition-all duration-150 ${selected ? "ring-2 ring-[#7168f6] ring-offset-2 ring-offset-[#202124]" : ""}`}
      style={{ left: 0, top: 30, width: 261, height: 147 }}
    >
      {/* label */}
      <div className="absolute -top-[22px] left-0 flex items-center gap-[5px] text-[#f3f4f6] text-[11px] font-normal whitespace-nowrap">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p13834380} fill="#C4C7CC" />
        </svg>
        Zenith Finance
      </div>
      <div className="w-full h-full bg-[#d7dadc] rounded-[12px] p-[3px] flex gap-[3px]">
        {/* Color swatches column */}
        <div className="flex flex-col gap-[3px] h-full w-[56px] shrink-0">
          {["#1a202c", "#b149ba", "#3e5ee6", "#f7fafc"].map((c, i) => (
            <div key={i} className="flex-1 rounded-[8px] min-h-0" style={{ background: c }} />
          ))}
        </div>
        {/* 3×3 token grid */}
        <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-[3px]">
          {/* Headline Aa */}
          <div className="bg-[#ebeef0] rounded-[8px] flex items-center justify-center overflow-hidden">
            <span style={{ fontFamily: "Inter,sans-serif", fontSize: 24, color: "#181c1e", fontWeight: 400 }}>Aa</span>
          </div>
          {/* Buttons */}
          <div className="bg-[#ebeef0] rounded-[8px] flex flex-col gap-[2px] items-center justify-center p-[3px]">
            <div className="bg-[#030813] rounded-[3px] w-full py-[1px] flex items-center justify-center">
              <span style={{ fontSize: 3, color: "white", fontFamily: "Inter" }}>Primary</span>
            </div>
            <div className="bg-[#e5e9eb] rounded-[3px] w-full py-[1px] flex items-center justify-center">
              <span style={{ fontSize: 3, color: "#45474c", fontFamily: "Inter" }}>Secondary</span>
            </div>
          </div>
          {/* Input */}
          <div className="bg-[#ebeef0] rounded-[8px] flex items-center justify-center p-[3px]">
            <div className="bg-[#e5e9eb] border border-[#c6c6cc] rounded-[3px] w-full px-[2px] py-[1px] flex gap-[2px] items-center">
              <span style={{ fontSize: 2.5, color: "#45474c", opacity: 0.5 }}>◯</span>
              <span style={{ fontSize: 3, color: "#45474c" }}>Search</span>
            </div>
          </div>
          {/* Body Aa */}
          <div className="bg-[#ebeef0] rounded-[8px] flex items-center justify-center overflow-hidden">
            <span style={{ fontFamily: "Georgia,serif", fontSize: 22, color: "#45474c", fontWeight: 400 }}>Aa</span>
          </div>
          {/* Sliders */}
          <div className="bg-[#ebeef0] rounded-[8px] flex flex-col gap-[4px] items-start justify-center p-[4px]">
            {["#030813", "#9730a1", "#000528"].map((c, i) => (
              <div key={i} className="w-full bg-[#e5e9eb] h-[2px] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ background: c, width: `${[70, 85, 55][i]}%` }} />
              </div>
            ))}
          </div>
          {/* Icon dots */}
          <div className="bg-[#ebeef0] rounded-[8px] flex items-center justify-center gap-[2px] p-[3px]">
            {["#030813", "#9730a1", "#000528", "#ba1a1a"].map((c, i) => (
              <div key={i} className="rounded-full size-[9px]" style={{ background: c }} />
            ))}
          </div>
          {/* Label Aa */}
          <div className="bg-[#ebeef0] rounded-[8px] flex items-center justify-center overflow-hidden">
            <span style={{ fontFamily: "Inter,sans-serif", fontSize: 18, color: "#45474c", fontWeight: 400 }}>Aa</span>
          </div>
          {/* State dots */}
          <div className="bg-[#ebeef0] rounded-[8px] flex items-center justify-center gap-[2px] p-[3px]">
            {[true, false, false].map((on, i) => (
              <div key={i} className="rounded-full size-[9px]" style={{ background: on ? "#030813" : "#d4d7da" }} />
            ))}
          </div>
          {/* Edit field */}
          <div className="bg-[#ebeef0] rounded-[8px] flex gap-[2px] items-center justify-center p-[2px]">
            <div className="bg-[#001662] rounded-[3px] size-[11px] flex items-center justify-center shrink-0">
              <span style={{ fontSize: 3, color: "#617dff" }}>✏</span>
            </div>
            <div className="bg-[#1a202c] rounded-[3px] flex-1 h-[11px] px-[2px] flex items-center">
              <span style={{ fontSize: 3.3, color: "#828796" }}>Label</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeFrame({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute cursor-pointer rounded-[14px] transition-all duration-150 ${selected ? "ring-2 ring-[#7168f6] ring-offset-2 ring-offset-[#202124]" : ""}`}
      style={{ left: 280, top: 30, width: 106, height: 280 }}
    >
      <div className="absolute -top-[22px] left-0 flex items-center gap-[5px] text-[#f3f4f6] text-[11px] font-normal whitespace-nowrap">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p3eb8b400} fill="#C4C7CC" />
        </svg>
        Home
      </div>
      <div className="w-full h-full bg-white rounded-[14px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.35)]">
        {/* Status bar */}
        <div className="bg-[#f7fafc] flex items-center justify-between px-[5px] py-[3px] shrink-0" style={{ height: 16 }}>
          <span style={{ fontSize: 4.5, color: "#030813", fontWeight: 700, fontFamily: "Inter" }}>Financely</span>
          <span style={{ fontSize: 3.8, color: "#9730a1", fontFamily: "Inter" }}>9:41</span>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-[5px] p-[5px] bg-[#f7fafc] overflow-hidden" style={{ height: "calc(100% - 16px - 20px)" }}>
          {/* Balance card */}
          <div className="bg-white border border-[#e0e3e5] rounded-[8px] p-[5px] relative overflow-hidden">
            <div className="text-[3px] text-[#45474c] tracking-wide uppercase" style={{ fontFamily: "Inter" }}>TOTAL BALANCE</div>
            <div style={{ fontSize: 9, color: "#030813", fontWeight: 700, fontFamily: "Inter", lineHeight: 1.1 }}>$12,450.00</div>
            <div className="flex items-center gap-[1px]">
              <span style={{ fontSize: 3.5, color: "#9730a1" }}>↑</span>
              <span style={{ fontSize: 3.5, color: "#9730a1", fontFamily: "Inter" }}>+2.4%</span>
            </div>
            <div className="bg-[#030813] rounded-[5px] w-full py-[2px] mt-[3px] flex items-center justify-center">
              <span style={{ fontSize: 3, color: "white", fontFamily: "Inter", fontWeight: 600 }}>Add Funds</span>
            </div>
          </div>
          {/* Budget donut */}
          <div className="bg-white border border-[#e0e3e5] rounded-[8px] p-[4px]">
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 5, color: "#030813", fontWeight: 600, fontFamily: "Inter" }}>Monthly Budget</span>
            </div>
            <div className="flex items-center justify-center my-[3px]">
              <div className="relative flex items-center justify-center" style={{ width: 28, height: 28 }}>
                <svg width="28" height="28" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#edf2f7" strokeWidth="4" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#006D3C" strokeWidth="4"
                    strokeDasharray={`${0.48 * 87.96} ${87.96}`} strokeDashoffset="21.99" strokeLinecap="round" transform="rotate(-90 18 18)" />
                </svg>
                <span className="absolute" style={{ fontSize: 4.5, color: "#030813", fontWeight: 700, fontFamily: "Inter" }}>48%</span>
              </div>
            </div>
            <div style={{ fontSize: 3.3, color: "#45474c", textAlign: "center", fontFamily: "Inter" }}>Limit: $2,500</div>
          </div>
          {/* Transactions */}
          <div style={{ fontSize: 4.8, color: "#030813", fontWeight: 600, fontFamily: "Inter" }}>Recent</div>
          {[
            { name: "Apple Sub.", amount: "-$0.99", color: "#45474c" },
            { name: "Netflix", amount: "-$15.99", color: "#ba1a1a" },
            { name: "Salary", amount: "+$3200", color: "#006D3C" },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-[3px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#e5e9eb]" />
                <span style={{ fontSize: 4, color: "#030813", fontFamily: "Inter" }}>{t.name}</span>
              </div>
              <span style={{ fontSize: 4, fontWeight: 500, color: t.color, fontFamily: "Inter" }}>{t.amount}</span>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#f7fafc] border-t border-[#e0e3e5] flex items-center justify-around px-[4px]" style={{ height: 20 }}>
          <div className="bg-[rgba(151,48,161,0.1)] rounded-full px-[3px] py-[1px]">
            <span style={{ fontSize: 3, color: "#9730a1", fontWeight: 600, fontFamily: "Inter" }}>Dashboard</span>
          </div>
          <span style={{ fontSize: 3, color: "#45474c", fontFamily: "Inter" }}>Activity</span>
          <span style={{ fontSize: 3, color: "#45474c", fontFamily: "Inter" }}>Budget</span>
        </div>
      </div>
      {/* Size badge */}
      {selected && (
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 bg-[#7168f6] text-white px-[4px] py-[1px] rounded-[3px] whitespace-nowrap" style={{ fontSize: 7, fontFamily: "Inter", fontWeight: 600 }}>
          390 × 1438
        </div>
      )}
    </div>
  );
}

function TransFrame({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute cursor-pointer rounded-[14px] transition-all duration-150 ${selected ? "ring-2 ring-[#7168f6] ring-offset-2 ring-offset-[#202124]" : ""}`}
      style={{ left: 400, top: 30, width: 106, height: 280 }}
    >
      <div className="absolute -top-[22px] left-0 flex items-center gap-[5px] text-[#f3f4f6] text-[11px] font-normal whitespace-nowrap">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p3c058170} fill="#C4C7CC" />
        </svg>
        Trans
      </div>
      <div className="w-full h-full bg-white rounded-[14px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.35)]">
        <div className="bg-[#f7fafc] border-b border-[#e0e3e5] flex items-center justify-between px-[5px] py-[3px]" style={{ height: 16 }}>
          <span style={{ fontSize: 4.5, color: "#030813", fontWeight: 700, fontFamily: "Inter" }}>← Transactions</span>
        </div>
        <div className="flex flex-col p-[5px] gap-[4px] bg-[#f7fafc] overflow-hidden" style={{ height: "calc(100% - 16px - 20px)" }}>
          <div className="bg-[#e5e9eb] border border-[#c6c6cc] rounded-[5px] flex items-center gap-[2px] px-[4px] py-[2px]">
            <span style={{ fontSize: 3.5, color: "#45474c", fontFamily: "Inter" }}>🔍 Search</span>
          </div>
          <div className="flex gap-[2px]">
            <div className="bg-[#030813] rounded-[5px] px-[3px] py-[1px]">
              <span style={{ fontSize: 2.8, color: "white", fontFamily: "Inter" }}>All</span>
            </div>
            {["Income", "Expense"].map(l => (
              <div key={l} className="bg-[#e5e9eb] rounded-[5px] px-[2px] py-[1px]">
                <span style={{ fontSize: 2.8, color: "#45474c", fontFamily: "Inter" }}>{l}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[3px]">
            {[
              { name: "Salary Deposit", date: "Aug 1", amount: "+$3,200", color: "#006D3C" },
              { name: "Netflix", date: "Aug 2", amount: "-$15.99", color: "#ba1a1a" },
              { name: "Apple Store", date: "Aug 3", amount: "-$0.99", color: "#45474c" },
              { name: "Uber Eats", date: "Aug 4", amount: "-$28.40", color: "#ba1a1a" },
              { name: "Freelance", date: "Aug 5", amount: "+$850", color: "#006D3C" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <div style={{ fontSize: 3.8, fontWeight: 500, color: "#030813", fontFamily: "Inter" }}>{t.name}</div>
                  <div style={{ fontSize: 3, color: "#45474c", fontFamily: "Inter" }}>{t.date}</div>
                </div>
                <span style={{ fontSize: 3.8, fontWeight: 600, color: t.color, fontFamily: "Inter" }}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-[#f7fafc] border-t border-[#e0e3e5] flex items-center justify-around px-[4px]" style={{ height: 20 }}>
          <span style={{ fontSize: 3, color: "#45474c", fontFamily: "Inter" }}>Dashboard</span>
          <div className="bg-[rgba(151,48,161,0.1)] rounded-full px-[3px] py-[1px]">
            <span style={{ fontSize: 3, color: "#9730a1", fontWeight: 600, fontFamily: "Inter" }}>Activity</span>
          </div>
          <span style={{ fontSize: 3, color: "#45474c", fontFamily: "Inter" }}>Budget</span>
        </div>
      </div>
    </div>
  );
}

function PrototypeFrame({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute cursor-pointer rounded-[40px] transition-all duration-150 ${selected ? "ring-2 ring-[#7168f6] ring-offset-2 ring-offset-[#202124]" : ""}`}
      style={{ left: 524, top: 30, width: 348, height: 280 }}
    >
      <div className="absolute -top-[22px] left-0 text-[#f3f4f6] text-[11px] font-normal flex items-center gap-[5px] whitespace-nowrap">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p3eb8b400} fill="#C4C7CC" />
        </svg>
        Prototype : Financely Persona
      </div>
      <div className="w-full h-full bg-[#9ca3af] rounded-[40px] relative overflow-hidden shadow-[0px_20px_50px_rgba(0,0,0,0.5)]">
        {/* Inner screen */}
        <div className="absolute inset-[4px] bg-[#1c1d20] rounded-[32px] overflow-hidden flex items-center justify-center">
          {/* gradient overlay */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(92deg, rgba(96,86,240,0) 0%, rgba(96,86,240,0.2) 38%, rgba(64,217,198,0.22) 54%, rgba(66,133,244,0.2) 70%, rgba(66,133,244,0) 100%)"
          }} />
          <div className="absolute inset-0 bg-black/60" />
          {/* content */}
          <div className="relative flex flex-col items-center gap-[10px] select-none">
            <svg width="22" height="26" viewBox="0 0 12.25 19.05" fill="none">
              <path d={svgPaths.p26cf3f80} fill="rgba(255,255,255,0.7)" />
            </svg>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", fontWeight: 600, fontFamily: "Inter", letterSpacing: "0.02em" }}>Prototype</span>
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.6)", fontFamily: "Inter" }}>Double click to open</span>
          </div>
        </div>
        {/* Physical buttons */}
        <div className="absolute right-[-1px] top-[40px] w-[2px] h-[30px] bg-[#374151] rounded-l-full" />
        <div className="absolute left-[-1px] top-[35px] w-[2px] h-[20px] bg-[#374151] rounded-r-full" />
        <div className="absolute left-[-1px] top-[60px] w-[2px] h-[20px] bg-[#374151] rounded-r-full" />
      </div>
    </div>
  );
}

// ─── Agent Log ────────────────────────────────────────────────────────────────

// ─── Main WorkspaceApp ────────────────────────────────────────────────────────

const INITIAL_MESSAGES: AgentMessage[] = [
  {
    id: "m1",
    role: "user",
    content: `generate in dark mode, : So I want to build a really high quality dashboard which has, like, today's schedule. I can see all the stuff that I have got for today, either in a list view or a, like, condensed list view or, like, an order of timeline view. `,
    steps: [
      { label: "created", state: "done" },
      { label: "creating", state: "done" },
    ],
  },
  {
    id: "m2",
    role: "assistant",
    content: `I've designed the primary dashboard for Resubin with a high-fidelity, professional dark mode aesthetic.<br/><br/><strong>Key Design Features:</strong><ul style="list-style:disc;padding-left:18px;margin-top:6px;display:flex;flex-direction:column;gap:4px"><li>Today's Schedule (Timeline View): A central interactive timeline that maps out your day with a "current time" indicator to keep you on track.</li><li>Weekly Context: A quick-access day picker at the top allows you to jump between days of the week, ensuring you can plan ahead without leaving the main view.</li><li>Productivity Pulse: The Upcoming Reminders and Continue Where You Left Off sections provide a glanceable summary of your immediate priorities and recent activity.</li><li>Gamified Insights: Your profile features an "Elite Rank" and a "15-day streak" to encourage consistency, while the Insights section provides actionable data-driven advice based on your weekly habits.</li><li>Visual Style: The interface uses a deep "Surface" palette with glassmorphism effects and the Geist typeface for a sleek, modern, and high-performance feel.</li></ul>`,
    followUps: ["Add a button", "Add a dark mode toggle", "Add a sidebar nav"],
  },
];

// Clarifying questions shown before the agent starts working on a fresh prompt.
// 3 questions with a per-page cap of 2 → paginated (page 1 shows a "Next"
// button, page 2 shows "Submit") with a 2-dot progress indicator.
const CLARIFYING_QUESTIONS: ClarifyingQuestion[] = [
  {
    id: "vibe",
    text: "What overall vibe are you going for?",
    options: ["Minimal & clean", "Bold & vibrant", "Classy & elegant"],
    allowCustom: true,
  },
  {
    id: "audience",
    text: "Who is the primary audience?",
    options: ["Everyday consumers", "Business & enterprise", "Developers"],
    allowCustom: true,
  },
  {
    id: "color",
    text: "Any colour direction you prefer?",
    options: ["Cool tones (blues / greens)", "Warm tones (reds / oranges)", "Monochrome"],
    allowCustom: true,
  },
];

export default function WorkspaceApp({ projectName, prompt: initialPrompt, onBack }: Props) {
  const [activeTool, setActiveTool] = useState<Tool>("cursor");
  const [selectedFrame, setSelectedFrame] = useState<string>("home");
  const [promptInput, setPromptInput] = useState("");
  const [showModelMenu, setShowModelMenu] = useState(false);
  const [selectedModel, setSelectedModel] = useState("3 Flash");
  const [zoom, setZoom] = useState(27);
  const [pan, setPan] = useState({ x: 120, y: 90 });
  // When the workspace is opened with a first prompt, start from a clean log
  // (that prompt drives the very first clarifying round); otherwise show the
  // seeded demo conversation.
  const [messages, setMessages] = useState<AgentMessage[]>(
    initialPrompt?.trim() ? [] : INITIAL_MESSAGES,
  );
  const [panelOpen, setPanelOpen] = useState(true);
  const [dragOverCanvas, setDragOverCanvas] = useState(false);
  // Pending prompt awaiting clarifying answers (null = panel closed).
  const [clarifying, setClarifying] = useState<{ prompt: string; userMsgId: string } | null>(null);
  // Prototype editor is a full-screen view launched from the Play button.
  const [prototypeOpen, setPrototypeOpen] = useState(false);

  // ── Annotate mode ──────────────────────────────────────────────────────────
  const [modifyOpen, setModifyOpen] = useState(false);
  const [annotating, setAnnotating] = useState(false);
  // Areas selected but not yet described.
  const [areas, setAreas] = useState<Area[]>([]);
  // Changes already described, listed in the left panel.
  const [changes, setChanges] = useState<Change[]>([]);
  // Rectangle currently being dragged out, in canvas coords.
  const [draft, setDraft] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  // Hidden once a second area is added — the prompt bar takes over from there.
  const [inlineDismissed, setInlineDismissed] = useState(false);
  const areaCounter = useRef(0);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  // Mirrors `draft` so mouseup reads the live rect, not a stale render closure.
  const draftRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null);

  const isPanning = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // Canvas panning
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (activeTool === "hand" || e.button === 1) {
      isPanning.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    }
  }, [activeTool]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    setPan(p => ({ x: p.x + dx, y: p.y + dy }));
  }, []);

  const onMouseUp = useCallback(() => { isPanning.current = false; }, []);

  // Ctrl+scroll zoom
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      setZoom(z => Math.max(10, Math.min(300, z - e.deltaY * 0.08)));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  // Submit a prompt. Fresh prompts from the prompt bar pause on a set of
  // clarifying questions before the agent replies; follow-ups / library
  // inserts skip straight to the response.
  function submitPrompt(text?: string, opts?: { clarify?: boolean }) {
    const value = text ?? promptInput.trim();
    if (!value) return;
    setPromptInput("");

    const userMsgId = `m-${Date.now()}`;

    // User message with "creating" step (agent is thinking)
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        role: "user",
        content: value,
        steps: [{ label: "creating", state: "active" }],
      },
    ]);

    if (opts?.clarify) {
      setClarifying({ prompt: value, userMsgId });
      return;
    }

    runAssistant(userMsgId, value);
  }

  // Resolve the user's "creating" step and append the simulated agent reply,
  // optionally folding in the clarifying answers the user provided.
  function runAssistant(userMsgId: string, value: string, answerSummary?: string) {
    const assistantMsgId = `m-${Date.now() + 1}`;
    const detail = answerSummary
      ? `<br/><br/><span style="color:rgba(255,255,255,0.6)">Tuned to your preferences: <em>${answerSummary}</em>.</span>`
      : "";

    setTimeout(() => {
      setMessages(prev =>
        prev.map(m =>
          m.id === userMsgId
            ? { ...m, steps: [{ label: "created", state: "done" }] }
            : m
        )
      );
      setMessages(prev => [
        ...prev,
        {
          id: assistantMsgId,
          role: "assistant",
          content: `Here's what I've implemented for "<em>${value}</em>". The changes have been applied to your canvas.${detail}`,
          followUps: ["Refine the colors", "Add animations", "Make it responsive"],
        },
      ]);
    }, 1800);
  }

  function handleClarifySubmit(summary: string) {
    const pending = clarifying;
    setClarifying(null);
    if (pending) runAssistant(pending.userMsgId, pending.prompt, summary || undefined);
  }

  function handleClarifySkip() {
    const pending = clarifying;
    setClarifying(null);
    if (pending) runAssistant(pending.userMsgId, pending.prompt);
  }

  function insertLibraryItem(item: { name: string; kind: "component" | "flow" }) {
    submitPrompt(
      item.kind === "component"
        ? `Insert the "${item.name}" component into the current screen`
        : `Add the "${item.name}" flow as a new connected screen group`
    );
  }

  // ── Annotate helpers ───────────────────────────────────────────────────────

  function enterAnnotate() {
    setModifyOpen(false);
    setAnnotating(true);
    setAreas([]);
    setDraft(null);
    setInlineDismissed(false);
    areaCounter.current = 0;
  }

  function exitAnnotate() {
    setAnnotating(false);
    setAreas([]);
    setDraft(null);
    setInlineDismissed(false);
    areaCounter.current = 0;
  }

  /** Screen point → canvas coordinates. */
  function toCanvas(clientX: number, clientY: number) {
    const box = canvasRef.current?.getBoundingClientRect();
    if (!box) return { x: 0, y: 0 };
    return { x: (clientX - box.left - pan.x) / scale, y: (clientY - box.top - pan.y) / scale };
  }

  function annotateMouseDown(e: React.MouseEvent) {
    if (!annotating || e.button !== 0) return;
    const p = toCanvas(e.clientX, e.clientY);
    dragStart.current = p;
    draftRef.current = { x: p.x, y: p.y, w: 0, h: 0 };
    setDraft(draftRef.current);
  }

  function annotateMouseMove(e: React.MouseEvent) {
    if (!annotating || !dragStart.current) return;
    const p = toCanvas(e.clientX, e.clientY);
    const s = dragStart.current;
    draftRef.current = {
      x: Math.min(s.x, p.x),
      y: Math.min(s.y, p.y),
      w: Math.abs(p.x - s.x),
      h: Math.abs(p.y - s.y),
    };
    setDraft(draftRef.current);
  }

  function annotateMouseUp() {
    if (!annotating || !dragStart.current) return;
    const d = draftRef.current;
    dragStart.current = null;
    draftRef.current = null;
    setDraft(null);
    // Ignore stray clicks — require a box big enough to mean something.
    if (!d || d.w * scale < 12 || d.h * scale < 12) return;

    areaCounter.current += 1;
    const area: Area = { id: `a-${Date.now()}`, n: areaCounter.current, ...d };
    setAreas((prev) => {
      const next = [...prev, area];
      // Second area onwards, the inline field gives way to the prompt bar.
      if (next.length > 1) setInlineDismissed(true);
      return next;
    });
  }

  /** Turn the pending areas into a change shown in the left panel. */
  function commitChange(text: string) {
    if (!text.trim() || areas.length === 0) return;
    setChanges((prev) => [...prev, { id: `c-${Date.now()}`, text: text.trim(), areas }]);
    setAreas([]);
    setInlineDismissed(false);
    areaCounter.current = 0;
  }

  /** Hand every written change to the agent, then leave annotate mode. */
  function applyAllChanges() {
    if (changes.length === 0) return;
    const summary = changes
      .map((c, i) => `${i + 1}. ${c.text} (${c.areas.length} area${c.areas.length === 1 ? "" : "s"})`)
      .join("\n");
    setChanges([]);
    exitAnnotate();
    submitPrompt(`Apply these annotated changes:\n${summary}`);
  }

  function removeArea(id: string) {
    setAreas((prev) => {
      const next = prev.filter((a) => a.id !== id);
      if (next.length < 2) setInlineDismissed(false);
      if (next.length === 0) areaCounter.current = 0;
      return next;
    });
  }

  // Esc leaves annotate mode; A enters it from the canvas.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA)$/.test((e.target as HTMLElement)?.tagName ?? "");
      if (e.key === "Escape" && annotating) { exitAnnotate(); return; }
      if (!typing && !annotating && (e.key === "a" || e.key === "A")) enterAnnotate();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [annotating]);

  // Ask the clarifying questions right after the first prompt that opened the
  // workspace (runs once).
  const didSeedFirstPrompt = useRef(false);
  useEffect(() => {
    if (didSeedFirstPrompt.current) return;
    didSeedFirstPrompt.current = true;
    const first = initialPrompt?.trim();
    if (first) submitPrompt(first, { clarify: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scale = zoom / 100;

  const TOOLS: { id: Tool; path: string; vb?: string; label: string }[] = [
    { id: "cursor", path: svgPaths.p2f9ca680, vb: "0 0 11 16", label: "Select (V)" },
    { id: "frame", path: svgPaths.p192791c0, label: "Frame (F)" },
    { id: "pencil", path: svgPaths.p23db14b0, label: "Edit (P)" },
    { id: "hand", path: svgPaths.ped78000, label: "Pan (H)" },
    { id: "rect", path: svgPaths.p21bc6d80, vb: "0 0 13.57 13.57", label: "Shape (R)" },
  ];
  const TOOLS2: { id: Tool; path: string; label: string }[] = [
    { id: "palette", path: svgPaths.p13834380, label: "Design System" },
    { id: "star", path: svgPaths.pbd89f00, label: "Favorites" },
  ];

  if (prototypeOpen) {
    return <PrototypeEditor projectName={projectName} onExit={() => setPrototypeOpen(false)} />;
  }

  return (
    <div className="flex flex-col h-screen bg-[#202124] overflow-hidden" style={{ fontFamily: "Inter,sans-serif" }}>


      {/* ── Top bar ────────────────────────────────────────────────────── */}
      <header className="relative flex items-center h-[60px] shrink-0 border-b border-[rgba(218,220,224,0.08)] z-20">

        {/* Left: burger + title */}
        <div className="absolute left-0 flex items-center gap-[10px] px-[20px]">
          <button
            onClick={onBack}
            title="Back to home"
            className="flex items-center justify-center size-[36px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p169bc400} fill="#F1F3F4" />
            </svg>
          </button>
          <span className="text-[#f1f3f4] text-[14px] font-semibold truncate max-w-[200px]">{projectName}</span>
          <button
            onClick={() => setPanelOpen(o => !o)}
            title="Toggle agent log"
            className={`flex items-center justify-center size-[34px] rounded-full backdrop-blur-[20px] border transition-colors ${panelOpen ? "bg-[rgba(113,104,246,0.2)] border-[rgba(113,104,246,0.4)]" : "bg-[rgba(22,23,24,0.5)] border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)]"}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={panelOpen ? "#a89ff8" : "#F1F3F4"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Center: toolbar pill */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[28px] p-[3px] gap-[2px]">
            <ToolbarBtn iconPath={svgPaths.p2702d100} iconViewBox="0 0 16.2 17.133" label="Generate" />
            <ModifyMenu
              open={modifyOpen}
              active={annotating}
              onToggle={() => setModifyOpen(o => !o)}
              onClose={() => setModifyOpen(false)}
              onAnnotate={enterAnnotate}
            />
            <ToolbarBtn iconPath={svgPaths.p8cf1600} iconViewBox="0 0 18 18" label="Preview" />
            <button className="flex gap-[6px] items-center justify-center px-[10px] py-[7px] rounded-full hover:bg-[rgba(255,255,255,0.06)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d={svgPaths.pbb17b80} fill="#F1F3F4" />
              </svg>
              <span className="text-[#f1f3f4] text-[14px] font-medium">More</span>
            </button>
          </div>
        </div>

        {/* Right: actions */}
        <div className="absolute right-0 flex items-center gap-[6px] px-[20px]">
          <button className="flex items-center justify-center size-[34px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p1507f080} fill="#F1F3F4" />
            </svg>
          </button>

          {/* Play — opens the prototype editor */}
          <button
            onClick={() => setPrototypeOpen(true)}
            title="Play prototype"
            className="flex items-center justify-center size-[34px] rounded-full backdrop-blur-[20px] bg-[rgba(113,104,246,0.2)] border border-[rgba(113,104,246,0.45)] hover:bg-[rgba(113,104,246,0.32)] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M4.75 3.3v9.4a.6.6 0 0 0 .92.5l7.1-4.7a.6.6 0 0 0 0-1L5.67 2.8a.6.6 0 0 0-.92.5Z" fill="#c3bcff" />
            </svg>
          </button>

          <button className="flex items-center gap-[6px] px-[14px] h-[34px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d={svgPaths.pcd18b80} fill="#F1F3F4" />
            </svg>
            <span className="text-[#f1f3f4] text-[14px] font-medium">Export</span>
          </button>
          <button className="flex items-center gap-[6px] px-[14px] h-[34px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 13 13" fill="none">
              <path d={svgPaths.p35046d80} fill="#F1F3F4" />
            </svg>
            <span className="text-[#f1f3f4] text-[14px] font-medium">Share</span>
          </button>
          <button className="flex items-center justify-center size-[34px] rounded-full overflow-hidden border-2 border-[rgba(218,220,224,0.15)] hover:border-[rgba(218,220,224,0.3)] transition-colors">
            <div className="size-full bg-gradient-to-br from-[#7168f6] to-[#a855f7] flex items-center justify-center">
              <span className="text-white text-[13px] font-semibold">M</span>
            </div>
          </button>
        </div>
      </header>

      {/* ── Main body: panel + canvas ──────────────────────────────────── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* ── Left agent log panel ─────────────────────────────────────── */}
        {panelOpen && annotating && (
          <div className="w-[340px] shrink-0 p-[8px] flex flex-col gap-0 bg-[#202124]">
            <AnnotationsPanel
              changes={changes}
              onEdit={(id, text) => setChanges(prev => prev.map(c => (c.id === id ? { ...c, text } : c)))}
              onDelete={(id) => setChanges(prev => prev.filter(c => c.id !== id))}
            />
          </div>
        )}

        {panelOpen && !annotating && (
          <div className="w-[340px] shrink-0 p-[8px] flex flex-col gap-0 bg-[#202124]">
            <AgentLogPanel
              projectName={projectName}
              messages={messages}
              onFollowUp={(text) => submitPrompt(text)}
              onNewChat={() => {
                setMessages([]);
                setPanelOpen(true);
              }}
              onInsertLibraryItem={insertLibraryItem}
            />
          </div>
        )}

        {/* ── Right: canvas + prompt ───────────────────────────────────── */}
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">

      {/* ── Canvas ─────────────────────────────────────────────────────── */}
      <div
        ref={canvasRef}
        className="flex-1 min-h-0 relative overflow-hidden bg-[#202124] select-none"
        style={{
          cursor: annotating
            ? "crosshair"
            : activeTool === "hand" ? (isPanning.current ? "grabbing" : "grab") : "default",
        }}
        onMouseDown={(e) => { if (annotating) annotateMouseDown(e); else onMouseDown(e); }}
        onMouseMove={(e) => { if (annotating) annotateMouseMove(e); else onMouseMove(e); }}
        onMouseUp={() => { if (annotating) annotateMouseUp(); else onMouseUp(); }}
        onMouseLeave={() => { if (annotating) annotateMouseUp(); else onMouseUp(); }}
        onDragOver={(e) => {
          if (!e.dataTransfer.types.includes("application/stitch-lib")) return;
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
          if (!dragOverCanvas) setDragOverCanvas(true);
        }}
        onDragLeave={(e) => {
          if (e.currentTarget === e.target) setDragOverCanvas(false);
        }}
        onDrop={(e) => {
          const raw = e.dataTransfer.getData("application/stitch-lib");
          if (!raw) return;
          e.preventDefault();
          setDragOverCanvas(false);
          try {
            const item = JSON.parse(raw) as { name: string; kind: "component" | "flow" };
            insertLibraryItem(item);
          } catch {
            /* ignore malformed payload */
          }
        }}
        onClick={(e) => {
          if (annotating) return;
          if ((e.target as HTMLElement).closest("[data-frame]")) return;
          setSelectedFrame("");
          setShowModelMenu(false);
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #f1f3f4 1px, transparent 1px)",
            backgroundSize: `${20 * scale}px ${20 * scale}px`,
            backgroundPosition: `${pan.x % (20 * scale)}px ${pan.y % (20 * scale)}px`,
          }}
        />

        {/* Drop highlight overlay */}
        {dragOverCanvas && (
          <div className="absolute inset-[10px] z-[15] pointer-events-none rounded-[16px] border-2 border-dashed border-[#7168f6] bg-[rgba(113,104,246,0.08)] flex items-center justify-center">
            <div className="flex items-center gap-[8px] px-[16px] py-[9px] rounded-full bg-[rgba(22,23,24,0.85)] border border-[rgba(113,104,246,0.4)] backdrop-blur-[8px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M4.5 7.5L8 11l3.5-3.5M3 13h10" stroke="#a89ff8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[#f1f3f4] text-[13px] font-medium">Drop to add to canvas</span>
            </div>
          </div>
        )}

        {/* Frames */}
        <div
          className="absolute origin-top-left"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`, transformOrigin: "0 0", left: 0, top: 0 }}
        >
          <div data-frame="zenith">
            <ZenithFinanceFrame selected={selectedFrame === "zenith"} onClick={() => setSelectedFrame("zenith")} />
          </div>
          <div data-frame="home">
            <HomeFrame selected={selectedFrame === "home"} onClick={() => setSelectedFrame("home")} />
          </div>
          <div data-frame="trans">
            <TransFrame selected={selectedFrame === "trans"} onClick={() => setSelectedFrame("trans")} />
          </div>
          <div data-frame="prototype">
            <PrototypeFrame selected={selectedFrame === "prototype"} onClick={() => setSelectedFrame("prototype")} />
          </div>
        </div>

        {/* Annotate overlay */}
        {annotating && (
          <AnnotationLayer
            pan={pan}
            scale={scale}
            areas={areas}
            draft={draft}
            showInlineInput={areas.length === 1 && !inlineDismissed}
            onDescribe={commitChange}
            onRemoveArea={removeArea}
            changeCount={changes.length}
            onExitAnnotate={exitAnnotate}
            onApplyAll={applyAllChanges}
          />
        )}

        {/* Right tool sidebar */}
        <div className="absolute right-[16px] top-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-col items-center gap-[6px] p-[5px] backdrop-blur-[24px] bg-[rgba(22,23,24,0.6)] border border-[rgba(218,220,224,0.12)] rounded-[100px] shadow-[0px_8px_24px_rgba(0,0,0,0.4)]">
            {TOOLS.map(({ id, path, vb, label }) => (
              <button
                key={id}
                title={label}
                onClick={() => setActiveTool(id)}
                className={`flex items-center justify-center size-[34px] rounded-full transition-colors ${activeTool === id ? "bg-[#f1f3f4]" : "hover:bg-[rgba(255,255,255,0.06)]"}`}
              >
                <svg width="18" height="18" viewBox={vb ?? "0 0 20 20"} fill="none">
                  <path d={path} fill={activeTool === id ? "#202124" : "#F1F3F4"} />
                </svg>
              </button>
            ))}
            <div className="w-[20px] h-px bg-[rgba(218,220,224,0.15)] my-[2px]" />
            {TOOLS2.map(({ id, path, label }) => (
              <button
                key={id}
                title={label}
                onClick={() => setActiveTool(id)}
                className={`flex items-center justify-center size-[34px] rounded-full transition-colors ${activeTool === id ? "bg-[#f1f3f4]" : "hover:bg-[rgba(255,255,255,0.06)]"}`}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d={path} fill={activeTool === id ? "#202124" : "#F1F3F4"} />
                </svg>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ── Canvas bottom controls bar ─────────────────────────────────── */}
      <div className="shrink-0 flex items-center justify-between px-[16px] py-[8px] border-t border-[rgba(218,220,224,0.06)]">
        {/* undo/redo */}
        <div className="flex items-center bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
          <button className="flex items-center justify-center size-[30px] hover:bg-[rgba(255,255,255,0.06)] transition-colors" title="Undo">
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1e109c00} fill="#9ca3af" />
            </svg>
          </button>
          <div className="w-px h-[14px] bg-[rgba(218,220,224,0.1)]" />
          <button className="flex items-center justify-center size-[30px] hover:bg-[rgba(255,255,255,0.06)] transition-colors" title="Redo">
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1ec1fe00} fill="#9ca3af" />
            </svg>
          </button>
        </div>

        {/* zoom */}
        <button
          onClick={() => setZoom(z => z === 27 ? 100 : 27)}
          className="flex items-center gap-[4px] px-[10px] h-[28px] rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
        >
          <span className="text-[#9ca3af] text-[12px] font-medium">{zoom}%</span>
        </button>

        {/* help */}
        <button className="flex items-center justify-center size-[30px] rounded-full hover:bg-[rgba(255,255,255,0.06)] transition-colors" title="Help">
          <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
            <path d={svgPaths.p35b06f80} fill="#9ca3af" />
          </svg>
        </button>
      </div>

      {/* ── Clarifying questions + Prompt box (centered column) ─────────── */}
      {/* While annotating there is no prompt box until a second area is
          selected — then it slides up from below to collect one change. */}
      <div
        style={{ transform: annotating && areas.length < 2 ? "translateY(130%)" : "translateY(0)" }}
        className={`shrink-0 flex justify-center px-[24px] pb-[20px] pt-[14px] z-20 transition-all duration-300 ease-out ${
          annotating && areas.length < 2
            ? "opacity-0 pointer-events-none h-0 !pb-0 !pt-0 overflow-hidden"
            : "opacity-100"
        }`}
      >
        <div className="w-full max-w-[680px] relative">

        {/* Clarifying questions — slides up from behind the prompt bar */}
        <ClarifyingQuestions
          open={clarifying !== null && !annotating}
          questions={CLARIFYING_QUESTIONS}
          perPage={2}
          onSubmit={handleClarifySubmit}
          onSkip={handleClarifySkip}
        />

        <div className="w-full bg-[#28292d] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-visible shadow-[0px_8px_32px_rgba(0,0,0,0.5)] relative z-20">

          {/* Selected areas, when a change spans more than one */}
          {annotating && areas.length > 0 && (
            <div className="flex items-center gap-[8px] overflow-x-auto px-[16px] pt-[12px]">
              {areas.map(a => (
                <AreaChip key={a.id} area={a} onRemove={() => removeArea(a.id)} />
              ))}
            </div>
          )}

          {/* Top row: textarea */}
          <div className="px-[16px] pt-[14px] pb-[10px]">
            <textarea
              value={promptInput}
              onChange={e => setPromptInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (annotating) { commitChange(promptInput); setPromptInput(""); }
                  else submitPrompt(undefined, { clarify: true });
                }
              }}

              placeholder="What would you like to change or create?"
              rows={1}
              className="w-full bg-transparent border-none outline-none resize-none text-[#f1f3f4] text-[15px] placeholder-[#6b6e75] leading-[22px]"
              style={{ fontFamily: "Inter,sans-serif" }}
              onInput={e => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
              }}
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-[rgba(255,255,255,0.06)] mx-[4px]" />

          {/* Bottom row: controls */}
          <div className="flex items-center justify-between px-[12px] py-[10px]">

            {/* Left: + / */}
            <div className="flex items-center gap-[2px]">
              <button className="flex items-center justify-center size-[32px] rounded-[8px] hover:bg-[rgba(255,255,255,0.07)] transition-colors text-[#9ca3af] text-[20px] font-light leading-none">
                +
              </button>
              <button className="flex items-center justify-center size-[32px] rounded-[8px] hover:bg-[rgba(255,255,255,0.07)] transition-colors text-[#9ca3af] text-[15px] font-medium leading-none">
                /
              </button>
            </div>

            {/* Right: icons + model + submit */}
            <div className="flex items-center gap-[4px]">

              {/* Frame/attach icon */}
              <button className="flex items-center justify-center size-[32px] rounded-[8px] hover:bg-[rgba(255,255,255,0.07)] transition-colors" title="Attach frame">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p192791c0} fill="#9ca3af" />
                </svg>
              </button>

              {/* Palette / design system icon */}
              <button className="flex items-center justify-center size-[32px] rounded-[8px] hover:bg-[rgba(255,255,255,0.07)] transition-colors" title="Design system">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p13834380} fill="#9ca3af" />
                </svg>
              </button>

              {/* Model selector */}
              <div className="relative">
                <button
                  onClick={() => setShowModelMenu(m => !m)}
                  className="flex items-center gap-[6px] px-[10px] h-[30px] rounded-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                >
                  <div className="flex items-center gap-[2px]">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#7168f6]" />
                    <div className="w-[5px] h-[5px] rounded-full bg-[rgba(255,255,255,0.2)]" />
                  </div>
                  <span className="text-[#f1f3f4] text-[13px] font-medium" style={{ fontFamily: "Inter,sans-serif" }}>{selectedModel}</span>
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d={svgPaths.p3cfe5200} fill="#9ca3af" />
                  </svg>
                </button>
                {showModelMenu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowModelMenu(false)} />
                    <div className="absolute bottom-[38px] right-0 z-50 backdrop-blur-[24px] bg-[rgba(28,29,32,0.98)] border border-[rgba(255,255,255,0.1)] rounded-[12px] min-w-[150px] overflow-hidden shadow-[0px_8px_32px_rgba(0,0,0,0.6)]">
                      {["1.5 Flash", "2.0 Flash", "3 Flash", "Ultra"].map(m => (
                        <button
                          key={m}
                          onClick={() => { setSelectedModel(m); setShowModelMenu(false); }}
                          className={`flex items-center gap-[8px] w-full px-[14px] py-[10px] text-[13px] hover:bg-[rgba(255,255,255,0.06)] transition-colors ${selectedModel === m ? "text-[#7168f6] font-semibold" : "text-[#f1f3f4]"}`}
                          style={{ fontFamily: "Inter,sans-serif" }}
                        >
                          {selectedModel === m && <div className="w-[4px] h-[4px] rounded-full bg-[#7168f6] shrink-0" />}
                          {selectedModel !== m && <div className="w-[4px]" />}
                          {m}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Mic / audio */}
              <button className="flex items-center justify-center size-[32px] rounded-[8px] hover:bg-[rgba(255,255,255,0.07)] transition-colors" title="Voice input">
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p304bd900} fill="#9ca3af" />
                </svg>
              </button>

              {/* Submit */}
              <button
                onClick={() => {
                  if (annotating) { commitChange(promptInput); setPromptInput(""); }
                  else submitPrompt(undefined, { clarify: true });
                }}
                title="Send (Enter)"
                className={`flex items-center justify-center size-[30px] rounded-full transition-all duration-150 ${
                  promptInput.trim()
                    ? "bg-[#f1f3f4] hover:bg-white cursor-pointer shadow-[0px_2px_8px_rgba(241,243,244,0.2)]"
                    : "bg-[rgba(241,243,244,0.12)] cursor-default"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p369d6d00} fill={promptInput.trim() ? "#202124" : "#5a5c62"} />
                </svg>
              </button>
            </div>
          </div>
        </div>{/* end prompt card */}
        </div>{/* end clarifying + prompt column */}
        </div>{/* end prompt wrapper */}

        </div>{/* end right column */}
      </div>{/* end main body row */}
    </div>
  );
}
