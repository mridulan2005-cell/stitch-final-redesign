import { useState, useMemo, useRef, useEffect } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type Kind = "component" | "flow";
type Layout = "grid" | "list";

interface Variant {
  id: string;
  name: string;
  render: (ctx?: { large?: boolean }) => React.ReactNode;
  // flow-only metadata (used for the large interactive preview)
  screens?: string[];
  accent?: string;
}

interface Category {
  id: string;
  label: string;
  kind: Kind;
  variants: Variant[];
}

// ── Component previews ───────────────────────────────────────────────────────

function ButtonPreview({ variant }: { variant: "primary" | "secondary" | "ghost" | "danger" }) {
  const styles: Record<string, string> = {
    primary: "bg-[#f1f3f4] text-[#202124]",
    secondary: "bg-[rgba(255,255,255,0.1)] text-[#f1f3f4] border border-[rgba(255,255,255,0.15)]",
    ghost: "bg-transparent text-[#f1f3f4] border border-[rgba(255,255,255,0.12)]",
    danger: "bg-[#ba1a1a] text-white",
  };
  return (
    <span className={`inline-flex items-center justify-center px-[16px] py-[8px] rounded-[8px] text-[13px] font-medium transition-transform group-active:scale-95 ${styles[variant]}`}>
      Button
    </span>
  );
}

function CardPreview({ tone }: { tone: "balance" | "stat" | "profile" }) {
  if (tone === "balance") {
    return (
      <div className="w-full bg-white rounded-[8px] p-[10px] text-left">
        <div className="text-[8px] text-[#45474c] uppercase tracking-wide">Total balance</div>
        <div className="text-[18px] text-[#030813] leading-tight" style={{ fontWeight: 700 }}>$12,450</div>
        <div className="text-[8px] text-[#006D3C]">↑ +2.4%</div>
      </div>
    );
  }
  if (tone === "stat") {
    return (
      <div className="w-full bg-white rounded-[8px] p-[10px] flex items-center justify-between text-left">
        <div>
          <div className="text-[8px] text-[#45474c] uppercase">Active</div>
          <div className="text-[16px] text-[#030813]" style={{ fontWeight: 700 }}>2,340</div>
        </div>
        <div className="size-[26px] rounded-full bg-[rgba(151,48,161,0.12)] flex items-center justify-center text-[#9730a1] text-[12px]">↗</div>
      </div>
    );
  }
  return (
    <div className="w-full bg-white rounded-[8px] p-[10px] flex items-center gap-[8px] text-left">
      <div className="size-[26px] rounded-full bg-gradient-to-br from-[#7168f6] to-[#a855f7]" />
      <div>
        <div className="text-[11px] text-[#030813]" style={{ fontWeight: 600 }}>Jane Cooper</div>
        <div className="text-[8px] text-[#45474c]">Product designer</div>
      </div>
    </div>
  );
}

function InputPreview({ type }: { type: "text" | "search" | "select" }) {
  return (
    <div className="w-full bg-white rounded-[8px] px-[10px] py-[8px] flex items-center gap-[6px] border border-[#e0e3e5]">
      {type === "search" && <span className="text-[#9ca3af] text-[11px]">⌕</span>}
      <span className="text-[11px] text-[#9ca3af] flex-1 text-left">
        {type === "text" ? "Enter your name" : type === "search" ? "Search…" : "Select option"}
      </span>
      {type === "select" && <span className="text-[#9ca3af] text-[9px]">▾</span>}
    </div>
  );
}

function BadgePreview({ tone }: { tone: "status" | "count" | "new" }) {
  if (tone === "status")
    return (
      <span className="inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full bg-[rgba(0,109,60,0.18)] text-[#4ade80] text-[12px] font-medium">
        <span className="size-[6px] rounded-full bg-[#4ade80]" />
        Active
      </span>
    );
  if (tone === "count")
    return (
      <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-[7px] rounded-full bg-[#7168f6] text-white text-[12px] font-semibold">
        8
      </span>
    );
  return (
    <span className="px-[8px] py-[3px] rounded-[6px] bg-[#f1f3f4] text-[#202124] text-[11px] font-bold tracking-wide">
      NEW
    </span>
  );
}

// ── Flow preview (mini + large interactive) ──────────────────────────────────

function FlowScreens({
  screens,
  accent,
  large = false,
  active,
  onSelect,
}: {
  screens: string[];
  accent: string;
  large?: boolean;
  active?: number;
  onSelect?: (i: number) => void;
}) {
  const w = large ? 74 : 44;
  const h = large ? 128 : 62;
  const gap = large ? 10 : 6;
  return (
    <div className="flex items-center justify-center" style={{ gap }}>
      {screens.map((label, i) => {
        const isActive = large && active === i;
        return (
          <div key={label} className="flex items-center shrink-0" style={{ gap }}>
            <div
              onClick={large ? () => onSelect?.(i) : undefined}
              className={`bg-white rounded-[7px] border p-[5px] flex flex-col shrink-0 transition-all ${
                large ? "cursor-pointer" : ""
              } ${isActive ? "shadow-[0_6px_18px_rgba(0,0,0,0.35)] scale-[1.04]" : "shadow-sm"}`}
              style={{
                width: w,
                height: h,
                gap: large ? 5 : 3,
                borderColor: isActive ? accent : "#e0e3e5",
              }}
            >
              <div className="rounded-full" style={{ background: accent, width: "60%", height: large ? 9 : 6 }} />
              <div className="rounded-full bg-[#e5e9eb] w-full" style={{ height: large ? 5 : 3 }} />
              <div className="rounded-full bg-[#e5e9eb]" style={{ height: large ? 5 : 3, width: "80%" }} />
              {large && <div className="rounded-full bg-[#e5e9eb]" style={{ height: 5, width: "90%" }} />}
              <div className="mt-auto rounded-[3px]" style={{ background: accent, height: large ? 14 : 8 }} />
              <div className="text-center truncate text-[#45474c]" style={{ fontSize: large ? 8 : 5 }}>
                {label}
              </div>
            </div>
            {i < screens.length - 1 && (
              <span className="text-[rgba(255,255,255,0.3)] shrink-0" style={{ fontSize: large ? 14 : 10 }}>
                →
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function flowVariant(id: string, name: string, screens: string[], accent: string): Variant {
  return {
    id,
    name,
    screens,
    accent,
    render: (ctx) => <FlowScreens screens={screens} accent={accent} large={ctx?.large} />,
  };
}

// ── Catalog ──────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  // Components
  {
    id: "buttons",
    label: "Buttons",
    kind: "component",
    variants: [
      { id: "b1", name: "Primary button", render: () => <ButtonPreview variant="primary" /> },
      { id: "b2", name: "Secondary button", render: () => <ButtonPreview variant="secondary" /> },
      { id: "b3", name: "Ghost button", render: () => <ButtonPreview variant="ghost" /> },
      { id: "b4", name: "Danger button", render: () => <ButtonPreview variant="danger" /> },
    ],
  },
  {
    id: "cards",
    label: "Cards",
    kind: "component",
    variants: [
      { id: "c1", name: "Balance card", render: () => <CardPreview tone="balance" /> },
      { id: "c2", name: "Stat card", render: () => <CardPreview tone="stat" /> },
      { id: "c3", name: "Profile card", render: () => <CardPreview tone="profile" /> },
    ],
  },
  {
    id: "inputs",
    label: "Inputs",
    kind: "component",
    variants: [
      { id: "i1", name: "Text field", render: () => <InputPreview type="text" /> },
      { id: "i2", name: "Search field", render: () => <InputPreview type="search" /> },
      { id: "i3", name: "Select field", render: () => <InputPreview type="select" /> },
    ],
  },
  {
    id: "badges",
    label: "Badges",
    kind: "component",
    variants: [
      { id: "bd1", name: "Status badge", render: () => <BadgePreview tone="status" /> },
      { id: "bd2", name: "Count badge", render: () => <BadgePreview tone="count" /> },
      { id: "bd3", name: "New badge", render: () => <BadgePreview tone="new" /> },
    ],
  },
  // Flows
  {
    id: "onboarding",
    label: "Onboarding",
    kind: "flow",
    variants: [
      flowVariant("f1", "Welcome onboarding", ["Splash", "Intro", "Setup"], "#7168f6"),
      flowVariant("f2", "Feature tour", ["Tips", "Perms", "Done"], "#7168f6"),
    ],
  },
  {
    id: "payment",
    label: "Payment",
    kind: "flow",
    variants: [
      flowVariant("f3", "Checkout flow", ["Cart", "Pay", "Success"], "#006D3C"),
      flowVariant("f4", "Add card", ["Card", "Verify", "Saved"], "#006D3C"),
    ],
  },
  {
    id: "notification",
    label: "Notification",
    kind: "flow",
    variants: [
      flowVariant("f5", "Preferences", ["List", "Toggle", "Saved"], "#d97706"),
      flowVariant("f6", "Permission prompt", ["Prompt", "Allow", "Done"], "#d97706"),
    ],
  },
  {
    id: "auth",
    label: "Auth",
    kind: "flow",
    variants: [
      flowVariant("f7", "Sign in", ["Login", "OTP", "Home"], "#9730a1"),
      flowVariant("f8", "Sign up", ["Email", "Profile", "Done"], "#9730a1"),
    ],
  },
];

const COMPONENT_CATS = CATEGORIES.filter((c) => c.kind === "component");
const FLOW_CATS = CATEGORIES.filter((c) => c.kind === "flow");

// ── Icons ────────────────────────────────────────────────────────────────────

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 5l4 4 4-4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DragDots() {
  return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className="shrink-0">
      {[2, 8, 14].map((y) =>
        [2, 8].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="rgba(255,255,255,0.35)" />)
      )}
    </svg>
  );
}

// ── Category dropdown ────────────────────────────────────────────────────────

function FilterDropdown({
  label,
  cats,
  activeId,
  onPick,
}: {
  label: string;
  cats: Category[];
  activeId: string | null;
  onPick: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const active = cats.find((c) => c.id === activeId);
  return (
    <div className="relative flex-1 min-w-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-[6px] px-[11px] h-[32px] rounded-[8px] border transition-colors ${
          active
            ? "bg-[rgba(113,104,246,0.16)] border-[rgba(113,104,246,0.4)]"
            : "bg-[#232527] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]"
        }`}
      >
        <span className={`text-[13px] truncate ${active ? "text-white" : "text-[#f1f3f4]"}`}>
          {active ? active.label : label}
        </span>
        <Chevron open={open} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-[calc(100%+4px)] left-0 z-50 w-full min-w-[160px] bg-[#232527] border border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-[0px_8px_32px_rgba(0,0,0,0.6)] overflow-hidden py-[4px]">
            {cats.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  onPick(c.id);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between gap-[8px] px-[12px] py-[7px] hover:bg-[rgba(255,255,255,0.06)] transition-colors text-left"
              >
                <span className={`text-[13px] ${activeId === c.id ? "text-white" : "text-[#f1f3f4]"}`}>{c.label}</span>
                <span className="text-[rgba(255,255,255,0.35)] text-[11px]">{c.variants.length}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Preview popover ──────────────────────────────────────────────────────────

function PreviewPopover({
  category,
  variant,
  pos,
  onClose,
  onChoose,
}: {
  category: Category;
  variant: Variant;
  pos: { left: number; top: number };
  onClose: () => void;
  onChoose: () => void;
}) {
  const [screen, setScreen] = useState(0);
  const isFlow = category.kind === "flow";
  return (
    <>
      <div className="fixed inset-0 z-[60]" onClick={onClose} />
      <div
        className="fixed z-[61] w-[300px] bg-[#1b1c1e] border border-[rgba(255,255,255,0.12)] rounded-[14px] shadow-[0px_20px_60px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col"
        style={{ left: pos.left, top: pos.top, maxHeight: `calc(100vh - ${pos.top + 20}px)` }}
      >
        {/* header */}
        <div className="flex items-center justify-between px-[14px] py-[11px] border-b border-[rgba(255,255,255,0.08)] shrink-0">
          <div className="flex flex-col min-w-0">
            <span className="text-[#f1f3f4] text-[13px] font-semibold truncate">{variant.name}</span>
            <span className="text-[rgba(255,255,255,0.4)] text-[11px]">
              {category.label} · {isFlow ? "Flow" : "Component"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center size-[26px] rounded-[7px] hover:bg-[rgba(255,255,255,0.08)] transition-colors shrink-0"
            title="Close"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* live preview */}
        <div className="flex-1 min-h-0 overflow-y-auto px-[16px] py-[20px] flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]">
          {isFlow && variant.screens ? (
            <FlowScreens
              screens={variant.screens}
              accent={variant.accent ?? "#7168f6"}
              large
              active={screen}
              onSelect={setScreen}
            />
          ) : (
            <div className="scale-[1.35]">{variant.render({ large: true })}</div>
          )}
        </div>

        {/* footer */}
        <div className="px-[14px] py-[12px] border-t border-[rgba(255,255,255,0.08)] shrink-0 flex items-center gap-[8px]">
          <span className="text-[rgba(255,255,255,0.35)] text-[11px] flex-1">
            {isFlow ? "Tap a screen to preview" : "Live preview"}
          </span>
          <button
            onClick={onChoose}
            className="flex items-center gap-[6px] px-[16px] h-[34px] rounded-[9px] bg-[#f1f3f4] text-[#202124] text-[13px] font-semibold hover:bg-white transition-colors"
          >
            Choose
          </button>
        </div>
      </div>
    </>
  );
}

// ── Result cards ─────────────────────────────────────────────────────────────

function serialize(category: Category, variant: Variant) {
  return JSON.stringify({ name: variant.name, kind: category.kind, category: category.label });
}

function VariantCard({
  category,
  variant,
  layout,
  onOpen,
}: {
  category: Category;
  variant: Variant;
  layout: Layout;
  onOpen: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      draggable
      onDragStart={(e) => {
        const payload = serialize(category, variant);
        e.dataTransfer.setData("application/stitch-lib", payload);
        e.dataTransfer.setData("text/plain", variant.name);
        e.dataTransfer.effectAllowed = "copy";
      }}
      onClick={onOpen}
      title="Click to preview · drag onto the canvas"
      className={`group relative rounded-[12px] bg-[#232527] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] hover:bg-[#26282a] transition-colors overflow-hidden cursor-grab active:cursor-grabbing ${
        layout === "grid" ? "flex flex-col" : "flex items-center gap-[12px] p-[10px]"
      }`}
    >
      {/* drag affordance */}
      <span className="absolute top-[6px] right-[6px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <DragDots />
      </span>

      <div
        className={`flex items-center justify-center ${
          layout === "grid" ? "aspect-[4/3] p-[12px]" : "w-[92px] h-[60px] shrink-0 rounded-[8px] bg-[rgba(0,0,0,0.15)]"
        }`}
      >
        {variant.render()}
      </div>

      <div className={`${layout === "grid" ? "px-[10px] pb-[10px] pt-[2px]" : "flex-1 min-w-0 text-left"}`}>
        <div className="text-[#f1f3f4] text-[12px] font-medium truncate">{variant.name}</div>
        {layout === "list" && (
          <div className="text-[rgba(255,255,255,0.4)] text-[11px]">{category.label}</div>
        )}
      </div>
    </button>
  );
}

function CategoryTile({
  category,
  onOpen,
}: {
  category: Category;
  onOpen: () => void;
}) {
  const first = category.variants[0];
  return (
    <button
      onClick={onOpen}
      title={`Browse ${category.label}`}
      className="group rounded-[12px] bg-[#232527] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] hover:bg-[#26282a] transition-colors overflow-hidden flex flex-col"
    >
      <div className="h-[74px] flex items-center justify-center p-[10px] overflow-hidden">
        <div className="scale-[0.9] pointer-events-none">{first.render()}</div>
      </div>
      <div className="px-[10px] pb-[9px] pt-[2px] flex items-center justify-between gap-[6px]">
        <span className="text-[#f1f3f4] text-[12px] font-medium truncate">{category.label}</span>
        <span className="text-[rgba(255,255,255,0.35)] text-[11px] shrink-0">{category.variants.length}</span>
      </div>
    </button>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

interface Props {
  onInsert?: (item: { name: string; kind: Kind }) => void;
}

export function LibrariesPanel({ onInsert }: Props) {
  const [kind, setKind] = useState<Kind | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState<Layout>("grid");
  const [sortAZ, setSortAZ] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [preview, setPreview] = useState<{ category: Category; variant: Variant; pos: { left: number; top: number } } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const activeCategory = categoryId ? CATEGORIES.find((c) => c.id === categoryId) ?? null : null;

  function selectCategory(id: string) {
    const cat = CATEGORIES.find((c) => c.id === id);
    if (!cat) return;
    setKind(cat.kind);
    setCategoryId(id);
    setSearch("");
    setPreview(null);
  }

  function reset() {
    setKind(null);
    setCategoryId(null);
    setSearch("");
    setPreview(null);
  }

  function openPreview(category: Category, variant: Variant, e: React.MouseEvent) {
    e.preventDefault();
    const rect = rootRef.current?.getBoundingClientRect();
    const left = rect ? Math.min(rect.right + 12, window.innerWidth - 312) : 360;
    const top = rect ? Math.max(72, rect.top + 10) : 100;
    setPreview({ category, variant, pos: { left, top } });
  }

  function insert(category: Category, variant: Variant) {
    onInsert?.({ name: variant.name, kind: category.kind });
    setPreview(null);
    setToast(`Added “${variant.name}” to the canvas`);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }

  // Filtered results
  const q = search.trim().toLowerCase();

  const tiles = useMemo(() => {
    if (activeCategory) return [];
    const match = (c: Category) => q === "" || c.label.toLowerCase().includes(q);
    return { components: COMPONENT_CATS.filter(match), flows: FLOW_CATS.filter(match) };
  }, [activeCategory, q]);

  const variants = useMemo(() => {
    if (!activeCategory) return [];
    let list = activeCategory.variants.filter((v) => q === "" || v.name.toLowerCase().includes(q));
    if (sortAZ) list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, q, sortAZ]);

  return (
    <div ref={rootRef} className="flex flex-col h-full min-h-0 relative">

      {/* ── Search + filter/options button ───────────────────────── */}
      <div className="flex items-center gap-[6px] px-[12px] pt-[12px]">
        <div className="flex-1 flex items-center h-[34px] rounded-[8px] bg-[#232527] border border-[rgba(255,255,255,0.1)] focus-within:border-[rgba(255,255,255,0.25)] transition-colors px-[10px] gap-[6px]">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <circle cx="7" cy="7" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={activeCategory ? `Search ${activeCategory.label.toLowerCase()}…` : "Search libraries…"}
            className="w-full bg-transparent border-none outline-none text-[#f1f3f4] text-[13px] placeholder-[rgba(255,255,255,0.35)]"
          />
        </div>

        <div className="relative shrink-0">
          <button
            onClick={() => setOptionsOpen((o) => !o)}
            title="View options"
            className={`flex items-center justify-center size-[34px] rounded-[8px] border transition-colors ${
              optionsOpen
                ? "bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)]"
                : "bg-[#232527] border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]"
            }`}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {optionsOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setOptionsOpen(false)} />
              <div className="absolute top-[calc(100%+4px)] right-0 z-50 w-[176px] bg-[#232527] border border-[rgba(255,255,255,0.1)] rounded-[10px] shadow-[0px_8px_32px_rgba(0,0,0,0.6)] overflow-hidden p-[8px] flex flex-col gap-[8px]">
                <div>
                  <div className="text-[rgba(255,255,255,0.4)] text-[11px] font-medium uppercase tracking-wide px-[2px] pb-[5px]">Layout</div>
                  <div className="flex gap-[4px]">
                    {(["grid", "list"] as Layout[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLayout(l)}
                        className={`flex-1 h-[28px] rounded-[7px] text-[12px] capitalize transition-colors ${
                          layout === l ? "bg-[rgba(255,255,255,0.12)] text-white" : "text-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.06)]"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-[rgba(255,255,255,0.08)]" />
                <button
                  onClick={() => setSortAZ((s) => !s)}
                  className="flex items-center justify-between px-[2px] py-[2px] text-[12px] text-[#f1f3f4]"
                >
                  <span>Sort A–Z</span>
                  <span
                    className={`w-[30px] h-[17px] rounded-full transition-colors relative ${sortAZ ? "bg-[#7168f6]" : "bg-[rgba(255,255,255,0.2)]"}`}
                  >
                    <span
                      className={`absolute top-[2px] size-[13px] rounded-full bg-white transition-all ${sortAZ ? "left-[15px]" : "left-[2px]"}`}
                    />
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Filter dropdowns (mutual exclusion) ──────────────────── */}
      <div className="flex items-center gap-[6px] px-[12px] pt-[8px] pb-[10px]">
        {kind !== "flow" && (
          <FilterDropdown
            label="Component"
            cats={COMPONENT_CATS}
            activeId={kind === "component" ? categoryId : null}
            onPick={selectCategory}
          />
        )}
        {kind !== "component" && (
          <FilterDropdown
            label="Flow"
            cats={FLOW_CATS}
            activeId={kind === "flow" ? categoryId : null}
            onPick={selectCategory}
          />
        )}
        {kind && (
          <button
            onClick={reset}
            title="Clear filter"
            className="flex items-center justify-center size-[32px] rounded-[8px] bg-[#232527] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Results ──────────────────────────────────────────────── */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[12px] pb-[16px]">
        {activeCategory ? (
          // Variant list for the picked category
          variants.length === 0 ? (
            <EmptyState />
          ) : (
            <div className={layout === "grid" ? "grid grid-cols-1 gap-[10px]" : "flex flex-col gap-[8px]"}>
              {variants.map((v) => (
                <VariantCard
                  key={v.id}
                  category={activeCategory}
                  variant={v}
                  layout={layout}
                  onOpen={(e) => openPreview(activeCategory, v, e)}
                />
              ))}
            </div>
          )
        ) : (
          // Browse: category tiles grouped by kind
          <div className="flex flex-col gap-[16px]">
            {tiles.components && tiles.components.length > 0 && (
              <Section title="Components">
                {tiles.components.map((c) => (
                  <CategoryTile key={c.id} category={c} onOpen={() => selectCategory(c.id)} />
                ))}
              </Section>
            )}
            {tiles.flows && tiles.flows.length > 0 && (
              <Section title="Flows">
                {tiles.flows.map((c) => (
                  <CategoryTile key={c.id} category={c} onOpen={() => selectCategory(c.id)} />
                ))}
              </Section>
            )}
            {tiles.components && tiles.flows && tiles.components.length === 0 && tiles.flows.length === 0 && (
              <EmptyState />
            )}
          </div>
        )}
      </div>

      {/* ── Toast ────────────────────────────────────────────────── */}
      {toast && (
        <div className="absolute bottom-[12px] left-[12px] right-[12px] z-30 flex items-center gap-[8px] px-[12px] py-[9px] rounded-[10px] bg-[#2f3a2f] border border-[rgba(74,222,128,0.3)] shadow-[0px_8px_24px_rgba(0,0,0,0.5)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <circle cx="8" cy="8" r="7" stroke="#4ade80" strokeWidth="1.4" />
            <path d="M5 8l2 2 4-4" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#d8f5d8] text-[12px] flex-1">{toast}</span>
        </div>
      )}

      {/* ── Preview popover ──────────────────────────────────────── */}
      {preview && (
        <PreviewPopover
          category={preview.category}
          variant={preview.variant}
          pos={preview.pos}
          onClose={() => setPreview(null)}
          onChoose={() => insert(preview.category, preview.variant)}
        />
      )}
    </div>
  );
}

// ── Small helpers ────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[rgba(255,255,255,0.4)] text-[11px] font-medium uppercase tracking-wide px-[2px]">{title}</span>
      <div className="grid grid-cols-1 gap-[10px]">{children}</div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-[6px] py-[48px]">
      <span className="text-[rgba(255,255,255,0.5)] text-[13px]">No results</span>
      <span className="text-[rgba(255,255,255,0.3)] text-[12px]">Try a different search</span>
    </div>
  );
}
