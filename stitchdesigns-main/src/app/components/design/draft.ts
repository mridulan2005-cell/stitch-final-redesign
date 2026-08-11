// The editable copy of a theme.
//
// A draft is what the editor manipulates and the preview renders. It keeps the
// seed as the source of truth: the hierarchy is derived from it, so dragging
// the seed moves the whole theme. Two escape hatches keep that from being a
// cage — a role can be pinned to an explicit colour, and roles can be swapped
// without losing which colour came from where.

import { derivePalette, normalizeHex, readableOn } from "./color";
import type { Theme } from "./themes";

export const ROLE_NAMES = ["Primary", "Secondary", "Tertiary"] as const;

export interface Draft {
  id: string;
  name: string;
  mode: "light" | "dark";
  seed: string;
  /**
   * Which derived slot each rank shows. Swapping roles reorders this rather
   * than the colours, so a later seed change still flows through correctly.
   */
  order: [number, number, number];
  /** Explicit colour per derived slot — the theme's authored palette, then edits. */
  overrides: [string | null, string | null, string | null];
  /**
   * Which slots the user has set by hand. Those survive a seed change; the
   * rest are released so the theme follows the seed you are dragging.
   */
  touched: [boolean, boolean, boolean];
  font: string;
  buttonRadius: number;
}

export function draftFromTheme(theme: Theme): Draft {
  const seed = normalizeHex(theme.seed);
  // The catalog theme's palette is authored, not derived — carry it in as
  // overrides so opening a theme shows exactly the colours the list row showed.
  // The seed leads the hierarchy, so it takes rank 1 and the remaining authored
  // colours fall in behind it.
  const rest = [theme.palette.primary, theme.palette.secondary, theme.palette.tertiary]
    .map(normalizeHex)
    .filter((c) => c !== seed);

  return {
    id: theme.id,
    name: theme.name,
    mode: theme.mode ?? "light",
    seed,
    order: [0, 1, 2],
    overrides: [seed, rest[0] ?? null, rest[1] ?? null],
    touched: [false, false, false],
    font: theme.font,
    buttonRadius: theme.button.radius,
  };
}

/** The three colours in rank order: what the hierarchy list and preview show. */
export function draftColors(draft: Draft): [string, string, string] {
  const derived = derivePalette(draft.seed, draft.mode);
  const at = (slot: number) => draft.overrides[slot] ?? derived[slot];
  return [at(draft.order[0]), at(draft.order[1]), at(draft.order[2])];
}

/**
 * Set the seed. The lead role follows it, and so does every role the user
 * hasn't set by hand — that is what makes the seed feel like a handle on the
 * whole theme rather than one more colour.
 */
export function setSeed(draft: Draft, seed: string): Draft {
  const hex = normalizeHex(seed);
  const lead = draft.order[0];
  const overrides = draft.overrides.map((c, slot) =>
    slot === lead ? hex : draft.touched[slot] ? c : null,
  ) as Draft["overrides"];
  return { ...draft, seed: hex, overrides };
}

/** Set the colour at a rank by hand, pinning it against later seed changes. */
export function setColorAt(draft: Draft, rank: number, hex: string): Draft {
  // Rank 1 *is* the seed — keeping them in step means the seed field and the
  // hierarchy never disagree about what leads the theme.
  if (rank === 0) return setSeed(draft, hex);

  const slot = draft.order[rank];
  const overrides = [...draft.overrides] as Draft["overrides"];
  const touched = [...draft.touched] as Draft["touched"];
  overrides[slot] = normalizeHex(hex);
  touched[slot] = true;
  return { ...draft, overrides, touched };
}

/** Swap a rank with the one below it, promoting a colour up the hierarchy. */
export function swapRanks(draft: Draft, rank: number): Draft {
  if (rank < 0 || rank >= draft.order.length - 1) return draft;
  const colors = draftColors(draft);
  const order = [...draft.order] as Draft["order"];
  [order[rank], order[rank + 1]] = [order[rank + 1], order[rank]];

  // Pin both colours to what they already are: a swap should move roles, not
  // repaint the theme. Without this, re-seeding below would drag them.
  const overrides = [...draft.overrides] as Draft["overrides"];
  overrides[draft.order[rank]] = colors[rank];
  overrides[draft.order[rank + 1]] = colors[rank + 1];

  const next = { ...draft, order, overrides };
  // The lead colour is the seed, so promoting a colour re-seeds the theme.
  return { ...next, seed: draftColors(next)[0] };
}

/** Switch light/dark. Derived colours re-tune; pinned ones stay put. */
export function setMode(draft: Draft, mode: "light" | "dark"): Draft {
  return { ...draft, mode };
}

/** Fold a draft back into a catalog theme, ready to save or apply. */
export function themeFromDraft(draft: Draft, base: Theme): Theme {
  const [primary, secondary, tertiary] = draftColors(draft);
  return {
    ...base,
    id: draft.id,
    name: draft.name,
    seed: draft.seed,
    mode: draft.mode,
    swatch: [primary, secondary, tertiary],
    palette: { primary, secondary, tertiary },
    font: draft.font,
    button: {
      bg: primary,
      fg: readableOn(primary),
      radius: draft.buttonRadius,
    },
  };
}
