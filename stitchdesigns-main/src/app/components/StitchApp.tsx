import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/1920WDefault/svg-lt5c16mo2h";
import { imgGroup } from "../../imports/1920WDefault/svg-uipy6";
import StartWithDesign from "./StartWithDesign";

// ─── Data ───────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1, group: "Recent",
    name: "Date Night Discovery", date: "Aug 4, 2026", shared: true,
    color: "#1f2937",
  },
  {
    id: 2, group: "Yesterday",
    name: "CineMood Movie Finder", date: "Aug 3, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 3, group: "Yesterday",
    name: "Personal Finance Dashboard", date: "Aug 3, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 4, group: "Last 7 days",
    name: "Minimal Finance Tracker", date: "Aug 2, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 5, group: "Last 7 days",
    name: "Personal Finance Tracker", date: "Aug 2, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 6, group: "Last 7 days",
    name: "Personal Finance Dashboard", date: "Aug 2, 2026", shared: true,
    color: "#1f2937",
  },
  {
    id: 7, group: "Last 7 days",
    name: "Strategic Finance Hub", date: "Aug 2, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 8, group: "Last 7 days",
    name: "Minimalist Finance Dashboard", date: "Jul 31, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 9, group: "Last 7 days",
    name: "Remix of Auralis Saas Landing Page", date: "Jul 31, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 10, group: "Last 7 days",
    name: "Minimalist Finance Tracker", date: "Jul 31, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 11, group: "Last 30 days",
    name: "Monthly Expense Tracker", date: "Aug 1, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 12, group: "Last 30 days",
    name: "Personal Finance Tracker", date: "Aug 1, 2026", shared: true,
    color: "#1f2937",
  },
  {
    id: 13, group: "Last 30 days",
    name: "Personal Finance Dashboard", date: "Aug 1, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 14, group: "Last 30 days",
    name: "ScholarFlow Academic Workspace", date: "Aug 1, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 15, group: "Last 30 days",
    name: "Remix of Auralis Saas Landing Page", date: "Jul 31, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 16, group: "Last 30 days",
    name: "Minimalist Finance Tracker", date: "Jul 31, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 17, group: "Last 30 days",
    name: "Photo Upload Integration", date: "Jun 18, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 18, group: "Last 30 days",
    name: "Multi-Signature Manager", date: "Jun 15, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 19, group: "Last 30 days",
    name: "Clash Card UI Redesign", date: "Jun 6, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 20, group: "Last 30 days",
    name: "Mobile Notification Preferences", date: "Jun 2, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 21, group: "Last 30 days",
    name: "Research-Driven Filter Redesign", date: "Jun 2, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 22, group: "Older",
    name: "Refined Event Feed", date: "Mar 28, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 23, group: "Older",
    name: "Create New Event", date: "Mar 27, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 24, group: "Older",
    name: "Organization Detail", date: "Mar 25, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 25, group: "Older",
    name: "Insti Feed Desktop Feed", date: "Mar 20, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 26, group: "Older",
    name: "Campus Feed - Desktop", date: "Mar 19, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 27, group: "Older",
    name: "Mobile Dashboard with Up Next Card", date: "Mar 11, 2026", shared: false,
    color: "#1f2937",
  },
  {
    id: 28, group: "Older",
    name: "Silver Tech Home Screen", date: "Mar 11, 2026", shared: false,
    color: "#202124",
  },
];

const SHARED_PROJECTS = PROJECTS.filter(p => p.shared);

const PROMPT_CHIPS = [
  "Make me an app for people who love skiing in the Alps",
  "A daily tarot card reading app with a mystical purple and gold theme and smooth card-flip animation",
  "The user profile page for a guided meditation and mindfulness app",
];

const INSPIRATION_CARDS = [
  { id: 1, name: "Auralis Dashboard", bg: "from-indigo-900 via-purple-900 to-indigo-800" },
  { id: 2, name: "Buro Wallet", bg: "from-slate-800 via-slate-700 to-slate-900" },
  { id: 3, name: "Lumio Landing Page", bg: "from-amber-900 via-orange-800 to-amber-900" },
  { id: 4, name: "Horizon SaaS", bg: "from-blue-900 via-cyan-800 to-blue-900" },
  { id: 5, name: "H612 Landing Page", bg: "from-rose-900 via-pink-800 to-rose-900" },
  { id: 6, name: "Romer Analytics", bg: "from-emerald-900 via-teal-800 to-emerald-900" },
  { id: 7, name: "Studio Portfolio", bg: "from-zinc-800 via-zinc-700 to-zinc-900" },
];

// ─── Icons (SVG paths from imported file) ────────────────────────────────────

function IconDocs() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p27e2f400} fill="#F1F3F4" />
    </svg>
  );
}
function IconDiscord() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p2236d00} fill="#F1F3F4" />
    </svg>
  );
}
function IconX() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p173a2780} fill="#F1F3F4" />
    </svg>
  );
}
function IconGift() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p3e388070} fill="#F1F3F4" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p248740c0} fill="#BDC1C6" />
    </svg>
  );
}
function IconMyProjects() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p26f3f700} fill="#F1F3F4" />
    </svg>
  );
}
function IconShared() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p18366b00} fill="#BDC1C6" />
    </svg>
  );
}
function IconSharedActive() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p18366b00} fill="#F1F3F4" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg fill="none" height="11.82" viewBox="0 0 11.82 11.82" width="11.82">
      <g clipPath="url(#cal)">
        <path d={svgPaths.p27d20f00} fill="#BDC1C6" />
      </g>
      <defs>
        <clipPath id="cal">
          <rect fill="white" height="11.82" width="11.82" />
        </clipPath>
      </defs>
    </svg>
  );
}
function IconShare() {
  return (
    <svg fill="none" height="15.76" viewBox="0 0 15.76 15.76" width="15.76">
      <g clipPath="url(#sh)">
        <path d={svgPaths.p3871e100} fill="#BDC1C6" />
      </g>
      <defs>
        <clipPath id="sh">
          <rect fill="white" height="15.76" width="15.76" />
        </clipPath>
      </defs>
    </svg>
  );
}
function IconPlus({ size = 16, color = "#F1F3F4" }: { size?: number; color?: string }) {
  return (
    <svg fill="none" height={size} viewBox="0 0 16 16" width={size}>
      <path d={svgPaths.p39ddd900} fill={color} />
    </svg>
  );
}
function IconAttachment() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p3ecade80} fill="#F1F3F4" />
    </svg>
  );
}
function IconApp() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p14700d80} fill="#F1F3F4" />
    </svg>
  );
}
function IconAppInactive() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p14700d80} fill="#BDC1C6" />
    </svg>
  );
}
function IconWeb() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p2f726400} fill="#F1F3F4" />
    </svg>
  );
}
function IconWebInactive() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p2f726400} fill="#BDC1C6" />
    </svg>
  );
}
function IconFlash() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p1ba53d00} fill="#F1F3F4" />
    </svg>
  );
}
function IconChevronDown() {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
      <path d={svgPaths.p11746cf0} fill="#F1F3F4" />
    </svg>
  );
}
function IconMic() {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
      <path d={svgPaths.p304bd900} fill="#F1F3F4" />
    </svg>
  );
}
function IconSend() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p369d6d00} fill="#202124" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p2660ab40} fill="#F1F3F4" />
    </svg>
  );
}
function IconChevLeft() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.p34e96f00} fill="#F1F3F4" />
    </svg>
  );
}
function IconChevRight() {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d={svgPaths.pca4f400} fill="#F1F3F4" />
    </svg>
  );
}
function IconSettings() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <path d={svgPaths.p2660ab40} fill="#F1F3F4" />
    </svg>
  );
}

// ─── Stitch Logo SVG ─────────────────────────────────────────────────────────

function StitchLogo() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[129px]">
      <div
        className="absolute inset-0"
        style={{ maskImage: `url("${imgGroup}")`, maskSize: "100% 100%", maskRepeat: "no-repeat" }}
      >
        <svg fill="none" height="23.563" viewBox="0 0 127.931 23.563" width="127.931" className="absolute inset-0 size-full" preserveAspectRatio="none">
          <path d={svgPaths.pab70600} fill="white" />
          <path d={svgPaths.p98d8000} fill="white" />
        </svg>
      </div>
    </div>
  );
}

// ─── Beta Badge ──────────────────────────────────────────────────────────────

function BetaBadge() {
  return (
    <span className="text-[10px] font-medium text-[#bdc1c6] border border-[rgba(218,220,224,0.3)] rounded px-1 py-0.5 ml-2 leading-none">
      BETA
    </span>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function StitchHeader() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between px-[24px] shrink-0 sticky top-0 w-full z-[3] bg-[rgba(32,33,36,0.8)] backdrop-blur-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-1">
        <StitchLogo />
        <BetaBadge />
      </div>

      {/* Right: Nav links + avatar */}
      <div className="flex items-center gap-1">
        {/* Docs */}
        <button className="flex gap-[6px] items-center p-[8px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors">
          <IconDocs />
          <span className="text-[#f1f3f4] text-[13px] font-medium leading-[19.5px] whitespace-nowrap">Docs</span>
        </button>

        {/* Discord */}
        <button className="flex items-center p-[8px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors">
          <IconDiscord />
        </button>

        {/* X */}
        <button className="flex items-center p-[8px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors">
          <IconX />
        </button>

        {/* What's New (Gift) */}
        <button className="flex items-center justify-center p-[8px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors size-[40px]">
          <IconGift />
        </button>

        {/* Menu (3-dot) */}
        <button className="flex items-center justify-center p-[8px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors size-[40px]">
          <svg fill="none" height="16" viewBox="0 0 4 16" width="4">
            <path d={svgPaths.p9131f80} fill="#F1F3F4" />
          </svg>
        </button>

        {/* Avatar */}
        <button className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.2)] rounded-full size-[34px] flex items-center justify-center text-[#f1f3f4] text-[13px] font-medium hover:bg-[rgba(255,255,255,0.08)] transition-colors shrink-0 overflow-hidden">
          <span className="text-xs font-semibold">M</span>
        </button>
      </div>
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

interface SidebarProps {
  activeProject: number | null;
  onSelectProject: (id: number) => void;
}

function Sidebar({ activeProject, onSelectProject }: SidebarProps) {
  const [tab, setTab] = useState<"my" | "shared">("my");
  const [search, setSearch] = useState("");

  const sourceProjects = tab === "my" ? PROJECTS : SHARED_PROJECTS;
  const filtered = search
    ? sourceProjects.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : sourceProjects;

  const groups = Array.from(new Set(filtered.map(p => p.group)));

  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center p-[12px] shrink-0 w-[375px]">
      <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex-1 min-h-0 overflow-auto relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[4px] items-start pb-[16px] px-[4px] pt-[12px]">
          {/* Tab switcher */}
          <div className="pb-[8px] w-full px-1">
            <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] flex gap-[4px] items-start justify-center p-[2px] rounded-[32px] w-full">
              {/* My Projects tab */}
              <button
                onClick={() => setTab("my")}
                className={`flex flex-1 items-center justify-center p-[8px] rounded-[32px] gap-[6px] transition-colors ${tab === "my" ? "bg-[#3c4043]" : "hover:bg-[rgba(255,255,255,0.05)]"}`}
              >
                <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                  <path d={svgPaths.p26f3f700} fill={tab === "my" ? "#F1F3F4" : "#BDC1C6"} />
                </svg>
                <span className={`text-[14px] font-medium leading-[20px] ${tab === "my" ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>
                  My Projects
                </span>
              </button>

              {/* Shared with me tab */}
              <button
                onClick={() => setTab("shared")}
                className={`flex flex-1 items-center justify-center py-[8px] px-[8px] pb-[8px] rounded-[32px] gap-[6px] transition-colors ${tab === "shared" ? "bg-[#3c4043]" : "hover:bg-[rgba(255,255,255,0.05)]"}`}
              >
                <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                  <path d={svgPaths.p18366b00} fill={tab === "shared" ? "#F1F3F4" : "#BDC1C6"} />
                </svg>
                <span className={`text-[14px] font-medium leading-[20px] ${tab === "shared" ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>
                  Shared with me
                </span>
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="sticky top-0 pb-[12px] w-full px-1">
            <div className="backdrop-blur-[6px] bg-[rgba(56,59,61,0.58)] flex items-center p-[10px] rounded-[9999px] w-full">
              <div className="pl-[4px] pr-[8px] shrink-0">
                <IconSearch />
              </div>
              <input
                type="text"
                placeholder="Search projects"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-transparent border-none outline-none text-[#f1f3f4] text-[13.5px] font-normal placeholder-[#9ca3af] w-full leading-normal"
              />
            </div>
          </div>

          {/* Project list */}
          {groups.length === 0 ? (
            <div className="px-4 py-8 text-[#bdc1c6] text-sm text-center w-full">No projects found</div>
          ) : (
            groups.map(group => {
              const groupProjects = filtered.filter(p => p.group === group);
              return (
                <div key={group} className="flex flex-col gap-[0.4px] items-center w-full">
                  {/* Group heading */}
                  <div className="py-[8px] w-full px-2">
                    <span className="text-[#bdc1c6] text-[15px] font-semibold leading-[24px]">{group}</span>
                  </div>
                  {/* Project items */}
                  {groupProjects.map(project => (
                    <ProjectItem
                      key={project.id}
                      project={project}
                      active={activeProject === project.id}
                      onSelect={() => onSelectProject(project.id)}
                    />
                  ))}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

interface ProjectItemProps {
  project: typeof PROJECTS[0];
  active: boolean;
  onSelect: () => void;
}

function ProjectItem({ project, active, onSelect }: ProjectItemProps) {
  return (
    <button
      onClick={onSelect}
      className={`flex items-center justify-between p-[7.88px] rounded-[8px] w-full text-left transition-colors ${active ? "bg-[rgba(255,255,255,0.1)]" : "hover:bg-[rgba(255,255,255,0.06)]"}`}
    >
      {/* Thumbnail */}
      <div
        className="flex items-start justify-center rounded-[8px] shrink-0 relative"
        style={{ background: project.color }}
      >
        <div className="absolute inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
        <div className="min-w-[38.8px] rounded-[6px] shrink-0 size-[39.4px]" />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-[0.01px] items-start justify-center min-w-0 ml-2">
        <div className="h-[20.68px] overflow-hidden w-full">
          <p className="text-[#f1f3f4] text-[13.6px] font-semibold leading-[20.685px] truncate">{project.name}</p>
        </div>
        <div className="flex items-center gap-[3.8px] overflow-hidden w-full">
          <div className="flex items-center gap-[3.94px]">
            <IconCalendar />
            <span className="text-[#bdc1c6] text-[9.3px] font-normal whitespace-nowrap">{project.date}</span>
          </div>
          {project.shared && (
            <div className="flex items-center gap-[3.94px] ml-1">
              <IconShare />
              <span className="text-[#bdc1c6] text-[9.9px] font-normal">Shared</span>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── Prompt Box ───────────────────────────────────────────────────────────────

interface PromptBoxProps {
  onSubmit: (prompt: string) => void;
}

function PromptBox({ onSubmit }: PromptBoxProps) {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"app" | "web">("app");
  const [showStartWithDesign, setShowStartWithDesign] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleChip(text: string) {
    setPrompt(text);
    textareaRef.current?.focus();
  }

  function handleSubmit() {
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <>
    <div className="flex flex-col gap-[24px] items-start w-full">
      {/* Header row */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[#f1f3f4] text-[53.6px] font-normal leading-[56px] whitespace-nowrap">
          Welcome to Stitch..
        </h1>
        <button
          onClick={() => setShowStartWithDesign(true)}
          className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(218,220,224,0.15)] flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[12px] py-[6px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(80,83,85,0.7)] transition-colors whitespace-nowrap"
        >
          <IconPlus size={16} />
          <span className="text-[#f1f3f4] text-[12.9px] font-medium leading-[19.5px]">Start with your design</span>
        </button>
      </div>

      {/* Prompt textarea box */}
      <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex flex-col items-start justify-between min-h-[220px] p-[16px] rounded-[24px] w-full shadow-sm">
        {/* Text area */}
        <div className="flex flex-1 flex-col items-start w-full pb-[8px]">
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What native mobile app shall we design?"
            className="bg-transparent border-none outline-none resize-none text-[#f1f3f4] text-[15.1px] font-normal leading-[24px] w-full min-h-[100px] max-h-[399px] placeholder-[#f1f3f4] placeholder-opacity-80"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between w-full flex-wrap gap-2">
          <div className="flex items-center gap-[8px]">
            {/* Attachment */}
            <div className="flex flex-col items-start shrink-0">
              <button className="flex items-center justify-center p-[8px] rounded-full size-[36px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                <IconAttachment />
              </button>
            </div>

            {/* App / Web toggle */}
            <div className="backdrop-blur-[20px] flex gap-[4px] items-start p-[2px] rounded-[32px]">
              <button
                onClick={() => setMode("app")}
                className={`flex items-center justify-center p-[8px] rounded-[32px] transition-colors gap-[6px] ${mode === "app" ? "bg-[#3c4043]" : "hover:bg-[rgba(255,255,255,0.05)]"}`}
              >
                <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p14700d80} fill={mode === "app" ? "#F1F3F4" : "#BDC1C6"} />
                </svg>
                <span className={`text-[14px] font-medium leading-[20px] ${mode === "app" ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>App</span>
              </button>
              <button
                onClick={() => setMode("web")}
                className={`flex items-center justify-center p-[8px] rounded-[32px] transition-colors gap-[6px] ${mode === "web" ? "bg-[#3c4043]" : "hover:bg-[rgba(255,255,255,0.05)]"}`}
              >
                <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p2f726400} fill={mode === "web" ? "#F1F3F4" : "#BDC1C6"} />
                </svg>
                <span className={`text-[14px] font-medium leading-[20px] ${mode === "web" ? "text-[#f1f3f4]" : "text-[#bdc1c6]"}`}>Web</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[8px]">
            {/* Settings / AI */}
            <div className="flex flex-col items-start shrink-0">
              <button className="aspect-square flex items-center justify-center px-[9px] py-[8px] rounded-full hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
                  <path d={svgPaths.p2660ab40} fill="#F1F3F4" />
                </svg>
              </button>
            </div>

            {/* 3 Flash button */}
            <button className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] flex gap-[6px] h-[36px] items-center justify-center overflow-hidden px-[10px] py-[6px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(80,83,85,0.7)] transition-colors relative">
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                <path d={svgPaths.p1ba53d00} fill="#F1F3F4" />
              </svg>
              <span className="text-[#f1f3f4] text-[12.9px] font-medium leading-[19.5px]">3 Flash</span>
              <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
                <path d={svgPaths.p11746cf0} fill="#F1F3F4" />
              </svg>
            </button>

            {/* Preview (mic) */}
            <div className="flex flex-col items-start shrink-0">
              <button className="flex items-center justify-center rounded-full size-[36px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d={svgPaths.p304bd900} fill="#F1F3F4" />
                </svg>
              </button>
            </div>

            {/* Generate / Send */}
            <div className="flex flex-col items-start shrink-0">
              <button
                onClick={handleSubmit}
                className="bg-[#f1f3f4] flex items-center justify-center rounded-full size-[36px] hover:bg-white transition-colors disabled:opacity-50"
                disabled={!prompt.trim()}
              >
                <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p369d6d00} fill="#202124" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Prompt suggestion chips */}
      <div className="flex gap-[8px] items-start overflow-auto p-[4px] w-full">
        {PROMPT_CHIPS.map((chip, i) => (
          <button
            key={i}
            onClick={() => handleChip(chip)}
            className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(218,220,224,0.15)] flex h-[32px] items-center justify-center max-w-[280px] px-[12px] py-[6px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-[rgba(80,83,85,0.7)] transition-colors shrink-0"
          >
            <span className="text-[#f1f3f4] text-[13px] font-medium leading-[19.5px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[253px]">
              {chip}
            </span>
          </button>
        ))}
      </div>
    </div>
    {showStartWithDesign && (
      <StartWithDesign onClose={() => setShowStartWithDesign(false)} />
    )}
    </>
  );
}

// ─── Inspiration Gallery ──────────────────────────────────────────────────────

function InspirationGallery() {
  const [page, setPage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(INSPIRATION_CARDS.length / cardsPerPage);
  const visibleCards = INSPIRATION_CARDS.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

  return (
    <div className="flex flex-col gap-[16px] items-start overflow-hidden pb-[32px] w-full">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[#f1f3f4] text-[22.9px] font-normal leading-[30px]">Need inspiration?</h2>
        <div className="flex gap-[8px] items-center">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center justify-center p-[4px] rounded-full size-[32px] transition-colors hover:bg-[rgba(255,255,255,0.08)] disabled:opacity-50"
          >
            <IconChevLeft />
          </button>
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="flex items-center justify-center p-[4px] rounded-full size-[32px] transition-colors hover:bg-[rgba(255,255,255,0.08)] disabled:opacity-50"
          >
            <IconChevRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex items-stretch gap-0 w-full overflow-hidden">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="flex-1 min-w-0 pl-[12px] flex flex-col h-full items-start justify-center"
          >
            <button
              className="bg-black flex flex-1 flex-col items-start justify-center min-h-0 overflow-hidden relative rounded-[16px] w-full aspect-[320/368] hover:ring-2 hover:ring-white/20 transition-all group"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-80`} />

              {/* Mock screenshot */}
              <div className="absolute inset-0 flex items-center justify-center px-6 py-8">
                <div className="bg-black/30 backdrop-blur-sm rounded-[8px] drop-shadow-2xl w-full max-w-[221px] h-[147px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 h-2 bg-white/20 rounded-full" />
                  <div className="absolute top-7 left-3 right-6 h-1.5 bg-white/10 rounded-full" />
                  <div className="absolute top-11 left-3 right-9 h-1.5 bg-white/10 rounded-full" />
                  <div className="absolute top-16 left-3 right-3 bottom-3 bg-white/5 rounded-md" />
                </div>
              </div>

              {/* Explore overlay on hover */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}`}>
                <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] px-[24px] py-[10px] rounded-full shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)]">
                  <span className="text-white text-[13px] font-medium leading-[19.5px]">Explore</span>
                </div>
              </div>

              {/* Card name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.3)] to-transparent pb-[16px] pt-[24px] px-[16px]">
                <p className="text-white text-[12.7px] font-medium leading-[19.5px] truncate">{card.name}</p>
              </div>
            </button>
          </div>
        ))}
        {/* Fill remaining slots */}
        {visibleCards.length < cardsPerPage && Array.from({ length: cardsPerPage - visibleCards.length }).map((_, i) => (
          <div key={`empty-${i}`} className="flex-1 min-w-0 pl-[12px]" />
        ))}
      </div>
    </div>
  );
}

// ─── Toast / Generate Result ──────────────────────────────────────────────────

interface GenerateToastProps {
  prompt: string;
  onClose: () => void;
}

function GenerateToast({ prompt, onClose }: GenerateToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 backdrop-blur-[20px] bg-[rgba(22,23,24,0.9)] border border-[rgba(218,220,224,0.2)] rounded-[16px] p-4 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] max-w-[400px] flex items-start gap-3">
      <div className="mt-0.5">
        <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p1ba53d00} fill="#F1F3F4" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#f1f3f4] text-[13px] font-medium mb-1">Generating your design…</p>
        <p className="text-[#bdc1c6] text-[12px] leading-relaxed truncate">{prompt}</p>
      </div>
      <button onClick={onClose} className="text-[#bdc1c6] hover:text-[#f1f3f4] transition-colors shrink-0">
        <svg fill="none" height="14" viewBox="0 0 14 14" width="14">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

// ─── Appearance Button ────────────────────────────────────────────────────────

function AppearanceButton() {
  return (
    <div className="absolute bottom-[16px] right-[16px]">
      <button className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center p-[0.067px] rounded-full size-[32px] hover:bg-[rgba(60,64,67,0.7)] transition-colors">
        <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
          <path d={svgPaths.pdeb5a00} fill="#F1F3F4" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

interface StitchAppProps {
  onSubmit?: (prompt: string, projectName?: string) => void;
}

export default function StitchApp({ onSubmit: externalSubmit }: StitchAppProps = {}) {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [generatingPrompt, setGeneratingPrompt] = useState<string | null>(null);

  function handleSubmit(prompt: string) {
    if (externalSubmit) {
      externalSubmit(prompt, "Minimal Finance Tracker");
    } else {
      setGeneratingPrompt(prompt);
    }
  }

  return (
    <div className="bg-[#202124] flex flex-col h-screen w-full">
      {/* Header */}
      <StitchHeader />

      {/* Body */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left sidebar */}
        <Sidebar activeProject={activeProject} onSelectProject={setActiveProject} />

        {/* Main content */}
        <div className="flex-1 min-w-0 overflow-auto">
          <div className="flex flex-col items-center">
            {/* Welcome / prompt section */}
            <div className="flex flex-col items-center justify-center max-w-[2032px] min-h-[611px] pb-[83.6px] pt-[163.6px] px-[24px] w-full">
              <div className="flex flex-col items-center max-w-[1000px] w-full">
                <div className="flex flex-col gap-[24px] items-start w-full">
                  <PromptBox onSubmit={handleSubmit} />
                </div>
              </div>
            </div>

            {/* Inspiration section */}
            <div className="flex flex-col items-start max-w-[2032px] pb-[128px] pl-[48px] pr-[24px] pt-[32px] w-full">
              <InspirationGallery />
            </div>
          </div>
        </div>
      </div>

      {/* Appearance button (absolute bottom-right of body) */}
      <div className="fixed bottom-[16px] right-[16px] z-10">
        <button className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] flex items-center justify-center p-[0.067px] rounded-full size-[32px] hover:bg-[rgba(60,64,67,0.7)] transition-colors">
          <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
            <path d={svgPaths.pdeb5a00} fill="#F1F3F4" />
          </svg>
        </button>
      </div>

      {/* Generate toast */}
      {generatingPrompt && (
        <GenerateToast
          prompt={generatingPrompt}
          onClose={() => setGeneratingPrompt(null)}
        />
      )}
    </div>
  );
}
