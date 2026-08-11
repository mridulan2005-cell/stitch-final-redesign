// Screen catalog for the prototype editor.
//
// Every screen renders responsively into whatever box it is given, so the same
// component powers both the tiny sidebar thumbnails and the full-size preview
// (including the phone / tablet / desktop viewport switch).

import type { ReactNode } from "react";

// ── Financely design language (light surfaces, from the canvas frames) ────────

const INK = "#030813";
const MUTED = "#45474c";
const ACCENT = "#9730a1";
const SUCCESS = "#006D3C";
const DANGER = "#ba1a1a";
const LINE = "#e0e3e5";
const PAGE = "#f7fafc";

// ── Shared primitives ────────────────────────────────────────────────────────

function StatusBar({ title = "Financely" }: { title?: string }) {
  return (
    <div className="flex items-center justify-between px-[18px] py-[10px] shrink-0" style={{ background: PAGE }}>
      <span className="text-[13px] font-bold" style={{ color: INK }}>{title}</span>
      <span className="text-[12px]" style={{ color: ACCENT }}>9:41</span>
    </div>
  );
}

function AppBar({ title, back = true }: { title: string; back?: boolean }) {
  return (
    <div
      className="flex items-center gap-[10px] px-[16px] py-[12px] shrink-0 border-b"
      style={{ background: PAGE, borderColor: LINE }}
    >
      {back && (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 4L6.5 10l6 6" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <span className="text-[16px] font-semibold" style={{ color: INK }}>{title}</span>
    </div>
  );
}

function BottomNav({ active = "Dashboard" }: { active?: string }) {
  return (
    <div
      className="flex items-center justify-around px-[12px] py-[10px] shrink-0 border-t mt-auto"
      style={{ background: PAGE, borderColor: LINE }}
    >
      {["Dashboard", "Activity", "Budget"].map((l) => (
        <span
          key={l}
          data-hotspot={l}
          className={`text-[11px] px-[10px] py-[4px] rounded-full ${l === active ? "font-semibold" : ""}`}
          style={
            l === active
              ? { color: ACCENT, background: "rgba(151,48,161,0.1)" }
              : { color: MUTED }
          }
        >
          {l}
        </span>
      ))}
    </div>
  );
}

function Page({ children, pad = true }: { children: ReactNode; pad?: boolean }) {
  return (
    <div className={`flex flex-col gap-[12px] flex-1 min-h-0 overflow-hidden ${pad ? "p-[16px]" : ""}`} style={{ background: PAGE }}>
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[14px] border p-[14px] ${className}`} style={{ background: "#fff", borderColor: LINE }}>
      {children}
    </div>
  );
}

function PrimaryButton({ label, tone = "dark" }: { label: string; tone?: "dark" | "accent" }) {
  return (
    <div
      data-hotspot={label}
      // The screen's primary CTA is what carries the flow forward, so a tap on it
      // steps the prototype rather than asking the agent to map it.
      data-advance="true"
      className="rounded-[10px] py-[12px] flex items-center justify-center w-full"
      style={{ background: tone === "dark" ? INK : ACCENT }}
    >
      <span className="text-[13px] font-semibold text-white">{label}</span>
    </div>
  );
}

function Field({ label, value, placeholder }: { label: string; value?: string; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: MUTED }}>{label}</span>
      <div data-hotspot={label} className="rounded-[10px] border px-[12px] py-[11px] w-full" style={{ background: "#fff", borderColor: LINE }}>
        <span className="text-[13px]" style={{ color: value ? INK : "#9aa0a6" }}>{value ?? placeholder}</span>
      </div>
    </div>
  );
}

function Row({
  title, sub, amount, tone = MUTED,
}: { title: string; sub: string; amount: string; tone?: string }) {
  return (
    <div data-hotspot={title} className="flex items-center justify-between gap-[10px] py-[10px]">
      <div className="flex items-center gap-[10px] min-w-0">
        <div className="size-[34px] rounded-full shrink-0" style={{ background: "#eef1f4" }} />
        <div className="min-w-0">
          <div className="text-[13px] font-medium truncate" style={{ color: INK }}>{title}</div>
          <div className="text-[11px] truncate" style={{ color: MUTED }}>{sub}</div>
        </div>
      </div>
      <span className="text-[13px] font-semibold shrink-0" style={{ color: tone }}>{amount}</span>
    </div>
  );
}

function Hero({ icon, title, sub }: { icon: ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px] flex-1 text-center px-[24px]">
      {icon}
      <span className="text-[20px] font-bold" style={{ color: INK }}>{title}</span>
      <span className="text-[13px] leading-[19px]" style={{ color: MUTED }}>{sub}</span>
    </div>
  );
}

function Ring({ pct, label, sub }: { pct: number; label: string; sub: string }) {
  const C = 2 * Math.PI * 46;
  return (
    <div className="flex flex-col items-center gap-[6px]">
      <div className="relative flex items-center justify-center size-[124px]">
        <svg width="124" height="124" viewBox="0 0 108 108">
          <circle cx="54" cy="54" r="46" fill="none" stroke="#edf2f7" strokeWidth="10" />
          <circle
            cx="54" cy="54" r="46" fill="none" stroke={SUCCESS} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={`${(pct / 100) * C} ${C}`} transform="rotate(-90 54 54)"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-[20px] font-bold" style={{ color: INK }}>{label}</span>
        </div>
      </div>
      <span className="text-[12px]" style={{ color: MUTED }}>{sub}</span>
    </div>
  );
}

// ── Screens ──────────────────────────────────────────────────────────────────

export interface ScreenDef {
  id: string;
  name: string;
  render: () => ReactNode;
  /** True for screens the agent created at runtime (badged in the UI). */
  generated?: boolean;
}

const list: ScreenDef[] = [
  // Onboarding
  {
    id: "splash",
    name: "Splash",
    render: () => (
      <div className="flex flex-col h-full" style={{ background: INK }}>
        <div className="flex flex-col items-center justify-center gap-[12px] flex-1">
          <div className="size-[64px] rounded-[18px] flex items-center justify-center" style={{ background: ACCENT }}>
            <span className="text-[28px] font-bold text-white">F</span>
          </div>
          <span className="text-[24px] font-bold text-white">Financely</span>
          <span className="text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>Money, minus the mess.</span>
        </div>
      </div>
    ),
  },
  {
    id: "signin",
    name: "Sign In",
    render: () => (
      <div className="flex flex-col h-full">
        <StatusBar />
        <Page>
          <span className="text-[24px] font-bold" style={{ color: INK }}>Welcome back</span>
          <span className="text-[13px] mb-[6px]" style={{ color: MUTED }}>Sign in to continue to Financely.</span>
          <Field label="Email" value="mridula@example.com" />
          <Field label="Password" value="••••••••••" />
          <div className="mt-[6px]"><PrimaryButton label="Sign in" /></div>
          <span className="text-[12px] text-center mt-[4px]" style={{ color: ACCENT }}>Forgot password?</span>
        </Page>
      </div>
    ),
  },
  {
    id: "create-account",
    name: "Create Account",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Create account" />
        <Page>
          <Field label="Full name" placeholder="Your name" />
          <Field label="Email" placeholder="you@example.com" />
          <Field label="Password" placeholder="At least 8 characters" />
          <div className="flex items-start gap-[8px] mt-[2px]">
            <div className="size-[16px] rounded-[4px] border mt-[1px] shrink-0" style={{ borderColor: LINE }} />
            <span className="text-[11px] leading-[16px]" style={{ color: MUTED }}>
              I agree to the Terms of Service and Privacy Policy.
            </span>
          </div>
          <div className="mt-auto"><PrimaryButton label="Continue" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "link-bank",
    name: "Link Bank",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Link your bank" />
        <Page>
          <span className="text-[13px]" style={{ color: MUTED }}>Choose your bank to import transactions.</span>
          {["Chase", "Bank of America", "Wells Fargo", "Monzo"].map((b) => (
            <Card key={b} className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="size-[32px] rounded-[8px]" style={{ background: "#eef1f4" }} />
                <span className="text-[13px] font-medium" style={{ color: INK }}>{b}</span>
              </div>
              <span className="text-[16px]" style={{ color: MUTED }}>›</span>
            </Card>
          ))}
        </Page>
      </div>
    ),
  },

  // Verification (sub-flow)
  {
    id: "otp",
    name: "Enter Code",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Verify it's you" />
        <Page>
          <span className="text-[13px]" style={{ color: MUTED }}>We sent a 6-digit code to your phone.</span>
          <div className="flex gap-[8px] justify-between mt-[6px]">
            {["4", "1", "9", "2", "", ""].map((d, i) => (
              <div
                key={i}
                className="flex-1 aspect-square max-h-[56px] rounded-[10px] border flex items-center justify-center"
                style={{ background: "#fff", borderColor: d ? ACCENT : LINE }}
              >
                <span className="text-[18px] font-semibold" style={{ color: INK }}>{d}</span>
              </div>
            ))}
          </div>
          <span className="text-[12px] mt-[4px]" style={{ color: ACCENT }}>Resend code in 0:24</span>
          <div className="mt-auto"><PrimaryButton label="Verify" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "id-upload",
    name: "ID Upload",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Upload ID" />
        <Page>
          <div
            className="rounded-[14px] border border-dashed flex flex-col items-center justify-center gap-[8px] py-[40px]"
            style={{ borderColor: "#c6c6cc", background: "#fff" }}
          >
            <div className="size-[40px] rounded-full" style={{ background: "#eef1f4" }} />
            <span className="text-[13px] font-medium" style={{ color: INK }}>Take a photo of your ID</span>
            <span className="text-[11px]" style={{ color: MUTED }}>Passport or driver's licence</span>
          </div>
          <Card>
            <span className="text-[12px] leading-[18px]" style={{ color: MUTED }}>
              Your ID is encrypted and only used to verify your identity.
            </span>
          </Card>
          <div className="mt-auto"><PrimaryButton label="Upload" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "verified",
    name: "Verified",
    render: () => (
      <div className="flex flex-col h-full" style={{ background: PAGE }}>
        <StatusBar />
        <Hero
          icon={
            <div className="size-[64px] rounded-full flex items-center justify-center" style={{ background: "rgba(0,109,60,0.12)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5 5L20 6.5" stroke={SUCCESS} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          }
          title="You're verified"
          sub="Your identity has been confirmed. You can now move money."
        />
        <div className="p-[16px]"><PrimaryButton label="Continue" /></div>
      </div>
    ),
  },

  // Core
  {
    id: "home",
    name: "Home",
    render: () => (
      <div className="flex flex-col h-full">
        <StatusBar />
        <Page>
          <Card>
            <div className="text-[10px] uppercase tracking-wide" style={{ color: MUTED }}>Total balance</div>
            <div className="text-[30px] font-bold leading-[36px]" style={{ color: INK }}>$12,450.00</div>
            <div className="text-[12px] mb-[12px]" style={{ color: ACCENT }}>↑ +2.4% from last month</div>
            <PrimaryButton label="Add Funds" />
          </Card>
          <Card>
            <div className="text-[14px] font-semibold mb-[6px]" style={{ color: INK }}>Monthly Budget</div>
            <div className="flex justify-center"><Ring pct={48} label="48%" sub="Spent $1,200 of $2,500" /></div>
          </Card>
          <div className="text-[14px] font-semibold" style={{ color: INK }}>Recent</div>
          <Card className="!py-[4px]">
            <Row title="Apple Subscription" sub="Today · 08:42" amount="-$0.99" />
            <Row title="Netflix" sub="Yesterday · 09:00" amount="-$15.99" tone={DANGER} />
            <Row title="Salary" sub="Sep 12 · 06:00" amount="+$3,200" tone={SUCCESS} />
          </Card>
        </Page>
        <BottomNav active="Dashboard" />
      </div>
    ),
  },
  {
    id: "transactions",
    name: "Transaction History",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Transaction History" />
        <Page>
          <div className="rounded-[10px] border px-[12px] py-[11px]" style={{ background: "#fff", borderColor: LINE }}>
            <span className="text-[13px]" style={{ color: "#9aa0a6" }}>Search by merchant, category…</span>
          </div>
          <div className="flex gap-[8px]">
            {["All", "Spending", "Income"].map((f, i) => (
              <div
                key={f}
                className="px-[14px] py-[7px] rounded-[8px]"
                style={i === 0 ? { background: INK } : { background: "#e9edf0" }}
              >
                <span className="text-[11px] font-semibold" style={{ color: i === 0 ? "#fff" : MUTED }}>{f}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] uppercase tracking-wide mt-[2px]" style={{ color: MUTED }}>Today, Sep 15</div>
          <Card className="!py-[4px]">
            <Row title="Starbucks Coffee" sub="Dining · 08:42 AM" amount="-$12.50" />
            <Row title="Apple Store" sub="Shopping · 11:15 AM" amount="-$1,299.00" />
            <Row title="Stripe Payout" sub="Income · 06:00 AM" amount="+$4,250.00" tone={ACCENT} />
          </Card>
          <div className="text-[10px] uppercase tracking-wide mt-[2px]" style={{ color: MUTED }}>Yesterday, Sep 14</div>
          <Card className="!py-[4px]">
            <Row title="Uber" sub="Transport · 10:20" amount="-$32.40" />
            <Row title="Netflix Subscription" sub="Entertainment · 09:00" amount="-$15.99" />
            <Row title="Whole Foods Market" sub="Groceries · 02:45 PM" amount="-$184.20" />
          </Card>
        </Page>
        <BottomNav active="Activity" />
      </div>
    ),
  },

  // Payments
  {
    id: "pay-bills",
    name: "Pay Bills",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Pay Bills" />
        <Page>
          <div className="rounded-[12px] border p-[12px]" style={{ background: "#ffdad6", borderColor: "rgba(186,26,26,0.2)" }}>
            <div className="text-[13px] font-semibold" style={{ color: "#93000a" }}>1 Bill Overdue</div>
            <div className="text-[11px] mb-[10px]" style={{ color: "rgba(147,0,10,0.8)" }}>City Water Utilities · Due 2 days ago</div>
            <div className="rounded-[8px] px-[12px] py-[7px] self-start inline-block" style={{ background: DANGER }}>
              <span className="text-[11px] font-semibold text-white">Pay $52.10</span>
            </div>
          </div>
          <div className="text-[14px] font-semibold" style={{ color: INK }}>Upcoming</div>
          {[
            { n: "Rent", d: "Due Oct 01", a: "$1,350.00" },
            { n: "Electricity", d: "Due Oct 04", a: "$88.20" },
            { n: "Internet", d: "Due Oct 09", a: "$60.00" },
          ].map((b) => (
            <Card key={b.n}>
              <div className="flex items-center justify-between mb-[10px]">
                <div>
                  <div className="text-[13px] font-medium" style={{ color: INK }}>{b.n}</div>
                  <div className="text-[11px]" style={{ color: MUTED }}>{b.d}</div>
                </div>
                <span className="text-[14px] font-semibold" style={{ color: INK }}>{b.a}</span>
              </div>
              <PrimaryButton label="Pay Now" />
            </Card>
          ))}
        </Page>
        <BottomNav active="Activity" />
      </div>
    ),
  },
  {
    id: "select-account",
    name: "Select Account",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Pay from" />
        <Page>
          {[
            { n: "Everyday Checking", d: "•••• 4821", a: "$8,240.10", sel: true },
            { n: "Savings", d: "•••• 9930", a: "$4,209.90", sel: false },
            { n: "Visa Credit", d: "•••• 6411", a: "$1,020.00 avail.", sel: false },
          ].map((acc) => (
            <Card key={acc.n} className={acc.sel ? "!border-2" : ""}>
              <div className="flex items-center justify-between" style={acc.sel ? { borderColor: ACCENT } : undefined}>
                <div className="flex items-center gap-[10px]">
                  <div
                    className="size-[18px] rounded-full border flex items-center justify-center shrink-0"
                    style={{ borderColor: acc.sel ? ACCENT : "#c6c6cc" }}
                  >
                    {acc.sel && <div className="size-[9px] rounded-full" style={{ background: ACCENT }} />}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium" style={{ color: INK }}>{acc.n}</div>
                    <div className="text-[11px]" style={{ color: MUTED }}>{acc.d}</div>
                  </div>
                </div>
                <span className="text-[12px] font-semibold" style={{ color: INK }}>{acc.a}</span>
              </div>
            </Card>
          ))}
          <div className="mt-auto"><PrimaryButton label="Continue" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "confirm-payment",
    name: "Confirm Payment",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Confirm" />
        <Page>
          <Card className="flex flex-col items-center !py-[22px]">
            <span className="text-[11px] uppercase tracking-wide" style={{ color: MUTED }}>Amount</span>
            <span className="text-[34px] font-bold leading-[42px]" style={{ color: INK }}>$52.10</span>
            <span className="text-[12px]" style={{ color: MUTED }}>to City Water Utilities</span>
          </Card>
          <Card>
            {[
              ["From", "Everyday Checking ···· 4821"],
              ["Arrives", "Instantly"],
              ["Fee", "No fee"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-[8px]">
                <span className="text-[12px]" style={{ color: MUTED }}>{k}</span>
                <span className="text-[12px] font-medium" style={{ color: INK }}>{v}</span>
              </div>
            ))}
          </Card>
          <div className="mt-auto"><PrimaryButton label="Slide to pay $52.10" tone="accent" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "payment-success",
    name: "Payment Sent",
    render: () => (
      <div className="flex flex-col h-full" style={{ background: PAGE }}>
        <StatusBar />
        <Hero
          icon={
            <div className="size-[64px] rounded-full flex items-center justify-center" style={{ background: "rgba(0,109,60,0.12)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5 5L20 6.5" stroke={SUCCESS} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          }
          title="$52.10 sent"
          sub="City Water Utilities has been paid. A receipt is in your activity."
        />
        <div className="p-[16px] flex flex-col gap-[8px]">
          <PrimaryButton label="Done" />
          <span className="text-[12px] text-center" style={{ color: ACCENT }}>View receipt</span>
        </div>
      </div>
    ),
  },
  {
    id: "payment-failed",
    name: "Payment Declined",
    render: () => (
      <div className="flex flex-col h-full" style={{ background: PAGE }}>
        <StatusBar />
        <Hero
          icon={
            <div className="size-[64px] rounded-full flex items-center justify-center" style={{ background: "rgba(186,26,26,0.12)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M7 7l10 10M17 7L7 17" stroke={DANGER} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          }
          title="Payment declined"
          sub="Your bank declined this payment. Try a different card or account."
        />
        <div className="p-[16px] flex flex-col gap-[8px]">
          <PrimaryButton label="Try another method" />
          <span className="text-[12px] text-center" style={{ color: MUTED }}>Cancel</span>
        </div>
      </div>
    ),
  },

  // Add payment method (sub-flow)
  {
    id: "card-details",
    name: "Card Details",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Add card" />
        <Page>
          <div className="rounded-[16px] p-[18px] flex flex-col justify-between" style={{ background: INK, minHeight: 150 }}>
            <div className="flex justify-between items-start">
              <div className="w-[38px] h-[26px] rounded-[5px]" style={{ background: "rgba(255,255,255,0.25)" }} />
              <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>VISA</span>
            </div>
            <div>
              <div className="text-[16px] tracking-[3px] text-white mb-[6px]">4821 •••• •••• 6411</div>
              <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>MRIDULA NAIR · 09/29</div>
            </div>
          </div>
          <Field label="Card number" value="4821 0092 1144 6411" />
          <div className="flex gap-[10px]">
            <Field label="Expiry" value="09/29" />
            <Field label="CVC" value="•••" />
          </div>
          <div className="mt-auto"><PrimaryButton label="Add card" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "billing-address",
    name: "Billing Address",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Billing address" />
        <Page>
          <Field label="Address line 1" value="221B Baker Street" />
          <Field label="Address line 2" placeholder="Apartment, suite (optional)" />
          <div className="flex gap-[10px]">
            <Field label="City" value="London" />
            <Field label="Postcode" value="NW1 6XE" />
          </div>
          <Field label="Country" value="United Kingdom" />
          <div className="mt-auto"><PrimaryButton label="Save address" /></div>
        </Page>
      </div>
    ),
  },
  {
    id: "saved-methods",
    name: "Saved Methods",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Payment methods" />
        <Page>
          {[
            { n: "Visa ···· 6411", d: "Default · Expires 09/29" },
            { n: "Mastercard ···· 2280", d: "Expires 02/27" },
            { n: "Everyday Checking", d: "···· 4821" },
          ].map((m) => (
            <Card key={m.n} className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[24px] rounded-[5px]" style={{ background: "#eef1f4" }} />
                <div>
                  <div className="text-[13px] font-medium" style={{ color: INK }}>{m.n}</div>
                  <div className="text-[11px]" style={{ color: MUTED }}>{m.d}</div>
                </div>
              </div>
              <span className="text-[16px]" style={{ color: MUTED }}>›</span>
            </Card>
          ))}
          <div
            className="rounded-[10px] border border-dashed py-[12px] flex items-center justify-center"
            style={{ borderColor: "#c6c6cc" }}
          >
            <span className="text-[12px] font-medium" style={{ color: MUTED }}>+ Add payment method</span>
          </div>
        </Page>
      </div>
    ),
  },

  // Budgeting
  {
    id: "budget",
    name: "Budget Overview",
    render: () => (
      <div className="flex flex-col h-full">
        <StatusBar />
        <Page>
          <Card className="flex flex-col items-center">
            <Ring pct={62} label="62%" sub="of your September budget used" />
          </Card>
          <div className="text-[14px] font-semibold" style={{ color: INK }}>Categories</div>
          {[
            { n: "Groceries", v: 78, a: "$420 / $540" },
            { n: "Dining", v: 54, a: "$162 / $300" },
            { n: "Transport", v: 31, a: "$62 / $200" },
            { n: "Shopping", v: 92, a: "$460 / $500" },
          ].map((c) => (
            <Card key={c.n} className="!py-[12px]">
              <div className="flex items-center justify-between mb-[8px]">
                <span className="text-[13px] font-medium" style={{ color: INK }}>{c.n}</span>
                <span className="text-[11px]" style={{ color: MUTED }}>{c.a}</span>
              </div>
              <div className="h-[6px] rounded-full overflow-hidden" style={{ background: "#e9edf0" }}>
                <div className="h-full rounded-full" style={{ width: `${c.v}%`, background: c.v > 85 ? DANGER : ACCENT }} />
              </div>
            </Card>
          ))}
        </Page>
        <BottomNav active="Budget" />
      </div>
    ),
  },
  {
    id: "category-detail",
    name: "Category Detail",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Groceries" />
        <Page>
          <Card>
            <div className="text-[10px] uppercase tracking-wide" style={{ color: MUTED }}>Spent this month</div>
            <div className="text-[28px] font-bold leading-[34px]" style={{ color: INK }}>$420.18</div>
            <div className="text-[12px]" style={{ color: MUTED }}>of $540 budget · $119.82 left</div>
            <div className="h-[6px] rounded-full overflow-hidden mt-[12px]" style={{ background: "#e9edf0" }}>
              <div className="h-full rounded-full" style={{ width: "78%", background: ACCENT }} />
            </div>
          </Card>
          <div className="text-[14px] font-semibold" style={{ color: INK }}>Transactions</div>
          <Card className="!py-[4px]">
            <Row title="Whole Foods Market" sub="Sep 14 · 02:45 PM" amount="-$184.20" />
            <Row title="Trader Joe's" sub="Sep 09 · 06:10 PM" amount="-$96.40" />
            <Row title="Local Farmers Market" sub="Sep 04 · 10:05 AM" amount="-$48.00" />
          </Card>
        </Page>
      </div>
    ),
  },
  {
    id: "set-limit",
    name: "Set Limit",
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title="Set monthly limit" />
        <Page>
          <Card className="flex flex-col items-center !py-[24px]">
            <span className="text-[11px] uppercase tracking-wide" style={{ color: MUTED }}>Groceries limit</span>
            <span className="text-[36px] font-bold leading-[44px]" style={{ color: INK }}>$540</span>
          </Card>
          <div className="px-[4px] py-[10px]">
            <div className="h-[6px] rounded-full relative" style={{ background: "#e9edf0" }}>
              <div className="h-full rounded-full" style={{ width: "60%", background: ACCENT }} />
              <div
                className="absolute size-[22px] rounded-full border-2 border-white top-1/2 -translate-y-1/2"
                style={{ left: "60%", background: ACCENT, boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
              />
            </div>
            <div className="flex justify-between mt-[10px]">
              <span className="text-[11px]" style={{ color: MUTED }}>$0</span>
              <span className="text-[11px]" style={{ color: MUTED }}>$900</span>
            </div>
          </div>
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-[13px]" style={{ color: INK }}>Alert me at 90%</span>
              <div className="w-[40px] h-[22px] rounded-full p-[2px] flex items-center" style={{ background: ACCENT }}>
                <div className="size-[18px] rounded-full bg-white ml-auto" />
              </div>
            </div>
          </Card>
          <div className="mt-auto"><PrimaryButton label="Save limit" /></div>
        </Page>
      </div>
    ),
  },
];

export const SCREENS: Record<string, ScreenDef> = Object.fromEntries(
  list.map((s) => [s.id, s]),
);

export function getScreen(id: string): ScreenDef | undefined {
  return SCREENS[id];
}

// ── Agent-generated screens ──────────────────────────────────────────────────

/**
 * Builds a screen from the agent's suggestion. The layout is inferred from a few
 * keywords in the description, so "with category filters" actually produces a
 * filter row — the generated screen reads as a real design rather than a
 * placeholder, while staying in the Financely design language above.
 */
export function createGeneratedScreen(id: string, name: string, description: string): ScreenDef {
  const d = description.toLowerCase();
  const withFilters = /filter|categor|sort|tab\b/.test(d);
  const withSaved = /saved|favourite|favorite|bookmark|wishlist/.test(d);
  const withSearch = /search|find|query/.test(d);

  const items = withSaved
    ? [
        { title: "Golden Hour Roasts", sub: "Saved · Light roast" },
        { title: "The Daily Grind", sub: "Saved · Medium roast" },
        { title: "Ember & Oak", sub: "Saved · Dark roast" },
      ]
    : [
        { title: "First item", sub: "Updated just now" },
        { title: "Second item", sub: "Updated yesterday" },
        { title: "Third item", sub: "Updated Sep 12" },
      ];

  return {
    id,
    name,
    generated: true,
    render: () => (
      <div className="flex flex-col h-full">
        <AppBar title={name} />
        <Page>
          {withSearch && (
            <div className="rounded-[10px] border px-[12px] py-[11px]" style={{ background: "#fff", borderColor: LINE }}>
              <span className="text-[13px]" style={{ color: "#9aa0a6" }}>Search…</span>
            </div>
          )}

          {withFilters && (
            <div className="flex gap-[8px]">
              {["All", "Recent", "Category"].map((f, i) => (
                <div
                  key={f}
                  data-hotspot={f}
                  className="px-[14px] py-[7px] rounded-[8px]"
                  style={i === 0 ? { background: INK } : { background: "#e9edf0" }}
                >
                  <span className="text-[11px] font-semibold" style={{ color: i === 0 ? "#fff" : MUTED }}>{f}</span>
                </div>
              ))}
            </div>
          )}

          <Card className="!py-[4px]">
            {items.map((it) => (
              <Row key={it.title} title={it.title} sub={it.sub} amount={withSaved ? "♥" : "›"} tone={ACCENT} />
            ))}
          </Card>

          <span className="text-[11px] leading-[16px]" style={{ color: MUTED }}>{description}</span>

          <div className="mt-auto"><PrimaryButton label="Done" /></div>
        </Page>
      </div>
    ),
  };
}
