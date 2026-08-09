// Content for the "Suggest flows" / "Imagine a new screen" modal.
//
// Both tabs share one card shape: a numbered idea with a title, an estimated
// size, and a line saying where it starts from and what it leads to.

export interface Suggestion {
  id: string;
  title: string;
  /** e.g. "3 screens" — omitted for single-screen ideas. */
  size?: string;
  /** Where the idea is reached from and what it produces. */
  detail: string;
}

/** Flow ideas — seeded from the component the user selected in edit mode. */
export function suggestedFlows(hotspot: string): Suggestion[] {
  return [
    {
      id: "budget-creation",
      title: "Budget Creation",
      size: "3 screens",
      detail: `Starts from "${hotspot}" and ends with a saved monthly budget.`,
    },
    {
      id: "goal-setup",
      title: "Savings Goal Setup",
      size: "4 screens",
      detail: `Starts from "${hotspot}", picks a target and funding account, ends on a tracked goal.`,
    },
    {
      id: "quick-transfer",
      title: "Quick Transfer",
      size: "2 screens",
      detail: `Starts from "${hotspot}" and ends on a transfer confirmation.`,
    },
  ];
}

/** Screen ideas — the existing "Imagine a new screen" suggestions. */
export function suggestedScreens(hotspot?: string): Suggestion[] {
  const from = hotspot ? `the "${hotspot}" element` : "the current screen";
  return [
    {
      id: "spending-insights",
      title: "Monthly Spending Insights Dashboard",
      detail: `Visualises spending habits through interactive charts, reached from ${from}.`,
    },
    {
      id: "goal-setter",
      title: "Personalised Financial Goal Setter",
      detail: "Lets people create and track progress toward specific savings targets.",
    },
    {
      id: "payment-calendar",
      title: "Scheduled Payment Calendar View",
      detail: "A calendar interface to manage and preview upcoming financial obligations.",
    },
    {
      id: "security-hub",
      title: "Account Security Settings Hub",
      detail: "Consolidates authentication and notification preferences in one place.",
    },
  ];
}
