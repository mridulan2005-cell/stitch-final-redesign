// The toolbar that acts on the selected screen, plus its two dropdowns.
//
// Figma: node 256:3761 — Generate | Edit | Annotate | Build Prototype | More.
// "Generate" opens the iterate/validate/screen menu; "More" opens the
// per-screen actions menu on the right. Both use the same glass surface as the
// prompt bar so the whole canvas chrome reads as one material.

import { useEffect, useState } from "react";
import svgPaths from "../../imports/1920WDefault-1/svg-gxl75wy7zq";
import { modifyIcons } from "../../imports/ModifyMenu-svg";

// ── Menu icons (16px, stroked with currentColor) ─────────────────────────────

/** Bolt glyph for the Build Prototype button (Figma 243:320). */
const BOLT_PATH = "M8.4 0L0 9.2h4.9L4.2 16 12.6 6.8H7.7L8.4 0z";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0" {...S}>
      {children}
    </svg>
  );
}

const icons = {
  bolt: () => <Icon><path d="M9 1.5L3.2 9h3.6l-.8 5.5L12.8 7H9.2L9 1.5z" /></Icon>,
  variations: () => <Icon><rect x="1.6" y="4" width="12.8" height="8" rx="2" /><path d="M4.4 7.2h7.2" /></Icon>,
  regenerate: () => <Icon><path d="M13.6 8a5.6 5.6 0 1 1-1.85-4.15" /><path d="M13.9 1.6v3.1h-3.1" /></Icon>,
  mobile: () => <Icon><rect x="4.6" y="1.4" width="6.8" height="13.2" rx="1.8" /><path d="M7.2 12.6h1.6" /></Icon>,
  animate: () => <Icon><path d="M5.2 3.4l7 4.6-7 4.6V3.4z" /></Icon>,
  list: () => <Icon><path d="M2.2 4.4h11.6M2.2 8h11.6M2.2 11.6h7.4" /></Icon>,
  eye: () => <Icon><path d="M1.4 8s2.5-4.4 6.6-4.4S14.6 8 14.6 8s-2.5 4.4-6.6 4.4S1.4 8 1.4 8z" /><circle cx="8" cy="8" r="1.9" /></Icon>,
  accessibility: () => <Icon><path d="M8 1.6v1.6" /><circle cx="8" cy="4.4" r="1.1" /><path d="M8 6v8.4M3.4 7.4h9.2M4.6 14.4L8 10.4l3.4 4" /></Icon>,
  compare: () => <Icon><path d="M2.2 4.6h11.6M2.2 11.4h11.6" /><circle cx="5.6" cy="4.6" r="1.5" /><circle cx="10.4" cy="11.4" r="1.5" /></Icon>,
  grid: () => <Icon><rect x="2" y="2" width="4.8" height="4.8" rx="1" /><rect x="9.2" y="2" width="4.8" height="4.8" rx="1" /><rect x="2" y="9.2" width="4.8" height="4.8" rx="1" /><rect x="9.2" y="9.2" width="4.8" height="4.8" rx="1" /></Icon>,
  globe: () => <Icon><circle cx="8" cy="8" r="6.4" /><path d="M1.6 8h12.8M8 1.6c1.7 1.9 2.6 4.1 2.6 6.4S9.7 12.5 8 14.4C6.3 12.5 5.4 10.3 5.4 8S6.3 3.5 8 1.6z" /></Icon>,
  megaphone: () => <Icon><path d="M11.6 3.2v9.6L4.8 10.4H2.8a1.2 1.2 0 0 1-1.2-1.2V6.8a1.2 1.2 0 0 1 1.2-1.2h2L11.6 3.2z" /><path d="M13.8 6.2a2.6 2.6 0 0 1 0 3.6" /></Icon>,
  info: () => <Icon><circle cx="8" cy="8" r="6.4" /><path d="M8 7.2v4M8 5.1v.1" /></Icon>,
  code: () => <Icon><path d="M5.6 4.8L2.4 8l3.2 3.2M10.4 4.8L13.6 8l-3.2 3.2" /></Icon>,
  copy: () => <Icon><rect x="5.6" y="5.6" width="8" height="8" rx="1.8" /><path d="M10.4 5.4V4.2a1.8 1.8 0 0 0-1.8-1.8H4.2a1.8 1.8 0 0 0-1.8 1.8v4.4a1.8 1.8 0 0 0 1.8 1.8h1.2" /></Icon>,
  export: () => <Icon><path d="M8 10.4V2.2M4.9 5.3L8 2.2l3.1 3.1M2.4 11.2v1.4a1.4 1.4 0 0 0 1.4 1.4h8.4a1.4 1.4 0 0 0 1.4-1.4v-1.4" /></Icon>,
  download: () => <Icon><path d="M8 2.2v8.2M4.9 7.3L8 10.4l3.1-3.1M2.4 13.4h11.2" /></Icon>,
  reload: () => <Icon><path d="M2.4 8a5.6 5.6 0 1 0 1.85-4.15" /><path d="M2.1 1.6v3.1h3.1" /></Icon>,
  trash: () => <Icon><path d="M2.6 4.2h10.8M6.2 4.2V2.9a1 1 0 0 1 1-1h1.6a1 1 0 0 1 1 1v1.3M4.2 4.2l.6 8.5a1.2 1.2 0 0 0 1.2 1.1h4a1.2 1.2 0 0 0 1.2-1.1l.6-8.5" /></Icon>,
};

// ── Menu primitives ──────────────────────────────────────────────────────────

/** The shared glass surface — same material as the prompt bar. */
function MenuSurface({ align, children }: { align: "left" | "right"; children: React.ReactNode }) {
  return (
    <div
      className={`absolute top-[calc(100%+8px)] ${align === "left" ? "left-0" : "right-0"} z-50 backdrop-blur-[20px] bg-[rgba(22,23,24,0.92)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25),0px_10px_30px_-8px_rgba(0,0,0,0.5)] p-[7px] flex flex-col animate-in fade-in zoom-in-95 slide-in-from-top-1 duration-150`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-[8px] h-[28px] flex items-center text-[rgba(255,255,255,0.5)] text-[12px] font-medium uppercase tracking-[0.06em]">
      {children}
    </span>
  );
}

function MenuDivider() {
  return <div className="h-px bg-[rgba(218,220,224,0.15)] my-[5px] mx-[2px]" />;
}

interface RowProps {
  icon: keyof typeof icons;
  label: string;
  shortcut?: string;
  badge?: string;
  danger?: boolean;
  onClick?: () => void;
}

function MenuRow({ icon, label, shortcut, badge, danger, onClick }: RowProps) {
  const Glyph = icons[icon];
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[8px] h-[36px] pl-[12px] pr-[12px] rounded-[10px] transition-colors text-left whitespace-nowrap ${
        danger ? "text-[#f28b82] hover:bg-[rgba(242,139,130,0.12)]" : "text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.08)]"
      }`}
    >
      <Glyph />
      <span className="text-[14px] leading-[20px] font-normal">{label}</span>
      {badge && (
        <span className="ml-[6px] px-[6px] h-[18px] flex items-center rounded-[4px] bg-[rgba(113,104,246,0.3)] text-[#c9c3fb] text-[10px] font-semibold tracking-[0.04em]">
          {badge}
        </span>
      )}
      {shortcut && (
        <span className="ml-auto pl-[24px] text-[rgba(255,255,255,0.45)] text-[12px] leading-[17px]">{shortcut}</span>
      )}
    </button>
  );
}

// ── Toolbar buttons ──────────────────────────────────────────────────────────

function ToolButton({
  path, viewBox = "0 0 18 18", label, chevron, active, onClick,
}: {
  path: string; viewBox?: string; label: string; chevron?: boolean; active?: boolean; onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-[6px] h-[32px] items-center justify-center px-[8px] rounded-full transition-colors ${
        active ? "bg-[rgba(110,115,119,0.75)]" : "hover:bg-[rgba(255,255,255,0.06)]"
      }`}
    >
      <svg width="18" height="18" viewBox={viewBox} fill="none" className="shrink-0">
        <path d={path} fill="#F1F3F4" />
      </svg>
      <span className="text-[#f1f3f4] text-[14px] font-medium leading-[20px] whitespace-nowrap">{label}</span>
      {chevron && (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d={svgPaths.p3cfe5200} fill="#F1F3F4" />
        </svg>
      )}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-[20px] bg-[rgba(218,220,224,0.15)] shrink-0" />;
}

// ── Toolbar ──────────────────────────────────────────────────────────────────

interface Props {
  /**
   * The toolbar is on screen. It stays mounted while sliding away so the exit
   * animates, so any open menu has to be dismissed as it leaves — otherwise it
   * would still be hanging there on the way back in.
   */
  visible?: boolean;
  /** Annotate mode is on — keeps its button lit while the canvas is in it. */
  annotating: boolean;
  onEdit: () => void;
  onAnnotate: () => void;
  /** Both "Build Prototype" and "Instant prototype" land here. */
  onOpenPrototype: () => void;
  /** Anything not wired to real behaviour yet, so the menus still respond. */
  onAction?: (id: string) => void;
}

export default function ScreenToolbar({ visible = true, annotating, onEdit, onAnnotate, onOpenPrototype, onAction }: Props) {
  const [menu, setMenu] = useState<null | "generate" | "more">(null);
  const close = () => setMenu(null);
  const run = (id: string) => { close(); onAction?.(id); };

  useEffect(() => { if (!visible) setMenu(null); }, [visible]);

  return (
    <div className="flex items-center gap-[2px] backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[28px] p-[5px]">

      {/* ── Generate ─────────────────────────────────────────────────── */}
      <div className="relative">
        <ToolButton
          path={svgPaths.p2702d100}
          viewBox="0 0 16.2 17.133"
          label="Generate"
          chevron
          active={menu === "generate"}
          onClick={() => setMenu(m => (m === "generate" ? null : "generate"))}
        />

        {menu === "generate" && (
          <>
            <div className="fixed inset-0 z-40" onClick={close} />
            <MenuSurface align="left">
              <SectionLabel>Iterate</SectionLabel>
              <MenuRow icon="bolt" label="Instant prototype" onClick={() => { close(); onOpenPrototype(); }} />
              <MenuRow icon="variations" label="Variations" shortcut="⇧V" onClick={() => run("variations")} />
              <MenuRow icon="regenerate" label="Regenerate" shortcut="⇧R" onClick={() => run("regenerate")} />
              <MenuRow icon="mobile" label="Mobile app version" onClick={() => run("mobile")} />
              <MenuRow icon="animate" label="Animate" onClick={() => run("animate")} />
              <MenuRow icon="list" label="Missing States" onClick={() => run("missing-states")} />

              <MenuDivider />
              <SectionLabel>Validate</SectionLabel>
              <MenuRow icon="eye" label="Predictive heatmap" onClick={() => run("heatmap")} />
              <MenuRow icon="accessibility" label="Accessibility audit" onClick={() => run("a11y-audit")} />
              <MenuRow icon="compare" label="Comparative Audit" onClick={() => run("comparative-audit")} />

              <MenuDivider />
              <SectionLabel>Screen</SectionLabel>
              <MenuRow icon="grid" label="App store assets" onClick={() => run("app-store-assets")} />
              <MenuRow icon="globe" label="Web assets" onClick={() => run("web-assets")} />
              <MenuRow icon="megaphone" label="Marketing kit" onClick={() => run("marketing-kit")} />
            </MenuSurface>
          </>
        )}
      </div>

      <Divider />
      <ToolButton path={modifyIcons.edit} label="Edit" onClick={() => { close(); onEdit(); }} />

      <Divider />
      <ToolButton path={svgPaths.p192791c0} viewBox="0 0 20 20" label="Annotate" active={annotating} onClick={() => { close(); onAnnotate(); }} />

      <Divider />
      <ToolButton path={BOLT_PATH} viewBox="0 0 14 16" label="Build Prototype" onClick={() => { close(); onOpenPrototype(); }} />

      <Divider />

      {/* ── More ─────────────────────────────────────────────────────── */}
      <div className="relative">
        <ToolButton
          path={svgPaths.pbb17b80}
          label="More"
          active={menu === "more"}
          onClick={() => setMenu(m => (m === "more" ? null : "more"))}
        />

        {menu === "more" && (
          <>
            <div className="fixed inset-0 z-40" onClick={close} />
            <MenuSurface align="right">
              <MenuRow icon="info" label="View Details" shortcut="I" onClick={() => run("view-details")} />
              <MenuRow icon="code" label="View Code" shortcut="⇧C" onClick={() => run("view-code")} />

              <MenuDivider />
              <MenuRow icon="copy" label="Copy to Figma" onClick={() => run("copy-to-figma")} />
              <MenuRow icon="export" label="Export" badge="NEW" shortcut="Ctrl⇧E" onClick={() => run("export")} />

              <MenuDivider />
              <MenuRow icon="download" label="Download" shortcut="⇧D" onClick={() => run("download")} />
              <MenuRow icon="reload" label="Reload" shortcut="CtrlR" onClick={() => run("reload")} />

              <MenuDivider />
              <MenuRow icon="trash" label="Delete" danger onClick={() => run("delete")} />
            </MenuSurface>
          </>
        )}
      </div>
    </div>
  );
}
