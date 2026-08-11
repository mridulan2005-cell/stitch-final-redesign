// The "+" (add context) menu in the prompt bar.
//
// Opens upward on the same glass surface as the "/" tools menu and the toolbar
// dropdowns: bring something in (files, a site), or branch off what is already
// on the canvas.

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0" {...S}>
      {children}
    </svg>
  );
}

const icons = {
  upload: (
    <Icon>
      <path d="M10.4 1.8H5.2a1.8 1.8 0 0 0-1.8 1.8v10.8a1.8 1.8 0 0 0 1.8 1.8h7.6a1.8 1.8 0 0 0 1.8-1.8V5.8l-4-4z" />
      <path d="M10.2 1.9v4h4" />
      <path d="M9 12.4V8.2M7.3 9.9L9 8.2l1.7 1.7" />
    </Icon>
  ),
  globe: (
    <Icon>
      <circle cx="9" cy="9" r="6.8" />
      <path d="M2.2 9h13.6M9 2.2c1.8 2 2.8 4.3 2.8 6.8S10.8 14 9 15.8C7.2 14 6.2 11.5 6.2 9S7.2 4.2 9 2.2z" />
    </Icon>
  ),
  variations: (
    <Icon>
      <rect x="2.2" y="2.2" width="13.6" height="13.6" rx="2.6" />
      <path d="M9 5.8v6.4M5.8 9h6.4" />
    </Icon>
  ),
};

interface Props {
  onUploadFiles: () => void;
  onWebsiteUrl: () => void;
  onVariations: () => void;
  onClose: () => void;
}

function Row({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[12px] h-[40px] px-[12px] rounded-[10px] text-[#f1f3f4] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-left whitespace-nowrap"
    >
      {icon}
      <span className="text-[15px] leading-[20px] font-medium">{label}</span>
    </button>
  );
}

export default function AddMenu({ onUploadFiles, onWebsiteUrl, onVariations, onClose }: Props) {
  const run = (fn: () => void) => () => { onClose(); fn(); };
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute bottom-[calc(100%+8px)] left-0 z-50 min-w-[218px] backdrop-blur-[20px] bg-[rgba(22,23,24,0.92)] border border-[rgba(218,220,224,0.15)] rounded-[16px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25),0px_10px_30px_-8px_rgba(0,0,0,0.5)] p-[7px] flex flex-col animate-in fade-in zoom-in-95 slide-in-from-bottom-1 duration-150">
        <Row icon={icons.upload} label="Upload Files" onClick={run(onUploadFiles)} />
        <Row icon={icons.globe} label="Website URL" onClick={run(onWebsiteUrl)} />
        <div className="h-px bg-[rgba(218,220,224,0.15)] my-[5px] mx-[2px]" />
        <Row icon={icons.variations} label="Variations" onClick={run(onVariations)} />
      </div>
    </>
  );
}
