// The design system panel — Stitch's DESIGN.md.
//
// Two views live in one floating panel: the list of themes (DESIGN.md) and the
// editor for a single theme. Opening a theme slides the editor in over the
// list, and the back arrow returns — so the panel never spawns a second window.
//
// The editor is direct-manipulation: a live preview sits at the top and every
// colour change repaints it under your hand. Nothing leaves the panel until
// Save (keep it) or Save & Apply (put it on the project).
//
// Figma: Stitch-documentation 106:3372 (list) and 106:3660 (theme editor).

import { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import { PreviewSelection, type Visual } from "./previews";
import {
  ROLE_NAMES,
  draftColors,
  draftFromTheme,
  setColorAt,
  setMode as setDraftMode,
  setSeed,
  swapRanks,
  themeFromDraft,
  type Draft,
} from "./draft";
import { themesIn, wheelGradient, type Theme } from "./themes";

// ── Icons ────────────────────────────────────────────────────────────────────

const ICON = "#F1F3F4";
const MUTED = "rgba(255,255,255,0.55)";

function PaletteIcon({ size = 18, color = ICON }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path
        d="M10 2.5a7.5 7.5 0 0 0 0 15c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01a1.49 1.49 0 0 1-.36-.98c0-.83.67-1.5 1.5-1.5h1.77A4.48 4.48 0 0 0 18.5 8c0-3.04-3.8-5.5-8.5-5.5Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="6.4" cy="9.4" r="1.05" fill={color} />
      <circle cx="8.9" cy="6.1" r="1.05" fill={color} />
      <circle cx="12.8" cy="6.4" r="1.05" fill={color} />
      <circle cx="15.1" cy="9.3" r="1.05" fill={color} />
    </svg>
  );
}

function PlusIcon({ size = 18, color = ICON }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d="M9 3.75v10.5M3.75 9h10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ size = 16, color = MUTED }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRight({ size = 16, color = MUTED }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M6 3.5L10.5 8L6 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown({ size = 16, color = MUTED }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3.5 6L8 10.5L12.5 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KebabIcon({ color = MUTED }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      {[3.5, 8, 12.5].map((cy) => (
        <circle key={cy} cx="8" cy={cy} r="1.35" fill={color} />
      ))}
    </svg>
  );
}

function PencilIcon({ size = 16, color = ICON }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path
        d="M11.9 2.85a1.55 1.55 0 0 1 2.19 2.19l-7.5 7.5-2.92.73.73-2.92 7.5-7.5Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M10.6 4.15l2.19 2.19" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BackIcon({ size = 18, color = ICON }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path d="M12.5 4L6.5 10l6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Two arrows passing each other — swap this colour with the one below. */
function SwapIcon({ color = ICON }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M5.2 13V3.4M5.2 3.4L3.1 5.6M5.2 3.4l2.1 2.2" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.8 3v9.6M10.8 12.6l2.1-2.2M10.8 12.6l-2.1-2.2" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon({ color = ICON }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="3.1" stroke={color} strokeWidth="1.4" />
      <path
        d="M8 1.4v1.5M8 13.1v1.5M14.6 8h-1.5M2.9 8H1.4M12.67 3.33l-1.06 1.06M4.39 11.61l-1.06 1.06M12.67 12.67l-1.06-1.06M4.39 4.39L3.33 3.33"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ color = ICON }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M13.5 9.9A6 6 0 0 1 6.1 2.5a6 6 0 1 0 7.4 7.4Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Shared bits ──────────────────────────────────────────────────────────────

/** The palette wheel — conic wedges of the theme's colours. */
function Wheel({ theme, size = 24 }: { theme: Theme; size?: number }) {
  return (
    <span
      className="rounded-full shrink-0 ring-1 ring-[rgba(255,255,255,0.14)]"
      style={{ width: size, height: size, backgroundImage: wheelGradient(theme.swatch) }}
    />
  );
}

/** A flat colour dot, used by the editor's palette rows. */
function Dot({ color, size = 28 }: { color: string; size?: number }) {
  return (
    <span
      className="rounded-full shrink-0 ring-1 ring-[rgba(255,255,255,0.14)]"
      style={{ width: size, height: size, background: color }}
    />
  );
}

/** Live miniature of a theme: its type, its palette and a real button. */
function ThemePreview({ theme }: { theme: Theme }) {
  return (
    <div className="flex items-center gap-[12px] min-w-0">
      <span
        className="text-[23px] leading-none text-[#f1f3f4] shrink-0"
        style={{ fontFamily: theme.font }}
      >
        Aa
      </span>
      <Wheel theme={theme} size={28} />
      <span
        className="text-[11.5px] font-medium leading-none px-[13px] py-[7px] shrink-0 whitespace-nowrap"
        style={{
          background: theme.button.bg,
          color: theme.button.fg,
          borderRadius: theme.button.radius,
          fontFamily: theme.font,
        }}
      >
        Button
      </span>
    </div>
  );
}

// ── List view (DESIGN.md) ────────────────────────────────────────────────────

function ThemeRow({ theme, onOpen }: { theme: Theme; onOpen: () => void }) {
  return (
    <div className="group flex items-center gap-[6px] rounded-[10px] pl-[10px] pr-[4px] py-[11px] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
      <button onClick={onOpen} className="flex-1 min-w-0 text-left">
        <div className="text-[13.5px] text-[#e8eaed] truncate mb-[10px]">{theme.name}</div>
        <ThemePreview theme={theme} />
      </button>
      <button
        title={`More options for ${theme.name}`}
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center size-[26px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
      >
        <KebabIcon />
      </button>
      <button
        title={`Open ${theme.name}`}
        onClick={onOpen}
        className="flex items-center justify-center size-[26px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[10px] pt-[18px] pb-[6px]">
      <span className="text-[11.5px] text-[rgba(255,255,255,0.45)]">{children}</span>
    </div>
  );
}

function ListView({
  themes,
  onClose,
  onOpenTheme,
}: {
  themes: Theme[];
  onClose: () => void;
  onOpenTheme: (id: string) => void;
}) {
  const project = themesIn("project", themes);
  const user = themesIn("user", themes);
  const stitch = themesIn("stitch", themes);

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-[11px] px-[16px] h-[58px] shrink-0">
        <PaletteIcon size={19} />
        <span className="flex-1 text-[15.5px] font-medium text-[#f1f3f4]">DESIGN.md</span>
        <button
          onClick={onClose}
          title="Close"
          className="flex items-center justify-center size-[26px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-[8px] pb-[12px]">
        {/* Entry points */}
        {[
          { label: "Start with your design", key: "start" },
          { label: "Create new", key: "create" },
        ].map((a) => (
          <button
            key={a.key}
            className="w-full flex items-center gap-[13px] rounded-[10px] px-[10px] py-[11px] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
          >
            <PlusIcon />
            <span className="text-[14px] text-[#e8eaed]">{a.label}</span>
          </button>
        ))}

        {/* This project's themes sit directly under the actions, unlabelled —
            they are the file's own, not a preset library. */}
        <div className="mt-[6px] flex flex-col gap-[2px]">
          {project.map((t) => (
            <ThemeRow key={t.id} theme={t} onOpen={() => onOpenTheme(t.id)} />
          ))}
        </div>

        {user.length > 0 && (
          <>
            <SectionLabel>User Presets</SectionLabel>
            <div className="flex flex-col gap-[2px]">
              {user.map((t) => (
                <ThemeRow key={t.id} theme={t} onOpen={() => onOpenTheme(t.id)} />
              ))}
            </div>
          </>
        )}

        <SectionLabel>Stitch Presets</SectionLabel>
        <div className="flex flex-col gap-[2px]">
          {stitch.map((t) => (
            <ThemeRow key={t.id} theme={t} onOpen={() => onOpenTheme(t.id)} />
          ))}
        </div>
      </div>
    </>
  );
}

// ── Theme editor ─────────────────────────────────────────────────────────────

/** Seeds offered as one-click starting points under the seed field. */
const SEED_PRESETS = ["#EF5A3C", "#7168F6", "#22C55E", "#0284C7", "#EC4899", "#F59E0B"];

function FieldLabel({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex items-baseline gap-[8px] mb-[10px]">
      <span className="text-[12px] text-[rgba(255,255,255,0.55)]">{children}</span>
      {hint && <span className="ml-auto text-[11px] text-[rgba(255,255,255,0.35)]">{hint}</span>}
    </div>
  );
}

/** A colour row that discloses the picker in place, under the row. */
function ColorField({
  color,
  label,
  value,
  open,
  onToggle,
  onChange,
  leading,
  trailing,
}: {
  color: string;
  label: string;
  value?: string;
  open: boolean;
  onToggle: () => void;
  onChange: (hex: string) => void;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  return (
    <div className={`rounded-[12px] transition-colors ${open ? "bg-[rgba(255,255,255,0.04)]" : ""}`}>
      <div className="flex items-center gap-[4px] pr-[6px]">
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="flex-1 min-w-0 flex items-center gap-[13px] rounded-[10px] px-[8px] py-[8px] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          {leading}
          <Dot color={color} size={28} />
          <span className="flex-1 min-w-0 text-left">
            <span className="block text-[14px] text-[#e8eaed] leading-[18px] truncate">{label}</span>
            {value && (
              <span className="block text-[11.5px] text-[rgba(255,255,255,0.45)] leading-[15px] tracking-[0.02em]">
                {value}
              </span>
            )}
          </span>
          <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            <ChevronDown />
          </span>
        </button>
        {trailing}
      </div>
      {open && (
        <div className="px-[8px] pb-[10px]">
          <ColorPicker value={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

function ThemeEditor({
  theme,
  active,
  onBack,
  onClose,
  onOpenDesignMd,
  onSave,
  onApply,
}: {
  theme: Theme;
  active: boolean;
  onBack: () => void;
  onClose: () => void;
  onOpenDesignMd: () => void;
  onSave: (theme: Theme) => void;
  onApply: (theme: Theme) => void;
}) {
  const [draft, setDraft] = useState<Draft>(() => draftFromTheme(theme));
  // Which colour field is disclosed — only one at a time, so the preview is
  // never pushed off screen by two open pickers.
  const [openField, setOpenField] = useState<"seed" | 0 | 1 | 2 | null>(null);
  const [renaming, setRenaming] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  // Opening a different theme resets the editor to that theme's own state.
  useEffect(() => {
    setDraft(draftFromTheme(theme));
    setOpenField(null);
    setRenaming(false);
    setJustSaved(false);
  }, [theme]);

  const colors = draftColors(draft);
  const next = themeFromDraft(draft, theme);
  const dirty = JSON.stringify(next) !== JSON.stringify(theme);
  const visual: Visual = {
    mode: draft.mode,
    colors,
    font: draft.font,
    radius: draft.buttonRadius,
  };

  function save() {
    onSave(next);
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 1400);
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-[6px] px-[12px] h-[58px] shrink-0">
        <button
          onClick={onBack}
          title="Back"
          className="flex items-center justify-center size-[28px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
        >
          <BackIcon />
        </button>

        {renaming ? (
          <input
            autoFocus
            value={draft.name}
            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
            onBlur={() => setRenaming(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") setRenaming(false);
            }}
            aria-label="Theme name"
            className="flex-1 min-w-0 h-[32px] px-[10px] rounded-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(113,104,246,0.6)] outline-none text-[15px] font-medium text-[#f1f3f4]"
          />
        ) : (
          <span className="flex-1 min-w-0 flex items-baseline gap-[6px]">
            <span className="text-[15.5px] font-medium text-[#f1f3f4] truncate">{draft.name}</span>
            {dirty && (
              <span
                title="Unsaved changes"
                className="shrink-0 size-[6px] rounded-full bg-[#7168f6] translate-y-[-2px]"
              />
            )}
          </span>
        )}

        <button
          onClick={() => setRenaming(true)}
          title="Rename theme"
          className="flex items-center justify-center size-[28px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
        >
          <PencilIcon />
        </button>
        <button
          onClick={onClose}
          title="Close"
          className="flex items-center justify-center size-[28px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-[16px] shrink-0 border-b border-[rgba(255,255,255,0.08)]">
        {[
          { id: "theme", label: "Theme" },
          { id: "designmd", label: "DESIGN.md" },
        ].map((t) => {
          const on = t.id === "theme";
          return (
            <button
              key={t.id}
              onClick={() => { if (t.id === "designmd") onOpenDesignMd(); }}
              className="relative flex-1 pb-[10px] pt-[2px] transition-colors"
            >
              <span className={`text-[13.5px] ${on ? "text-[#f1f3f4] font-medium" : "text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4]"}`}>
                {t.label}
              </span>
              {on && <span className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full bg-[#f1f3f4]" />}
            </button>
          );
        })}
      </div>

      {/* Scrolling body — bottom padding clears the action bar. */}
      <div className="flex-1 min-h-0 overflow-y-auto px-[16px] pt-[16px] pb-[16px]">
        {/* The live preview leads: every control below moves this. */}
        <FieldLabel>Preview selection</FieldLabel>
        <div className="mb-[26px]">
          <PreviewSelection name={draft.name} visual={visual} active={active} />
        </div>

        <FieldLabel>Mode</FieldLabel>
        <div className="flex p-[3px] rounded-full bg-[#171919] mb-[26px]">
          {([
            { id: "light", label: "Light", Icon: SunIcon },
            { id: "dark", label: "Dark", Icon: MoonIcon },
          ] as const).map(({ id, label, Icon }) => {
            const on = draft.mode === id;
            return (
              <button
                key={id}
                onClick={() => setDraft((d) => setDraftMode(d, id))}
                aria-pressed={on}
                className={`flex-1 flex items-center justify-center gap-[7px] h-[40px] rounded-full transition-colors ${
                  on ? "bg-[#3c4043]" : "hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                <Icon color={on ? ICON : "rgba(255,255,255,0.6)"} />
                <span className={`text-[14px] ${on ? "text-[#f1f3f4] font-medium" : "text-[rgba(255,255,255,0.6)]"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <FieldLabel>Seed color</FieldLabel>
        <div className="mb-[26px]">
          <ColorField
            color={draft.seed}
            label="Seed"
            value={draft.seed}
            open={openField === "seed"}
            onToggle={() => setOpenField((f) => (f === "seed" ? null : "seed"))}
            onChange={(hex) => setDraft((d) => setSeed(d, hex))}
          />
          {/* Quick seeds — the whole hierarchy re-derives from whichever you pick. */}
          <div className="flex items-center gap-[9px] px-[8px] pt-[10px]">
            {SEED_PRESETS.map((c) => {
              const on = c === draft.seed.toUpperCase();
              return (
                <button
                  key={c}
                  onClick={() => setDraft((d) => setSeed(d, c))}
                  title={c}
                  aria-label={`Use ${c} as the seed colour`}
                  aria-pressed={on}
                  className={`size-[22px] rounded-full transition-transform hover:scale-110 ${
                    on ? "ring-2 ring-offset-2 ring-offset-[#1a1b1b] ring-[#f1f3f4]" : "ring-1 ring-[rgba(255,255,255,0.14)]"
                  }`}
                  style={{ background: c }}
                />
              );
            })}
          </div>
        </div>

        <FieldLabel hint="Swap to reorder roles">Colour hierarchy</FieldLabel>
        <div className="flex flex-col gap-[2px]">
          {colors.map((color, rank) => (
            <ColorField
              key={rank}
              color={color}
              label={ROLE_NAMES[rank]}
              value={color}
              open={openField === rank}
              onToggle={() => setOpenField((f) => (f === rank ? null : (rank as 0 | 1 | 2)))}
              onChange={(hex) => setDraft((d) => setColorAt(d, rank, hex))}
              leading={
                <span className="w-[10px] shrink-0 text-[11.5px] text-[rgba(255,255,255,0.4)] tabular-nums">
                  {rank + 1}
                </span>
              }
              trailing={
                rank < colors.length - 1 ? (
                  <button
                    onClick={() => setDraft((d) => swapRanks(d, rank))}
                    title={`Swap ${ROLE_NAMES[rank]} with ${ROLE_NAMES[rank + 1]}`}
                    aria-label={`Swap ${ROLE_NAMES[rank]} with ${ROLE_NAMES[rank + 1]}`}
                    className="flex items-center justify-center size-[30px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
                  >
                    <SwapIcon color={MUTED} />
                  </button>
                ) : (
                  <span className="size-[30px] shrink-0" />
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Actions — Save keeps the theme, Save & Apply puts it on the project.
          Both are the same quiet neutral pill: the choice between keeping and
          applying is the user's to weigh, so neither is dressed as the one
          right answer. Apply carries a slightly lighter fill, which is all the
          emphasis it needs. */}
      <div className="shrink-0 flex items-center gap-[10px] px-[16px] py-[12px] border-t border-[rgba(255,255,255,0.08)] bg-[#1a1b1b]">
        <button
          onClick={save}
          className="flex-1 h-[40px] rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] text-[13.5px] font-medium text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.09)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
        >
          {justSaved ? "Saved" : "Save"}
        </button>
        <button
          onClick={() => onApply(next)}
          className="flex-[1.15] h-[40px] rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] text-[13.5px] font-medium text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.14)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
        >
          Save &amp; Apply
        </button>
      </div>
    </>
  );
}

// ── Panel shell ──────────────────────────────────────────────────────────────

export default function DesignSystemPanel({
  themes,
  initialThemeId = null,
  activeThemeId = null,
  onClose,
  onBack,
  onSave,
  onApply,
}: {
  themes: Theme[];
  /** Opened straight into this theme's editor (from the template picker). */
  initialThemeId?: string | null;
  /** The theme currently on the project, badged in the preview. */
  activeThemeId?: string | null;
  onClose: () => void;
  /** Back out of the theme the panel was opened with — returns to the picker. */
  onBack?: () => void;
  onSave: (theme: Theme) => void;
  onApply: (theme: Theme) => void;
}) {
  const [openThemeId, setOpenThemeId] = useState<string | null>(initialThemeId);
  useEffect(() => setOpenThemeId(initialThemeId), [initialThemeId]);

  const theme = openThemeId ? themes.find((t) => t.id === openThemeId) : undefined;

  return (
    <div
      // Fixed height (the design's 340:626 proportion) so long lists scroll
      // inside the panel and the editor's actions stay pinned to the bottom.
      className="relative flex flex-col w-[340px] h-[626px] max-h-full overflow-hidden rounded-[20px] bg-[#1a1b1b] border border-[rgba(255,255,255,0.08)] shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-right-2 duration-200 ease-out"
      style={{ fontFamily: "Inter,sans-serif" }}
    >
      {theme ? (
        <ThemeEditor
          theme={theme}
          active={theme.id === activeThemeId}
          // Back returns to wherever the editor was entered from: the picker
          // when it opened us there, otherwise the DESIGN.md list.
          onBack={() => {
            if (onBack && openThemeId === initialThemeId) onBack();
            else setOpenThemeId(null);
          }}
          onClose={onClose}
          onOpenDesignMd={() => setOpenThemeId(null)}
          onSave={onSave}
          onApply={onApply}
        />
      ) : (
        <ListView themes={themes} onClose={onClose} onOpenTheme={setOpenThemeId} />
      )}
    </div>
  );
}
