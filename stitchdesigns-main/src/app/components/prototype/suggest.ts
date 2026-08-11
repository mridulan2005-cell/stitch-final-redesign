// What the agent proposes when you tap something that has no screen behind it.
//
// The prototype editor treats a hotspot as "mapped" when it has somewhere to go.
// Tapping an unmapped one asks this module for candidate screens; the first is
// the optimal one shown by default, and "more like these" cycles the rest.

export interface ScreenSuggestion {
  /** Screen name, e.g. "Favourites screen". */
  title: string;
  /** One-line brief of what the screen does — editable before building. */
  description: string;
  /** Chips offered under the description while editing. */
  refinements: string[];
}

/**
 * Hotspots that already have a home. Tapping these in preview navigates instead
 * of asking the agent, so the obvious app-level destinations behave like a real
 * prototype out of the box.
 */
export const DEFAULT_HOTSPOT_ROUTES: Record<string, string> = {
  Dashboard: "home",
  Activity: "transactions",
  Budget: "budget",
};

interface Pattern {
  test: RegExp;
  build: (label: string, from: string) => ScreenSuggestion[];
}

const PATTERNS: Pattern[] = [
  {
    test: /favou?rite|saved|bookmark|wishlist|heart/i,
    build: (label) => [
      {
        title: "Favourites screen",
        description: `After clicking ${label.toLowerCase()}, has all stuff you saved, with category filters.`,
        refinements: ["Add an empty state", "Group by category", "Let people remove items"],
      },
      {
        title: "Saved collections",
        description: `Groups everything saved from ${label.toLowerCase()} into collections you can name and reorder.`,
        refinements: ["Add a create-collection action", "Show item counts", "Support drag to reorder"],
      },
    ],
  },
  {
    test: /search|find|explore|discover/i,
    build: (label) => [
      {
        title: "Search results",
        description: `Results for what you type after tapping ${label.toLowerCase()}, with recent searches and filters.`,
        refinements: ["Add recent searches", "Show a no-results state", "Add sort options"],
      },
      {
        title: "Browse by category",
        description: "A category grid you can drill into, with a search field pinned to the top.",
        refinements: ["Add trending section", "Show result counts", "Support multi-select filters"],
      },
    ],
  },
  {
    test: /profile|account|me\b/i,
    build: () => [
      {
        title: "Profile screen",
        description: "Your details, preferences and account actions, with a link to settings.",
        refinements: ["Add an avatar upload", "Show activity summary", "Add a sign-out action"],
      },
      {
        title: "Account settings",
        description: "Editable account fields grouped into sections, each saving inline.",
        refinements: ["Add security section", "Show linked accounts", "Add delete account"],
      },
    ],
  },
  {
    test: /notification|bell|alert/i,
    build: () => [
      {
        title: "Notifications",
        description: "A dated list of alerts, unread first, each opening the thing it refers to.",
        refinements: ["Add mark-all-read", "Group by day", "Add an empty state"],
      },
    ],
  },
  {
    test: /setting|preference|gear/i,
    build: () => [
      {
        title: "Settings",
        description: "Grouped preferences with toggles, plus account and privacy sections.",
        refinements: ["Add notification controls", "Add appearance section", "Show app version"],
      },
    ],
  },
  {
    test: /add|new|create|\+/i,
    build: (label) => [
      {
        title: `Create ${label.replace(/^(add|new|create)\s*/i, "").trim() || "item"}`,
        description: `A short form opened from ${label.toLowerCase()}, with validation and a primary save action.`,
        refinements: ["Add field validation", "Support save as draft", "Add a cancel confirmation"],
      },
    ],
  },
];

/** Candidate screens for an unmapped hotspot — best first. */
export function suggestionsFor(label: string, fromScreenName: string): ScreenSuggestion[] {
  for (const p of PATTERNS) {
    if (p.test.test(label)) return p.build(label, fromScreenName);
  }

  const Label = label.charAt(0).toUpperCase() + label.slice(1);
  return [
    {
      title: `${Label} detail`,
      description: `Opens when someone taps “${label}” on ${fromScreenName}. Shows the full detail and the actions that follow from it.`,
      refinements: ["Add a summary header", "Include recent activity", "Add a primary action"],
    },
    {
      title: `${Label} overview`,
      description: `A lighter summary of “${label}” with a link through to the full detail.`,
      refinements: ["Show key stats", "Add a share action", "Link to related items"],
    },
  ];
}

/** Stable screen id for a generated screen, unique against what already exists. */
export function screenIdFor(title: string, taken: (id: string) => boolean): string {
  const base = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "screen";
  if (!taken(base)) return base;
  let n = 2;
  while (taken(`${base}-${n}`)) n += 1;
  return `${base}-${n}`;
}
