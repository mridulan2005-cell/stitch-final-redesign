import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import svgPaths from "../../imports/1920WDefault-1/svg-gxl75wy7zq";
import { AgentLogPanel, LogoPill, AgentMessage, AgentVersion } from "./AgentLogPanel";
import { ClarifyingQuestions, ClarifyingQuestion } from "./ClarifyingQuestions";
import PrototypeEditor from "./PrototypeEditor";
import ScreenToolbar from "./ScreenToolbar";
import ToolsMenu from "./ToolsMenu";
import AddMenu from "./AddMenu";
import { AnnotationLayer, AreaChip, type Area, type Change } from "./annotate/AnnotationLayer";
import { AnnotationsPanel } from "./annotate/AnnotationsPanel";
import ElementLayer from "./edit/ElementLayer";
import { elementSuggestions, useElementOverrides, FRAME_NAMES, type ElementSel } from "./edit/elements";
import DesignSystemPanel from "./design/DesignSystemPanel";
import DesignSystemPicker from "./design/DesignSystemPicker";
import { THEMES, type Theme } from "./design/themes";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tool = "cursor" | "annotate" | "pencil" | "hand" | "rect" | "palette" | "star";

interface Props {
  projectName: string;
  prompt: string;
  onBack: () => void;
}

// Areas and changes can be created within the same millisecond, so `Date.now()`
// is not a safe id — committed and pending boxes render side by side and would
// collide on their React keys.
let uidSeq = 0;
const uid = (prefix: string) => `${prefix}-${++uidSeq}`;

/**
 * A tool-rail button with the dark pill tooltip that sits to its left.
 * (Native `title` is too slow and unstyled for a rail you sweep across.)
 */
function RailButton({
  label, active, onClick, children,
}: {
  label: string; active: boolean; onClick: () => void; children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={onClick}
        aria-label={label}
        aria-pressed={active}
        className={`flex items-center justify-center size-[34px] rounded-full transition-colors ${
          active ? "bg-[#f1f3f4]" : "hover:bg-[rgba(255,255,255,0.06)]"
        }`}
      >
        {children}
      </button>
      {hover && (
        <div className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 z-50 pointer-events-none animate-in fade-in duration-100">
          <div className="relative flex items-center h-[24px] px-[9px] rounded-[6px] bg-[#0d0e0f] shadow-[0px_2px_10px_rgba(0,0,0,0.5)]">
            <span className="text-[#f1f3f4] text-[11.5px] font-medium whitespace-nowrap">{label}</span>
            {/* little arrow pointing at the button */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-y-[5px] border-y-transparent border-l-[5px] border-l-[#0d0e0f]" />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * A context pill in the prompt bar — what the next prompt is scoped to.
 * Solid, not glass: it sits *on* the prompt bar rather than over the canvas.
 */
function ContextTag({
  icon, label, onRemove,
}: {
  icon: React.ReactNode; label: string; onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-[8px] pl-[7px] pr-[8px] h-[34px] rounded-full bg-[rgba(255,255,255,0.09)] border border-[rgba(218,220,224,0.12)] shrink-0">
      {icon}
      <span className="text-[#f1f3f4] text-[14px] font-medium leading-none whitespace-nowrap max-w-[160px] overflow-hidden text-ellipsis">
        {label}
      </span>
      <button
        onClick={onRemove}
        title={`Remove ${label}`}
        className="flex items-center justify-center size-[20px] rounded-full hover:bg-[rgba(255,255,255,0.14)] transition-colors shrink-0"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.6 2.6l6.8 6.8M9.4 2.6l-6.8 6.8" stroke="#f1f3f4" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
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
        <div data-comp="zenith.palette" data-comp-label="Colour Palette" className="flex flex-col gap-[3px] h-full w-[56px] shrink-0">
          {["#1a202c", "#b149ba", "#3e5ee6", "#f7fafc"].map((c, i) => (
            <div key={i} className="flex-1 rounded-[8px] min-h-0" style={{ background: c }} />
          ))}
        </div>
        {/* 3×3 token grid */}
        <div data-comp="zenith.tokens" data-comp-label="Component Tokens" className="flex-1 grid grid-cols-3 grid-rows-3 gap-[3px]">
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
        <div data-comp="home.status-bar" data-comp-label="Status Bar" className="bg-[#f7fafc] flex items-center justify-between px-[5px] py-[3px] shrink-0" style={{ height: 16 }}>
          <span data-comp-text style={{ fontSize: 4.5, color: "#030813", fontWeight: 700, fontFamily: "Inter" }}>Financely</span>
          <span style={{ fontSize: 3.8, color: "#9730a1", fontFamily: "Inter" }}>9:41</span>
        </div>
        {/* Body */}
        <div className="flex flex-col gap-[5px] p-[5px] bg-[#f7fafc] overflow-hidden" style={{ height: "calc(100% - 16px - 20px)" }}>
          {/* Balance card */}
          <div data-comp="home.balance-card" data-comp-label="Balance Card" className="bg-white border border-[#e0e3e5] rounded-[8px] p-[5px] relative overflow-hidden">
            <div className="text-[3px] text-[#45474c] tracking-wide uppercase" style={{ fontFamily: "Inter" }}>TOTAL BALANCE</div>
            <div data-comp="home.balance-amount" data-comp-label="Balance Amount" data-comp-text style={{ fontSize: 9, color: "#030813", fontWeight: 700, fontFamily: "Inter", lineHeight: 1.1 }}>$12,450.00</div>
            <div className="flex items-center gap-[1px]">
              <span style={{ fontSize: 3.5, color: "#9730a1" }}>↑</span>
              <span style={{ fontSize: 3.5, color: "#9730a1", fontFamily: "Inter" }}>+2.4%</span>
            </div>
            <div data-comp="home.add-funds" data-comp-label="Add Funds Button" className="bg-[#030813] rounded-[5px] w-full py-[2px] mt-[3px] flex items-center justify-center">
              <span data-comp-text style={{ fontSize: 3, color: "white", fontFamily: "Inter", fontWeight: 600 }}>Add Funds</span>
            </div>
          </div>
          {/* Budget donut */}
          <div data-comp="home.budget-card" data-comp-label="Monthly Budget" className="bg-white border border-[#e0e3e5] rounded-[8px] p-[4px]">
            <div className="flex items-center justify-between">
              <span data-comp-text style={{ fontSize: 5, color: "#030813", fontWeight: 600, fontFamily: "Inter" }}>Monthly Budget</span>
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
          <div data-comp="home.recent-heading" data-comp-label="Recent Heading" data-comp-text style={{ fontSize: 4.8, color: "#030813", fontWeight: 600, fontFamily: "Inter" }}>Recent</div>
          <div data-comp="home.transactions" data-comp-label="Transaction List" className="flex flex-col gap-[5px]">
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
        </div>
        {/* Bottom nav */}
        <div data-comp="home.bottom-nav" data-comp-label="Bottom Navigation" className="absolute bottom-0 left-0 right-0 bg-[#f7fafc] border-t border-[#e0e3e5] flex items-center justify-around px-[4px]" style={{ height: 20 }}>
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
        <div data-comp="trans.header" data-comp-label="Header" className="bg-[#f7fafc] border-b border-[#e0e3e5] flex items-center justify-between px-[5px] py-[3px]" style={{ height: 16 }}>
          <span data-comp-text style={{ fontSize: 4.5, color: "#030813", fontWeight: 700, fontFamily: "Inter" }}>← Transactions</span>
        </div>
        <div className="flex flex-col p-[5px] gap-[4px] bg-[#f7fafc] overflow-hidden" style={{ height: "calc(100% - 16px - 20px)" }}>
          <div data-comp="trans.search" data-comp-label="Search Field" className="bg-[#e5e9eb] border border-[#c6c6cc] rounded-[5px] flex items-center gap-[2px] px-[4px] py-[2px]">
            <span data-comp-text style={{ fontSize: 3.5, color: "#45474c", fontFamily: "Inter" }}>🔍 Search</span>
          </div>
          <div data-comp="trans.filters" data-comp-label="Filter Chips" className="flex gap-[2px]">
            <div className="bg-[#030813] rounded-[5px] px-[3px] py-[1px]">
              <span style={{ fontSize: 2.8, color: "white", fontFamily: "Inter" }}>All</span>
            </div>
            {["Income", "Expense"].map(l => (
              <div key={l} className="bg-[#e5e9eb] rounded-[5px] px-[2px] py-[1px]">
                <span style={{ fontSize: 2.8, color: "#45474c", fontFamily: "Inter" }}>{l}</span>
              </div>
            ))}
          </div>
          <div data-comp="trans.list" data-comp-label="Transaction List" className="flex flex-col gap-[3px]">
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
        <div data-comp="trans.nav" data-comp-label="Bottom Navigation" className="absolute bottom-0 left-0 right-0 bg-[#f7fafc] border-t border-[#e0e3e5] flex items-center justify-around px-[4px]" style={{ height: 20 }}>
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

/** The seeded demo turn — both messages share one turn id. */
const SEED_TURN_ID = "m1";

const INITIAL_MESSAGES: AgentMessage[] = [
  {
    id: "m1",
    turnId: SEED_TURN_ID,
    role: "user",
    content: `generate in dark mode, : So I want to build a really high quality dashboard which has, like, today's schedule. I can see all the stuff that I have got for today, either in a list view or a, like, condensed list view or, like, an order of timeline view. `,
    steps: [
      { label: "created", state: "done" },
      { label: "creating", state: "done" },
    ],
  },
  {
    id: "m2",
    turnId: SEED_TURN_ID,
    role: "assistant",
    content: `I've designed the primary dashboard for Resubin with a high-fidelity, professional dark mode aesthetic.<br/><br/><strong>Key Design Features:</strong><ul style="list-style:disc;padding-left:18px;margin-top:6px;display:flex;flex-direction:column;gap:4px"><li>Today's Schedule (Timeline View): A central interactive timeline that maps out your day with a "current time" indicator to keep you on track.</li><li>Weekly Context: A quick-access day picker at the top allows you to jump between days of the week, ensuring you can plan ahead without leaving the main view.</li><li>Productivity Pulse: The Upcoming Reminders and Continue Where You Left Off sections provide a glanceable summary of your immediate priorities and recent activity.</li><li>Gamified Insights: Your profile features an "Elite Rank" and a "15-day streak" to encourage consistency, while the Insights section provides actionable data-driven advice based on your weekly habits.</li><li>Visual Style: The interface uses a deep "Surface" palette with glassmorphism effects and the Geist typeface for a sleek, modern, and high-performance feel.</li></ul>`,
    followUps: ["Add a button", "Add a dark mode toggle", "Add a sidebar nav"],
  },
];

// Toolbar / tools-menu entries that have no dedicated UI yet are handed to the
// agent as a prompt, so every item in the menus does something real.
const TOOLBAR_PROMPTS: Record<string, string> = {
  variations: "Generate three variations of the selected screen",
  regenerate: "Regenerate the selected screen",
  mobile: "Create a mobile app version of the selected screen",
  animate: "Animate the selected screen",
  "missing-states": "Add the missing states for the selected screen (empty, loading, error)",
  heatmap: "Run a predictive attention heatmap on the selected screen",
  "a11y-audit": "Run an accessibility audit on the selected screen",
  "comparative-audit": "Run a comparative audit of the selected screen against best-in-class products",
  "app-store-assets": "Generate app store assets for this project",
  "web-assets": "Generate web assets for this project",
  "marketing-kit": "Generate a marketing kit for this project",
  "view-details": "Show the details of the selected screen",
  "view-code": "Show the code for the selected screen",
  "copy-to-figma": "Copy the selected screen to Figma",
  export: "Export the selected screen",
  download: "Download the selected screen",
  reload: "Reload the selected screen",
  delete: "Delete the selected screen",
  image: "Generate an image for the selected screen",
  logo: "Generate a logo for this project",
  diagram: "Generate a diagram for this project",
  "accessibility-audit": "Run an accessibility audit on the selected screen",
};

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
  // Nothing is selected to begin with — the screen toolbar only slides in once
  // a screen is picked on the canvas.
  const [selectedFrame, setSelectedFrame] = useState<string>("");
  const [promptInput, setPromptInput] = useState("");
  const [showModelMenu, setShowModelMenu] = useState(false);
  const [selectedModel, setSelectedModel] = useState("3 Flash");
  // ── Design system ──────────────────────────────────────────────────────────
  // The palette opens a template picker above the prompt bar. Choosing a
  // template arms two ways forward: Generate applies it as is, Edit opens the
  // editor on it. "panel" is the editor / DESIGN.md list surface.
  const [designStage, setDesignStage] = useState<"closed" | "picker" | "panel">("closed");
  const designOpen = designStage !== "closed";
  /** The catalog, editable — saving a theme rewrites its entry here. */
  const [themes, setThemes] = useState<Theme[]>(THEMES);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  /** Theme the panel opens straight into; null opens the DESIGN.md list. */
  const [editingThemeId, setEditingThemeId] = useState<string | null>(null);
  /** The design system currently on the project. */
  const [activeThemeId, setActiveThemeId] = useState<string | null>(null);
  /** The picker's shortlist — the rest live behind "Find More". */
  const templates = useMemo(() => themes.slice(0, 3), [themes]);
  // Landing zoom is 1:1 — the screens are read at full size, and the zoom
  // control steps back out to the 27% overview.
  const [zoom, setZoom] = useState(100);
  const [pan, setPan] = useState({ x: 120, y: 90 });
  // When the workspace is opened with a first prompt, start from a clean log
  // (that prompt drives the very first clarifying round); otherwise show the
  // seeded demo conversation.
  const [messages, setMessages] = useState<AgentMessage[]>(
    initialPrompt?.trim() ? [] : INITIAL_MESSAGES,
  );
  const [panelOpen, setPanelOpen] = useState(true);
  /** Agent log collapsed to its floating mark (toggled by the logo). */
  const [logCollapsed, setLogCollapsed] = useState(false);
  /** One version per finished prompt; unseen ones drive the history badge. */
  const [versions, setVersions] = useState<AgentVersion[]>(
    initialPrompt?.trim()
      ? []
      : [{ id: SEED_TURN_ID, label: "Dashboard with today's schedule", seen: true }],
  );
  /** The turn the log is showing — one prompt and its reply, never a running list. */
  const [activeTurnId, setActiveTurnId] = useState<string | null>(
    initialPrompt?.trim() ? null : SEED_TURN_ID,
  );
  // Read inside the generation timer, which outlives the render that scheduled it.
  const activeTurnRef = useRef<string | null>(activeTurnId);
  useEffect(() => { activeTurnRef.current = activeTurnId; }, [activeTurnId]);

  /** Only the active turn is rendered in the log. */
  const visibleMessages = useMemo(
    () => messages.filter((m) => (m.turnId ?? m.id) === activeTurnId),
    [messages, activeTurnId],
  );

  /** Follow-ups for the turn on screen, surfaced as chips above the prompt bar. */
  const suggestions = useMemo(() => {
    for (let i = visibleMessages.length - 1; i >= 0; i--) {
      const m = visibleMessages[i];
      if (m.role === "assistant" && m.followUps?.length) return m.followUps.slice(0, 5);
    }
    return [];
  }, [visibleMessages]);
  /** Pending generation timers, keyed by the prompt they belong to, so a
      paused run can actually be stopped rather than just visually cancelled. */
  const runTimers = useRef<Record<string, number>>({});

  useEffect(() => () => {
    Object.values(runTimers.current).forEach((t) => window.clearTimeout(t));
  }, []);
  const [dragOverCanvas, setDragOverCanvas] = useState(false);
  // The prompt being held back until the clarifying questions are answered
  // (null = panel closed). Nothing reaches the agent log while this is set.
  const [clarifying, setClarifying] = useState<{ prompt: string } | null>(null);
  // Clarifying questions are a one-time step, asked around the first main
  // prompt only; every prompt after that goes straight to the agent.
  const [clarifyAsked, setClarifyAsked] = useState(false);
  // Prototype editor is a full-screen view launched from the Play button.
  const [prototypeOpen, setPrototypeOpen] = useState(false);

  // ── Annotate mode ──────────────────────────────────────────────────────────
  const [annotating, setAnnotating] = useState(false);
  // The "/" tools menu in the prompt bar, and the "+" add-context menu.
  const [toolsOpen, setToolsOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  // Areas selected but not yet described.
  const [areas, setAreas] = useState<Area[]>([]);
  // Changes already described, listed in the left panel.
  const [changes, setChanges] = useState<Change[]>([]);
  // Rectangle currently being dragged out, in canvas coords.
  const [draft, setDraft] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  // Hidden once a second area is added — the prompt bar takes over from there.
  const [inlineDismissed, setInlineDismissed] = useState(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  // Mirrors `draft` so mouseup reads the live rect, not a stale render closure.
  const draftRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null);

  const isPanning = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLTextAreaElement>(null);

  // ── Component-level editing ────────────────────────────────────────────────
  // Only in edit mode: with the cursor you are picking screens, so nothing
  // inside them lights up. The Edit tool (rail, or the screen toolbar) is what
  // turns component selection on; the toolbar route also puts every component
  // of the selected screen on show, so they can be found without hunting.
  const [elementEditFrame, setElementEditFrame] = useState<string | null>(null);
  /** The component the Edit Element menu is hanging off. */
  const [selectedEl, setSelectedEl] = useState<ElementSel | null>(null);
  /**
   * What the prompt bar is scoped to after "Edit With AI" — the screen, and the
   * component within it. Dropping the component chip widens the scope back to
   * the whole screen rather than clearing everything.
   */
  const [tag, setTag] = useState<{ frame: string; el: { key: string; label: string } | null } | null>(null);
  /** Direct edits — applied to the canvas rather than handed to the agent. */
  const [deletedEls, setDeletedEls] = useState<string[]>([]);
  const [textEdits, setTextEdits] = useState<Record<string, string>>({});

  useElementOverrides(canvasRef, deletedEls, textEdits);

  /** Tag the component in the prompt bar and put the caret in the box. */
  function tagElement(sel: ElementSel) {
    setTag({ frame: sel.frame, el: { key: sel.key, label: sel.label } });
    setSelectedEl(null);
    requestAnimationFrame(() => promptRef.current?.focus());
  }

  function editElementText(sel: ElementSel, text: string) {
    setSelectedEl(null);
    if (!text) return;
    setTextEdits((prev) => ({ ...prev, [sel.key]: text }));
  }

  function deleteElement(sel: ElementSel) {
    setSelectedEl(null);
    setDeletedEls((prev) => (prev.includes(sel.key) ? prev : [...prev, sel.key]));
  }

  /** Drop everything component-level — used when the canvas is clicked away. */
  function clearElementEditing() {
    setSelectedEl(null);
    setElementEditFrame(null);
  }

  /**
   * Component selection is an edit-mode thing. In select mode the cursor picks
   * screens, so the pieces inside them stay quiet.
   */
  const editMode = activeTool === "pencil" && !annotating;

  // Leaving edit mode takes the selection and the outlines with it.
  useEffect(() => {
    if (!editMode) { setSelectedEl(null); setElementEditFrame(null); }
  }, [editMode]);

  /**
   * The chips above the prompt bar. A tagged component takes the slot over —
   * changes to the component itself first, then the flows it could open.
   */
  const chipItems = useMemo(() => {
    if (!tag?.el) return suggestions.map((text) => ({ text, flow: false }));
    const s = elementSuggestions(tag.el.label);
    return [
      ...s.edits.map((text) => ({ text, flow: false })),
      ...s.flows.map((text) => ({ text, flow: true })),
    ].slice(0, 5);
  }, [tag, suggestions]);

  /**
   * Drop a suggestion into the prompt box (rather than firing it straight off)
   * so it can be refined before sending. Puts the caret at the end and focuses.
   */
  function fillPromptWith(text: string) {
    setPromptInput(text);
    requestAnimationFrame(() => {
      const el = promptRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(text.length, text.length);
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 180)}px`;
    });
  }

  // ── Design system flow ─────────────────────────────────────────────────────

  function closeDesign() {
    setDesignStage("closed");
    setEditingThemeId(null);
  }

  /** Palette button: opens at the template picker, closes from anywhere. */
  function togglePalette() {
    if (designOpen) closeDesign();
    else setDesignStage("picker");
  }

  /** Keep an edited theme in the catalog without putting it on the project. */
  function saveTheme(next: Theme) {
    setThemes((prev) => prev.map((t) => (t.id === next.id ? next : t)));
  }

  /**
   * Put a design system on the project. Both routes end here — Generate from
   * the picker and Save and apply from the editor — so applying always saves,
   * marks the theme active and lands as a turn in the agent log.
   */
  function applyTheme(next: Theme) {
    saveTheme(next);
    setActiveThemeId(next.id);
    setSelectedTemplate(next.id);
    closeDesign();
    submitPrompt(`Apply the ${next.name} design system`);
  }

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

  // Submit a prompt. The very first main prompt is held back on a set of
  // clarifying questions — it is not sent, and nothing appears in the agent
  // log, until they are answered or skipped. Everything after that (follow-ups,
  // library inserts, later prompts) goes straight through.
  function submitPrompt(text?: string, opts?: { clarify?: boolean }) {
    const typed = text ?? promptInput.trim();
    if (!typed) return;
    setPromptInput("");

    // A tag from "Edit With AI" scopes whatever was typed, then lets go — menu
    // actions (which pass their own text) are left alone.
    let value = typed;
    if (tag && text === undefined) {
      const screen = FRAME_NAMES[tag.frame] ?? tag.frame;
      value = tag.el
        ? `On the ${screen} screen, for the ${tag.el.label}: ${typed}`
        : `On the ${screen} screen: ${typed}`;
      setTag(null);
    }

    if (opts?.clarify && !clarifyAsked) {
      setClarifyAsked(true);
      setClarifying({ prompt: value });
      return;
    }

    sendPrompt(value);
  }

  /** Hand a prompt to the agent: open its turn, log it, start generating. */
  function sendPrompt(value: string, answerSummary?: string) {
    const userMsgId = `m-${Date.now()}`;

    // A prompt opens its own turn, and the log switches to it.
    setActiveTurnId(userMsgId);
    activeTurnRef.current = userMsgId;

    // User message with "creating" step (agent is thinking)
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        turnId: userMsgId,
        role: "user",
        content: value,
        steps: [{ label: "creating", state: "active" }],
      },
    ]);

    runAssistant(userMsgId, value, answerSummary);
  }

  // Resolve the user's "creating" step and append the simulated agent reply,
  // optionally folding in the clarifying answers the user provided.
  function runAssistant(userMsgId: string, value: string, answerSummary?: string) {
    const assistantMsgId = `m-${Date.now() + 1}`;
    const detail = answerSummary
      ? `<br/><br/><span style="color:rgba(255,255,255,0.6)">Tuned to your preferences: <em>${answerSummary}</em>.</span>`
      : "";

    runTimers.current[userMsgId] = window.setTimeout(() => {
      delete runTimers.current[userMsgId];
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
          turnId: userMsgId,
          role: "assistant",
          content: `Here's what I've implemented for "<em>${value}</em>". The changes have been applied to your canvas.${detail}`,
          followUps: ["Refine the colors", "Add animations", "Make it responsive"],
        },
      ]);
      // A finished prompt is a version. It only counts as checked out if you were
      // watching this turn when it landed — finishing in the background is what
      // the history badge is there to tell you about.
      setVersions(prev => [
        { id: userMsgId, label: value, seen: activeTurnRef.current === userMsgId },
        ...prev.filter(v => v.id !== userMsgId),
      ]);
    }, 1800);
  }

  /** Stop a run — the reply never arrives and the prompt offers retry actions. */
  function pauseRun(userMsgId: string) {
    const timer = runTimers.current[userMsgId];
    if (timer) {
      window.clearTimeout(timer);
      delete runTimers.current[userMsgId];
    }
    setMessages(prev =>
      prev.map(m => (m.id === userMsgId ? { ...m, steps: [], interrupted: true } : m)),
    );
  }

  function regenerateRun(userMsgId: string) {
    const msg = messages.find(m => m.id === userMsgId);
    if (!msg) return;
    setMessages(prev =>
      prev.map(m =>
        m.id === userMsgId
          ? { ...m, interrupted: false, steps: [{ label: "creating", state: "active" }] }
          : m,
      ),
    );
    runAssistant(userMsgId, msg.content);
  }

  /** Put a prompt back in the canvas prompt box so it can be reworded. */
  function editPrompt(text: string) {
    setPromptInput(text);
    requestAnimationFrame(() => {
      const el = promptRef.current;
      el?.focus();
      el?.setSelectionRange(text.length, text.length);
    });
  }

  function handleClarifySubmit(summary: string) {
    const pending = clarifying;
    setClarifying(null);
    if (pending) sendPrompt(pending.prompt, summary || undefined);
  }

  function handleClarifySkip() {
    const pending = clarifying;
    setClarifying(null);
    if (pending) sendPrompt(pending.prompt);
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
    setAnnotating(true);
    setAreas([]);
    setDraft(null);
    setInlineDismissed(false);
  }

  function exitAnnotate() {
    setAnnotating(false);
    setAreas([]);
    setDraft(null);
    setInlineDismissed(false);
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

    setAreas((prev) => {
      // Number across committed *and* pending areas: committed boxes stay on
      // the canvas, so a fresh "1" would collide with one already up there.
      const used = [...changes.flatMap((c) => c.areas), ...prev];
      const n = used.reduce((max, a) => Math.max(max, a.n), 0) + 1;
      const next = [...prev, { id: uid("a"), n, ...d } as Area];
      // Second area onwards, the inline field gives way to the prompt bar.
      if (next.length > 1) setInlineDismissed(true);
      return next;
    });
  }

  /**
   * Turn the pending areas into a change shown in the left panel. The boxes
   * themselves stay on the canvas — they move from "pending" to "committed"
   * so you can keep seeing everything you've marked up so far.
   */
  function commitChange(text: string) {
    if (!text.trim() || areas.length === 0) return;
    setChanges((prev) => [...prev, { id: uid("c"), text: text.trim(), areas }]);
    setAreas([]);
    setInlineDismissed(false);
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
      return next;
    });
  }

  // Esc leaves annotate mode; A enters it; 1–5 fire the suggestion chips.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA)$/.test((e.target as HTMLElement)?.tagName ?? "");
      if (e.key === "Escape" && annotating) { exitAnnotate(); return; }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (!annotating && (e.key === "a" || e.key === "A")) { enterAnnotate(); return; }
      if (!annotating && clarifying === null && /^[1-5]$/.test(e.key)) {
        const pick = chipItems[Number(e.key) - 1];
        if (pick) { e.preventDefault(); fillPromptWith(pick.text); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [annotating, chipItems, clarifying]);

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

  /**
   * The screen toolbar acts on the selection, so it only rides in when there is
   * one. Annotate mode keeps it up regardless — its Annotate button is the way
   * back out of that mode.
   */
  const toolbarVisible = selectedFrame !== "" || annotating;

  // The second slot used to be "Mark" — it is now the Annotate tool, which is
  // the same drag-a-box gesture but wired to annotate mode.
  const TOOLS: { id: Tool; path: string; vb?: string; label: string }[] = [
    { id: "cursor", path: svgPaths.p2f9ca680, vb: "0 0 11 16", label: "Select — V" },
    { id: "annotate", path: svgPaths.p192791c0, label: "Annotate — A" },
    { id: "pencil", path: svgPaths.p23db14b0, label: "Edit — P" },
    { id: "hand", path: svgPaths.ped78000, label: "Pan — H" },
    { id: "rect", path: svgPaths.p21bc6d80, vb: "0 0 13.57 13.57", label: "Shape — R" },
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

        {/* Center: screen toolbar (Figma 256:3761). It belongs to the selection
            — with nothing selected it rests just above the top bar, out of
            frame, and drops into place the moment a screen is picked. The outer
            div owns the centering so the inner one is free to animate its own
            offset without fighting the -translate-x-1/2 — and it is `translate`,
            not `transform`, that Tailwind's translate utilities write to, so
            that is the property the transition has to name. */}
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <div
            aria-hidden={!toolbarVisible}
            className={`transition-[translate,opacity] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              toolbarVisible
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-[72px] opacity-0 pointer-events-none"
            }`}
          >
            <ScreenToolbar
              visible={toolbarVisible}
              annotating={annotating}
              onEdit={() => {
                if (annotating) exitAnnotate();
                setActiveTool("pencil");
                // Show every component on the selected screen, so they can be
                // picked without sweeping the screen to find them.
                setElementEditFrame(selectedFrame || null);
              }}
              onAnnotate={() => (annotating ? exitAnnotate() : enterAnnotate())}
              onOpenPrototype={() => { if (annotating) exitAnnotate(); setPrototypeOpen(true); }}
              onAction={(id) => submitPrompt(TOOLBAR_PROMPTS[id] ?? id)}
            />
          </div>
        </div>

        {/* Right: actions */}
        <div className="absolute right-0 flex items-center gap-[6px] px-[20px]">
          {/* Play — opens the prototype editor (was a second, purple play button) */}
          <button
            onClick={() => setPrototypeOpen(true)}
            title="Play prototype"
            className="flex items-center justify-center size-[34px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p1507f080} fill="#F1F3F4" />
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
      <div className="relative flex flex-1 min-h-0 overflow-hidden">

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
          // Collapsing slides the fixed-width column out behind the body's
          // overflow rather than squeezing it, so nothing inside reflows.
          // Collapsing shrinks the panel back toward its top-left corner — the
          // spot the bubble occupies — so the two read as one surface folding up.
          <div
            className="w-[340px] shrink-0 p-[8px] flex flex-col gap-0 bg-[#202124] transition-[margin-left,opacity,transform] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              marginLeft: logCollapsed ? -340 : 0,
              opacity: logCollapsed ? 0 : 1,
              transform: logCollapsed ? "scale(0.55)" : "scale(1)",
              transformOrigin: "14px 14px",
            }}
            aria-hidden={logCollapsed}
          >
            <AgentLogPanel
              messages={visibleMessages}
              onCollapse={() => setLogCollapsed(true)}
              onPause={pauseRun}
              onRegenerate={regenerateRun}
              onEditPrompt={editPrompt}
              versions={versions}
              activeVersionId={activeTurnId}
              onSelectVersion={(id) => {
                // Checking out a version replaces the log with just that turn.
                setActiveTurnId(id);
                setVersions(prev => prev.map(v => (v.id === id ? { ...v, seen: true } : v)));
              }}
            />
          </div>
        )}

        {/* Collapsed agent log — the mark alone, hovering over the canvas */}
        {panelOpen && !annotating && logCollapsed && (
          // The collapsed agent (Figma 264:4914) — the same glass tile the panel
          // folds into. The mark itself never changes state.
          <button
            onClick={() => setLogCollapsed(false)}
            title="Open agent log"
            className="absolute left-[14px] top-[14px] z-40 flex items-center justify-center size-[65px] rounded-[16px] backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25)] animate-in fade-in zoom-in-75 [animation-duration:320ms] [animation-timing-function:cubic-bezier(0.22,1,0.36,1)]"
          >
            <LogoPill size="lg" />
          </button>
        )}

        {/* ── Right: canvas + prompt ───────────────────────────────────── */}
        {/* `relative` so the prompt bar and canvas controls can float over the
            canvas rather than taking rows away from it. */}
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden relative">

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
          // Clicks inside a screen, or on the Edit Element menu hanging off one,
          // are not a click away from the selection.
          if ((e.target as HTMLElement).closest("[data-frame],[data-element-layer]")) return;
          setSelectedFrame("");
          setShowModelMenu(false);
          clearElementEditing();
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

        {/* Component-level selection — hover outlines and the Edit Element menu */}
        <ElementLayer
          canvasRef={canvasRef}
          active={editMode}
          hintFrame={elementEditFrame}
          selected={selectedEl}
          onSelect={setSelectedEl}
          hidden={deletedEls}
          pan={pan}
          scale={scale}
          onEditText={editElementText}
          onEditWithAI={tagElement}
          onDelete={deleteElement}
        />

        {/* Annotate overlay */}
        {annotating && (
          <AnnotationLayer
            pan={pan}
            scale={scale}
            areas={areas}
            changes={changes}
            draft={draft}
            showInlineInput={areas.length === 1 && !inlineDismissed}
            onDescribe={commitChange}
            onRemoveArea={removeArea}
            changeCount={changes.length}
            onExitAnnotate={exitAnnotate}
            onApplyAll={applyAllChanges}
          />
        )}

        {/* DESIGN.md — floats beside the tool rail, clear of the prompt bar */}
        {designStage === "panel" && (
          <div className="absolute right-[74px] top-[16px] bottom-[132px] z-30 flex items-start">
            <DesignSystemPanel
              themes={themes}
              initialThemeId={editingThemeId}
              activeThemeId={activeThemeId}
              onClose={closeDesign}
              // Back returns to the picker only when the picker sent us here.
              onBack={editingThemeId ? () => setDesignStage("picker") : undefined}
              onSave={saveTheme}
              onApply={applyTheme}
            />
          </div>
        )}

        {/* Right tool sidebar */}
        <div className="absolute right-[16px] top-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-col items-center gap-[6px] p-[5px] backdrop-blur-[24px] bg-[rgba(22,23,24,0.6)] border border-[rgba(218,220,224,0.12)] rounded-[100px] shadow-[0px_8px_24px_rgba(0,0,0,0.4)]">
            {TOOLS.map(({ id, path, vb, label }) => {
              // Annotate is a mode, not a passive tool — it owns its own state.
              const on = id === "annotate" ? annotating : activeTool === id && !annotating;
              return (
                <RailButton
                  key={id}
                  label={label}
                  active={on}
                  onClick={() => (id === "annotate" ? (annotating ? exitAnnotate() : enterAnnotate()) : setActiveTool(id))}
                >
                  <svg width="18" height="18" viewBox={vb ?? "0 0 20 20"} fill="none">
                    <path d={path} fill={on ? "#202124" : "#F1F3F4"} />
                  </svg>
                </RailButton>
              );
            })}
            <div className="w-[20px] h-px bg-[rgba(218,220,224,0.15)] my-[2px]" />
            {TOOLS2.map(({ id, path, label }) => {
              // Palette is a panel toggle, not a canvas tool — it owns its own state.
              const on = id === "palette" ? designOpen : activeTool === id && !annotating;
              return (
                <RailButton
                  key={id}
                  label={label}
                  active={on}
                  onClick={() => (id === "palette" ? togglePalette() : setActiveTool(id))}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d={path} fill={on ? "#202124" : "#F1F3F4"} />
                  </svg>
                </RailButton>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── Canvas controls — floating, bottom right (Figma 180:898) ────── */}
      <div className="absolute bottom-[20px] right-[20px] z-30 flex items-center gap-[8px]">
        {/* Undo / redo */}
        <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center gap-[2px] p-[1.8px] rounded-full">
          <button
            title="Undo"
            className="flex items-center justify-center size-[28px] rounded-full opacity-40 hover:opacity-100 hover:bg-[rgba(255,255,255,0.08)] transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1e109c00} fill="#F1F3F4" />
            </svg>
          </button>
          <div className="w-px h-[16px] bg-[rgba(218,220,224,0.15)]" />
          <button
            title="Redo"
            className="flex items-center justify-center size-[28px] rounded-full opacity-40 hover:opacity-100 hover:bg-[rgba(255,255,255,0.08)] transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1ec1fe00} fill="#F1F3F4" />
            </svg>
          </button>
        </div>

        {/* Zoom */}
        <button
          onClick={() => setZoom(z => (z === 100 ? 27 : 100))}
          title="Toggle zoom"
          className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center w-[64px] h-[32px] rounded-[100px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(56,59,61,0.7)] transition-colors"
        >
          <span className="text-[#f1f3f4] text-[14px] leading-[20px]">{zoom}%</span>
        </button>

        {/* Help */}
        <button
          title="Helpful links"
          className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(56,59,61,0.7)] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d={svgPaths.p35b06f80} fill="#F1F3F4" />
          </svg>
        </button>
      </div>

      {/* ── Clarifying questions + Prompt box (Figma 180:811) ───────────── */}
      {/* Floats over the canvas, centered. While annotating there is no prompt
          box until a second area is selected — then it slides up from below. */}
      <div
        style={{ transform: annotating && areas.length < 2 ? "translateY(130%)" : "translateY(0)" }}
        className={`absolute bottom-[20px] left-0 right-0 z-30 flex justify-center px-[24px] pointer-events-none transition-all duration-300 ease-out ${
          annotating && areas.length < 2 ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full max-w-[582px] min-w-[300px] relative pointer-events-auto">

        {/* Suggestion chips — follow-ups, or the tagged component's own
            changes and flows. Press 1–5 to drop one into the box. */}
        {chipItems.length > 0 && !annotating && clarifying === null && (
          <div className="w-full overflow-x-auto pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-[8px] w-max px-[8px]">
              {chipItems.map((c, i) => (
                <button
                  key={c.text}
                  onClick={() => fillPromptWith(c.text)}
                  className={`backdrop-blur-[20px] border flex gap-[8px] h-[32px] items-center justify-center max-w-[280px] overflow-clip pl-[11.8px] pr-[7.8px] py-[5.8px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 transition-colors ${
                    c.flow
                      ? "bg-[rgba(113,104,246,0.14)] border-[rgba(113,104,246,0.42)] hover:bg-[rgba(113,104,246,0.24)]"
                      : "bg-[rgba(255,255,255,0)] border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)]"
                  }`}
                >
                  {c.flow && (
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d="M2.6 4.4h4.2M2.6 11.6h4.2M9.4 4.4h4M9.4 11.6h4M7.4 4.4v7.2" stroke="#a89ff8" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  )}
                  <span className="text-[#f1f3f4] text-[13px] leading-[19.5px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {c.text}
                  </span>
                  <span className="bg-[rgba(22,23,24,0.1)] border border-[rgba(218,220,224,0.12)] flex h-[20px] items-center justify-center px-[6px] rounded-[4px] shrink-0">
                    <span className="text-[#bdc1c6] text-[12px] leading-[12px]">{i + 1}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Design system templates — shares the slot above the prompt bar with
            the clarifying questions, so only one step is ever asked at a time */}
        <DesignSystemPicker
          open={designStage === "picker" && !annotating && clarifying === null}
          themes={templates}
          selectedId={selectedTemplate}
          activeId={activeThemeId}
          onSelect={setSelectedTemplate}
          onSkip={closeDesign}
          onEdit={() => {
            setEditingThemeId(selectedTemplate);
            setDesignStage("panel");
          }}
          onGenerate={() => {
            const picked = themes.find((t) => t.id === selectedTemplate);
            if (picked) applyTheme(picked);
          }}
          onFindMore={() => {
            // The full catalog, with no theme opened — DESIGN.md's list view.
            setEditingThemeId(null);
            setDesignStage("panel");
          }}
        />

        {/* Clarifying questions — slides up from behind the prompt bar */}
        <ClarifyingQuestions
          open={clarifying !== null && !annotating}
          questions={CLARIFYING_QUESTIONS}
          perPage={2}
          onSubmit={handleClarifySubmit}
          onSkip={handleClarifySkip}
        />

        <div className="w-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[24px] overflow-visible shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] relative z-20">

          {/* What "Edit With AI" scoped the box to — the screen, then the
              component inside it. Dropping the component keeps the screen. */}
          {tag && !annotating && (
            <div className="flex items-center gap-[8px] px-[16px] pt-[12px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <ContextTag
                label={FRAME_NAMES[tag.frame] ?? tag.frame}
                icon={
                  <span className="flex items-center justify-center size-[22px] rounded-full bg-[#f1f3f4] shrink-0">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d={svgPaths.p3eb8b400} fill="#202124" />
                    </svg>
                  </span>
                }
                onRemove={() => setTag(null)}
              />
              {tag.el && (
                <ContextTag
                  label={tag.el.label}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="shrink-0">
                      <path
                        d="M11.7 2.6l3.7 3.7L6.5 15.2l-4.2.5.5-4.2 8.9-8.9z"
                        stroke="#f1f3f4"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  onRemove={() => setTag((t) => (t ? { ...t, el: null } : null))}
                />
              )}
            </div>
          )}

          {/* Selected areas, when a change spans more than one */}
          {annotating && areas.length > 0 && (
            <div className="flex items-center gap-[8px] overflow-x-auto px-[16px] pt-[12px]">
              {areas.map(a => (
                <AreaChip key={a.id} area={a} onRemove={() => removeArea(a.id)} />
              ))}
            </div>
          )}

          <div className="flex flex-col px-[16px] py-[12px]">
            {/* Textbox */}
            <textarea
              ref={promptRef}
              value={promptInput}
              onChange={e => setPromptInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (annotating) { commitChange(promptInput); setPromptInput(""); }
                  else submitPrompt(undefined, { clarify: true });
                }
              }}
              placeholder={tag?.el && !annotating
                ? `What would you like to change about the ${tag.el.label.toLowerCase()}?`
                : "What would you like to change or create?"}
              rows={1}
              className="w-full min-h-[25px] max-h-[180px] bg-transparent border-none outline-none resize-none text-[#f1f3f4] text-[15px] placeholder-[#6b6e75] leading-[25px]"
              style={{ fontFamily: "Inter,sans-serif" }}
              onInput={e => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight, 180)}px`;
              }}
            />

            {/* Bottom row: controls */}
            <div className="flex gap-[8px] items-center pt-[8px]">

              {/* Left: + / */}
              <div className="relative">
                <button
                  onClick={() => setAddOpen(o => !o)}
                  aria-pressed={addOpen}
                  title="Add context"
                  className={`flex items-center justify-center size-[28px] rounded-full transition-colors text-[#f1f3f4] text-[20px] font-light leading-none ${
                    addOpen ? "bg-[rgba(255,255,255,0.16)]" : "hover:bg-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  +
                </button>
                {addOpen && (
                  <AddMenu
                    onClose={() => setAddOpen(false)}
                    onUploadFiles={() => fileRef.current?.click()}
                    onWebsiteUrl={() => fillPromptWith("Use this website as a reference: https://")}
                    onVariations={() => submitPrompt(TOOLBAR_PROMPTS.variations)}
                  />
                )}
              </div>
              {/* Upload Files opens the picker; the names are handed to the agent. */}
              <input
                ref={fileRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => {
                  const names = Array.from(e.target.files ?? []).map(f => f.name);
                  e.target.value = "";
                  if (names.length) submitPrompt(`Use these uploaded files as reference: ${names.join(", ")}`);
                }}
              />
              {/* Tools — the "/" menu */}
              <div className="relative">
                <button
                  onClick={() => setToolsOpen(o => !o)}
                  aria-pressed={toolsOpen}
                  title="Tools"
                  className={`flex items-center justify-center size-[28px] rounded-full transition-colors text-[#f1f3f4] text-[16.667px] leading-none ${
                    toolsOpen ? "bg-[rgba(255,255,255,0.16)]" : "hover:bg-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  /
                </button>
                {toolsOpen && (
                  <ToolsMenu
                    onClose={() => setToolsOpen(false)}
                    onSelect={(id) => submitPrompt(TOOLBAR_PROMPTS[id] ?? id)}
                  />
                )}
              </div>

              {/* Right: icons + model + submit */}
              <div className="flex gap-[8px] items-center ml-auto">

                {/* Frame/attach icon */}
                <button
                  title="Attach frame"
                  className="flex items-center justify-center size-[28px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p192791c0} fill="#F1F3F4" />
                  </svg>
                </button>

                {/* Palette — opens DESIGN.md */}
                <button
                  onClick={togglePalette}
                  aria-pressed={designOpen}
                  title="Design system"
                  className={`flex items-center justify-center size-[28px] rounded-full transition-colors ${
                    designOpen ? "bg-[rgba(255,255,255,0.16)]" : "hover:bg-[rgba(255,255,255,0.08)]"
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p13834380} fill="#F1F3F4" />
                  </svg>
                </button>

                {/* Model selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowModelMenu(m => !m)}
                    className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] flex gap-[6px] h-[28px] items-center justify-center px-[10px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(76,79,81,0.7)] transition-colors"
                  >
                    <span className="text-[#f1f3f4] text-[13px] leading-[19.5px] whitespace-nowrap" style={{ fontFamily: "Inter,sans-serif" }}>
                      {selectedModel}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <path d={svgPaths.p3cfe5200} fill="#F1F3F4" />
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
                <button
                  title="Voice input"
                  className="flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p304bd900} fill="#F1F3F4" />
                  </svg>
                </button>

                {/* Submit */}
                <button
                  onClick={() => {
                    if (annotating) { commitChange(promptInput); setPromptInput(""); }
                    else submitPrompt(undefined, { clarify: true });
                  }}
                  title="Send (Enter)"
                  className={`backdrop-blur-[20px] flex items-center justify-center size-[32px] rounded-full transition-all duration-150 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] ${
                    promptInput.trim()
                      ? "bg-[#f1f3f4] hover:bg-white cursor-pointer"
                      : "bg-[rgba(241,243,244,0.35)] cursor-default"
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p369d6d00} fill={promptInput.trim() ? "#202124" : "#5a5c62"} />
                  </svg>
                </button>
              </div>
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
