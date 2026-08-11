import {
  useState, useMemo, useRef, useEffect, useLayoutEffect, useCallback,
  createContext, useContext, type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import icons, { morePillPaths, menuIcons } from "../../imports/PrototypeEditor-svg";
import { SuggestModal, type SuggestTab } from "./prototype/SuggestModal";
import { SCREENS, getScreen, createGeneratedScreen, type ScreenDef } from "./prototype/screens";
import { AgentBubble, type AgentState } from "./prototype/AgentBubble";
import { DEFAULT_HOTSPOT_ROUTES, screenIdFor } from "./prototype/suggest";
import {
  FLOWS, ROOT_FLOW_IDS, countScreens, firstScreenOf, firstScreenOfNodes, idealBranch,
  buildChain, flowContainsScreen,
  type FlowNode, type FlowBranch, type ChainItem,
} from "./prototype/flows";

/**
 * Resolves a screen id to its definition. Everything that renders a screen goes
 * through this so screens the agent creates at runtime show up in the preview,
 * the flow chain and the screens list without any of them knowing about it.
 */
const ScreenLookup = createContext<(id: string) => ScreenDef | undefined>(getScreen);

// ── Icon helpers ─────────────────────────────────────────────────────────────

function Icon({ d, size = 18, fill = "#f1f3f4", viewBox = 18 }: { d: string; size?: number; fill?: string; viewBox?: number }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${viewBox} ${viewBox}`} fill="none" className="shrink-0">
      <path d={d} fill={fill} />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="7" cy="7" r="4.75" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" />
      <path d="M10.6 10.6L14 14" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Chevron({ dir = "right", color = "rgba(255,255,255,0.4)", size = 12 }: { dir?: "right" | "down"; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path
        d={dir === "right" ? "M4.5 2.5L8 6l-3.5 3.5" : "M2.5 4.5L6 8l3.5-3.5"}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowGlyph({ color = "#bdc1c6" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <rect x="1.75" y="1.75" width="5" height="4" rx="1.2" stroke={color} strokeWidth="1.3" />
      <rect x="9.25" y="10.25" width="5" height="4" rx="1.2" stroke={color} strokeWidth="1.3" />
      <path d="M4.25 5.75v4.5a1.5 1.5 0 0 0 1.5 1.5h3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** A fork — one input splitting into two outputs — for branch points. */
function BranchGlyph({ color = "#f1f3f4", size = 11 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className="shrink-0">
      <path d="M3 1.5v3.2c0 1 .8 1.8 1.8 1.8H9" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6.5v4M9 4.7l1.4 1.8L9 8.3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="3" cy="1.9" r="1.15" fill={color} />
    </svg>
  );
}

// ── Screen rendering ─────────────────────────────────────────────────────────

const BASE_W = 390;
const BASE_H = 844;

/** Renders a screen at its natural size, scaled down to fit a fixed box. */
function ScreenThumb({ id, width, height }: { id: string; width: number; height: number }) {
  const def = useContext(ScreenLookup)(id);
  const scale = width / BASE_W;
  return (
    <div className="overflow-hidden bg-white relative" style={{ width, height }}>
      <div
        style={{ width: BASE_W, height: BASE_H, transform: `scale(${scale})`, transformOrigin: "0 0" }}
        className="pointer-events-none select-none"
      >
        {def?.render()}
      </div>
    </div>
  );
}

type Viewport = "phone" | "tablet" | "desktop";

const VIEWPORTS: Record<Viewport, { w: number; h: number; label: string; radius: number }> = {
  phone: { w: 390, h: 844, label: "Phone · 390 × 844", radius: 40 },
  tablet: { w: 834, h: 1112, label: "Tablet · 834 × 1112", radius: 32 },
  desktop: { w: 1440, h: 900, label: "Desktop · 1440 × 900", radius: 20 },
};

/** Preview stage: fits the chosen viewport into the available space. */
function PreviewStage({
  screenId,
  viewport,
  editing,
  onPickHotspot,
  onPreviewTap,
}: {
  screenId: string;
  viewport: Viewport;
  editing: boolean;
  onPickHotspot: (pick: { label: string; rect: DOMRect }) => void;
  /**
   * Preview-mode tap. `advance` marks the taps that carry the flow forward (the
   * screen's primary CTA, or empty space); anything else is a hotspot that needs
   * a destination, which the editor either routes or hands to the agent.
   */
  onPreviewTap: (tap: { label: string | null; advance: boolean }) => void;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const vp = VIEWPORTS[viewport];

  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      setScale(Math.min((width - 24) / vp.w, (height - 24) / vp.h, 1));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [vp.w, vp.h]);

  const def = useContext(ScreenLookup)(screenId);

  return (
    <div ref={boxRef} className="flex-1 min-w-0 min-h-0 flex items-center justify-center relative">
      <div
        className="transition-transform duration-200 ease-out"
        style={{ width: vp.w * scale, height: vp.h * scale }}
      >
        {/* Device bezel */}
        <div
          className="bg-[#9ca3af] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.55)] overflow-hidden"
          style={{
            width: vp.w,
            height: vp.h,
            borderRadius: vp.radius,
            padding: viewport === "phone" ? 10 : 8,
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
          }}
        >
          <div
            className={`w-full h-full overflow-hidden bg-white ${editing ? "cursor-crosshair" : "cursor-pointer preview-live"}`}
            style={{ borderRadius: vp.radius - 8 }}
            onClickCapture={(e) => {
              const el = (e.target as HTMLElement).closest("[data-hotspot]") as HTMLElement | null;
              e.preventDefault();
              e.stopPropagation();
              if (editing) {
                if (!el) return;
                onPickHotspot({
                  label: el.dataset.hotspot || "Element",
                  rect: el.getBoundingClientRect(),
                });
              } else {
                onPreviewTap({
                  label: el?.dataset.hotspot ?? null,
                  // Empty space and the primary CTA both just step the flow.
                  advance: !el || el.dataset.advance === "true",
                });
              }
            }}
          >
            {def?.render()}
          </div>
        </div>
      </div>

      {/* Viewport caption */}
      <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2">
        <span className="text-[11px] text-[rgba(255,255,255,0.35)]">{vp.label}</span>
      </div>
    </div>
  );
}

// ── Left panel: flows list ───────────────────────────────────────────────────

function FlowsList({
  selectedFlowId,
  onSelectFlow,
  collapsed,
  onToggleCollapse,
}: {
  selectedFlowId: string | null;
  onSelectFlow: (id: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ROOT_FLOW_IDS.map((id) => FLOWS[id]).filter((f) => !q || f.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="flex flex-col min-h-0 w-[172px] shrink-0">
      {/* Header */}
      <div className="border-b-[0.8px] border-[rgba(218,220,224,0.15)] flex items-center gap-[8px] px-[12px] h-[48px] shrink-0">
        <FlowGlyph color="#bdc1c6" />
        <span className="text-[13px] font-semibold text-[#f1f3f4] flex-1">Flows</span>
        <button
          onClick={onToggleCollapse}
          title={collapsed ? "Expand panel" : "Collapse panel"}
          className="flex items-center justify-center size-[20px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
        >
          <Icon d={collapsed ? icons.plus : icons.minus} size={14} viewBox={collapsed ? 18 : 16} fill="#bdc1c6" />
        </button>
      </div>

      {/* Search */}
      <div className="px-[10px] pt-[10px] pb-[8px] shrink-0">
        <div className="flex items-center gap-[7px] h-[30px] px-[9px] rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(218,220,224,0.12)] focus-within:border-[rgba(113,104,246,0.6)] transition-colors">
          <SearchIcon />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search flows"
            className="flex-1 min-w-0 bg-transparent border-none outline-none text-[12px] text-[#f1f3f4] placeholder-[rgba(255,255,255,0.35)]"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-[rgba(255,255,255,0.4)] hover:text-[#f1f3f4] text-[13px] leading-none">
              ×
            </button>
          )}
        </div>
      </div>

      {/* Flow list — name + screen count only. Selected is the one filled card. */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[8px] pb-[10px] flex flex-col gap-[1px]">
        {results.map((flow) => {
          const selected = flow.id === selectedFlowId;
          return (
            <button
              key={flow.id}
              onClick={() => onSelectFlow(flow.id)}
              className={`w-full text-left rounded-[8px] px-[10px] py-[8px] transition-colors ${
                selected
                  ? "bg-[rgba(255,255,255,0.12)]"
                  : "hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              <div className="flex items-center gap-[8px]">
                <FlowGlyph color={selected ? "#f1f3f4" : "#bdc1c6"} />
                <span className={`text-[13px] truncate flex-1 ${selected ? "font-semibold text-white" : "font-medium text-[#e3e5e8]"}`}>
                  {flow.name}
                </span>
                <span
                  title={`${countScreens(flow.id)} screens`}
                  className={`text-[11px] shrink-0 tabular-nums ${selected ? "text-[rgba(255,255,255,0.6)]" : "text-[rgba(255,255,255,0.35)]"}`}
                >
                  {countScreens(flow.id)}
                </span>
              </div>
            </button>
          );
        })}

        {results.length === 0 && (
          <div className="flex flex-col items-center gap-[4px] py-[28px] px-[8px] text-center">
            <span className="text-[12px] text-[rgba(255,255,255,0.5)]">No flows found</span>
            <span className="text-[10.5px] text-[rgba(255,255,255,0.3)]">Try a different search.</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Screens column (slides open from the flows list; drill-down + breadcrumb) ─

function ScreensColumn({
  trail,
  onTrailJump,
  onEnterFlow,
  activeScreenId,
  onSelectScreen,
  onClose,
  branchSel,
  setBranchSel,
  chainFor,
  allScreenIds,
  onAddExisting,
  onImagine,
}: {
  trail: string[];
  onTrailJump: (index: number) => void;
  onEnterFlow: (id: string) => void;
  activeScreenId: string;
  onSelectScreen: (id: string) => void;
  onClose: () => void;
  // Branch selection is owned by the parent so the click-through planner and this
  // panel step through exactly the same chain.
  branchSel: Record<string, string>;
  setBranchSel: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  /** The parent's chain builder — the one source of truth for step order. */
  chainFor: (flowId: string) => ChainItem[];
  /** Every screen id, for the "Add existing screen" picker. */
  allScreenIds: string[];
  /** Add an existing screen to the open flow and jump the preview to it. */
  onAddExisting: (id: string) => void;
  /** Open the "imagine / create with AI" modal for a new screen. */
  onImagine: () => void;
}) {
  const lookup = useContext(ScreenLookup);
  const currentId = trail[trail.length - 1];
  const flow = FLOWS[currentId];

  // Footer "Add Screen" menu: closed, the existing/AI chooser, or the full-panel
  // picker ("pick"). The picker replaces the chain content in this same panel.
  const [addMenu, setAddMenu] = useState<null | "choose" | "pick">(null);
  const [pickQuery, setPickQuery] = useState("");
  useEffect(() => { setAddMenu(null); }, [currentId]);
  useEffect(() => { if (addMenu !== "pick") setPickQuery(""); }, [addMenu]);

  // Which branch badge's dropdown is open (anchored to the badge element so the
  // floating menu is positioned from the badge's live, settled rect).
  const [openBranch, setOpenBranch] = useState<{ key: string; el: HTMLElement } | null>(null);

  // A different flow is now in focus — forget which badge was open.
  useEffect(() => { setOpenBranch(null); }, [currentId]);

  // Close the dropdown on Escape.
  useEffect(() => {
    if (!openBranch) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); setOpenBranch(null); } };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [openBranch]);

  // Keep the active step in view as the preview clicks through the flow.
  const activeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeScreenId]);

  if (!flow) return null;

  // Built by the parent, so this panel and the preview click-through always walk
  // the identical chain — including screens the agent added to this flow.
  const items = chainFor(currentId);

  // Screens not already on this flow's chain — the "Add existing screen" options.
  const inChain = new Set(items.filter((it) => it.kind === "screen").map((it) => (it as { screenId: string }).screenId));
  const pickable = allScreenIds.filter((id) => !inChain.has(id));
  const pickResults = pickable.filter((id) => {
    const q = pickQuery.trim().toLowerCase();
    return !q || (lookup(id)?.name.toLowerCase().includes(q) ?? false);
  });

  function chooseBranch(key: string, branch: FlowBranch) {
    setBranchSel((prev) => ({ ...prev, [key]: branch.id }));
    setOpenBranch(null);
    const first = firstScreenOfNodes(branch.nodes);
    if (first) onSelectScreen(first);
  }

  // Position the floating dropdown next to its badge, clamped to the viewport.
  function dropdownStyle(el: HTMLElement, branchCount: number): React.CSSProperties {
    const rect = el.getBoundingClientRect();
    const W = 168;
    const H = 34 + branchCount * 34;
    let left = rect.right + 8;
    if (left + W > window.innerWidth - 8) left = rect.left - W - 8;
    let top = rect.top - 6;
    if (top + H > window.innerHeight - 8) top = window.innerHeight - 8 - H;
    if (top < 8) top = 8;
    return { position: "fixed", left, top, width: W, zIndex: 60 };
  }

  let step = 0;

  return (
    <div className="flex flex-col w-[216px] h-full min-h-0 border-l-[0.8px] border-[rgba(218,220,224,0.15)] shrink-0">
      {addMenu === "pick" ? (
        /* ── Add existing screen: a full picker inside this same panel ── */
        <>
          <div className="border-b-[0.8px] border-[rgba(218,220,224,0.15)] flex items-center gap-[6px] px-[10px] h-[48px] shrink-0">
            <button
              onClick={() => setAddMenu(null)}
              title="Back to flow"
              className="flex items-center justify-center size-[24px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 4L6.5 10l6 6" stroke="#f1f3f4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="text-[13px] font-semibold text-[#f1f3f4] flex-1">Add screen</span>
          </div>

          {/* Search */}
          <div className="px-[10px] pt-[10px] pb-[8px] shrink-0">
            <div className="flex items-center gap-[7px] h-[30px] px-[9px] rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(218,220,224,0.12)] focus-within:border-[rgba(113,104,246,0.6)] transition-colors">
              <SearchIcon />
              <input
                autoFocus
                value={pickQuery}
                onChange={(e) => setPickQuery(e.target.value)}
                placeholder="Search screens"
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-[12px] text-[#f1f3f4] placeholder-[rgba(255,255,255,0.35)]"
              />
              {pickQuery && (
                <button onClick={() => setPickQuery("")} className="text-[rgba(255,255,255,0.4)] hover:text-[#f1f3f4] text-[13px] leading-none">×</button>
              )}
            </div>
          </div>

          {/* Screen cards */}
          <div className="flex-1 min-h-0 overflow-y-auto px-[10px] pb-[12px] flex flex-col gap-[10px]">
            {pickResults.length === 0 ? (
              <div className="flex flex-col items-center gap-[4px] py-[28px] px-[8px] text-center">
                <span className="text-[12px] text-[rgba(255,255,255,0.5)]">No screens found</span>
                <span className="text-[10.5px] text-[rgba(255,255,255,0.3)]">
                  {pickable.length === 0 ? "Every screen is already in this flow." : "Try a different search."}
                </span>
              </div>
            ) : (
              pickResults.map((id) => {
                const def = lookup(id);
                return (
                  <button
                    key={id}
                    onClick={() => { onAddExisting(id); setAddMenu(null); }}
                    className="w-full rounded-[12px] border border-[rgba(218,220,224,0.18)] hover:border-[rgba(218,220,224,0.5)] bg-[rgba(255,255,255,0.02)] overflow-hidden transition-colors"
                  >
                    <div className="w-full bg-white overflow-hidden" style={{ height: 158 }}>
                      <ScreenThumb id={id} width={194} height={158} />
                    </div>
                    <div className="flex items-center gap-[5px] px-[10px] py-[8px]">
                      <span className="flex-1 text-left text-[12px] text-[#f1f3f4] truncate">{def?.name}</span>
                      {def?.generated && <Icon d={icons.sparkle} size={11} viewBox={16} fill="#a89ff8" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </>
      ) : (
      <>
      {/* Breadcrumb */}
      <div className="border-b-[0.8px] border-[rgba(218,220,224,0.15)] flex items-center gap-[4px] px-[10px] h-[48px] shrink-0">
        <div className="flex items-center gap-[2px] flex-1 min-w-0 overflow-hidden">
          {trail.map((id, i) => {
            const last = i === trail.length - 1;
            return (
              <div key={id} className="flex items-center gap-[2px] min-w-0">
                {i > 0 && <Chevron size={10} />}
                <button
                  onClick={() => !last && onTrailJump(i)}
                  disabled={last}
                  title={FLOWS[id]?.name}
                  className={`text-[11.5px] truncate max-w-[92px] transition-colors ${
                    last
                      ? "text-[#f1f3f4] font-semibold cursor-default"
                      : "text-[rgba(255,255,255,0.45)] hover:text-[#f1f3f4]"
                  }`}
                >
                  {FLOWS[id]?.name}
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={onClose}
          title="Close flow"
          className="flex items-center justify-center size-[20px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0 text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4] text-[14px] leading-none"
        >
          ×
        </button>
      </div>

      {/* Chain */}
      <div
        className="flex-1 min-h-0 overflow-y-auto py-[12px] px-[10px] flex flex-col items-center"
        onScroll={() => openBranch && setOpenBranch(null)}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          if (item.kind === "screen") {
            step += 1;
            const def = lookup(item.screenId);
            const selected = item.screenId === activeScreenId;
            const branches = item.branches;
            const chosenId = branches ? (branchSel[item.key] ?? idealBranch(branches).id) : undefined;
            const onAltPath = branches ? chosenId !== idealBranch(branches).id : false;
            const badgeOpen = openBranch?.key === item.key;

            return (
              <div key={item.key} ref={selected ? activeRef : undefined} className="flex flex-col items-center w-full">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectScreen(item.screenId)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelectScreen(item.screenId); } }}
                  className={`relative w-full rounded-[10px] border p-[0.6px] transition-colors cursor-pointer ${
                    selected
                      ? "border-transparent bg-[rgba(255,255,255,0.14)]"
                      : "border-[rgba(218,220,224,0.18)] hover:border-[rgba(218,220,224,0.4)]"
                  }`}
                >
                  <div className="w-full rounded-t-[8px] overflow-hidden bg-white" style={{ height: 128 }}>
                    <ScreenThumb id={item.screenId} width={194} height={128} />
                  </div>
                  <div className="px-[8px] py-[5px] flex items-center gap-[5px]">
                    <span className="text-[10px] text-[rgba(255,255,255,0.35)] shrink-0">{step}</span>
                    <span className={`text-[10.5px] truncate ${selected ? "text-white font-medium" : "text-[#bdc1c6]"}`}>
                      {def?.name}
                    </span>
                  </div>

                  {/* Branch badge — number of outcomes this screen can lead to */}
                  {branches && branches.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenBranch(
                          badgeOpen ? null : { key: item.key, el: e.currentTarget as HTMLElement },
                        );
                      }}
                      title={`${branches.length} outcomes — click to switch`}
                      className={`absolute -bottom-[9px] right-[8px] z-10 flex items-center gap-[3px] h-[20px] pl-[5px] pr-[6px] rounded-full transition-colors ${
                        badgeOpen || onAltPath
                          ? "bg-[rgba(113,104,246,0.9)] border border-[rgba(255,255,255,0.25)]"
                          : "bg-[#202124] border border-[rgba(218,220,224,0.35)] hover:border-[rgba(218,220,224,0.7)]"
                      }`}
                    >
                      <BranchGlyph color="#f1f3f4" size={11} />
                      <span className="text-[10px] font-semibold text-[#f1f3f4] leading-none">{branches.length}</span>
                    </button>
                  )}
                </div>
                {!isLast && <div className="w-px h-[16px] bg-[rgba(218,220,224,0.3)]" />}
              </div>
            );
          }

          // Nested sub-flow — drill in, keeping the breadcrumb trail.
          const sub = FLOWS[item.flowId];
          return (
            <div key={item.key} className="flex flex-col items-center w-full">
              <button
                onClick={() => onEnterFlow(item.flowId)}
                className="w-full rounded-[10px] border border-dashed border-[rgba(113,104,246,0.5)] bg-[rgba(113,104,246,0.1)] hover:bg-[rgba(113,104,246,0.18)] px-[9px] py-[8px] transition-colors text-left"
              >
                <div className="flex items-center gap-[6px]">
                  <FlowGlyph color="#a89ff8" />
                  <span className="text-[11px] font-medium text-[#f1f3f4] truncate flex-1">{sub?.name}</span>
                  <Chevron color="#a89ff8" size={10} />
                </div>
                <span className="text-[9.5px] text-[rgba(255,255,255,0.4)] mt-[2px] block">
                  Sub-flow · {countScreens(item.flowId)} screens
                </span>
              </button>
              {!isLast && <div className="w-px h-[16px] bg-[rgba(218,220,224,0.3)]" />}
            </div>
          );
        })}
      </div>

      {/* Footer actions — add a screen to this flow, or imagine a new one */}
      <div className="border-t-[0.8px] border-[rgba(218,220,224,0.15)] p-[8px] shrink-0 relative">
        {/* "Add Screen" chooser: existing screen vs. create with AI */}
        {addMenu === "choose" && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setAddMenu(null)} />
            <div className="absolute bottom-[calc(100%+6px)] left-[8px] right-[8px] z-50 bg-[#2b2d30] border border-[rgba(255,255,255,0.1)] rounded-[12px] shadow-[0px_12px_32px_rgba(0,0,0,0.6)] p-[6px] flex flex-col gap-[2px] animate-in fade-in slide-in-from-bottom-1 duration-150">
              <button
                onClick={() => setAddMenu("pick")}
                className="w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-[8px] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <Icon d={icons.monitor} size={18} viewBox={20} fill="#f1f3f4" />
                <span className="flex-1 text-left text-[13px] font-medium text-[#f1f3f4]">Add existing screen</span>
                <Chevron dir="right" size={11} color="rgba(255,255,255,0.35)" />
              </button>
              <button
                onClick={() => { setAddMenu(null); onImagine(); }}
                className="w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-[8px] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <Icon d={icons.sparkle} size={16} viewBox={16} fill="#a89ff8" />
                <span className="flex-1 text-left text-[13px] font-medium text-[#f1f3f4]">Create with AI</span>
              </button>
            </div>
          </>
        )}

        <div className="flex flex-col gap-[6px]">
          <button
            onClick={() => setAddMenu((m) => (m ? null : "choose"))}
            aria-expanded={addMenu !== null}
            className={`backdrop-blur-[2px] border flex gap-[8px] items-center justify-center px-[11.8px] py-[7.8px] rounded-[8px] w-full transition-colors ${
              addMenu !== null
                ? "bg-[rgba(255,255,255,0.22)] border-[rgba(255,255,255,0.28)]"
                : "bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.22)]"
            }`}
          >
            <Icon d={icons.plus} size={18} fill="#f1f3f4" />
            <span className="text-[#f1f3f4] text-[12px] font-medium leading-[16px]">Add Screen</span>
          </button>
          <button
            onClick={onImagine}
            className="border border-[rgba(218,220,224,0.5)] border-dashed flex gap-[8px] items-center justify-center px-[11.8px] py-[7.8px] rounded-[8px] w-full hover:bg-[rgba(255,255,255,0.06)] transition-colors"
          >
            <Icon d={icons.sparkle} size={16} fill="#bdc1c6" viewBox={16} />
            <span className="text-[#bdc1c6] text-[12px] font-medium leading-[16px]">Imagine a new screen</span>
          </button>
        </div>
      </div>

      {/* Floating outcome dropdown (fixed so it escapes the panel's clipping) */}
      {openBranch && (() => {
        const node = flattenFind(flow.nodes, openBranch.key, branchSel);
        if (!node?.branches) return null;
        const chosenId = branchSel[openBranch.key] ?? idealBranch(node.branches).id;
        const idealId = idealBranch(node.branches).id;
        // Portal to <body>: the panel's backdrop-blur would otherwise make it
        // the containing block for this fixed element and offset it.
        return createPortal(
          <>
            <div className="fixed inset-0 z-[55]" onClick={() => setOpenBranch(null)} />
            <div
              style={dropdownStyle(openBranch.el, node.branches.length)}
              className="bg-[#232527] border border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-[0px_8px_32px_rgba(0,0,0,0.6)] overflow-hidden py-[4px]"
            >
              <div className="flex items-center gap-[5px] px-[10px] pt-[5px] pb-[4px]">
                <BranchGlyph color="rgba(255,255,255,0.5)" size={10} />
                <span className="text-[rgba(255,255,255,0.45)] text-[10px] font-medium tracking-wide uppercase">Outcomes</span>
              </div>
              {node.branches.map((b) => {
                const isChosen = b.id === chosenId;
                const isIdeal = b.id === idealId;
                return (
                  <button
                    key={b.id}
                    onClick={() => chooseBranch(openBranch.key, b)}
                    className={`w-full flex items-center gap-[8px] px-[10px] py-[7px] transition-colors ${
                      isChosen ? "bg-[rgba(113,104,246,0.16)]" : "hover:bg-[rgba(255,255,255,0.06)]"
                    }`}
                  >
                    <span
                      className="size-[7px] rounded-full shrink-0"
                      style={{ background: isChosen ? "#a89ff8" : "rgba(255,255,255,0.25)" }}
                    />
                    <span className={`flex-1 text-left text-[12px] truncate ${isChosen ? "text-white" : "text-[#f1f3f4]"}`}>
                      {b.label}
                    </span>
                    {isIdeal && (
                      <span title="Connected / recommended path" className="flex items-center shrink-0">
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7l3.5 3.5L12 3.5" stroke="#a89ff8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </>,
          document.body,
        );
      })()}
      </>
      )}
    </div>
  );
}

// Re-walk a flow's nodes following the current branch selection to find the
// branching screen node that owns a given chain key (needed to render its
// outcome dropdown outside the chain map).
function flattenFind(
  nodes: FlowNode[],
  targetKey: string,
  branchSel: Record<string, string>,
  prefix = "",
): Extract<FlowNode, { kind: "screen" }> | undefined {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const key = `${prefix}n${i}`;
    if (node.kind === "flow") continue;
    if (key === targetKey && node.branches?.length) return node;
    if (node.branches?.length) {
      const chosenId = branchSel[key] ?? idealBranch(node.branches).id;
      const branch = node.branches.find((b) => b.id === chosenId) ?? idealBranch(node.branches);
      const found = flattenFind(branch.nodes, targetKey, branchSel, `${key}.${branch.id}.`);
      if (found) return found;
    }
  }
  return undefined;
}

// ── Right rail ───────────────────────────────────────────────────────────────

function RightRail({
  viewport,
  onCycleViewport,
  onRestart,
  agentSlot,
}: {
  viewport: Viewport;
  onCycleViewport: () => void;
  onRestart: () => void;
  /** The agent log bubble, anchored to the left of the "More" pill. */
  agentSlot?: ReactNode;
}) {
  const [hotspots, setHotspots] = useState(true);

  return (
    <div className="absolute right-[16px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-[10px]">
      {/* "More" pill + agent log */}
      <div className="relative">
        <button className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center rounded-full size-[38px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-[rgba(56,59,61,0.7)] transition-colors" title="More options">
          <svg width="28" height="11" viewBox="0 0 28 11" fill="none">
            {morePillPaths.map((d, i) => (
              <path key={i} d={d} fill={i === 0 ? "rgba(255,255,255,0.12)" : "#f1f3f4"} />
            ))}
          </svg>
        </button>
        {agentSlot && <div className="absolute right-[calc(100%+14px)] top-0">{agentSlot}</div>}
      </div>

      {/* Tool rail */}
      <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex flex-col gap-[8px] items-center p-[5.8px] rounded-[200px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <button
          onClick={onCycleViewport}
          title={`Viewport: ${VIEWPORTS[viewport].label}`}
          className="flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <Icon d={icons.monitor} size={20} viewBox={20} fill="#f1f3f4" />
        </button>

        <button
          onClick={onRestart}
          title="Restart prototype"
          className="flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <Icon d={icons.refresh} size={20} viewBox={20} fill="#f1f3f4" />
        </button>

        <div className="w-[24px] border-t-[0.8px] border-[rgba(218,220,224,0.15)]" />

        <button
          onClick={() => setHotspots((h) => !h)}
          title={hotspots ? "Hide hotspot hints" : "Show hotspot hints"}
          className={`flex items-center justify-center size-[32px] rounded-full transition-colors ${
            hotspots ? "bg-[#f1f3f4]" : "hover:bg-[rgba(255,255,255,0.1)]"
          }`}
        >
          <Icon d={icons.target} size={20} viewBox={20} fill={hotspots ? "#202124" : "#f1f3f4"} />
        </button>

        <div className="w-[24px] border-t-[0.8px] border-[rgba(218,220,224,0.15)]" />

        <button title="Share a QR link" className="flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors">
          <Icon d={icons.qr} size={20} viewBox={20} fill="#f1f3f4" />
        </button>

        <button title="Open in a new tab" className="flex items-center justify-center size-[32px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors">
          <Icon d={icons.externalLink} size={20} viewBox={20} fill="#f1f3f4" />
        </button>
      </div>
    </div>
  );
}

// ── Edit-mode selection: outline + context menu ──────────────────────────────

type Selection = { label: string; rect: DOMRect };

/**
 * The menu that animates in beside a selected component in edit mode.
 * Portaled to <body> so it is never clipped by the device bezel.
 */
function EditMenu({
  selection,
  connected,
  onConnect,
  onEdit,
  onSuggestFlows,
  onClose,
}: {
  selection: Selection;
  connected: boolean;
  onConnect: () => void;
  onEdit: () => void;
  onSuggestFlows: () => void;
  onClose: () => void;
}) {
  const { rect, label } = selection;

  // Sit to the right of the element, flipping left when there is no room.
  const W = 196;
  const H = 132;
  let left = rect.right + 12;
  if (left + W > window.innerWidth - 12) left = Math.max(12, rect.left - W - 12);
  let top = rect.top - 8;
  if (top + H > window.innerHeight - 12) top = window.innerHeight - 12 - H;
  if (top < 12) top = 12;

  const items = [
    { icon: menuIcons.connectToScreen, label: connected ? "Connected — change" : "Connect to screen", onClick: onConnect },
    { icon: menuIcons.editPencil, label: "Edit", onClick: onEdit },
    { icon: menuIcons.suggestFlows, label: "Suggest flows", onClick: onSuggestFlows },
  ];

  return createPortal(
    <>
      <div className="fixed inset-0 z-[70]" onClick={onClose} />

      {/* Selection outline + label chip */}
      <div
        className="fixed z-[71] pointer-events-none rounded-[4px] animate-in fade-in duration-150"
        style={{
          left: rect.left - 2,
          top: rect.top - 2,
          width: rect.width + 4,
          height: rect.height + 4,
          outline: "2px solid #7168f6",
          outlineOffset: 0,
          background: "rgba(113,104,246,0.08)",
        }}
      >
        <span
          className="absolute -top-[16px] left-0 px-[5px] h-[15px] rounded-[3px] bg-[#7168f6] text-white text-[9px] font-semibold leading-[15px] whitespace-nowrap"
        >
          {connected ? "Connected" : "Selected"}
        </span>
      </div>

      {/* Menu */}
      <div
        role="menu"
        aria-label={`Actions for ${label}`}
        style={{ position: "fixed", left, top, width: W, zIndex: 72 }}
        className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.92)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25),0px_18px_40px_-12px_rgba(0,0,0,0.7)] p-[5.8px] flex flex-col gap-[4px] animate-in fade-in zoom-in-95 slide-in-from-left-1 duration-150 ease-out"
      >
        {items.map((item) => (
          <button
            key={item.label}
            role="menuitem"
            onClick={item.onClick}
            className="flex gap-[8px] items-center px-[12px] py-[8px] rounded-[6px] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-left w-full"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
              <path d={item.icon} fill="#f1f3f4" />
            </svg>
            <span className="text-[#f1f3f4] text-[13px] leading-[19.5px] truncate">{item.label}</span>
          </button>
        ))}
      </div>
    </>,
    document.body,
  );
}

/** Compact "describe your change" popover for the menu's Edit action. */
function EditInstruction({ selection, onClose }: { selection: Selection; onClose: () => void }) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);

  const W = 260;
  let left = selection.rect.right + 12;
  if (left + W > window.innerWidth - 12) left = Math.max(12, selection.rect.left - W - 12);
  const top = Math.min(Math.max(12, selection.rect.top - 8), window.innerHeight - 100);

  return createPortal(
    <>
      <div className="fixed inset-0 z-[70]" onClick={onClose} />
      <div
        style={{ position: "fixed", left, top, width: W, zIndex: 72 }}
        className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.92)] border border-[rgba(218,220,224,0.15)] rounded-[12px] shadow-[0px_18px_40px_-12px_rgba(0,0,0,0.7)] p-[10px] animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center gap-[6px] mb-[7px]">
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="shrink-0">
            <path d={menuIcons.editPencil} fill="#bdc1c6" />
          </svg>
          <span className="text-[11px] text-[rgba(255,255,255,0.5)] truncate">Editing “{selection.label}”</span>
        </div>
        <input
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") onClose(); if (e.key === "Escape") onClose(); }}
          placeholder="Describe your change…"
          className="w-full h-[32px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(218,220,224,0.15)] focus:border-[rgba(113,104,246,0.7)] outline-none text-[12.5px] text-[#f1f3f4] placeholder-[rgba(255,255,255,0.35)] transition-colors"
        />
      </div>
    </>,
    document.body,
  );
}

// ── Main component ───────────────────────────────────────────────────────────

interface Props {
  projectName: string;
  /** Leave the prototype editor and return to the canvas ("Edit"). */
  onExit: () => void;
}

export default function PrototypeEditor({ projectName, onExit }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [viewport, setViewport] = useState<Viewport>("phone");

  // Preview runs the prototype; edit lets you select components on the screen.
  const [mode, setMode] = useState<"preview" | "edit">("preview");
  const [selection, setSelection] = useState<Selection | null>(null);
  const [editingInstruction, setEditingInstruction] = useState(false);
  const [connectedHotspots, setConnectedHotspots] = useState<Set<string>>(new Set());
  const [modal, setModal] = useState<{ tab: SuggestTab; hotspot: string } | null>(null);

  // Breadcrumb trail of flow ids; empty means no flow is open. We open on the
  // first flow selected by default — a prototype always has a current flow, so
  // "nothing selected" is never a real state.
  const [trail, setTrail] = useState<string[]>(() =>
    ROOT_FLOW_IDS.length ? [ROOT_FLOW_IDS[0]] : [],
  );
  const [activeScreenId, setActiveScreenId] = useState<string>(
    () => (ROOT_FLOW_IDS[0] ? firstScreenOf(ROOT_FLOW_IDS[0]) : undefined) ?? "home",
  );

  // Chosen outcome per branching screen (keyed by structural chain key). Owned
  // here so the flow panel and the preview click-through walk the same chain.
  const [branchSel, setBranchSel] = useState<Record<string, string>>({});

  // ── Agent-built screens & hotspot wiring ───────────────────────────────────
  // Screens the agent created this session, the hotspot → screen routing table
  // that makes them reachable, and the extra steps each flow picked up.
  const [generated, setGenerated] = useState<Record<string, ScreenDef>>({});
  const [routes, setRoutes] = useState<Record<string, string>>(DEFAULT_HOTSPOT_ROUTES);
  const [flowExtras, setFlowExtras] = useState<Record<string, string[]>>({});
  const [agent, setAgent] = useState<AgentState>({ kind: "idle" });
  const buildTimer = useRef<number | null>(null);

  useEffect(() => () => { if (buildTimer.current) window.clearTimeout(buildTimer.current); }, []);

  const lookupScreen = useCallback(
    (id: string) => generated[id] ?? getScreen(id),
    [generated],
  );

  const allScreenIds = useMemo(
    () => [...Object.keys(SCREENS), ...Object.keys(generated)],
    [generated],
  );

  // The chain for a flow: its authored nodes plus anything the agent appended.
  const chainFor = useCallback(
    (flowId: string): ChainItem[] => {
      const flow = FLOWS[flowId];
      if (!flow) return [];
      const extras = (flowExtras[flowId] ?? []).map((sid) => ({
        kind: "screen" as const,
        key: `extra.${sid}`,
        screenId: sid,
      }));
      return [...buildChain(flow.nodes, branchSel), ...extras];
    },
    [branchSel, flowExtras],
  );

  // Esc clears a selection first, and only then leaves the prototype editor.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (modal || editingInstruction || selection) return;
      onExit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit, modal, editingInstruction, selection]);

  // A selection is anchored to on-screen coordinates, so drop it whenever the
  // thing underneath it moves or changes.
  useEffect(() => {
    setSelection(null);
    setEditingInstruction(false);
  }, [activeScreenId, viewport, mode, collapsed, trail]);

  useEffect(() => {
    if (!selection) return;
    const drop = () => { setSelection(null); setEditingInstruction(false); };
    window.addEventListener("resize", drop);
    return () => window.removeEventListener("resize", drop);
  }, [selection]);

  function selectFlow(id: string) {
    // Re-clicking the open flow closes it.
    if (trail.length === 1 && trail[0] === id) {
      setTrail([]);
      return;
    }
    setTrail([id]);
    const first = firstScreenOf(id);
    if (first) setActiveScreenId(first);
  }

  function enterFlow(id: string) {
    setTrail((t) => [...t, id]);
    const first = firstScreenOf(id);
    if (first) setActiveScreenId(first);
  }

  // Switching to a different root flow starts its branch choices fresh.
  useEffect(() => { setBranchSel({}); }, [trail[0]]);

  // ── Preview click-through ──────────────────────────────────────────────────
  // Tapping the running prototype steps it forward through the flow the panel is
  // showing: screen → screen, drilling into a sub-flow when the next item is one,
  // and popping back up to continue the parent when a sub-flow ends. The end of
  // the top-level flow loops back to its start. Every step updates trail +
  // activeScreenId, which the flow panel already renders from — so the left panel
  // highlight and breadcrumb follow along on their own.
  type Step = { trail: string[]; screenId: string };

  function pickRootFlow(screenId: string): string {
    return (
      ROOT_FLOW_IDS.find((id) => firstScreenOf(id) === screenId) ??
      ROOT_FLOW_IDS.find((id) => flowContainsScreen(id, screenId)) ??
      ROOT_FLOW_IDS[0]
    );
  }

  function continuePastSubflow(workTrail: string[]): Step | null {
    const subId = workTrail[workTrail.length - 1];
    const parentTrail = workTrail.slice(0, -1);
    const parent = FLOWS[parentTrail[parentTrail.length - 1]];
    if (!parent) return null;

    const items = chainFor(parent.id);
    const idx = items.findIndex((it) => it.kind === "subflow" && it.flowId === subId);
    const next = idx === -1 ? undefined : items[idx + 1];

    if (next?.kind === "screen") return { trail: parentTrail, screenId: next.screenId };
    if (next?.kind === "subflow") {
      const first = firstScreenOfNodes(FLOWS[next.flowId]?.nodes ?? []);
      return first ? { trail: [...parentTrail, next.flowId], screenId: first } : null;
    }
    // Parent ended too — keep popping, otherwise restart the parent.
    if (parentTrail.length > 1) return continuePastSubflow(parentTrail);
    const first = firstScreenOfNodes(parent.nodes);
    return first ? { trail: parentTrail, screenId: first } : null;
  }

  function stepWithin(workTrail: string[], screenId: string): Step | null {
    const flow = FLOWS[workTrail[workTrail.length - 1]];
    if (!flow) return null;

    const items = chainFor(flow.id);
    const idx = items.findIndex((it) => it.kind === "screen" && it.screenId === screenId);

    // Current screen isn't on this level — land on the flow's first screen
    // (covers opening a fresh flow from an unrelated screen).
    if (idx === -1) {
      const first = firstScreenOfNodes(flow.nodes);
      return first ? { trail: workTrail, screenId: first } : null;
    }

    const next = items[idx + 1];
    if (next?.kind === "screen") return { trail: workTrail, screenId: next.screenId };
    if (next?.kind === "subflow") {
      const first = firstScreenOfNodes(FLOWS[next.flowId]?.nodes ?? []);
      return first ? { trail: [...workTrail, next.flowId], screenId: first } : null;
    }

    // End of this level: continue the parent past the sub-flow, or restart.
    if (workTrail.length > 1) return continuePastSubflow(workTrail);
    const first = firstScreenOfNodes(flow.nodes);
    return first ? { trail: workTrail, screenId: first } : null;
  }

  function advancePreview() {
    const baseTrail = trail.length ? trail : [pickRootFlow(activeScreenId)];
    const next = stepWithin(baseTrail, activeScreenId);
    if (!next) return;
    setTrail(next.trail);
    setActiveScreenId(next.screenId);
  }

  /** Jump straight to a screen, bringing the flow panel along if it lives elsewhere. */
  function goToScreen(id: string) {
    setActiveScreenId(id);
    const current = trail[trail.length - 1];
    const inCurrent =
      current && chainFor(current).some((it) => it.kind === "screen" && it.screenId === id);
    if (inCurrent) return;
    const owner = ROOT_FLOW_IDS.find((f) => flowContainsScreen(f, id));
    if (owner) setTrail([owner]);
  }

  // ── Preview taps ───────────────────────────────────────────────────────────
  // Empty space and primary CTAs step the flow. A hotspot with a destination
  // navigates. A hotspot with nowhere to go is what the agent picks up.
  function handlePreviewTap({ label, advance }: { label: string | null; advance: boolean }) {
    if (advance || !label) {
      setAgent({ kind: "idle" });
      advancePreview();
      return;
    }
    const target = routes[label];
    if (target) {
      setAgent({ kind: "idle" });
      goToScreen(target);
      return;
    }
    setAgent({
      kind: "suggest",
      hotspot: label,
      fromScreen: lookupScreen(activeScreenId)?.name ?? "this screen",
    });
  }

  /** Build the agent's suggestion into a real screen and wire the hotspot to it. */
  function makeScreen(title: string, description: string) {
    if (agent.kind !== "suggest") return;
    const hotspot = agent.hotspot;
    const id = screenIdFor(title, (candidate) => Boolean(lookupScreen(candidate)));
    const def = createGeneratedScreen(id, title, description);
    const flowId = trail[trail.length - 1];

    setAgent({ kind: "building", hotspot, title });

    buildTimer.current = window.setTimeout(() => {
      setGenerated((g) => ({ ...g, [id]: def }));
      setRoutes((r) => ({ ...r, [hotspot]: id }));
      setConnectedHotspots((prev) => new Set(prev).add(hotspot));
      if (flowId) {
        setFlowExtras((x) => ({ ...x, [flowId]: [...(x[flowId] ?? []), id] }));
      }
      setActiveScreenId(id);
      setAgent({ kind: "done", hotspot, title, screenId: id });
    }, 900);
  }

  /** Drop an existing screen onto the open flow and jump the preview to it. */
  function addExistingScreen(id: string) {
    const flowId = trail[trail.length - 1];
    if (flowId) setFlowExtras((x) => ({ ...x, [flowId]: [...(x[flowId] ?? []), id] }));
    setActiveScreenId(id);
  }

  const openImagine = () => setModal({ tab: "screens", hotspot: "this screen" });

  // The screens column slides open whenever a flow is selected.
  const chainOpen = trail.length > 0;

  return (
    <ScreenLookup.Provider value={lookupScreen}>
    <div className="flex flex-col h-screen bg-[#202124] overflow-hidden" style={{ fontFamily: "Inter,sans-serif" }}>

      {/* Preview click-through: highlight tappable hotspots on hover. */}
      <style>{`
        .preview-live [data-hotspot] { transition: outline-color 120ms ease; }
        .preview-live [data-hotspot]:hover {
          outline: 2px solid rgba(151,48,161,0.55);
          outline-offset: 2px;
          border-radius: 8px;
        }
      `}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="relative flex items-center h-[64px] shrink-0 px-[16px] z-20">
        {/* Left: back + project name */}
        <button
          onClick={onExit}
          title="Back to canvas (Esc)"
          className="flex items-center gap-[8px] h-[36px] pl-[10px] pr-[16px] rounded-full backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] hover:bg-[rgba(56,59,61,0.7)] transition-colors max-w-[280px]"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
            <path d="M12.5 4L6.5 10l6 6" stroke="#F1F3F4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#f1f3f4] text-[14px] font-semibold truncate">{projectName}</span>
        </button>

        {/* Center: Preview / Edit */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[32px] p-[4px] gap-[2px]">
            {([
              { id: "preview", label: "Preview", icon: icons.play },
              { id: "edit", label: "Edit", icon: icons.pencil },
            ] as const).map((m) => {
              const on = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  aria-pressed={on}
                  className={`flex items-center gap-[6px] px-[14px] py-[7px] rounded-[32px] transition-colors ${
                    on ? "bg-[rgba(255,255,255,0.12)]" : "hover:bg-[rgba(255,255,255,0.06)]"
                  }`}
                >
                  <Icon d={m.icon} size={18} fill={on ? "#f1f3f4" : "#bdc1c6"} />
                  <span className={`text-[14px] font-medium leading-[20px] ${on ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>
                    {m.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: share + avatar */}
        <div className="absolute right-[16px] flex items-center gap-[7px]">
          <button className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex gap-[6px] h-[32px] items-center justify-center px-[15.8px] rounded-[20px] hover:bg-[rgba(56,59,61,0.7)] transition-colors">
            <Icon d={icons.share} size={16} viewBox={16} fill="#f1f3f4" />
            <span className="text-[#f1f3f4] text-[14px] font-medium">Share</span>
          </button>
          <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.2)] flex items-center justify-center rounded-full size-[34px] overflow-hidden">
            <div className="size-[32px] rounded-full bg-gradient-to-br from-[#7168f6] to-[#a855f7] flex items-center justify-center">
              <span className="text-white text-[13px] font-semibold">M</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0 relative">

        {/* Left panel — flows list, with the screens column sliding open as part
            of the same panel when a flow is selected. */}
        <div className="flex items-start pl-[16px] py-[16px] h-full shrink-0">
          <div
            style={{ width: !collapsed && chainOpen ? 388 : 172 }}
            className={`backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_16px_16px_-8px_rgba(0,0,0,0.5)] flex overflow-hidden shrink-0 transition-[width,height] duration-300 ease-out ${
              collapsed ? "h-[48px]" : "h-full"
            }`}
          >
            <FlowsList
              selectedFlowId={trail[0] ?? null}
              onSelectFlow={selectFlow}
              collapsed={collapsed}
              onToggleCollapse={() => setCollapsed((c) => !c)}
            />

            {chainOpen && !collapsed && (
              <ScreensColumn
                trail={trail}
                onTrailJump={(i) => setTrail((t) => t.slice(0, i + 1))}
                onEnterFlow={enterFlow}
                activeScreenId={activeScreenId}
                onSelectScreen={setActiveScreenId}
                onClose={() => setTrail([])}
                branchSel={branchSel}
                setBranchSel={setBranchSel}
                chainFor={chainFor}
                allScreenIds={allScreenIds}
                onAddExisting={addExistingScreen}
                onImagine={openImagine}
              />
            )}
          </div>
        </div>

        {/* Preview — the right padding keeps the tool rail, and on wider windows
            the agent log beside it, clear of the device. */}
        <div className="flex-1 min-w-0 flex flex-col pt-[8px] pb-[16px] pl-[16px] pr-[72px] min-[1200px]:pr-[190px] min-[1440px]:pr-[380px]">
          {mode === "edit" && (
            <div className="shrink-0 flex justify-center pb-[6px]">
              <span className="text-[11px] text-[rgba(255,255,255,0.4)]">
                Click any component to connect it, edit it, or suggest flows
              </span>
            </div>
          )}
          <PreviewStage
            screenId={activeScreenId}
            viewport={viewport}
            editing={mode === "edit"}
            onPickHotspot={(pick) => { setEditingInstruction(false); setSelection(pick); }}
            onPreviewTap={handlePreviewTap}
          />
        </div>

        {/* Right rail */}
        <RightRail
          viewport={viewport}
          onCycleViewport={() =>
            setViewport((v) => (v === "phone" ? "tablet" : v === "tablet" ? "desktop" : "phone"))
          }
          onRestart={() => {
            const first = trail.length ? firstScreenOf(trail[trail.length - 1]) : "home";
            if (first) setActiveScreenId(first);
            setAgent({ kind: "idle" });
          }}
          agentSlot={
            <AgentBubble
              state={agent}
              onMakeIt={makeScreen}
              onDismiss={() => setAgent({ kind: "idle" })}
              onOpenScreen={goToScreen}
            />
          }
        />

        {/* Help */}
        <button
          title="Help"
          className="absolute bottom-[16px] right-[20px] flex items-center justify-center size-[28px] rounded-full text-[rgba(255,255,255,0.4)] hover:text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-[15px]"
        >
          ?
        </button>
      </div>

      {/* Edit-mode component menu */}
      {selection && !editingInstruction && !modal && (
        <EditMenu
          selection={selection}
          connected={connectedHotspots.has(selection.label) || selection.label in routes}
          onConnect={() => {
            setConnectedHotspots((prev) => new Set(prev).add(selection.label));
            setSelection(null);
          }}
          onEdit={() => setEditingInstruction(true)}
          onSuggestFlows={() => {
            setModal({ tab: "flows", hotspot: selection.label });
            setSelection(null);
          }}
          onClose={() => setSelection(null)}
        />
      )}

      {/* Inline "describe your change" popover */}
      {selection && editingInstruction && (
        <EditInstruction
          selection={selection}
          onClose={() => { setEditingInstruction(false); setSelection(null); }}
        />
      )}

      {/* Suggested flows / Imagine a new screen */}
      <SuggestModal
        open={modal !== null}
        initialTab={modal?.tab ?? "flows"}
        hotspot={modal?.hotspot ?? "this screen"}
        onClose={() => setModal(null)}
        onBuild={(builtTab, suggestion) => {
          setModal(null);
          // Jump the preview to the first screen the new work would touch.
          if (builtTab === "flows") {
            const first = trail.length ? firstScreenOf(trail[trail.length - 1]) : undefined;
            if (first) setActiveScreenId(first);
          }
          void suggestion;
        }}
      />
    </div>
    </ScreenLookup.Provider>
  );
}
