// "Select Design System" — the first step of the palette flow.
//
// Sits above the prompt bar on the same surface as the clarifying questions, so
// picking a design system reads as part of the conversation rather than a modal
// interruption. Nothing is committed by looking: Edit and Generate stay inert
// until a template is chosen, and Skip leaves the project untouched.

import { MiniPreview, Dots, type Visual } from "./previews";
import type { Theme } from "./themes";

function visualOf(theme: Theme): Visual {
  return {
    mode: theme.mode ?? "light",
    colors: [theme.palette.primary, theme.palette.secondary, theme.palette.tertiary],
    font: theme.font,
    radius: theme.button.radius,
  };
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d="M11.9 2.85a1.55 1.55 0 0 1 2.19 2.19l-7.5 7.5-2.92.73.73-2.92 7.5-7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10.6 4.15l2.19 2.19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d="M9 3.75v10.5M3.75 9h10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function TemplateCard({
  theme,
  selected,
  active,
  onSelect,
  onConfirm,
}: {
  theme: Theme;
  selected: boolean;
  active: boolean;
  onSelect: () => void;
  onConfirm: () => void;
}) {
  return (
    <button
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      onDoubleClick={onConfirm}
      className={`group min-w-0 text-left rounded-[12px] p-[11px] flex flex-col gap-[9px] border transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#7168f6] ${
        selected
          ? "border-[#7168f6] bg-[rgba(113,104,246,0.09)] shadow-[0_0_0_1px_rgba(113,104,246,0.5)]"
          : "border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
      }`}
    >
      <div className="flex items-center gap-[6px]">
        <span className={`flex-1 min-w-0 truncate text-[13px] font-semibold leading-[18px] transition-colors ${selected ? "text-[#f1f3f4]" : "text-[rgba(255,255,255,0.78)] group-hover:text-[#f1f3f4]"}`}>
          {theme.name}
        </span>
        {active && (
          <span className="shrink-0 text-[9.5px] font-semibold uppercase tracking-[0.05em] text-[rgba(255,255,255,0.5)] px-[6px] py-[2px] rounded-full border border-[rgba(255,255,255,0.16)]">
            Active
          </span>
        )}
      </div>
      <MiniPreview visual={visualOf(theme)} />
      <Dots colors={theme.swatch} />
    </button>
  );
}

export default function DesignSystemPicker({
  open,
  themes,
  selectedId,
  activeId,
  onSelect,
  onSkip,
  onEdit,
  onGenerate,
  onFindMore,
}: {
  open: boolean;
  themes: Theme[];
  selectedId: string | null;
  activeId: string | null;
  onSelect: (id: string) => void;
  onSkip: () => void;
  onEdit: () => void;
  onGenerate: () => void;
  onFindMore: () => void;
}) {
  const armed = selectedId !== null;

  // Roving arrow-key selection across the row, so the whole step is reachable
  // from the keyboard the prompt bar already has focus in.
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = themes.findIndex((t) => t.id === selectedId);
    const next = e.key === "ArrowRight"
      ? Math.min(themes.length - 1, i + 1)
      : Math.max(0, (i === -1 ? 0 : i) - 1);
    onSelect(themes[next].id);
  }

  return (
    // Anchored above the prompt bar and behind it (z-0), so it emerges from
    // behind the bar exactly like the clarifying questions do.
    <div
      aria-hidden={!open}
      className={`absolute left-0 right-0 bottom-[calc(100%+6px)] z-0 transition-all duration-300 ease-out ${
        open ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-[30px] opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full bg-[#28292d] border border-[rgba(255,255,255,0.08)] rounded-[16px] shadow-[0px_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-[12px] px-[16px] pt-[14px] pb-[10px]">
          <div className="min-w-0">
            <p className="text-[#f1f3f4] text-[14px] font-semibold leading-[20px]">Select Design System</p>
            <p className="text-[rgba(255,255,255,0.45)] text-[12px] leading-[17px] mt-[1px]">
              Pick a starting point — generate it as is, or edit it first.
            </p>
          </div>
          <button
            onClick={onSkip}
            className="shrink-0 h-[30px] px-[12px] rounded-full text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4] text-[13px] font-medium hover:bg-[rgba(255,255,255,0.06)] transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Templates */}
        <div
          role="radiogroup"
          aria-label="Design system templates"
          onKeyDown={onKeyDown}
          // Templates share the width evenly with a fixed "Find More" tail, so
          // the step never scrolls sideways at the prompt bar's width.
          className="grid items-stretch gap-[10px] px-[16px] pb-[14px]"
          style={{ gridTemplateColumns: `repeat(${themes.length}, minmax(0, 1fr)) 104px` }}
        >
          {themes.map((t) => (
            <TemplateCard
              key={t.id}
              theme={t}
              selected={t.id === selectedId}
              active={t.id === activeId}
              onSelect={() => onSelect(t.id)}
              onConfirm={onGenerate}
            />
          ))}

          {/* Find More — the full DESIGN.md catalog */}
          <button
            onClick={onFindMore}
            className="flex flex-col items-center justify-center gap-[8px] rounded-[12px] border border-dashed border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.6)] hover:text-[#f1f3f4] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)] transition-colors"
          >
            <span className="flex items-center justify-center size-[28px] rounded-full border border-[rgba(255,255,255,0.16)]">
              <PlusIcon />
            </span>
            <span className="text-[12.5px] font-medium">Find More</span>
          </button>
        </div>

        {/* Actions — inert until something is selected */}
        <div className="flex items-center justify-end gap-[8px] px-[16px] py-[12px] border-t border-[rgba(255,255,255,0.06)]">
          <button
            onClick={onEdit}
            disabled={!armed}
            title={armed ? "Edit this design system" : "Select a design system first"}
            className={`flex items-center gap-[6px] h-[32px] px-[14px] rounded-full text-[13px] font-medium border transition-colors ${
              armed
                ? "text-[#f1f3f4] border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.08)]"
                : "text-[rgba(255,255,255,0.28)] border-[rgba(255,255,255,0.08)] cursor-default"
            }`}
          >
            <PencilIcon />
            Edit
          </button>
          <button
            onClick={onGenerate}
            disabled={!armed}
            title={armed ? "Apply this design system" : "Select a design system first"}
            className={`flex items-center gap-[6px] h-[32px] pl-[13px] pr-[16px] rounded-full text-[13px] font-semibold transition-colors ${
              armed
                ? "bg-[#f1f3f4] text-[#202124] hover:bg-white shadow-[0px_2px_8px_rgba(241,243,244,0.15)]"
                : "bg-[rgba(255,255,255,0.09)] text-[rgba(255,255,255,0.3)] cursor-default"
            }`}
          >
            <PlusIcon />
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
