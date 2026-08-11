// Live theme previews.
//
// Both the template cards and the editor's preview render the *same* miniature
// screen from the same tokens, so what you pick is literally what you then
// edit — the only difference is scale. Nothing here is a static thumbnail: pass
// new colours and it repaints.

import { readableOn, surfaceFor } from "./color";

export interface Visual {
  mode: "light" | "dark";
  colors: [string, string, string];
  font: string;
  radius: number;
}

/** Thumbnail used by the template cards. */
export function MiniPreview({ visual }: { visual: Visual }) {
  const [primary, secondary] = visual.colors;
  const s = surfaceFor(visual.mode, primary);
  return (
    <div
      className="rounded-[8px] px-[10px] py-[11px] flex flex-col gap-[9px] transition-colors duration-200"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <div className="flex items-center gap-[6px]">
        <span className="h-[4px] flex-1 rounded-full" style={{ background: s.sub, opacity: 0.55 }} />
        <span className="size-[5px] rounded-full shrink-0" style={{ background: secondary }} />
      </div>
      <div className="flex items-center gap-[8px]">
        <span className="h-[5px] flex-1 rounded-full" style={{ background: s.fg, opacity: 0.85 }} />
        <span
          className="h-[14px] w-[38px] shrink-0"
          style={{ background: primary, borderRadius: Math.min(visual.radius, 7) }}
        />
      </div>
    </div>
  );
}

/** The row of palette dots under a template card. */
export function Dots({ colors, size = 8 }: { colors: string[]; size?: number }) {
  return (
    <div className="flex items-center gap-[5px]">
      {colors.map((c, i) => (
        <span
          key={i}
          className="rounded-full shrink-0 ring-1 ring-[rgba(255,255,255,0.14)] transition-colors duration-200"
          style={{ width: size, height: size, background: c }}
        />
      ))}
    </div>
  );
}

/**
 * The editor's preview: a real card, a real control and a real button, drawn in
 * the theme being edited. This is the thing that moves while you drag a colour.
 */
export function PreviewSelection({
  name,
  visual,
  active,
}: {
  name: string;
  visual: Visual;
  active?: boolean;
}) {
  const [primary, secondary, tertiary] = visual.colors;
  const s = surfaceFor(visual.mode, primary);
  return (
    <div
      className="rounded-[12px] p-[14px] flex flex-col gap-[12px] transition-colors duration-200"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <div className="flex items-center gap-[8px]">
        <span
          className="flex-1 min-w-0 truncate text-[13.5px] font-semibold leading-[18px]"
          style={{ color: s.fg, fontFamily: visual.font }}
        >
          {name}
        </span>
        {active && (
          <span
            className="shrink-0 text-[10.5px] font-semibold leading-none px-[8px] py-[4px] rounded-full"
            style={{ background: primary, color: readableOn(primary) }}
          >
            Active
          </span>
        )}
      </div>

      <div
        className="flex items-center gap-[10px] rounded-[9px] pl-[12px] pr-[6px] py-[6px]"
        style={{ background: s.raised, border: `1px solid ${s.border}` }}
      >
        <span className="h-[4px] flex-1 rounded-full" style={{ background: s.sub, opacity: 0.6 }} />
        <span
          className="shrink-0 text-[11.5px] font-medium leading-none px-[12px] py-[7px]"
          style={{
            background: primary,
            color: readableOn(primary),
            borderRadius: visual.radius,
            fontFamily: visual.font,
          }}
        >
          Button
        </span>
      </div>

      <Dots colors={[primary, secondary, tertiary]} size={9} />
    </div>
  );
}
