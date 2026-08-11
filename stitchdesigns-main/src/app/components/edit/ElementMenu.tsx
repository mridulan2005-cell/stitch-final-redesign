// The "Edit Element" popover — what a selected component offers.
//
// Figma: node 268:8 (edit menu) — same glass surface, 16px radius, 13px rows
// with 18px glyphs, hung off the selection by a short leader line. The row set
// and icons follow the spec'd menu: Edit Text, Edit With AI, Delete.

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0" {...S}>
      {children}
    </svg>
  );
}

const icons = {
  /** Text cursor (I-beam). */
  text: (
    <Icon>
      <path d="M9 3.6v10.8" />
      <path d="M6.4 3.6h5.2M6.4 14.4h5.2" />
    </Icon>
  ),
  /** Sparkle — the agent. */
  ai: (
    <Icon>
      <path d="M7.2 2.4l1.1 2.9 2.9 1.1-2.9 1.1-1.1 2.9-1.1-2.9L3.2 6.4l2.9-1.1L7.2 2.4z" />
      <path d="M12.6 9.6l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
    </Icon>
  ),
  trash: (
    <Icon>
      <path d="M3 4.7h12M7 4.7V3.3a1.1 1.1 0 0 1 1.1-1.1h1.8A1.1 1.1 0 0 1 11 3.3v1.4M4.8 4.7l.7 9.6a1.3 1.3 0 0 0 1.3 1.2h4.4a1.3 1.3 0 0 0 1.3-1.2l.7-9.6" />
    </Icon>
  ),
};

interface Props {
  /** Component name, shown under the "Edit Element" title. */
  label: string;
  onEditText: () => void;
  onEditWithAI: () => void;
  onDelete: () => void;
  onClose: () => void;
}

function Row({
  icon,
  label,
  danger,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[8px] px-[12px] py-[8px] rounded-[6px] transition-colors text-left whitespace-nowrap ${
        danger
          ? "text-[#f28b82] hover:bg-[rgba(242,139,130,0.12)]"
          : "text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.08)]"
      }`}
    >
      {icon}
      <span className="text-[13px] leading-[19.5px]">{label}</span>
    </button>
  );
}

export default function ElementMenu({ label, onEditText, onEditWithAI, onDelete, onClose }: Props) {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.72)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25),0px_10px_30px_-8px_rgba(0,0,0,0.5)] p-[5.8px] flex flex-col min-w-[186px] animate-in fade-in zoom-in-95 duration-150">
      {/* Title row — the element being acted on, and the way out */}
      <div className="flex items-center gap-[10px] pl-[12px] pr-[6px] py-[6px]">
        <div className="flex flex-col min-w-0">
          <span className="text-[#f1f3f4] text-[13px] leading-[18px] font-medium">Edit Element</span>
          <span className="text-[rgba(255,255,255,0.5)] text-[11px] leading-[16px] truncate max-w-[130px]">
            {label}
          </span>
        </div>
        <button
          onClick={onClose}
          title="Close"
          className="ml-auto flex items-center justify-center size-[22px] rounded-full text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="h-px bg-[rgba(218,220,224,0.15)] mx-[2px] mb-[4px]" />

      <div className="flex flex-col gap-[4px]">
        <Row icon={icons.text} label="Edit Text" onClick={onEditText} />
        <Row icon={icons.ai} label="Edit With AI" onClick={onEditWithAI} />
        <Row icon={icons.trash} label="Delete" danger onClick={onDelete} />
      </div>
    </div>
  );
}
