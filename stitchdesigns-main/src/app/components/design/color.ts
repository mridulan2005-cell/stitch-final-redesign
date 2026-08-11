// Colour maths for the design system editor.
//
// The editor is direct-manipulation: you drag a seed colour and the rest of the
// theme follows. Everything needed for that lives here — conversions, a palette
// derivation from a single seed, and the surface tokens a preview needs to look
// like a real screen in either mode.

export interface RGB { r: number; g: number; b: number }
export interface HSV { h: number; s: number; v: number }

export const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

export function hexToRgb(hex: string): RGB {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  if (h.length !== 6 || Number.isNaN(n)) return { r: 0, g: 0, b: 0 };
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex({ r, g, b }: RGB): string {
  const to = (v: number) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}

export function hexToHsv(hex: string): HSV {
  const { r, g, b } = hexToRgb(hex);
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : d / max, v: max };
}

export function hsvToHex({ h, s, v }: HSV): string {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  const seg = Math.floor(((h % 360) + 360) % 360 / 60);
  const [r1, g1, b1] = (
    [[c, x, 0], [x, c, 0], [0, c, x], [0, x, c], [x, 0, c], [c, 0, x]] as const
  )[seg];
  return rgbToHex({ r: (r1 + m) * 255, g: (g1 + m) * 255, b: (b1 + m) * 255 });
}

export function isHex(value: string): boolean {
  return /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value.trim());
}

export function normalizeHex(value: string): string {
  let h = value.trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return `#${h.toUpperCase()}`;
}

/** Blend two hex colours; `t` of 0 returns `a`, 1 returns `b`. */
export function mix(a: string, b: string, t: number): string {
  const A = hexToRgb(a), B = hexToRgb(b);
  return rgbToHex({
    r: A.r + (B.r - A.r) * t,
    g: A.g + (B.g - A.g) * t,
    b: A.b + (B.b - A.b) * t,
  });
}

/** WCAG relative luminance, 0 (black) → 1 (white). */
export function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const ch = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

/** Ink that stays legible on `bg` — the preview never renders unreadable text. */
export function readableOn(bg: string): string {
  return luminance(bg) > 0.45 ? "#16181B" : "#FFFFFF";
}

/**
 * The three-step hierarchy Stitch derives from a seed: the seed itself leads,
 * a lighter tint of the same hue supports it, and a complementary accent
 * provides contrast. Tuned per mode so a dark theme doesn't go muddy.
 */
export function derivePalette(seed: string, mode: "light" | "dark"): [string, string, string] {
  const { h, s, v } = hexToHsv(seed);
  const light = mode === "light";
  const secondary = hsvToHex({
    h,
    s: clamp(s * (light ? 0.62 : 0.7)),
    v: clamp(light ? Math.max(v * 1.28, 0.72) : Math.max(v * 1.15, 0.66)),
  });
  const tertiary = hsvToHex({
    h: (h + 178) % 360,
    s: clamp(Math.max(s, 0.55) * 0.92),
    v: clamp(light ? Math.max(v, 0.72) : Math.max(v * 1.05, 0.66)),
  });
  return [normalizeHex(seed), secondary, tertiary];
}

export interface Surface {
  /** Page background of the previewed screen. */
  bg: string;
  /** Raised card / control background. */
  raised: string;
  /** Body ink. */
  fg: string;
  /** Secondary ink. */
  sub: string;
  border: string;
}

/** Surface tokens for a previewed screen, tinted very slightly by the palette. */
export function surfaceFor(mode: "light" | "dark", primary: string): Surface {
  if (mode === "light") {
    const bg = mix("#FFFFFF", primary, 0.03);
    return {
      bg,
      raised: "#FFFFFF",
      fg: mix("#16181B", primary, 0.12),
      sub: mix("#6B7280", primary, 0.1),
      border: mix("#E5E7EB", primary, 0.12),
    };
  }
  const bg = mix("#101214", primary, 0.09);
  return {
    bg,
    raised: mix("#171A1D", primary, 0.12),
    fg: mix("#F1F3F4", primary, 0.04),
    sub: mix("#9AA0A6", primary, 0.08),
    border: mix("#2A2E33", primary, 0.16),
  };
}
