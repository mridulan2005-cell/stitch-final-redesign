// The "/" (tools) menu in the prompt bar.
//
// Opens upward from the prompt bar and reuses the same glass surface as the
// toolbar dropdowns, so every menu on the canvas shares one material.

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0" {...S}>
      {children}
    </svg>
  );
}

const TOOLS: { id: string; label: string; icon: React.ReactNode }[] = [
  {
    id: "image", label: "Image",
    icon: <Icon><rect x="2.2" y="3.2" width="13.6" height="11.6" rx="2" /><circle cx="6.4" cy="7.2" r="1.3" /><path d="M2.6 12.4l3.8-3.4 3 2.6 2.4-2 3.4 3" /></Icon>,
  },
  {
    id: "logo", label: "Logo",
    icon: <Icon><rect x="2.2" y="2.2" width="13.6" height="13.6" rx="2.6" /><path d="M6 11.6l2.6-5.2 3.4 5.2" /></Icon>,
  },
  {
    id: "diagram", label: "Diagram",
    icon: <Icon><rect x="2.2" y="3" width="13.6" height="12" rx="2" /><path d="M5.4 11.4V7.6M9 11.4V5.4M12.6 11.4V9" /></Icon>,
  },
  {
    id: "animate", label: "Animate",
    icon: <Icon><circle cx="9" cy="9" r="6.8" /><path d="M7.4 5.9l4.4 3.1-4.4 3.1V5.9z" /></Icon>,
  },
  {
    id: "app-store-assets", label: "App Store Assets",
    icon: <Icon><rect x="2.2" y="3.6" width="13.6" height="10.8" rx="2" /><path d="M2.2 7h13.6M6 7v7.4" /></Icon>,
  },
  {
    id: "web-assets", label: "Web Assets",
    icon: <Icon><circle cx="9" cy="9" r="6.8" /><path d="M2.2 9h13.6M9 2.2c1.8 2 2.8 4.3 2.8 6.8S10.8 14 9 15.8C7.2 14 6.2 11.5 6.2 9S7.2 4.2 9 2.2z" /></Icon>,
  },
  {
    id: "marketing-kit", label: "Marketing Kit",
    icon: <Icon><path d="M13 3.6v10.8L5.4 11.6H3.2A1.4 1.4 0 0 1 1.8 10.2V7.8a1.4 1.4 0 0 1 1.4-1.4h2.2L13 3.6z" /><path d="M15.4 6.9a2.9 2.9 0 0 1 0 4.2" /></Icon>,
  },
  {
    id: "accessibility-audit", label: "Accessibility Audit",
    icon: <Icon><path d="M9 1.8v1.4" /><circle cx="9" cy="4.6" r="1.2" /><path d="M9 6.4v9.4M3.8 8h10.4M5.2 15.6L9 11.2l3.8 4.4" /></Icon>,
  },
];

export default function ToolsMenu({ onSelect, onClose }: { onSelect: (id: string, label: string) => void; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute bottom-[calc(100%+8px)] left-0 z-50 min-w-[218px] backdrop-blur-[20px] bg-[rgba(22,23,24,0.92)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25),0px_10px_30px_-8px_rgba(0,0,0,0.5)] p-[7px] flex flex-col animate-in fade-in zoom-in-95 slide-in-from-bottom-1 duration-150">
        {TOOLS.map((t) => (
          <button
            key={t.id}
            onClick={() => { onClose(); onSelect(t.id, t.label); }}
            className="flex items-center gap-[12px] h-[40px] px-[12px] rounded-[10px] text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-left whitespace-nowrap"
          >
            {t.icon}
            <span className="text-[15px] leading-[20px] font-normal">{t.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
