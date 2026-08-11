// Component-level selection inside a screen.
//
// Screens on the canvas are plain markup, so the pieces you can select are
// marked up where they are drawn: `data-comp` is the (globally unique) key,
// `data-comp-label` is what the selection chip calls it. A leaf carrying
// `data-comp-text` is the bit "Edit text" rewrites.
//
// Nothing here owns state — WorkspaceApp holds the selection, the deletions and
// the text overrides, and this module is the vocabulary they share.

import { useLayoutEffect, type RefObject } from "react";

export interface ElementSel {
  /** `data-comp` — e.g. "home.balance-card". */
  key: string;
  /** `data-comp-label` — e.g. "Balance Card". */
  label: string;
  /** Screen the component belongs to, taken from the key prefix. */
  frame: string;
  /** The live node, so the outline can be re-measured after pan / zoom. */
  el: HTMLElement;
}

/** Read a marked-up node into a selection. */
export function readElement(el: HTMLElement): ElementSel | null {
  const key = el.dataset.comp;
  if (!key) return null;
  return {
    key,
    label: el.dataset.compLabel ?? key.split(".").pop() ?? key,
    frame: key.split(".")[0],
    el,
  };
}

/** How the screen a component sits on is named in the prompt tag. */
export const FRAME_NAMES: Record<string, string> = {
  home: "Home",
  trans: "Transactions",
  zenith: "Zenith Finance",
};

/** The text "Edit text" edits — the marked leaf, or the node itself if it is one. */
export function textLeaf(el: HTMLElement): HTMLElement | null {
  if (el.matches("[data-comp-text]")) return el;
  return el.querySelector<HTMLElement>("[data-comp-text]");
}

/**
 * Push deletions and text edits onto the canvas markup.
 *
 * The screens are static JSX, so the overrides cannot be threaded through them
 * without rewriting every frame. They are applied to the DOM instead — after
 * *every* render, since any unrelated state change re-renders the frames and
 * would otherwise put the original text back.
 */
export function useElementOverrides(
  root: RefObject<HTMLElement | null>,
  hidden: string[],
  text: Record<string, string>,
) {
  useLayoutEffect(() => {
    const host = root.current;
    if (!host) return;
    host.querySelectorAll<HTMLElement>("[data-comp]").forEach((node) => {
      const key = node.dataset.comp!;
      node.style.display = hidden.includes(key) ? "none" : "";
      const next = text[key];
      if (next === undefined) return;
      const leaf = textLeaf(node);
      if (leaf && leaf.textContent !== next) leaf.textContent = next;
    });
  });
}

/** The text a fresh "Edit text" starts from. */
export function currentText(el: HTMLElement): string {
  return textLeaf(el)?.textContent?.trim() ?? "";
}

// ── Suggestion chips ─────────────────────────────────────────────────────────

export interface ElementSuggestions {
  /** Changes to the component itself. */
  edits: string[];
  /** Flows the component could open — these build screens, not tweak one. */
  flows: string[];
}

interface Rule {
  test: RegExp;
  edits: string[];
  flows: string[];
}

const RULES: Rule[] = [
  {
    test: /nav|tab bar/i,
    edits: ["Add a fourth tab", "Use filled icons for the active tab", "Move the labels under the icons"],
    flows: ["Wire each tab to its screen", "Add a settings tab and screen"],
  },
  {
    test: /balance|amount|total/i,
    edits: ["Show the change as a chip", "Hide the balance behind a tap", "Add a currency switcher"],
    flows: ["Add a balance history screen", "Add a transfer flow"],
  },
  {
    test: /budget|chart|donut|graph/i,
    edits: ["Switch to a horizontal bar", "Show the amount left instead of spent", "Warn when over 80%"],
    flows: ["Add a budget breakdown screen", "Add a set-a-limit flow"],
  },
  {
    test: /list|transaction|activity|recent/i,
    edits: ["Group the rows by date", "Add category icons", "Show an empty state"],
    flows: ["Add a transaction detail screen", "Add filter and search"],
  },
  {
    test: /button|cta|add funds|pay|action/i,
    edits: ["Make it full width", "Add a loading state", "Use a secondary style"],
    flows: ["Add the screen this opens", "Add a confirmation step"],
  },
  {
    test: /search|filter|field|input/i,
    edits: ["Add a clear button", "Show recent searches", "Add placeholder copy"],
    flows: ["Add a search results screen", "Add an advanced filter sheet"],
  },
  {
    test: /header|status|title|heading/i,
    edits: ["Make the title larger", "Add a back button", "Add an overflow menu"],
    flows: ["Add a notifications screen", "Add a profile screen"],
  },
  {
    test: /card|tile|panel/i,
    edits: ["Soften the corners", "Add a subtle shadow", "Tighten the padding"],
    flows: ["Add a detail screen for this card", "Add a swipe-to-dismiss flow"],
  },
  {
    test: /palette|colou?r|token|type/i,
    edits: ["Try a warmer accent", "Raise the contrast", "Add a dark variant"],
    flows: ["Apply this palette across every screen"],
  },
];

/** Chips offered once a component is tagged in the prompt bar. */
export function elementSuggestions(label: string): ElementSuggestions {
  const hit = RULES.find((r) => r.test.test(label));
  if (hit) return { edits: hit.edits, flows: hit.flows };
  return {
    edits: [`Restyle the ${label.toLowerCase()}`, "Adjust the spacing", "Add a hover state"],
    flows: [`Add a screen this ${label.toLowerCase()} opens`],
  };
}
