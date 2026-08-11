// Theme catalog for the design system panel (DESIGN.md).
//
// A theme is what Stitch applies to a project: a seed colour, a resolved
// palette, a type choice and a button style. The list rows render a live
// miniature of each — the "Aa", the palette wheel and a real Button chip — so
// the preview *is* the theme rather than a static thumbnail.

export interface ThemeButtonStyle {
  /** Chip fill. `transparent` gives the unfilled/ghost look (e.g. Bauhaus). */
  bg: string;
  fg: string;
  /** Corner radius in px — part of the theme's personality. */
  radius: number;
}

export interface Theme {
  id: string;
  name: string;
  /** The colour the rest of the palette is derived from. */
  seed: string;
  /** Wedges of the palette wheel, in order. */
  swatch: string[];
  /** Resolved palette shown in the theme editor. */
  palette: { primary: string; secondary: string; tertiary: string };
  /** Font stack the "Aa" specimen is set in. */
  font: string;
  button: ThemeButtonStyle;
  /** Which group the row sits under in the list. */
  group: "project" | "user" | "stitch";
  /** Light/dark the theme was authored for. */
  mode?: "light" | "dark";
}

export const THEMES: Theme[] = [
  // ── This project ──────────────────────────────────────────────────────────
  {
    id: "zenith-finance",
    name: "Zenith Finance",
    seed: "#1A202C",
    swatch: ["#B149BA", "#3E5EE6", "#1A202C"],
    palette: { primary: "#1A202C", secondary: "#B149BA", tertiary: "#3E5EE6" },
    font: "Georgia, 'Times New Roman', serif",
    button: { bg: "#1A202C", fg: "#FFFFFF", radius: 6 },
    group: "project",
    mode: "light",
  },

  // ── Saved by the user ─────────────────────────────────────────────────────
  {
    id: "kindred-paws",
    name: "Kindred Paws",
    seed: "#F4A340",
    swatch: ["#F4A340", "#7B4B2A", "#FFE8CC"],
    palette: { primary: "#7B4B2A", secondary: "#F4A340", tertiary: "#FFE8CC" },
    font: "Georgia, 'Times New Roman', serif",
    button: { bg: "#F4A340", fg: "#3A2312", radius: 999 },
    group: "user",
    mode: "light",
  },

  // ── Shipped with Stitch ───────────────────────────────────────────────────
  {
    id: "alexandria",
    name: "Alexandria",
    seed: "#3366CC",
    swatch: ["#3366CC", "#E8B93B", "#1B2A4A"],
    palette: { primary: "#3366CC", secondary: "#E8B93B", tertiary: "#1B2A4A" },
    font: "Georgia, 'Times New Roman', serif",
    button: { bg: "#3366CC", fg: "#FFFFFF", radius: 6 },
    group: "stitch",
    mode: "light",
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    seed: "#D62828",
    swatch: ["#D62828", "#1D3557", "#F1D302"],
    palette: { primary: "#1D3557", secondary: "#D62828", tertiary: "#F1D302" },
    font: "'Helvetica Neue', Arial, sans-serif",
    // Unfilled — Bauhaus states the type, not the container.
    button: { bg: "transparent", fg: "#F1F3F4", radius: 0 },
    group: "stitch",
    mode: "light",
  },
  {
    id: "glacier",
    name: "Glacier",
    seed: "#7DD3FC",
    swatch: ["#7DD3FC", "#E0F2FE", "#0C4A6E"],
    palette: { primary: "#0C4A6E", secondary: "#7DD3FC", tertiary: "#E0F2FE" },
    font: "Georgia, 'Times New Roman', serif",
    button: { bg: "#7DD3FC", fg: "#0C3A56", radius: 999 },
    group: "stitch",
    mode: "light",
  },
  {
    id: "carbon",
    name: "Carbon",
    seed: "#0F62FE",
    swatch: ["#0F62FE", "#4A5568", "#8D8D8D"],
    palette: { primary: "#0F62FE", secondary: "#4A5568", tertiary: "#8D8D8D" },
    font: "'IBM Plex Sans', 'Helvetica Neue', sans-serif",
    button: { bg: "#0F62FE", fg: "#FFFFFF", radius: 2 },
    group: "stitch",
    mode: "light",
  },
  {
    id: "neon-tokyo",
    name: "Neon Tokyo",
    seed: "#FF2E88",
    swatch: ["#FF2E88", "#7B2CBF", "#12002E"],
    palette: { primary: "#FF2E88", secondary: "#7B2CBF", tertiary: "#12002E" },
    font: "'Helvetica Neue', Arial, sans-serif",
    button: { bg: "#FF2E88", fg: "#FFFFFF", radius: 999 },
    group: "stitch",
    mode: "dark",
  },
];

/** Palette wheel: hard-stopped conic wedges, one per swatch colour. */
export function wheelGradient(colors: string[]): string {
  const step = 100 / colors.length;
  const stops = colors
    .map((c, i) => `${c} ${(i * step).toFixed(2)}% ${((i + 1) * step).toFixed(2)}%`)
    .join(", ");
  return `conic-gradient(from 200deg, ${stops})`;
}

export function themesIn(group: Theme["group"], list: Theme[] = THEMES): Theme[] {
  return list.filter((t) => t.group === group);
}

export function getTheme(id: string): Theme | undefined {
  return THEMES.find((t) => t.id === id);
}
