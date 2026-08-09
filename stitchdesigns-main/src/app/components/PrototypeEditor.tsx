import { useState, useMemo, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import icons, { morePillPaths, menuIcons } from "../../imports/PrototypeEditor-svg";
import { SuggestModal, type SuggestTab } from "./prototype/SuggestModal";
import { SCREENS, getScreen } from "./prototype/screens";
import {
  FLOWS, ROOT_FLOW_IDS, ALL_TAGS, countScreens, firstScreenOf, firstScreenOfNodes, idealBranch,
  type FlowTag, type FlowNode, type FlowBranch,
} from "./prototype/flows";

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

function FilterIcon({ active }: { active?: boolean }) {
  const c = active ? "#a89ff8" : "#bdc1c6";
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M2.5 4h11M4.5 8h7M6.5 12h3" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
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
  const def = getScreen(id);
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
}: {
  screenId: string;
  viewport: Viewport;
  editing: boolean;
  onPickHotspot: (pick: { label: string; rect: DOMRect }) => void;
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

  const def = getScreen(screenId);

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
            className={`w-full h-full overflow-hidden bg-white ${editing ? "cursor-crosshair" : ""}`}
            style={{ borderRadius: vp.radius - 8 }}
            onClickCapture={
              editing
                ? (e) => {
                    const el = (e.target as HTMLElement).closest("[data-hotspot]") as HTMLElement | null;
                    e.preventDefault();
                    e.stopPropagation();
                    if (!el) return;
                    onPickHotspot({
                      label: el.dataset.hotspot || "Element",
                      rect: el.getBoundingClientRect(),
                    });
                  }
                : undefined
            }
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

// ── Left panel: flows tab ────────────────────────────────────────────────────

function FlowsTab({
  selectedFlowId,
  onSelectFlow,
}: {
  selectedFlowId: string | null;
  onSelectFlow: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState<FlowTag[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ROOT_FLOW_IDS.map((id) => FLOWS[id]).filter((f) => {
      const matchesQuery = !q || f.name.toLowerCase().includes(q) || f.summary.toLowerCase().includes(q);
      const matchesTags = tags.length === 0 || tags.some((t) => f.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [query, tags]);

  function toggleTag(t: FlowTag) {
    setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }

  return (
    <div className="flex flex-col min-h-0 flex-1">
      {/* Search + filter */}
      <div className="flex items-center gap-[6px] px-[10px] pt-[10px] pb-[8px] shrink-0">
        <div className="flex items-center gap-[7px] flex-1 min-w-0 h-[30px] px-[9px] rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(218,220,224,0.12)] focus-within:border-[rgba(113,104,246,0.6)] transition-colors">
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

        <div className="relative shrink-0">
          <button
            onClick={() => setFilterOpen((o) => !o)}
            title="Filter flows"
            className={`flex items-center justify-center size-[30px] rounded-[8px] border transition-colors ${
              tags.length > 0 || filterOpen
                ? "bg-[rgba(113,104,246,0.18)] border-[rgba(113,104,246,0.45)]"
                : "bg-[rgba(255,255,255,0.06)] border-[rgba(218,220,224,0.12)] hover:bg-[rgba(255,255,255,0.1)]"
            }`}
          >
            <FilterIcon active={tags.length > 0} />
          </button>

          {filterOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setFilterOpen(false)} />
              <div className="absolute top-[calc(100%+6px)] right-0 z-50 min-w-[132px] bg-[#232527] border border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-[0px_8px_32px_rgba(0,0,0,0.6)] overflow-hidden py-[4px]">
                <div className="px-[10px] pt-[6px] pb-[4px]">
                  <span className="text-[rgba(255,255,255,0.4)] text-[10px] font-medium tracking-wide uppercase">Filter by</span>
                </div>
                {ALL_TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className="w-full flex items-center justify-between gap-[8px] px-[10px] py-[6px] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
                  >
                    <span className="text-[#f1f3f4] text-[12px]">{t}</span>
                    {tags.includes(t) && (
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3.5" stroke="#a89ff8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
                {tags.length > 0 && (
                  <button
                    onClick={() => setTags([])}
                    className="w-full text-left px-[10px] py-[6px] mt-[2px] border-t border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
                  >
                    <span className="text-[rgba(255,255,255,0.5)] text-[11px]">Clear filters</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Flow list */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[10px] pb-[10px] flex flex-col gap-[6px]">
        {results.map((flow) => {
          const selected = flow.id === selectedFlowId;
          return (
            <button
              key={flow.id}
              onClick={() => onSelectFlow(flow.id)}
              className={`w-full text-left rounded-[10px] border px-[10px] py-[9px] transition-colors ${
                selected
                  ? "border-[#7168f6] bg-[rgba(113,104,246,0.12)]"
                  : "border-[rgba(218,220,224,0.12)] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              <div className="flex items-center gap-[7px]">
                <FlowGlyph color={selected ? "#a89ff8" : "#bdc1c6"} />
                <span className={`text-[12.5px] font-medium truncate ${selected ? "text-white" : "text-[#f1f3f4]"}`}>
                  {flow.name}
                </span>
                <span className="ml-auto text-[10px] text-[rgba(255,255,255,0.4)] shrink-0">
                  {countScreens(flow.id)}
                </span>
              </div>
              <p className="text-[10.5px] leading-[15px] text-[rgba(255,255,255,0.42)] mt-[3px] line-clamp-2">
                {flow.summary}
              </p>
            </button>
          );
        })}

        {results.length === 0 && (
          <div className="flex flex-col items-center gap-[4px] py-[28px] px-[8px] text-center">
            <span className="text-[12px] text-[rgba(255,255,255,0.5)]">No flows found</span>
            <span className="text-[10.5px] text-[rgba(255,255,255,0.3)]">Try a different search or clear the filters.</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Left panel: screens tab (existing Stitch design) ─────────────────────────

function ScreensTab({
  screenIds,
  activeScreenId,
  onSelectScreen,
  onImagine,
}: {
  screenIds: string[];
  activeScreenId: string;
  onSelectScreen: (id: string) => void;
  onImagine: () => void;
}) {
  return (
    <div className="flex flex-col min-h-0 flex-1">
      <div className="flex-1 min-h-0 overflow-y-auto p-[10px] flex flex-col gap-[8px]">
        {screenIds.map((id) => {
          const def = getScreen(id);
          const selected = id === activeScreenId;
          return (
            <button
              key={id}
              onClick={() => onSelectScreen(id)}
              className={`w-full rounded-[8px] border p-[0.6px] transition-colors group ${
                selected ? "border-[#7168f6]" : "border-[rgba(218,220,224,0.15)] hover:border-[rgba(218,220,224,0.35)]"
              }`}
            >
              <div className="w-full rounded-t-[6px] overflow-hidden aspect-square bg-white">
                <ScreenThumb id={id} width={183} height={183} />
              </div>
              <div className="flex items-center px-[6px] py-[4px]">
                <span className={`text-[10.8px] leading-[16.5px] truncate ${selected ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>
                  {def?.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer actions */}
      <div className="border-t-[0.8px] border-[rgba(218,220,224,0.15)] flex flex-col gap-[6px] p-[8px] shrink-0">
        <button className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] flex gap-[8px] items-center justify-center px-[11.8px] py-[7.8px] rounded-[8px] w-full hover:bg-[rgba(255,255,255,0.22)] transition-colors">
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
  );
}

// ── Flow chain panel (drill-down + breadcrumb) ───────────────────────────────

// A flattened chain entry, produced by walking a flow's nodes and following the
// currently-selected branch at every decision point.
type ChainItem =
  | { kind: "screen"; key: string; screenId: string; branches?: FlowBranch[] }
  | { kind: "subflow"; key: string; flowId: string };

function FlowChainPanel({
  trail,
  onTrailJump,
  onEnterFlow,
  activeScreenId,
  onSelectScreen,
  onClose,
}: {
  trail: string[];
  onTrailJump: (index: number) => void;
  onEnterFlow: (id: string) => void;
  activeScreenId: string;
  onSelectScreen: (id: string) => void;
  onClose: () => void;
}) {
  const currentId = trail[trail.length - 1];
  const flow = FLOWS[currentId];

  // Selected outcome per branch point (keyed by structural chain key).
  const [branchSel, setBranchSel] = useState<Record<string, string>>({});
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

  if (!flow) return null;

  // Walk nodes, following the chosen branch at each decision.
  function buildChain(nodes: FlowNode[], prefix: string): ChainItem[] {
    const out: ChainItem[] = [];
    nodes.forEach((node, i) => {
      const key = `${prefix}n${i}`;
      if (node.kind === "flow") {
        out.push({ kind: "subflow", key, flowId: node.id });
        return;
      }
      out.push({ kind: "screen", key, screenId: node.id, branches: node.branches });
      if (node.branches?.length) {
        const chosenId = branchSel[key] ?? idealBranch(node.branches).id;
        const branch = node.branches.find((b) => b.id === chosenId) ?? idealBranch(node.branches);
        out.push(...buildChain(branch.nodes, `${key}.${branch.id}.`));
      }
    });
    return out;
  }

  const items = buildChain(flow.nodes, "");

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
    <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_16px_16px_-8px_rgba(0,0,0,0.5)] flex flex-col w-[178px] h-full overflow-hidden shrink-0">
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
            const def = getScreen(item.screenId);
            const selected = item.screenId === activeScreenId;
            const branches = item.branches;
            const chosenId = branches ? (branchSel[item.key] ?? idealBranch(branches).id) : undefined;
            const onAltPath = branches ? chosenId !== idealBranch(branches).id : false;
            const badgeOpen = openBranch?.key === item.key;

            return (
              <div key={item.key} className="flex flex-col items-center w-full">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectScreen(item.screenId)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelectScreen(item.screenId); } }}
                  className={`relative w-full rounded-[10px] border p-[0.6px] transition-colors cursor-pointer ${
                    selected ? "border-[#7168f6]" : "border-[rgba(218,220,224,0.18)] hover:border-[rgba(218,220,224,0.4)]"
                  }`}
                >
                  <div className="w-full rounded-t-[8px] overflow-hidden bg-white" style={{ height: 108 }}>
                    <ScreenThumb id={item.screenId} width={154} height={108} />
                  </div>
                  <div className="px-[6px] py-[4px] flex items-center gap-[4px]">
                    <span className="text-[10px] text-[rgba(255,255,255,0.35)] shrink-0">{step}</span>
                    <span className={`text-[10.5px] truncate ${selected ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>
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
}: {
  viewport: Viewport;
  onCycleViewport: () => void;
  onRestart: () => void;
}) {
  const [hotspots, setHotspots] = useState(true);

  return (
    <div className="absolute right-[16px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-[10px]">
      {/* "More" pill */}
      <button className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center rounded-full size-[38px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-[rgba(56,59,61,0.7)] transition-colors" title="More options">
        <svg width="28" height="11" viewBox="0 0 28 11" fill="none">
          {morePillPaths.map((d, i) => (
            <path key={i} d={d} fill={i === 0 ? "rgba(255,255,255,0.12)" : "#f1f3f4"} />
          ))}
        </svg>
      </button>

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

type Tab = "flows" | "screens";

export default function PrototypeEditor({ projectName, onExit }: Props) {
  const [tab, setTab] = useState<Tab>("flows");
  const [collapsed, setCollapsed] = useState(false);
  const [viewport, setViewport] = useState<Viewport>("phone");

  // Preview runs the prototype; edit lets you select components on the screen.
  const [mode, setMode] = useState<"preview" | "edit">("preview");
  const [selection, setSelection] = useState<Selection | null>(null);
  const [editingInstruction, setEditingInstruction] = useState(false);
  const [connectedHotspots, setConnectedHotspots] = useState<Set<string>>(new Set());
  const [modal, setModal] = useState<{ tab: SuggestTab; hotspot: string } | null>(null);

  // Breadcrumb trail of flow ids; empty means no flow is open.
  const [trail, setTrail] = useState<string[]>([]);
  const [activeScreenId, setActiveScreenId] = useState<string>("home");

  const allScreenIds = useMemo(() => Object.keys(SCREENS), []);

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

  const chainOpen = tab === "flows" && trail.length > 0;

  return (
    <div className="flex flex-col h-screen bg-[#202124] overflow-hidden" style={{ fontFamily: "Inter,sans-serif" }}>

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

        {/* Left panels */}
        <div className="flex items-start gap-[10px] pl-[16px] py-[16px] h-full shrink-0">

          {/* Primary panel */}
          <div
            className={`backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_16px_16px_-8px_rgba(0,0,0,0.5)] flex flex-col w-[208px] overflow-hidden shrink-0 transition-[height] ${
              collapsed ? "h-[48px]" : "h-full"
            }`}
          >
            {/* Tabs */}
            <div className="border-b-[0.8px] border-[rgba(218,220,224,0.15)] flex items-center gap-[6px] px-[10px] h-[48px] shrink-0">
              <div className="flex items-center gap-[2px] flex-1 bg-[rgba(255,255,255,0.06)] rounded-[8px] p-[2px]">
                {(["flows", "screens"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTab(t); setCollapsed(false); }}
                    className={`flex-1 h-[26px] rounded-[6px] text-[12px] font-medium capitalize transition-colors ${
                      tab === t
                        ? "bg-[rgba(255,255,255,0.14)] text-[#f1f3f4]"
                        : "text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCollapsed((c) => !c)}
                title={collapsed ? "Expand panel" : "Collapse panel"}
                className="flex items-center justify-center size-[20px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
              >
                {collapsed ? (
                  <Icon d={icons.plus} size={14} fill="#bdc1c6" />
                ) : (
                  <Icon d={icons.minus} size={14} viewBox={16} fill="#bdc1c6" />
                )}
              </button>
            </div>

            {!collapsed && (
              tab === "flows" ? (
                <FlowsTab selectedFlowId={trail[0] ?? null} onSelectFlow={selectFlow} />
              ) : (
                <ScreensTab
                  screenIds={allScreenIds}
                  activeScreenId={activeScreenId}
                  onSelectScreen={setActiveScreenId}
                  onImagine={() => setModal({ tab: "screens", hotspot: "this screen" })}
                />
              )
            )}
          </div>

          {/* Secondary panel: screens inside the open flow */}
          {chainOpen && !collapsed && (
            <FlowChainPanel
              trail={trail}
              onTrailJump={(i) => setTrail((t) => t.slice(0, i + 1))}
              onEnterFlow={enterFlow}
              activeScreenId={activeScreenId}
              onSelectScreen={setActiveScreenId}
              onClose={() => setTrail([])}
            />
          )}
        </div>

        {/* Preview */}
        <div className="flex-1 min-w-0 flex flex-col pt-[8px] pb-[16px] px-[16px]">
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
          }}
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
          connected={connectedHotspots.has(selection.label)}
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
  );
}
