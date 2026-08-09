import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { menuIcons } from "../../../imports/PrototypeEditor-svg";
import { suggestedFlows, suggestedScreens, type Suggestion } from "./suggestions";

export type SuggestTab = "flows" | "screens";

function Glyph({ d, size = 18, fill = "#f1f3f4" }: { d: string; size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className="shrink-0">
      <path d={d} fill={fill} />
    </svg>
  );
}

interface Props {
  open: boolean;
  /** Which tab the modal opens on. */
  initialTab: SuggestTab;
  /** Label of the component the suggestions are seeded from. */
  hotspot: string;
  onClose: () => void;
  onBuild: (tab: SuggestTab, suggestion: Suggestion, instructions: string) => void;
}

export function SuggestModal({ open, initialTab, hotspot, onClose, onBuild }: Props) {
  const [tab, setTab] = useState<SuggestTab>(initialTab);
  const [selected, setSelected] = useState<string | null>(null);
  const [instructions, setInstructions] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset every time the modal is opened.
  useEffect(() => {
    if (!open) return;
    setTab(initialTab);
    setSelected(null);
    setInstructions("");
  }, [open, initialTab]);

  // Switching tabs clears the selection — the two lists are unrelated.
  function switchTab(next: SuggestTab) {
    if (next === tab) return;
    setTab(next);
    setSelected(null);
    setInstructions("");
  }

  // Focus the customise field as soon as an idea is chosen.
  useEffect(() => {
    if (selected) inputRef.current?.focus();
  }, [selected]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.stopPropagation(); onClose(); }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open, onClose]);

  if (!open) return null;

  const items = tab === "flows" ? suggestedFlows(hotspot) : suggestedScreens(hotspot);
  const title = tab === "flows" ? "Suggested Flows" : "Imagine a new screen";
  const blurb =
    tab === "flows"
      ? "Here are some flows you could build from here"
      : "Here are some ideas for your next screen";
  const cta = tab === "flows" ? "Build this flow" : "Build this screen";
  const chosen = items.find((i) => i.id === selected) ?? null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-[24px]">
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px] animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative bg-[#202124] border border-[rgba(218,220,224,0.15)] rounded-[12px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.08),0px_24px_60px_-12px_rgba(0,0,0,0.7)] flex flex-col w-full max-w-[420px] max-h-[min(840px,calc(100vh-48px))] overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200 ease-out"
      >
        {/* Tabs */}
        <div className="flex items-center gap-[2px] px-[20px] pt-[16px] shrink-0">
          <div className="flex items-center gap-[2px] bg-[rgba(255,255,255,0.06)] rounded-[8px] p-[2px]">
            {(["flows", "screens"] as const).map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className={`h-[26px] px-[14px] rounded-[6px] text-[12px] font-medium capitalize transition-colors ${
                  tab === t
                    ? "bg-[rgba(255,255,255,0.14)] text-[#f1f3f4]"
                    : "text-[rgba(255,255,255,0.5)] hover:text-[#f1f3f4]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="flex gap-[8px] items-center pb-[12px] pt-[14px] px-[20px] shrink-0">
          <Glyph d={menuIcons.sparkleLg} size={18} fill="#f1f3f4" />
          <h3 className="text-[#f1f3f4] text-[18px] font-bold leading-[22.5px]">{title}</h3>
        </div>

        {/* Ideas */}
        <div className="flex-1 min-h-0 overflow-y-auto pb-[12px] pt-[4px] px-[20px] flex flex-col gap-[8px]">
          <div className="px-[4px] pb-[2px]">
            <p className="text-[rgba(218,220,224,0.5)] text-[12px] leading-[16px]">{blurb}</p>
          </div>

          {items.map((item, i) => {
            const isSelected = item.id === selected;
            return (
              <div
                key={item.id}
                className={`rounded-[12px] border transition-colors ${
                  isSelected
                    ? "border-[#7168f6] bg-[rgba(113,104,246,0.1)]"
                    : "border-[rgba(218,220,224,0.1)] bg-[rgba(22,23,24,0.3)] hover:border-[rgba(218,220,224,0.28)]"
                }`}
              >
                <button
                  onClick={() => setSelected(isSelected ? null : item.id)}
                  aria-pressed={isSelected}
                  className="w-full text-left px-[11.8px] py-[9.8px] flex gap-[10px] items-start"
                >
                  <span
                    className={`shrink-0 flex items-center justify-center size-[20px] rounded-full mt-[2px] text-[10px] font-bold leading-[15px] transition-colors ${
                      isSelected ? "bg-[#7168f6] text-white" : "bg-[rgba(255,255,255,0.15)] text-[#bdc1c6]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-[7px] flex-wrap">
                      <span className={`text-[14px] leading-[19.25px] ${isSelected ? "text-[#f1f3f4] font-medium" : "text-[#bdc1c6]"}`}>
                        {item.title}
                      </span>
                      {item.size && (
                        <span className="text-[rgba(218,220,224,0.5)] text-[11px] leading-[15.13px]">{item.size}</span>
                      )}
                    </span>
                    <span className="block text-[rgba(218,220,224,0.5)] text-[11px] leading-[15.13px] mt-[3px]">
                      {item.detail}
                    </span>
                  </span>
                </button>

                {/* Customise field — appears once an idea is chosen */}
                {isSelected && (
                  <div className="px-[11.8px] pb-[10px] animate-in fade-in slide-in-from-top-1 duration-150">
                    <input
                      ref={inputRef}
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && chosen) { e.preventDefault(); onBuild(tab, chosen, instructions.trim()); }
                      }}
                      placeholder="Customise, if you want to"
                      aria-label={`Custom instructions for ${item.title}`}
                      className="w-full bg-transparent border-0 border-b border-[rgba(218,220,224,0.25)] focus:border-[rgba(113,104,246,0.8)] outline-none px-[2px] py-[6px] text-[12.5px] text-[#f1f3f4] placeholder-[rgba(218,220,224,0.4)] transition-colors"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Build */}
        <div className="pb-[20px] pt-[8px] px-[20px] shrink-0">
          <button
            disabled={!chosen}
            onClick={() => chosen && onBuild(tab, chosen, instructions.trim())}
            className={`backdrop-blur-[20px] border h-[32px] rounded-[8px] w-full flex items-center justify-center transition-all ${
              chosen
                ? "bg-[#f1f3f4] border-transparent hover:bg-white cursor-pointer"
                : "bg-[#202124] border-[rgba(255,255,255,0.13)] opacity-50 cursor-default"
            }`}
          >
            <span className={`text-[14px] font-medium leading-[21px] ${chosen ? "text-[#202124]" : "text-[#f1f3f4]"}`}>
              {cta}
            </span>
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[16px] top-[16px] flex items-center justify-center p-[6px] rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors"
        >
          <Glyph d={menuIcons.close} size={18} fill="#bdc1c6" />
        </button>
      </div>
    </div>,
    document.body,
  );
}
