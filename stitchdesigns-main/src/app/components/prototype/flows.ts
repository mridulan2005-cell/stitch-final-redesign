// Flow graph for the prototype editor's "flows" tab.
//
// A flow is an ordered chain of nodes. A node is either a screen (rendered from
// the screen catalog) or a reference to another flow — that reference is what
// makes drill-down + breadcrumbs work: selecting a sub-flow pushes it onto the
// trail and the same panel re-renders with the nested chain.

export type FlowNode =
  // A screen. If it has `branches`, it is a decision point: the outcome depends
  // on what the user does, and each branch carries its own downstream chain.
  | { kind: "screen"; id: string; branches?: FlowBranch[] }
  | { kind: "flow"; id: string };

/** One outcome of a branching screen. */
export interface FlowBranch {
  id: string;
  /** Shown in the outcome dropdown, e.g. "Payment approved". */
  label: string;
  /** The connected / recommended path — checkmarked and selected by default. */
  ideal?: boolean;
  /** The chain that continues if this outcome is taken. */
  nodes: FlowNode[];
}

export interface Flow {
  id: string;
  name: string;
  /** Short description shown under the flow name in the list. */
  summary: string;
  /** Used by the filter menu. */
  tags: FlowTag[];
  nodes: FlowNode[];
}

export type FlowTag = "Core" | "Auth" | "Money" | "Draft";

/** The default outcome for a branching screen. */
export function idealBranch(branches: FlowBranch[]): FlowBranch {
  return branches.find((b) => b.ideal) ?? branches[0];
}

export const FLOWS: Record<string, Flow> = {
  onboarding: {
    id: "onboarding",
    name: "Onboarding",
    summary: "First run through to a linked account",
    tags: ["Core", "Auth"],
    nodes: [
      { kind: "screen", id: "splash" },
      {
        kind: "screen",
        id: "signin",
        branches: [
          {
            id: "new",
            label: "New here",
            ideal: true,
            nodes: [
              { kind: "screen", id: "create-account" },
              { kind: "flow", id: "verification" },
              { kind: "screen", id: "link-bank" },
            ],
          },
          {
            id: "returning",
            label: "Returning user",
            nodes: [{ kind: "screen", id: "home" }],
          },
        ],
      },
    ],
  },
  verification: {
    id: "verification",
    name: "Identity Verification",
    summary: "KYC step nested inside onboarding",
    tags: ["Auth"],
    nodes: [
      { kind: "screen", id: "otp" },
      { kind: "screen", id: "id-upload" },
      { kind: "screen", id: "verified" },
    ],
  },
  payments: {
    id: "payments",
    name: "Payments",
    summary: "Paying a bill end to end",
    tags: ["Core", "Money"],
    nodes: [
      { kind: "screen", id: "pay-bills" },
      { kind: "screen", id: "select-account" },
      {
        kind: "screen",
        id: "confirm-payment",
        branches: [
          {
            id: "approved",
            label: "Payment approved",
            ideal: true,
            nodes: [{ kind: "screen", id: "payment-success" }],
          },
          {
            id: "declined",
            label: "Payment declined",
            nodes: [
              { kind: "screen", id: "payment-failed" },
              { kind: "flow", id: "add-method" },
            ],
          },
        ],
      },
    ],
  },
  "add-method": {
    id: "add-method",
    name: "Add Payment Method",
    summary: "Card capture nested inside payments",
    tags: ["Money", "Draft"],
    nodes: [
      { kind: "screen", id: "card-details" },
      { kind: "screen", id: "billing-address" },
      { kind: "screen", id: "saved-methods" },
    ],
  },
  budgeting: {
    id: "budgeting",
    name: "Budgeting",
    summary: "Reviewing and capping category spend",
    tags: ["Core"],
    nodes: [
      { kind: "screen", id: "budget" },
      { kind: "screen", id: "category-detail" },
      { kind: "screen", id: "set-limit" },
    ],
  },
  activity: {
    id: "activity",
    name: "Activity",
    summary: "Browsing and filtering transactions",
    tags: ["Core"],
    nodes: [
      { kind: "screen", id: "home" },
      { kind: "screen", id: "transactions" },
    ],
  },
};

/** Flows shown at the top level of the list (sub-flows are reached by drilling in). */
export const ROOT_FLOW_IDS = ["onboarding", "payments", "budgeting", "activity"];

export const ALL_TAGS: FlowTag[] = ["Core", "Auth", "Money", "Draft"];

/** Count screens along a node list, following the ideal branch at decisions. */
function countNodes(nodes: FlowNode[], seen: Set<string>): number {
  return nodes.reduce((n, node) => {
    if (node.kind === "flow") return n + countScreens(node.id, seen);
    let c = 1;
    if (node.branches?.length) c += countNodes(idealBranch(node.branches).nodes, seen);
    return n + c;
  }, 0);
}

/** Total screens in a flow's happy path, counting nested sub-flows. */
export function countScreens(flowId: string, seen: Set<string> = new Set()): number {
  if (seen.has(flowId)) return 0;
  seen.add(flowId);
  const flow = FLOWS[flowId];
  if (!flow) return 0;
  return countNodes(flow.nodes, seen);
}

/** The first screen reachable in a node list — used to seed the preview. */
export function firstScreenOfNodes(nodes: FlowNode[], seen: Set<string> = new Set()): string | undefined {
  for (const node of nodes) {
    if (node.kind === "screen") return node.id;
    const nested = firstScreenOf(node.id, seen);
    if (nested) return nested;
  }
  return undefined;
}

/** The first screen reachable in a flow — used to seed the preview on select. */
export function firstScreenOf(flowId: string, seen: Set<string> = new Set()): string | undefined {
  if (seen.has(flowId)) return undefined;
  seen.add(flowId);
  const flow = FLOWS[flowId];
  if (!flow) return undefined;
  return firstScreenOfNodes(flow.nodes, seen);
}
