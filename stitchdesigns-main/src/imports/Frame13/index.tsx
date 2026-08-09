import svgPaths from "./svg-w83i7d1cya";

function ButtonSvg() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40px]" data-name="Button → SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 40 16" width="40">
        <g clipPath="url(#clip0_0_14)" id="Button â SVG">
          <path d={svgPaths.p3432d900} fill="white" id="Vector" />
          <path d={svgPaths.p184a1980} fill="black" id="Vector_2" />
          <path d={svgPaths.p32a51f00} fill="black" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="16" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <ButtonSvg />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[13.6px] whitespace-nowrap">
        <p className="leading-[22.75px]">Finance App</p>
      </div>
    </div>
  );
}

function MaterialSymbolsHistoryRounded() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:history-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="material-symbols:history-rounded">
          <path d={svgPaths.p2cb59880} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="message-circle">
          <path d={svgPaths.p3d153ac0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <MaterialSymbolsHistoryRounded />
      <MessageCircle />
    </div>
  );
}

function Frame2() {
  return (
    <div className="border-[rgba(255,255,255,0.3)] border-b border-solid content-stretch flex items-center justify-between p-[12px] relative shrink-0 w-full">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#323436] content-stretch flex items-center justify-center p-[10px] relative rounded-[16px] shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[14px] w-[292px]">
        <p className="leading-[20px]">{`generate in dark mode, : So I want to build a really high quality dashboard which has, like, today's schedule. I can see all the stuff that I have got for today, either in a list view or a, like, condensed list view or, like, an order of timeline view. `}</p>
      </div>
    </div>
  );
}

function ReiconTickCircleFilled() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="reicon:tick-circle-filled">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="reicon:tick-circle-filled">
          <path d={svgPaths.p3b247780} fill="white" fillOpacity="0.46" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-end relative shrink-0 w-full">
      <ReiconTickCircleFilled />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.46)] w-[68px]">
        <p className="leading-[20px]">created</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
        <g id="Frame 15">
          <line id="Line 1" stroke="white" strokeOpacity="0.46" x1="9.5" x2="9.5" y1="2.18557e-08" y2="19" />
        </g>
      </svg>
    </div>
  );
}

function TdesignLoading() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="tdesign:loading">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="tdesign:loading">
          <path d={svgPaths.p34cd2d80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3px] items-center min-w-px relative">
      <TdesignLoading />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[68px]">
        <p className="leading-[20px]">creating</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-end px-[12px] relative shrink-0 w-full">
      <Frame3 />
      <Frame7 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-[#1b1c1e] content-stretch flex flex-col gap-[16px] items-center pb-[12px] relative rounded-[8px] size-full">
      <Frame2 />
      <Frame4 />
    </div>
  );
}