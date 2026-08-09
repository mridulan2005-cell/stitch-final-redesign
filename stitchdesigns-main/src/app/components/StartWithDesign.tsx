import { useRef, useState } from "react";
import svgPaths from "../../imports/BackgroundOverlayBlur/svg-oxz3ubyfvz";

interface UploadedFile {
  id: string;
  name: string;
}

interface Props {
  onClose: () => void;
  onContinue?: (data: {
    designMd: string;
    files: UploadedFile[];
    githubRepo: string;
    website: string;
    additionalInstructions: string;
  }) => void;
}

export default function StartWithDesign({ onClose, onContinue }: Props) {
  const [designMd, setDesignMd] = useState("");
  const [files, setFiles] = useState<UploadedFile[]>([{ id: "default-fig", name: "Stitch.fig" }]);
  const [githubRepo, setGithubRepo] = useState("");
  const [website, setWebsite] = useState("");
  const [additionalInstructions, setAdditionalInstructions] = useState("");

  const designMdFileRef = useRef<HTMLInputElement>(null);
  const codeFilesRef = useRef<HTMLInputElement>(null);
  const figFileRef = useRef<HTMLInputElement>(null);

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? []);
    if (picked.length === 0) return;
    const newFiles = picked.map((f) => ({ id: `${f.name}-${Date.now()}`, name: f.name }));
    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  }

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function handleContinue() {
    onContinue?.({ designMd, files, githubRepo, website, additionalInstructions });
    onClose();
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[20px] bg-[rgba(32,33,36,0.85)]"
      onClick={handleBackdropClick}
    >
      {/* Hidden file inputs */}
      <input ref={designMdFileRef} type="file" accept=".md,.txt" className="hidden" onChange={handleFileUpload} multiple />
      <input ref={codeFilesRef} type="file" accept="image/*,.js,.ts,.tsx,.jsx,.css,.svg,.ttf,.woff,.woff2,.eot" className="hidden" onChange={handleFileUpload} multiple />
      <input ref={figFileRef} type="file" accept=".fig" className="hidden" onChange={handleFileUpload} />

      {/* Scrollable panel */}
      <div className="relative max-h-[90vh] overflow-y-auto w-full max-w-[750px] mx-4 bg-[#202124] rounded-[12px] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-[20px] items-start px-[40px] py-[40px] w-full">

          {/* Header */}
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[#f1f3f4] text-[36px] font-normal leading-[45px] tracking-[-1.188px]">
                Start with your design
              </span>
            </div>
            <div className="pt-[4px]">
              <button
                onClick={onClose}
                className="flex items-center justify-center p-[6px] rounded-full hover:bg-[rgba(241,243,244,0.08)] transition-colors"
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d={svgPaths.p27cda380} fill="#F1F3F4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Paste existing DESIGN.md */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex flex-col gap-[3.4px] items-start w-full">
              <div className="text-[#f1f3f4] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] w-full">
                Paste existing DESIGN.md
              </div>
              <div className="text-[#bdc1c6] text-[13px] font-normal leading-[21.13px] w-full">
                DESIGN.md is an open-source standard document that describes the desired look and feel of your product.{" "}
                <a href="#" className="text-[#7168f6] underline decoration-solid" onClick={(e) => e.preventDefault()}>
                  Learn more
                </a>
              </div>
            </div>
            <textarea
              value={designMd}
              onChange={(e) => setDesignMd(e.target.value)}
              placeholder="Paste your DESIGN.md content here..."
              className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[12px] w-full h-[89.6px] p-[12px] text-[#f1f3f4] text-[13px] font-normal resize-none outline-none placeholder-[#9ca3af] focus:border-[rgba(218,220,224,0.35)] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Drag and drop files */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="text-[#f1f3f4] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] w-full">
              Drag and drop files
            </div>

            {/* Upload buttons */}
            <div className="flex gap-[12px] items-start w-full">
              {/* Upload DESIGN.md file */}
              <button
                onClick={() => designMdFileRef.current?.click()}
                className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-dashed flex flex-col gap-[11.75px] items-center pb-[47.55px] pl-[34.69px] pr-[34.7px] pt-[23.8px] rounded-[12px] flex-1 hover:bg-[rgba(56,59,61,0.4)] hover:border-[rgba(218,220,224,0.3)] transition-colors"
              >
                <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center rounded-full size-[48px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.pce2c200} fill="#F1F3F4" />
                  </svg>
                </div>
                <span className="text-[#bdc1c6] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] text-center whitespace-nowrap">
                  Upload a DESIGN.md file
                </span>
              </button>

              {/* Upload code, images, fonts */}
              <button
                onClick={() => codeFilesRef.current?.click()}
                className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-dashed flex flex-col gap-[12px] items-center pb-[28.3px] pt-[23.8px] px-[23.8px] rounded-[12px] flex-1 hover:bg-[rgba(56,59,61,0.4)] hover:border-[rgba(218,220,224,0.3)] transition-colors"
              >
                <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center rounded-full size-[48px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.pce2c200} fill="#F1F3F4" />
                  </svg>
                </div>
                <div className="flex flex-col items-center pl-[1.91px] pr-[1.92px]">
                  <span className="text-[#bdc1c6] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] text-center whitespace-nowrap">
                    Upload code, images, fonts
                  </span>
                  <span className="text-[#bdc1c6] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] text-center whitespace-nowrap">
                    and logos
                  </span>
                </div>
              </button>

              {/* Upload .fig file */}
              <button
                onClick={() => figFileRef.current?.click()}
                className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-dashed flex flex-col gap-[12px] items-center pl-[61.25px] pr-[61.26px] py-[23.8px] rounded-[12px] flex-1 hover:bg-[rgba(56,59,61,0.4)] hover:border-[rgba(218,220,224,0.3)] transition-colors"
              >
                <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center rounded-full size-[48px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.pce2c200} fill="#F1F3F4" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[7.75px] items-center">
                  <span className="text-[#bdc1c6] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] text-center whitespace-nowrap">
                    Upload a .fig file
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p204a5200} fill="#BDC1C6" />
                  </svg>
                </div>
              </button>
            </div>

            {/* File chips */}
            {files.length > 0 && (
              <div className="flex flex-wrap gap-[8px] items-center pt-[8px] w-full">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex gap-[6px] items-center px-[11.8px] py-[5.8px] rounded-[8px]"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d={svgPaths.p14115700} fill="#F1F3F4" />
                    </svg>
                    <span className="text-[#f1f3f4] text-[12px] font-normal leading-[16px] max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {file.name}
                    </span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="flex items-center justify-center rounded-[8px] pl-[4px] hover:opacity-70 transition-opacity"
                      aria-label={`Remove ${file.name}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d={svgPaths.p2ca28800} fill="#F1F3F4" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Public GitHub repository */}
          <div className="flex flex-col gap-[3.9px] items-start w-full">
            <div className="flex gap-[6px] items-center w-full">
              <span className="text-[#f1f3f4] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] whitespace-nowrap">
                Public GitHub repository
              </span>
              <div className="bg-[rgba(22,23,24,0.1)] border border-[rgba(218,220,224,0.2)] flex items-center p-[3.8px] rounded-[6px]">
                <span className="text-[#bdc1c6] text-[9px] font-medium leading-[9px] tracking-[0.195px] whitespace-nowrap">
                  PREVIEW
                </span>
              </div>
            </div>
            <div className="pb-[4px] w-full">
              <span className="text-[#bdc1c6] text-[13px] font-normal leading-[19.5px]">
                Or{" "}
                <a href="#" className="text-[#7168f6] underline decoration-solid" onClick={(e) => e.preventDefault()}>
                  get instructions
                </a>
                {" "}to generate a DESIGN.md from your private repo with your coding agent
              </span>
            </div>
            <input
              type="text"
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
              placeholder="https://github.com/owner/repo"
              className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[12px] w-full px-[15.8px] py-[13.4px] text-[#f1f3f4] text-[13px] font-normal outline-none placeholder-[#9ca3af] focus:border-[rgba(218,220,224,0.35)] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Add website */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            <span className="text-[#f1f3f4] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] w-full">
              Add website
            </span>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://example.com"
              className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[12px] w-full px-[15.8px] py-[13.4px] text-[#f1f3f4] text-[13px] font-normal outline-none placeholder-[#9ca3af] focus:border-[rgba(218,220,224,0.35)] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Additional instructions */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            <span className="text-[#f1f3f4] text-[13px] font-bold leading-[19.5px] tracking-[0.195px] w-full">
              Additional instructions
            </span>
            <textarea
              value={additionalInstructions}
              onChange={(e) => setAdditionalInstructions(e.target.value)}
              placeholder="Add any extra context or constraints..."
              className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] rounded-[12px] w-full h-[89.6px] p-[12px] text-[#f1f3f4] text-[13px] font-normal resize-none outline-none placeholder-[#9ca3af] focus:border-[rgba(218,220,224,0.35)] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Continue button */}
          <div className="flex items-start justify-center pt-[8px] w-full">
            <button
              onClick={handleContinue}
              className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(241,243,244,0.13)] flex flex-1 gap-[8px] h-[32px] items-center justify-center px-[11.8px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(80,83,85,0.7)] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                <path d={svgPaths.p18d99300} fill="#F1F3F4" />
              </svg>
              <span className="text-[#f1f3f4] text-[14px] font-medium leading-[20px]">Continue</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
