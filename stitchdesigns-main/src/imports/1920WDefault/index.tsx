import svgPaths from "./svg-lt5c16mo2h";
import { imgGroup, imgGroup1, imgGroup2, imgBackground, imgBackground1, imgBackground2, imgBackground3, imgGradient } from "./svg-uipy6";

function Group() {
  return (
    <div className="absolute inset-[0.91%_0.07%_0.91%_0.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.983px_-0.219px] mask-size-[128.945px_24px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.563" preserveAspectRatio="none" viewBox="0 0 127.931 23.563" width="127.931">
        <g id="Group">
          <path d={svgPaths.pab70600} fill="white" id="Vector" />
          <path d={svgPaths.p98d8000} fill="white" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.04%_0_0]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function StitchWordSvg() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[129px]" data-name="stitch-word.svg">
      <ClipPathGroup />
    </div>
  );
}

function LinkProductNameStitchBeta() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Link → Product name, Stitch (beta)">
      <StitchWordSvg />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <LinkProductNameStitchBeta />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Container">
      <Container2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p27e2f400} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[30.87px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13px] top-[9.07px] whitespace-nowrap">
        <p className="leading-[19.5px]">Docs</p>
      </div>
    </div>
  );
}

function Docs() {
  return (
    <div className="content-stretch flex gap-[6px] items-center p-[8px] relative rounded-[9999px] self-stretch shrink-0" data-name="Docs">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <Docs />
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Link />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p2236d00} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Discord() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[9999px] self-stretch shrink-0" data-name="Discord">
      <Svg1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <Discord />
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[80.87px] top-1/2" data-name="Container">
      <Link1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p173a2780} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[9999px] self-stretch shrink-0" data-name="X">
      <Svg2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <X />
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[124.87px] top-1/2" data-name="Container">
      <Link2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p3e388070} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function ButtonDialogWhatsNew() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[168.87px] p-[8px] rounded-[9999px] top-1/2" data-name="Button dialog - What's New">
      <Container9 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[16.67%_41.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-4px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgGroup1}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 4 16" width="4">
        <g id="Group">
          <path d={svgPaths.p9131f80} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group1 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <MaskGroup />
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[212.87px] p-[8px] rounded-[9999px] top-1/2" data-name="Button menu">
      <Svg4 />
    </div>
  );
}

function ProfileImageForMridulaNair() {
  return <div className="max-w-[32px] min-w-[32px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Profile image for Mridula Nair" />;
}

function ButtonDialogAccountMenu() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.2)] border-solid content-stretch flex items-center justify-center min-w-[32px] p-[0.067px] relative rounded-[9999px] shrink-0 size-[34px]" data-name="Button dialog - Account Menu">
      <ProfileImageForMridulaNair />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start left-[259.87px] top-1/2" data-name="Container">
      <ButtonDialogAccountMenu />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[292.87px]" data-name="Container">
      <Container4 />
      <Container7 />
      <Container8 />
      <ButtonDialogWhatsNew />
      <ButtonMenu />
      <Container10 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between px-[24px] shrink-0 sticky top-0 w-full z-[3]" data-name="Header">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.p26f3f700} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-end justify-center left-0 pb-px right-[0.01px] top-[-0.94px]" data-name="Container">
      <Container15 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">My Projects</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px p-[8px] relative rounded-[32px]" data-name="Radio">
      <div className="absolute bg-[#3c4043] inset-[0_0.01px_0_0] rounded-[32px]" data-name="Background" />
      <Container13 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.p18366b00} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-end justify-center min-w-px pb-px relative" data-name="Container">
      <Container18 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Shared with me</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px pb-[8px] pt-[7.065px] px-[8px] relative rounded-[32px]" data-name="Radio">
      <Container16 />
    </div>
  );
}

function Radiogroup() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] content-stretch flex gap-[4px] items-start justify-center p-[2px] relative rounded-[32px] shrink-0 w-full" data-name="Radiogroup">
      <Radio />
      <Radio1 />
    </div>
  );
}

function RadiogroupMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Radiogroup:margin">
      <Radiogroup />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p248740c0} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] pr-[8px] relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13.5px] w-full">
        <p className="leading-[normal]">Search projects</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[1.87px] relative" data-name="Input">
      <Container21 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(56,59,61,0.58)] content-stretch flex items-center p-[10px] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay+OverlayBlur">
      <Container20 />
      <Input />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] shrink-0 sticky top-0 w-full" data-name="Container">
      <OverlayOverlayBlur />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.8px] w-full">
        <p className="leading-[24px]">Recent</p>
      </div>
    </div>
  );
}

function Image() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background2() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[139.67px]">
        <p className="leading-[20.685px]">Date Night Discovery</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.21px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 4, 2026</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container30 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
      <Margin />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background2 />
      <Container23 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[0.42px] items-center relative shrink-0 w-full" data-name="List">
      <Container22 />
      <Button />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.5px] w-full">
        <p className="leading-[24px]">Yesterday</p>
      </div>
    </div>
  );
}

function Image1() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background3() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[155.94px]">
        <p className="leading-[20.685px]">CineMood Movie Finder</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.81px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 3, 2026</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background3 />
      <Container32 />
    </div>
  );
}

function Image2() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background4() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[188.08px]">
        <p className="leading-[20.685px]">Personal Finance Dashboard</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.81px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 3, 2026</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background4 />
      <Container38 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.4px] items-center relative shrink-0 w-full" data-name="List">
      <Container31 />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.6px] w-full">
        <p className="leading-[24px]">Last 7 days</p>
      </div>
    </div>
  );
}

function Image3() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background5() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[159.5px]">
        <p className="leading-[20.685px]">Minimal Finance Tracker</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background5 />
      <Container45 />
    </div>
  );
}

function Background7() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background6() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background7 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[165.05px]">
        <p className="leading-[20.685px]">Personal Finance Tracker</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background6 />
      <Container51 />
    </div>
  );
}

function Image4() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background8() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image4 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[188.08px]">
        <p className="leading-[20.685px]">Personal Finance Dashboard</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container64 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container63 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container61 />
      <Container62 />
      <Margin1 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background8 />
      <Container57 />
    </div>
  );
}

function Background10() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background9() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background10 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[145.51px]">
        <p className="leading-[20.685px]">Strategic Finance Hub</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background9 />
      <Container65 />
    </div>
  );
}

function Background12() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background11() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background12 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[198.57px]">
        <p className="leading-[20.685px]">Minimalist Finance Dashboard</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container78 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container77 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container75 />
      <Container76 />
      <Margin2 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background11 />
      <Container71 />
    </div>
  );
}

function Image5() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background13() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image5 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[234.1px]">
        <p className="leading-[20.685px]">Remix of Auralis Saas Landing Page</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container80 />
      <Container81 />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background13 />
      <Container79 />
    </div>
  );
}

function Background15() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background14() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background15 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[175.54px]">
        <p className="leading-[20.685px]">Minimalist Finance Tracker</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg20 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container88 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background14 />
      <Container85 />
    </div>
  );
}

function Background17() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background16() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background17 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[185.16px]">
        <p className="leading-[20.685px]">Emerald Finance Dashboard</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg21 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container94 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background16 />
      <Container91 />
    </div>
  );
}

function Image6() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background18() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image6 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[161.01px]">
        <p className="leading-[20.685px]">Smart Expense Manager</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg22 />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.73px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2026</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container101 />
      <Container102 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background18 />
      <Container97 />
    </div>
  );
}

function Image7() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background19() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image7 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.4px] top-[9.98px] w-[184.57px]">
        <p className="leading-[20.685px]">Smart SMS Expense Tracker</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg23 />
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 1, 2026</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container106 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background19 />
      <Container103 />
    </div>
  );
}

function Image8() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background20() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image8 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[166.05px]">
        <p className="leading-[20.685px]">Monthly Expense Tracker</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg24 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 1, 2026</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container112 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background20 />
      <Container109 />
    </div>
  );
}

function Image9() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background21() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image9 />
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[165.05px]">
        <p className="leading-[20.685px]">Personal Finance Tracker</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg25 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 1, 2026</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg26 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container122 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container121 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container119 />
      <Container120 />
      <Margin3 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container118 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background21 />
      <Container115 />
    </div>
  );
}

function Image10() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background22() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image10 />
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[188.08px]">
        <p className="leading-[20.685px]">Personal Finance Dashboard</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg27 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 1, 2026</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container127 />
      <Container128 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container126 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container124 />
      <Container125 />
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background22 />
      <Container123 />
    </div>
  );
}

function Image11() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background23() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image11 />
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[188.08px]">
        <p className="leading-[20.685px]">Personal Finance Dashboard</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg28 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 1, 2026</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container133 />
      <Container134 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container132 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background23 />
      <Container129 />
    </div>
  );
}

function Image12() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background24() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image12 />
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[226.45px]">
        <p className="leading-[20.685px]">ScholarFlow Academic Workspace</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg29 />
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 1, 2026</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container138 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container136 />
      <Container137 />
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background24 />
      <Container135 />
    </div>
  );
}

function Background26() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background25() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background26 />
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[234.1px]">
        <p className="leading-[20.685px]">Remix of Auralis Saas Landing Page</p>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg30 />
    </div>
  );
}

function Container146() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.62px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 31, 2026</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container145 />
      <Container146 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container144 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container142 />
      <Container143 />
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background25 />
      <Container141 />
    </div>
  );
}

function Image13() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background27() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image13 />
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[210.05px]">
        <p className="leading-[20.685px]">Smart Semester Course Planner</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg31 />
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.62px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 31, 2026</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container151 />
      <Container152 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container150 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container148 />
      <Container149 />
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background27 />
      <Container147 />
    </div>
  );
}

function Image14() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background28() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image14 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[172.21px]">
        <p className="leading-[20.685px]">Redesigned InstiApp Feed</p>
      </div>
    </div>
  );
}

function Svg32() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg32 />
    </div>
  );
}

function Container158() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.05px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 30, 2026</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container157 />
      <Container158 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container156 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container154 />
      <Container155 />
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background28 />
      <Container153 />
    </div>
  );
}

function Image15() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background29() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image15 />
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[173.42px]">
        <p className="leading-[20.685px]">Academic Resource Portal</p>
      </div>
    </div>
  );
}

function Svg33() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg33 />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.05px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 30, 2026</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg34 />
    </div>
  );
}

function Container165() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container166 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container165 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container163 />
      <Container164 />
      <Margin4 />
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container162 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container160 />
      <Container161 />
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background29 />
      <Container159 />
    </div>
  );
}

function Image16() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background30() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image16 />
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[139.59px]">
        <p className="leading-[20.685px]">Insit-GPT AI Platform</p>
      </div>
    </div>
  );
}

function Svg35() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg35 />
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.05px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 30, 2026</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container171 />
      <Container172 />
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container170 />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container168 />
      <Container169 />
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background30 />
      <Container167 />
    </div>
  );
}

function Image17() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background31() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image17 />
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[146.2px]">
        <p className="leading-[20.685px]">Inline Content Creator</p>
      </div>
    </div>
  );
}

function Svg36() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg36 />
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container177 />
      <Container178 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container176 />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container174 />
      <Container175 />
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background31 />
      <Container173 />
    </div>
  );
}

function Image18() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background32() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image18 />
    </div>
  );
}

function Container180() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[146.22px]">
        <p className="leading-[20.685px]">Volunteer Profile Page</p>
      </div>
    </div>
  );
}

function Svg37() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg37 />
    </div>
  );
}

function Container184() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container183 />
      <Container184 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container182 />
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container180 />
      <Container181 />
    </div>
  );
}

function Button24() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background32 />
      <Container179 />
    </div>
  );
}

function Image19() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background33() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image19 />
    </div>
  );
}

function Container186() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[229.22px]">
        <p className="leading-[20.685px]">Remix of Lumio Saas Landing Page</p>
      </div>
    </div>
  );
}

function Svg38() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg38 />
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container189 />
      <Container190 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container188 />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background33 />
      <Container185 />
    </div>
  );
}

function Image20() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background34() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image20 />
    </div>
  );
}

function Container192() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[219.64px]">
        <p className="leading-[20.685px]">ResoBin Smart Academic Planner</p>
      </div>
    </div>
  );
}

function Svg39() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg39 />
    </div>
  );
}

function Container196() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container195 />
      <Container196 />
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container194 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container192 />
      <Container193 />
    </div>
  );
}

function Button26() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background34 />
      <Container191 />
    </div>
  );
}

function Image21() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background35() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image21 />
    </div>
  );
}

function Container198() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[227.88px]">
        <p className="leading-[20.685px]">Optimized Productivity Dashboard</p>
      </div>
    </div>
  );
}

function Svg40() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container201() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg40 />
    </div>
  );
}

function Container202() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container201 />
      <Container202 />
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container200 />
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container198 />
      <Container199 />
    </div>
  );
}

function Button27() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background35 />
      <Container197 />
    </div>
  );
}

function Image22() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background36() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image22 />
    </div>
  );
}

function Container204() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[206.03px]">
        <p className="leading-[20.685px]">Academic Dashboard Redesign</p>
      </div>
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg41 />
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container207 />
      <Container208 />
    </div>
  );
}

function Container205() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container206 />
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container204 />
      <Container205 />
    </div>
  );
}

function Button28() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background36 />
      <Container203 />
    </div>
  );
}

function Image23() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background37() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image23 />
    </div>
  );
}

function Container210() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[190.86px]">
        <p className="leading-[20.685px]">Interactive Hotspot Heatmap</p>
      </div>
    </div>
  );
}

function Svg42() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg42 />
    </div>
  );
}

function Container214() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.45px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2026</p>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container213 />
      <Container214 />
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container212 />
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container210 />
      <Container211 />
    </div>
  );
}

function Button29() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background37 />
      <Container209 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.4px] items-center relative shrink-0 w-full" data-name="List">
      <Container44 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.6px] w-full">
        <p className="leading-[24px]">Last 30 days</p>
      </div>
    </div>
  );
}

function Image24() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background38() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image24 />
    </div>
  );
}

function Container217() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[229.22px]">
        <p className="leading-[20.685px]">Remix of Lumio Saas Landing Page</p>
      </div>
    </div>
  );
}

function Svg43() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg43 />
    </div>
  );
}

function Container221() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.76px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 28, 2026</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container220 />
      <Container221 />
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container219 />
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container217 />
      <Container218 />
    </div>
  );
}

function Button30() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background38 />
      <Container216 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[0.42px] items-center relative shrink-0 w-full" data-name="List">
      <Container215 />
      <Button30 />
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.4px] w-full">
        <p className="leading-[24px]">This Year</p>
      </div>
    </div>
  );
}

function Image25() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background39() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image25 />
    </div>
  );
}

function Container224() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[162.37px]">
        <p className="leading-[20.685px]">ResoBin Course Explorer</p>
      </div>
    </div>
  );
}

function Svg44() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg44 />
    </div>
  );
}

function Container228() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.36px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 30, 2026</p>
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container227 />
      <Container228 />
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container226 />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container224 />
      <Container225 />
    </div>
  );
}

function Button31() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background39 />
      <Container223 />
    </div>
  );
}

function Image26() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background40() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image26 />
    </div>
  );
}

function Container230() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[175.08px]">
        <p className="leading-[20.685px]">Agent Interface Stylization</p>
      </div>
    </div>
  );
}

function Svg45() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg45 />
    </div>
  );
}

function Container234() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.65px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 27, 2026</p>
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container233 />
      <Container234 />
    </div>
  );
}

function Container231() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container232 />
    </div>
  );
}

function Container229() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container230 />
      <Container231 />
    </div>
  );
}

function Button32() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background40 />
      <Container229 />
    </div>
  );
}

function Image27() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background41() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image27 />
    </div>
  );
}

function Container236() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[167.55px]">
        <p className="leading-[20.685px]">Styled Login Page Design</p>
      </div>
    </div>
  );
}

function Svg46() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container239() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg46 />
    </div>
  );
}

function Container240() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.24px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 26, 2026</p>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container239 />
      <Container240 />
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container238 />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container236 />
      <Container237 />
    </div>
  );
}

function Button33() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background41 />
      <Container235 />
    </div>
  );
}

function Background43() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background42() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background43 />
    </div>
  );
}

function Container242() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[207.78px]">
        <p className="leading-[20.685px]">Unified Productivity Dashboard</p>
      </div>
    </div>
  );
}

function Svg47() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container245() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg47 />
    </div>
  );
}

function Container246() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.98px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 23, 2026</p>
      </div>
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container245 />
      <Container246 />
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container244 />
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container242 />
      <Container243 />
    </div>
  );
}

function Button34() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background42 />
      <Container241 />
    </div>
  );
}

function Background45() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background44() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background45 />
    </div>
  );
}

function Container248() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[231.24px]">
        <p className="leading-[20.685px]">Academic Resource Request Portal</p>
      </div>
    </div>
  );
}

function Svg48() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg48 />
    </div>
  );
}

function Container252() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.98px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 23, 2026</p>
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container251 />
      <Container252 />
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container250 />
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container248 />
      <Container249 />
    </div>
  );
}

function Button35() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background44 />
      <Container247 />
    </div>
  );
}

function Image28() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background46() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image28 />
    </div>
  );
}

function Container254() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[165.59px]">
        <p className="leading-[20.685px]">Photo Upload Integration</p>
      </div>
    </div>
  );
}

function Svg49() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg49 />
    </div>
  );
}

function Container258() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 18, 2026</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container257 />
      <Container258 />
    </div>
  );
}

function Container255() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container256 />
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container254 />
      <Container255 />
    </div>
  );
}

function Button36() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background46 />
      <Container253 />
    </div>
  );
}

function Image29() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background47() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image29 />
    </div>
  );
}

function Container260() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[165.51px]">
        <p className="leading-[20.685px]">Multi-Signature Manager</p>
      </div>
    </div>
  );
}

function Svg50() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container263() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg50 />
    </div>
  );
}

function Container264() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.1px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 15, 2026</p>
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container263 />
      <Container264 />
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container262 />
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container260 />
      <Container261 />
    </div>
  );
}

function Button37() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background47 />
      <Container259 />
    </div>
  );
}

function Image30() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background48() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image30 />
    </div>
  );
}

function Container266() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[154.64px]">
        <p className="leading-[20.685px]">Clash Card UI Redesign</p>
      </div>
    </div>
  );
}

function Svg51() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg51 />
    </div>
  );
}

function Container270() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.04px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 6, 2026</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container269 />
      <Container270 />
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container268 />
    </div>
  );
}

function Container265() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container266 />
      <Container267 />
    </div>
  );
}

function Button38() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background48 />
      <Container265 />
    </div>
  );
}

function Image31() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background49() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image31 />
    </div>
  );
}

function Container272() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[208.19px]">
        <p className="leading-[20.685px]">Mobile Notification Preferences</p>
      </div>
    </div>
  );
}

function Svg52() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container275() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg52 />
    </div>
  );
}

function Container276() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.7px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 2, 2026</p>
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container275 />
      <Container276 />
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container274 />
    </div>
  );
}

function Container271() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container272 />
      <Container273 />
    </div>
  );
}

function Button39() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background49 />
      <Container271 />
    </div>
  );
}

function Background51() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background50() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background51 />
    </div>
  );
}

function Container278() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[212.92px]">
        <p className="leading-[20.685px]">Research-Driven Filter Redesign</p>
      </div>
    </div>
  );
}

function Svg53() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg53 />
    </div>
  );
}

function Container282() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.7px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 2, 2026</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container281 />
      <Container282 />
    </div>
  );
}

function Container279() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container280 />
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container278 />
      <Container279 />
    </div>
  );
}

function Button40() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background50 />
      <Container277 />
    </div>
  );
}

function Image32() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background52() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image32 />
    </div>
  );
}

function Container284() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[206.58px]">
        <p className="leading-[20.685px]">Interactive Mess Menu Widgets</p>
      </div>
    </div>
  );
}

function Svg54() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container287() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg54 />
    </div>
  );
}

function Container288() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[60.43px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">May 20, 2026</p>
      </div>
    </div>
  );
}

function Container286() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container287 />
      <Container288 />
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container286 />
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container284 />
      <Container285 />
    </div>
  );
}

function Button41() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background52 />
      <Container283 />
    </div>
  );
}

function Image33() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background53() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image33 />
    </div>
  );
}

function Container290() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[201.33px]">
        <p className="leading-[20.685px]">Responsive Mobile Conversion</p>
      </div>
    </div>
  );
}

function Svg55() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg55 />
    </div>
  );
}

function Container294() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.46px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">May 14, 2026</p>
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container293 />
      <Container294 />
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container292 />
    </div>
  );
}

function Container289() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container290 />
      <Container291 />
    </div>
  );
}

function Button42() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background53 />
      <Container289 />
    </div>
  );
}

function Image34() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background54() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image34 />
    </div>
  );
}

function Container296() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[164.64px]">
        <p className="leading-[20.685px]">Small Mess Menu Widget</p>
      </div>
    </div>
  );
}

function Svg56() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg56 />
    </div>
  );
}

function Container300() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.07px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">May 13, 2026</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container299 />
      <Container300 />
    </div>
  );
}

function Container297() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container298 />
    </div>
  );
}

function Container295() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container296 />
      <Container297 />
    </div>
  );
}

function Button43() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background54 />
      <Container295 />
    </div>
  );
}

function Image35() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background55() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image35 />
    </div>
  );
}

function Container302() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[183.45px]">
        <p className="leading-[20.685px]">Optimized Onboarding Flow</p>
      </div>
    </div>
  );
}

function Svg57() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container305() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg57 />
    </div>
  );
}

function Container306() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.77px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Apr 14, 2026</p>
      </div>
    </div>
  );
}

function Container304() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container305 />
      <Container306 />
    </div>
  );
}

function Container303() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container304 />
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container302 />
      <Container303 />
    </div>
  );
}

function Button44() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background55 />
      <Container301 />
    </div>
  );
}

function Image36() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background56() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image36 />
    </div>
  );
}

function Container308() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[180.53px]">
        <p className="leading-[20.685px]">Paw-bono Volunteer Profile</p>
      </div>
    </div>
  );
}

function Svg58() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container311() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg58 />
    </div>
  );
}

function Container312() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.37px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Apr 13, 2026</p>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container311 />
      <Container312 />
    </div>
  );
}

function Container309() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container310 />
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container308 />
      <Container309 />
    </div>
  );
}

function Button45() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background56 />
      <Container307 />
    </div>
  );
}

function Image37() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background57() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image37 />
    </div>
  );
}

function Container314() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[145.25px]">
        <p className="leading-[20.685px]">{`Event Status & Details`}</p>
      </div>
    </div>
  );
}

function Svg59() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container317() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg59 />
    </div>
  );
}

function Container318() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Apr 2, 2026</p>
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container317 />
      <Container318 />
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container316 />
    </div>
  );
}

function Container313() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container314 />
      <Container315 />
    </div>
  );
}

function Button46() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background57 />
      <Container313 />
    </div>
  );
}

function Image38() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background58() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image38 />
    </div>
  );
}

function Container320() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[170.47px]">
        <p className="leading-[20.685px]">{`Event Status & Comments`}</p>
      </div>
    </div>
  );
}

function Svg60() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container323() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg60 />
    </div>
  );
}

function Container324() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Apr 2, 2026</p>
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container323 />
      <Container324 />
    </div>
  );
}

function Container321() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container322 />
    </div>
  );
}

function Container319() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container320 />
      <Container321 />
    </div>
  );
}

function Button47() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background58 />
      <Container319 />
    </div>
  );
}

function Image39() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background59() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image39 />
    </div>
  );
}

function Container326() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[133.09px]">
        <p className="leading-[20.685px]">Admin Event Review</p>
      </div>
    </div>
  );
}

function Svg61() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container329() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg61 />
    </div>
  );
}

function Container330() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.02px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 28, 2026</p>
      </div>
    </div>
  );
}

function Container328() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container329 />
      <Container330 />
    </div>
  );
}

function Container327() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container328 />
    </div>
  );
}

function Container325() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container326 />
      <Container327 />
    </div>
  );
}

function Button48() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background59 />
      <Container325 />
    </div>
  );
}

function Image40() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background60() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image40 />
    </div>
  );
}

function Container332() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[126.82px]">
        <p className="leading-[20.685px]">Refined Event Feed</p>
      </div>
    </div>
  );
}

function Svg62() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container335() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg62 />
    </div>
  );
}

function Container336() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.02px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 28, 2026</p>
      </div>
    </div>
  );
}

function Container334() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container335 />
      <Container336 />
    </div>
  );
}

function Container333() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container334 />
    </div>
  );
}

function Container331() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container332 />
      <Container333 />
    </div>
  );
}

function Button49() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background60 />
      <Container331 />
    </div>
  );
}

function Image41() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background61() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image41 />
    </div>
  );
}

function Container338() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[117.46px]">
        <p className="leading-[20.685px]">Create New Event</p>
      </div>
    </div>
  );
}

function Svg63() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container341() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg63 />
    </div>
  );
}

function Container342() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.62px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 27, 2026</p>
      </div>
    </div>
  );
}

function Container340() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container341 />
      <Container342 />
    </div>
  );
}

function Container339() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container340 />
    </div>
  );
}

function Container337() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container338 />
      <Container339 />
    </div>
  );
}

function Button50() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background61 />
      <Container337 />
    </div>
  );
}

function Image42() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background62() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image42 />
    </div>
  );
}

function Container344() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[127.18px]">
        <p className="leading-[20.685px]">Organization Detail</p>
      </div>
    </div>
  );
}

function Svg64() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container347() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg64 />
    </div>
  );
}

function Container348() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.11px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 25, 2026</p>
      </div>
    </div>
  );
}

function Container346() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container347 />
      <Container348 />
    </div>
  );
}

function Container345() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container346 />
    </div>
  );
}

function Container343() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container344 />
      <Container345 />
    </div>
  );
}

function Button51() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background62 />
      <Container343 />
    </div>
  );
}

function Image43() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background63() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image43 />
    </div>
  );
}

function Container350() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[158.09px]">
        <p className="leading-[20.685px]">Insti Feed Desktop Feed</p>
      </div>
    </div>
  );
}

function Svg65() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container353() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg65 />
    </div>
  );
}

function Container354() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.23px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.7px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 20, 2026</p>
      </div>
    </div>
  );
}

function Container352() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container353 />
      <Container354 />
    </div>
  );
}

function Container351() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container352 />
    </div>
  );
}

function Container349() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container350 />
      <Container351 />
    </div>
  );
}

function Button52() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background63 />
      <Container349 />
    </div>
  );
}

function Image44() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background64() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image44 />
    </div>
  );
}

function Container356() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[158.06px]">
        <p className="leading-[20.685px]">Campus Feed - Desktop</p>
      </div>
    </div>
  );
}

function Svg66() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container359() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg66 />
    </div>
  );
}

function Container360() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.64px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 19, 2026</p>
      </div>
    </div>
  );
}

function Container358() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container359 />
      <Container360 />
    </div>
  );
}

function Container357() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container358 />
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container356 />
      <Container357 />
    </div>
  );
}

function Button53() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background64 />
      <Container355 />
    </div>
  );
}

function Image45() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background65() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image45 />
    </div>
  );
}

function Container362() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[243.72px]">
        <p className="leading-[20.685px]">Mobile Dashboard with Up Next Card</p>
      </div>
    </div>
  );
}

function Svg67() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container365() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg67 />
    </div>
  );
}

function Container366() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.72px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Mar 11, 2026</p>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container365 />
      <Container366 />
    </div>
  );
}

function Container363() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container364 />
    </div>
  );
}

function Container361() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container362 />
      <Container363 />
    </div>
  );
}

function Button54() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background65 />
      <Container361 />
    </div>
  );
}

function Image46() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background66() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image46 />
    </div>
  );
}

function Container368() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[163.44px]">
        <p className="leading-[20.685px]">Silver Tech Home Screen</p>
      </div>
    </div>
  );
}

function Svg68() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg68 />
    </div>
  );
}

function Container372() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.87px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Feb 27, 2026</p>
      </div>
    </div>
  );
}

function Container370() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container371 />
      <Container372 />
    </div>
  );
}

function Container369() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container370 />
    </div>
  );
}

function Container367() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container368 />
      <Container369 />
    </div>
  );
}

function Button55() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background66 />
      <Container367 />
    </div>
  );
}

function Image47() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background67() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image47 />
    </div>
  );
}

function Container374() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[119.36px]">
        <p className="leading-[20.685px]">Generated Screen</p>
      </div>
    </div>
  );
}

function Svg69() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container377() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg69 />
    </div>
  );
}

function Container378() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.87px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Feb 27, 2026</p>
      </div>
    </div>
  );
}

function Container376() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container377 />
      <Container378 />
    </div>
  );
}

function Container375() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container376 />
    </div>
  );
}

function Container373() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container374 />
      <Container375 />
    </div>
  );
}

function Button56() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background67 />
      <Container373 />
    </div>
  );
}

function Image48() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background68() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image48 />
    </div>
  );
}

function Container380() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[119.36px]">
        <p className="leading-[20.685px]">Generated Screen</p>
      </div>
    </div>
  );
}

function Svg70() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container383() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg70 />
    </div>
  );
}

function Container384() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.46px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Feb 26, 2026</p>
      </div>
    </div>
  );
}

function Container382() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container383 />
      <Container384 />
    </div>
  );
}

function Container381() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container382 />
    </div>
  );
}

function Container379() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container380 />
      <Container381 />
    </div>
  );
}

function Button57() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background68 />
      <Container379 />
    </div>
  );
}

function Image49() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background69() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image49 />
    </div>
  );
}

function Container386() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[149.59px]">
        <p className="leading-[20.685px]">{`Profile & Settings Sync`}</p>
      </div>
    </div>
  );
}

function Svg71() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container389() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg71 />
    </div>
  );
}

function Container390() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.11px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 26, 2026</p>
      </div>
    </div>
  );
}

function Container388() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container389 />
      <Container390 />
    </div>
  );
}

function Container387() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container388 />
    </div>
  );
}

function Container385() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container386 />
      <Container387 />
    </div>
  );
}

function Button58() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background69 />
      <Container385 />
    </div>
  );
}

function Image50() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background70() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image50 />
    </div>
  );
}

function Container392() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[20.32px] w-[215.63px]">
        <p className="leading-[20.685px] mb-0">Modern Restaurant Detail Page -</p>
        <p className="leading-[20.685px]">Variant 1</p>
      </div>
    </div>
  );
}

function Svg72() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg72 />
    </div>
  );
}

function Container396() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.7px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 21, 2026</p>
      </div>
    </div>
  );
}

function Container394() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container395 />
      <Container396 />
    </div>
  );
}

function Container393() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container394 />
    </div>
  );
}

function Container391() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container392 />
      <Container393 />
    </div>
  );
}

function Button59() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background70 />
      <Container391 />
    </div>
  );
}

function Image51() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background71() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image51 />
    </div>
  );
}

function Container398() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[231.65px]">
        <p className="leading-[20.685px]">Aether Restaurant Details Variant 2</p>
      </div>
    </div>
  );
}

function Svg73() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container401() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg73 />
    </div>
  );
}

function Container402() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.7px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 21, 2026</p>
      </div>
    </div>
  );
}

function Container400() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container401 />
      <Container402 />
    </div>
  );
}

function Container399() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container400 />
    </div>
  );
}

function Container397() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container398 />
      <Container399 />
    </div>
  );
}

function Button60() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background71 />
      <Container397 />
    </div>
  );
}

function Image52() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background72() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image52 />
    </div>
  );
}

function Container404() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[172.9px]">
        <p className="leading-[20.685px] mb-0">Library Admin User Profile</p>
        <p className="leading-[20.685px]">Management</p>
      </div>
    </div>
  );
}

function Svg74() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container407() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg74 />
    </div>
  );
}

function Container408() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 20, 2026</p>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container407 />
      <Container408 />
    </div>
  );
}

function Container405() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container406 />
    </div>
  );
}

function Container403() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container404 />
      <Container405 />
    </div>
  );
}

function Button61() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background72 />
      <Container403 />
    </div>
  );
}

function Image53() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background73() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image53 />
    </div>
  );
}

function Container410() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[172.9px]">
        <p className="leading-[20.685px]">Library Admin User Profile</p>
      </div>
    </div>
  );
}

function Svg75() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container413() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg75 />
    </div>
  );
}

function Container414() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 20, 2026</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container413 />
      <Container414 />
    </div>
  );
}

function Container411() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container412 />
    </div>
  );
}

function Container409() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container410 />
      <Container411 />
    </div>
  );
}

function Button62() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background73 />
      <Container409 />
    </div>
  );
}

function Image54() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background74() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image54 />
    </div>
  );
}

function Container416() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[199.8px]">
        <p className="leading-[20.685px]">User Item Trade Card Variant 1</p>
      </div>
    </div>
  );
}

function Svg76() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container419() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg76 />
    </div>
  );
}

function Container420() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.55px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 19, 2026</p>
      </div>
    </div>
  );
}

function Container418() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container419 />
      <Container420 />
    </div>
  );
}

function Container417() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container418 />
    </div>
  );
}

function Container415() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container416 />
      <Container417 />
    </div>
  );
}

function Button63() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background74 />
      <Container415 />
    </div>
  );
}

function Image55() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background75() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image55 />
    </div>
  );
}

function Container422() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[180.53px]">
        <p className="leading-[20.685px]">Librarian Admin Dashboard</p>
      </div>
    </div>
  );
}

function Svg77() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container425() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg77 />
    </div>
  );
}

function Container426() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.18px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 14, 2026</p>
      </div>
    </div>
  );
}

function Container424() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container425 />
      <Container426 />
    </div>
  );
}

function Container423() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container424 />
    </div>
  );
}

function Container421() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container422 />
      <Container423 />
    </div>
  );
}

function Button64() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background75 />
      <Container421 />
    </div>
  );
}

function Image56() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background76() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image56 />
    </div>
  );
}

function Container428() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[240.53px]">
        <p className="leading-[20.685px]">Library Admin Dashboard Wireframe</p>
      </div>
    </div>
  );
}

function Svg78() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container431() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg78 />
    </div>
  );
}

function Container432() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.18px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 14, 2026</p>
      </div>
    </div>
  );
}

function Container430() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container431 />
      <Container432 />
    </div>
  );
}

function Container429() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container430 />
    </div>
  );
}

function Container427() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container428 />
      <Container429 />
    </div>
  );
}

function Button65() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background76 />
      <Container427 />
    </div>
  );
}

function Image57() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background77() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image57 />
    </div>
  );
}

function Container434() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[98.07px]">
        <p className="leading-[20.685px]">Meet the Team</p>
      </div>
    </div>
  );
}

function Svg79() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container437() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg79 />
    </div>
  );
}

function Container438() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.75px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 8, 2026</p>
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container437 />
      <Container438 />
    </div>
  );
}

function Container435() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container436 />
    </div>
  );
}

function Container433() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container434 />
      <Container435 />
    </div>
  );
}

function Button66() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background77 />
      <Container433 />
    </div>
  );
}

function Image58() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background78() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image58 />
    </div>
  );
}

function Container440() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[123.25px]">
        <p className="leading-[20.685px]">Our Creative Team</p>
      </div>
    </div>
  );
}

function Svg80() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container443() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg80 />
    </div>
  );
}

function Container444() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.84px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 5, 2026</p>
      </div>
    </div>
  );
}

function Container442() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container443 />
      <Container444 />
    </div>
  );
}

function Container441() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container442 />
    </div>
  );
}

function Container439() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container440 />
      <Container441 />
    </div>
  );
}

function Button67() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background78 />
      <Container439 />
    </div>
  );
}

function Image59() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background79() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image59 />
    </div>
  );
}

function Container446() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[213.41px]">
        <p className="leading-[20.685px]">The Humans Behind the Product</p>
      </div>
    </div>
  );
}

function Svg81() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container449() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg81 />
    </div>
  );
}

function Container450() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.84px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 5, 2026</p>
      </div>
    </div>
  );
}

function Container448() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container449 />
      <Container450 />
    </div>
  );
}

function Container447() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container448 />
    </div>
  );
}

function Container445() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container446 />
      <Container447 />
    </div>
  );
}

function Button68() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background79 />
      <Container445 />
    </div>
  );
}

function Image60() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background80() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image60 />
    </div>
  );
}

function Container452() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[60.82px]">
        <p className="leading-[20.685px]">About Us</p>
      </div>
    </div>
  );
}

function Svg82() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container455() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg82 />
    </div>
  );
}

function Container456() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.84px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jan 5, 2026</p>
      </div>
    </div>
  );
}

function Container454() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container455 />
      <Container456 />
    </div>
  );
}

function Container453() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container454 />
    </div>
  );
}

function Container451() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container452 />
      <Container453 />
    </div>
  );
}

function Button69() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background80 />
      <Container451 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[0.4px] items-center relative shrink-0 w-full" data-name="List">
      <Container222 />
      <Button31 />
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
      <Button44 />
      <Button45 />
      <Button46 />
      <Button47 />
      <Button48 />
      <Button49 />
      <Button50 />
      <Button51 />
      <Button52 />
      <Button53 />
      <Button54 />
      <Button55 />
      <Button56 />
      <Button57 />
      <Button58 />
      <Button59 />
      <Button60 />
      <Button61 />
      <Button62 />
      <Button63 />
      <Button64 />
      <Button65 />
      <Button66 />
      <Button67 />
      <Button68 />
      <Button69 />
    </div>
  );
}

function Container457() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.6px] w-full">
        <p className="leading-[24px]">Last Year</p>
      </div>
    </div>
  );
}

function Image61() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background81() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image61 />
    </div>
  );
}

function Container459() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[147.52px]">
        <p className="leading-[20.685px]">Quick Amenities Panel</p>
      </div>
    </div>
  );
}

function Svg83() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container462() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg83 />
    </div>
  );
}

function Container463() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.66px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 7, 2025</p>
      </div>
    </div>
  );
}

function Container461() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container462 />
      <Container463 />
    </div>
  );
}

function Container460() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container461 />
    </div>
  );
}

function Container458() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container459 />
      <Container460 />
    </div>
  );
}

function Button70() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background81 />
      <Container458 />
    </div>
  );
}

function Image62() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background82() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image62 />
    </div>
  );
}

function Container465() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[20.32px] w-[172.9px]">
        <p className="leading-[20.685px] mb-0">Portfolio Vending Machine</p>
        <p className="leading-[20.685px]">Homepage</p>
      </div>
    </div>
  );
}

function Svg84() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container468() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg84 />
    </div>
  );
}

function Container469() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.26px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 6, 2025</p>
      </div>
    </div>
  );
}

function Container467() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container468 />
      <Container469 />
    </div>
  );
}

function Container466() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container467 />
    </div>
  );
}

function Container464() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container465 />
      <Container466 />
    </div>
  );
}

function Button71() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background82 />
      <Container464 />
    </div>
  );
}

function Image63() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background83() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image63 />
    </div>
  );
}

function Container471() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[130.26px]">
        <p className="leading-[20.685px]">Map Search Results</p>
      </div>
    </div>
  );
}

function Svg85() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container474() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg85 />
    </div>
  );
}

function Container475() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.26px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 6, 2025</p>
      </div>
    </div>
  );
}

function Container473() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container474 />
      <Container475 />
    </div>
  );
}

function Container472() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container473 />
    </div>
  );
}

function Container470() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container471 />
      <Container472 />
    </div>
  );
}

function Button72() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background83 />
      <Container470 />
    </div>
  );
}

function Background85() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background84() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background85 />
    </div>
  );
}

function Container477() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[153.71px]">
        <p className="leading-[20.685px]">Campus Connect | Map</p>
      </div>
    </div>
  );
}

function Svg86() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container480() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg86 />
    </div>
  );
}

function Container481() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.17px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 5, 2025</p>
      </div>
    </div>
  );
}

function Container479() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container480 />
      <Container481 />
    </div>
  );
}

function Container478() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container479 />
    </div>
  );
}

function Container476() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container477 />
      <Container478 />
    </div>
  );
}

function Button73() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background84 />
      <Container476 />
    </div>
  );
}

function Image64() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background86() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image64 />
    </div>
  );
}

function Container483() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[188.8px]">
        <p className="leading-[20.685px]">Map Overlay Selection Panel</p>
      </div>
    </div>
  );
}

function Svg87() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container486() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg87 />
    </div>
  );
}

function Container487() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.17px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 5, 2025</p>
      </div>
    </div>
  );
}

function Container485() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container486 />
      <Container487 />
    </div>
  );
}

function Container484() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container485 />
    </div>
  );
}

function Container482() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container483 />
      <Container484 />
    </div>
  );
}

function Button74() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background86 />
      <Container482 />
    </div>
  );
}

function Image65() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background87() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image65 />
    </div>
  );
}

function Container489() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[128.54px]">
        <p className="leading-[20.685px]">Placement Updates</p>
      </div>
    </div>
  );
}

function Svg88() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container492() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg88 />
    </div>
  );
}

function Container493() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.89px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 2, 2025</p>
      </div>
    </div>
  );
}

function Container491() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container492 />
      <Container493 />
    </div>
  );
}

function Container490() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container491 />
    </div>
  );
}

function Container488() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container489 />
      <Container490 />
    </div>
  );
}

function Button75() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background87 />
      <Container488 />
    </div>
  );
}

function Image66() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background88() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image66 />
    </div>
  );
}

function Container495() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[169.33px]">
        <p className="leading-[20.685px]">Category Updates Screen</p>
      </div>
    </div>
  );
}

function Svg89() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container498() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg89 />
    </div>
  );
}

function Container499() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.89px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 2, 2025</p>
      </div>
    </div>
  );
}

function Container497() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container498 />
      <Container499 />
    </div>
  );
}

function Container496() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container497 />
    </div>
  );
}

function Container494() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container495 />
      <Container496 />
    </div>
  );
}

function Button76() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background88 />
      <Container494 />
    </div>
  );
}

function Image67() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background89() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image67 />
    </div>
  );
}

function Container501() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[207.06px]">
        <p className="leading-[20.685px]">Event Map with Interactive Pins</p>
      </div>
    </div>
  );
}

function Svg90() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container504() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg90 />
    </div>
  );
}

function Container505() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 1, 2025</p>
      </div>
    </div>
  );
}

function Container503() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container504 />
      <Container505 />
    </div>
  );
}

function Container502() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container503 />
    </div>
  );
}

function Container500() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container501 />
      <Container502 />
    </div>
  );
}

function Button77() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background89 />
      <Container500 />
    </div>
  );
}

function Image68() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background90() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image68 />
    </div>
  );
}

function Container507() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[193.94px]">
        <p className="leading-[20.685px]">Campus Map with Event Card</p>
      </div>
    </div>
  );
}

function Svg91() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container510() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg91 />
    </div>
  );
}

function Container511() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Dec 1, 2025</p>
      </div>
    </div>
  );
}

function Container509() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container510 />
      <Container511 />
    </div>
  );
}

function Container508() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container509 />
    </div>
  );
}

function Container506() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container507 />
      <Container508 />
    </div>
  );
}

function Button78() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background90 />
      <Container506 />
    </div>
  );
}

function Image69() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background91() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image69 />
    </div>
  );
}

function Container513() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[171.07px]">
        <p className="leading-[20.685px]">Redesigned Project Cards</p>
      </div>
    </div>
  );
}

function Svg92() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container516() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg92 />
    </div>
  );
}

function Container517() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 30, 2025</p>
      </div>
    </div>
  );
}

function Container515() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container516 />
      <Container517 />
    </div>
  );
}

function Container514() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container515 />
    </div>
  );
}

function Container512() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container513 />
      <Container514 />
    </div>
  );
}

function Button79() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background91 />
      <Container512 />
    </div>
  );
}

function Image70() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background92() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image70 />
    </div>
  );
}

function Container519() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[171.07px]">
        <p className="leading-[20.685px]">Redesigned Project Cards</p>
      </div>
    </div>
  );
}

function Svg93() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container522() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg93 />
    </div>
  );
}

function Container523() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 30, 2025</p>
      </div>
    </div>
  );
}

function Container521() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container522 />
      <Container523 />
    </div>
  );
}

function Container520() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container521 />
    </div>
  );
}

function Container518() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container519 />
      <Container520 />
    </div>
  );
}

function Button80() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background92 />
      <Container518 />
    </div>
  );
}

function Image71() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background93() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image71 />
    </div>
  );
}

function Container525() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[154.59px]">
        <p className="leading-[20.685px]">Community Home Page</p>
      </div>
    </div>
  );
}

function Svg94() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container528() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg94 />
    </div>
  );
}

function Container529() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 30, 2025</p>
      </div>
    </div>
  );
}

function Container527() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container528 />
      <Container529 />
    </div>
  );
}

function Container526() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container527 />
    </div>
  );
}

function Container524() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container525 />
      <Container526 />
    </div>
  );
}

function Button81() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background93 />
      <Container524 />
    </div>
  );
}

function Image72() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background94() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image72 />
    </div>
  );
}

function Container531() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[214.04px]">
        <p className="leading-[20.685px]">DevCom Landing Page Redesign</p>
      </div>
    </div>
  );
}

function Svg95() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container534() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg95 />
    </div>
  );
}

function Container535() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 30, 2025</p>
      </div>
    </div>
  );
}

function Container533() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container534 />
      <Container535 />
    </div>
  );
}

function Container532() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container533 />
    </div>
  );
}

function Container530() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container531 />
      <Container532 />
    </div>
  );
}

function Button82() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background94 />
      <Container530 />
    </div>
  );
}

function Image73() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background95() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image73 />
    </div>
  );
}

function Container537() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[166.61px]">
        <p className="leading-[20.685px]">Redesigned Hero Section</p>
      </div>
    </div>
  );
}

function Svg96() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container540() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg96 />
    </div>
  );
}

function Container541() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 30, 2025</p>
      </div>
    </div>
  );
}

function Container539() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container540 />
      <Container541 />
    </div>
  );
}

function Container538() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container539 />
    </div>
  );
}

function Container536() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container537 />
      <Container538 />
    </div>
  );
}

function Button83() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background95 />
      <Container536 />
    </div>
  );
}

function Image74() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background96() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image74 />
    </div>
  );
}

function Container543() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[160.47px]">
        <p className="leading-[20.685px]">Graffiti Hero Home Page</p>
      </div>
    </div>
  );
}

function Svg97() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container546() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg97 />
    </div>
  );
}

function Container547() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 30, 2025</p>
      </div>
    </div>
  );
}

function Container545() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container546 />
      <Container547 />
    </div>
  );
}

function Container544() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container545 />
    </div>
  );
}

function Container542() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container543 />
      <Container544 />
    </div>
  );
}

function Button84() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background96 />
      <Container542 />
    </div>
  );
}

function Image75() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background97() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image75 />
    </div>
  );
}

function Container549() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[135.34px]">
        <p className="leading-[20.685px]">Social Map Interface</p>
      </div>
    </div>
  );
}

function Svg98() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container552() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg98 />
    </div>
  );
}

function Container553() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.87px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 28, 2025</p>
      </div>
    </div>
  );
}

function Container551() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container552 />
      <Container553 />
    </div>
  );
}

function Container550() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container551 />
    </div>
  );
}

function Container548() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container549 />
      <Container550 />
    </div>
  );
}

function Button85() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background97 />
      <Container548 />
    </div>
  );
}

function Image76() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background98() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image76 />
    </div>
  );
}

function Container555() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[116.83px]">
        <p className="leading-[20.685px]">Events Mode Map</p>
      </div>
    </div>
  );
}

function Svg99() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container558() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg99 />
    </div>
  );
}

function Container559() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.87px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 28, 2025</p>
      </div>
    </div>
  );
}

function Container557() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container558 />
      <Container559 />
    </div>
  );
}

function Container556() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container557 />
    </div>
  );
}

function Container554() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container555 />
      <Container556 />
    </div>
  );
}

function Button86() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background98 />
      <Container554 />
    </div>
  );
}

function Image77() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background99() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image77 />
    </div>
  );
}

function Container561() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[195.83px]">
        <p className="leading-[20.685px]">Academic Mode Campus Map</p>
      </div>
    </div>
  );
}

function Svg100() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container564() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg100 />
    </div>
  );
}

function Container565() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.87px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 28, 2025</p>
      </div>
    </div>
  );
}

function Container563() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container564 />
      <Container565 />
    </div>
  );
}

function Container562() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container563 />
    </div>
  );
}

function Container560() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container561 />
      <Container562 />
    </div>
  );
}

function Button87() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background99 />
      <Container560 />
    </div>
  );
}

function Image78() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background100() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image78 />
    </div>
  );
}

function Container567() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[119.61px]">
        <p className="leading-[20.685px]">Fold Home Screen</p>
      </div>
    </div>
  );
}

function Svg101() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container570() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg101 />
    </div>
  );
}

function Container571() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.98px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 4, 2025</p>
      </div>
    </div>
  );
}

function Container569() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container570 />
      <Container571 />
    </div>
  );
}

function Container568() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container569 />
    </div>
  );
}

function Container566() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container567 />
      <Container568 />
    </div>
  );
}

function Button88() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background100 />
      <Container566 />
    </div>
  );
}

function Image79() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background101() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image79 />
    </div>
  );
}

function Container573() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[143.76px]">
        <p className="leading-[20.685px]">Upload your evidence</p>
      </div>
    </div>
  );
}

function Svg102() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container576() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg102 />
    </div>
  );
}

function Container577() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.98px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 4, 2025</p>
      </div>
    </div>
  );
}

function Container575() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container576 />
      <Container577 />
    </div>
  );
}

function Container574() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container575 />
    </div>
  );
}

function Container572() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container573 />
      <Container574 />
    </div>
  );
}

function Button89() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background101 />
      <Container572 />
    </div>
  );
}

function Image80() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background102() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image80 />
    </div>
  );
}

function Container579() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[113.3px]">
        <p className="leading-[20.685px]">Duel Loss Screen</p>
      </div>
    </div>
  );
}

function Svg103() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container582() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg103 />
    </div>
  );
}

function Container583() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.98px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 4, 2025</p>
      </div>
    </div>
  );
}

function Container581() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container582 />
      <Container583 />
    </div>
  );
}

function Container580() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container581 />
    </div>
  );
}

function Container578() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container579 />
      <Container580 />
    </div>
  );
}

function Button90() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background102 />
      <Container578 />
    </div>
  );
}

function Image81() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background103() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image81 />
    </div>
  );
}

function Container585() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[114.14px]">
        <p className="leading-[20.685px]">Origami Claimed!</p>
      </div>
    </div>
  );
}

function Svg104() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container588() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg104 />
    </div>
  );
}

function Container589() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.58px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 3, 2025</p>
      </div>
    </div>
  );
}

function Container587() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container588 />
      <Container589 />
    </div>
  );
}

function Container586() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container587 />
    </div>
  );
}

function Container584() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container585 />
      <Container586 />
    </div>
  );
}

function Button91() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background103 />
      <Container584 />
    </div>
  );
}

function Image82() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background104() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image82 />
    </div>
  );
}

function Container591() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[110.35px]">
        <p className="leading-[20.685px]">Duel Win Results</p>
      </div>
    </div>
  );
}

function Svg105() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container594() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg105 />
    </div>
  );
}

function Container595() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.58px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 3, 2025</p>
      </div>
    </div>
  );
}

function Container593() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container594 />
      <Container595 />
    </div>
  );
}

function Container592() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container593 />
    </div>
  );
}

function Container590() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container591 />
      <Container592 />
    </div>
  );
}

function Button92() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background104 />
      <Container590 />
    </div>
  );
}

function Image83() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background105() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image83 />
    </div>
  );
}

function Container597() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[124.04px]">
        <p className="leading-[20.685px]">Add Partner Modal</p>
      </div>
    </div>
  );
}

function Svg106() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container600() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg106 />
    </div>
  );
}

function Container601() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.58px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 3, 2025</p>
      </div>
    </div>
  );
}

function Container599() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container600 />
      <Container601 />
    </div>
  );
}

function Container598() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container599 />
    </div>
  );
}

function Container596() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container597 />
      <Container598 />
    </div>
  );
}

function Button93() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background105 />
      <Container596 />
    </div>
  );
}

function Image84() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background106() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image84 />
    </div>
  );
}

function Container603() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[38.63px]">
        <p className="leading-[20.685px]">Circle</p>
      </div>
    </div>
  );
}

function Svg107() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container606() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg107 />
    </div>
  );
}

function Container607() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.58px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 3, 2025</p>
      </div>
    </div>
  );
}

function Container605() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container606 />
      <Container607 />
    </div>
  );
}

function Container604() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container605 />
    </div>
  );
}

function Container602() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container603 />
      <Container604 />
    </div>
  );
}

function Button94() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background106 />
      <Container602 />
    </div>
  );
}

function Image85() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background107() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image85 />
    </div>
  );
}

function Container609() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[143.76px]">
        <p className="leading-[20.685px]">Upload your evidence</p>
      </div>
    </div>
  );
}

function Svg108() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container612() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg108 />
    </div>
  );
}

function Container613() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.58px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 3, 2025</p>
      </div>
    </div>
  );
}

function Container611() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container612 />
      <Container613 />
    </div>
  );
}

function Container610() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container611 />
    </div>
  );
}

function Container608() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container609 />
      <Container610 />
    </div>
  );
}

function Button95() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background107 />
      <Container608 />
    </div>
  );
}

function Image86() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background108() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image86 />
    </div>
  );
}

function Container615() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[188.9px]">
        <p className="leading-[20.685px]">Home Screen - Origami View</p>
      </div>
    </div>
  );
}

function Svg109() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container618() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg109 />
    </div>
  );
}

function Container619() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.43px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 1, 2025</p>
      </div>
    </div>
  );
}

function Container617() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container618 />
      <Container619 />
    </div>
  );
}

function Container616() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container617 />
    </div>
  );
}

function Container614() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container615 />
      <Container616 />
    </div>
  );
}

function Button96() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background108 />
      <Container614 />
    </div>
  );
}

function Image87() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background109() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image87 />
    </div>
  );
}

function Container621() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[151.14px]">
        <p className="leading-[20.685px]">Fold App Home Widget</p>
      </div>
    </div>
  );
}

function Svg110() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container624() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg110 />
    </div>
  );
}

function Container625() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[51.43px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Nov 1, 2025</p>
      </div>
    </div>
  );
}

function Container623() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container624 />
      <Container625 />
    </div>
  );
}

function Container622() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container623 />
    </div>
  );
}

function Container620() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container621 />
      <Container622 />
    </div>
  );
}

function Button97() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background109 />
      <Container620 />
    </div>
  );
}

function Image88() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background110() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image88 />
    </div>
  );
}

function Container627() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[156.99px]">
        <p className="leading-[20.685px]">Productivity Dashboard</p>
      </div>
    </div>
  );
}

function Svg111() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container630() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg111 />
    </div>
  );
}

function Container631() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.83px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 31, 2025</p>
      </div>
    </div>
  );
}

function Container629() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container630 />
      <Container631 />
    </div>
  );
}

function Container628() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container629 />
    </div>
  );
}

function Container626() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container627 />
      <Container628 />
    </div>
  );
}

function Button98() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background110 />
      <Container626 />
    </div>
  );
}

function Image89() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background111() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image89 />
    </div>
  );
}

function Container633() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[149.91px]">
        <p className="leading-[20.685px]">Fold App Home Screen</p>
      </div>
    </div>
  );
}

function Svg112() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container636() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg112 />
    </div>
  );
}

function Container637() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[56.98px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 28, 2025</p>
      </div>
    </div>
  );
}

function Container635() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container636 />
      <Container637 />
    </div>
  );
}

function Container634() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container635 />
    </div>
  );
}

function Container632() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container633 />
      <Container634 />
    </div>
  );
}

function Button99() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background111 />
      <Container632 />
    </div>
  );
}

function Image90() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background112() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image90 />
    </div>
  );
}

function Container639() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[125.5px]">
        <p className="leading-[20.685px]">Duel Request Sent!</p>
      </div>
    </div>
  );
}

function Svg113() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container642() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg113 />
    </div>
  );
}

function Container643() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.57px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 27, 2025</p>
      </div>
    </div>
  );
}

function Container641() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container642 />
      <Container643 />
    </div>
  );
}

function Container640() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container641 />
    </div>
  );
}

function Container638() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container639 />
      <Container640 />
    </div>
  );
}

function Button100() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background112 />
      <Container638 />
    </div>
  );
}

function Image91() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background113() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image91 />
    </div>
  );
}

function Container645() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[142.12px]">
        <p className="leading-[20.685px]">Duel Accepted Popup</p>
      </div>
    </div>
  );
}

function Svg114() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container648() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg114 />
    </div>
  );
}

function Container649() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.57px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 27, 2025</p>
      </div>
    </div>
  );
}

function Container647() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container648 />
      <Container649 />
    </div>
  );
}

function Container646() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container647 />
    </div>
  );
}

function Container644() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container645 />
      <Container646 />
    </div>
  );
}

function Button101() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background113 />
      <Container644 />
    </div>
  );
}

function Image92() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background114() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image92 />
    </div>
  );
}

function Container651() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[223.28px]">
        <p className="leading-[20.685px]">Partner Profile with Commitments</p>
      </div>
    </div>
  );
}

function Svg115() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container654() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg115 />
    </div>
  );
}

function Container655() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.57px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 27, 2025</p>
      </div>
    </div>
  );
}

function Container653() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container654 />
      <Container655 />
    </div>
  );
}

function Container652() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container653 />
    </div>
  );
}

function Container650() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container651 />
      <Container652 />
    </div>
  );
}

function Button102() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background114 />
      <Container650 />
    </div>
  );
}

function Image93() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background115() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image93 />
    </div>
  );
}

function Container657() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[142.66px]">
        <p className="leading-[20.685px]">AI Breakdown Results</p>
      </div>
    </div>
  );
}

function Svg116() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container660() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg116 />
    </div>
  );
}

function Container661() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.16px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 26, 2025</p>
      </div>
    </div>
  );
}

function Container659() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container660 />
      <Container661 />
    </div>
  );
}

function Container658() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container659 />
    </div>
  );
}

function Container656() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container657 />
      <Container658 />
    </div>
  );
}

function Button103() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background115 />
      <Container656 />
    </div>
  );
}

function Image94() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background116() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image94 />
    </div>
  );
}

function Container663() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[145.32px]">
        <p className="leading-[20.685px]">First Goal Onboarding</p>
      </div>
    </div>
  );
}

function Svg117() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container666() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg117 />
    </div>
  );
}

function Container667() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.16px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 26, 2025</p>
      </div>
    </div>
  );
}

function Container665() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container666 />
      <Container667 />
    </div>
  );
}

function Container664() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container665 />
    </div>
  );
}

function Container662() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container663 />
      <Container664 />
    </div>
  );
}

function Button104() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background116 />
      <Container662 />
    </div>
  );
}

function Image95() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background117() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image95 />
    </div>
  );
}

function Container669() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[227.47px]">
        <p className="leading-[20.685px]">Stay consistent, one fold at a time.</p>
      </div>
    </div>
  );
}

function Svg118() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container672() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg118 />
    </div>
  );
}

function Container673() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.16px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 26, 2025</p>
      </div>
    </div>
  );
}

function Container671() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container672 />
      <Container673 />
    </div>
  );
}

function Container670() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container671 />
    </div>
  );
}

function Container668() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container669 />
      <Container670 />
    </div>
  );
}

function Button105() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background117 />
      <Container668 />
    </div>
  );
}

function Image96() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background118() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image96 />
    </div>
  );
}

function Container675() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[150.5px]">
        <p className="leading-[20.685px]">Daily Goals Dashboard</p>
      </div>
    </div>
  );
}

function Svg119() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container678() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg119 />
    </div>
  );
}

function Container679() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.16px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 26, 2025</p>
      </div>
    </div>
  );
}

function Container677() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container678 />
      <Container679 />
    </div>
  );
}

function Container676() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container677 />
    </div>
  );
}

function Container674() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container675 />
      <Container676 />
    </div>
  );
}

function Button106() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background118 />
      <Container674 />
    </div>
  );
}

function Image97() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background119() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image97 />
    </div>
  );
}

function Container681() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[76.86px]">
        <p className="leading-[20.685px]">User Profile</p>
      </div>
    </div>
  );
}

function Svg120() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container684() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg120 />
    </div>
  );
}

function Container685() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.08px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 25, 2025</p>
      </div>
    </div>
  );
}

function Container683() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container684 />
      <Container685 />
    </div>
  );
}

function Container682() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container683 />
    </div>
  );
}

function Container680() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container681 />
      <Container682 />
    </div>
  );
}

function Button107() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background119 />
      <Container680 />
    </div>
  );
}

function Image98() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background120() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image98 />
    </div>
  );
}

function Container687() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.8px] top-[9.98px] w-[95.92px]">
        <p className="leading-[20.685px]">Duel Invitation</p>
      </div>
    </div>
  );
}

function Svg121() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container690() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg121 />
    </div>
  );
}

function Container691() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.08px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 25, 2025</p>
      </div>
    </div>
  );
}

function Container689() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container690 />
      <Container691 />
    </div>
  );
}

function Container688() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container689 />
    </div>
  );
}

function Container686() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container687 />
      <Container688 />
    </div>
  );
}

function Button108() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background120 />
      <Container686 />
    </div>
  );
}

function Image99() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background121() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image99 />
    </div>
  );
}

function Container693() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[77.86px]">
        <p className="leading-[20.685px]">Start a Duel</p>
      </div>
    </div>
  );
}

function Svg122() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container696() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg122 />
    </div>
  );
}

function Container697() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.08px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Oct 25, 2025</p>
      </div>
    </div>
  );
}

function Container695() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container696 />
      <Container697 />
    </div>
  );
}

function Container694() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container695 />
    </div>
  );
}

function Container692() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container693 />
      <Container694 />
    </div>
  );
}

function Button109() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background121 />
      <Container692 />
    </div>
  );
}

function Image100() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background122() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image100 />
    </div>
  );
}

function Container699() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[124.22px]">
        <p className="leading-[20.685px]">Blogs Popup Sheet</p>
      </div>
    </div>
  );
}

function Svg123() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container702() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg123 />
    </div>
  );
}

function Container703() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.55px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 17, 2025</p>
      </div>
    </div>
  );
}

function Container701() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container702 />
      <Container703 />
    </div>
  );
}

function Container700() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container701 />
    </div>
  );
}

function Container698() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container699 />
      <Container700 />
    </div>
  );
}

function Button110() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background122 />
      <Container698 />
    </div>
  );
}

function Background124() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background123() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background124 />
    </div>
  );
}

function Container705() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[80.04px]">
        <p className="leading-[20.685px]">New Project</p>
      </div>
    </div>
  );
}

function Svg124() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container708() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg124 />
    </div>
  );
}

function Container709() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.06px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 15, 2025</p>
      </div>
    </div>
  );
}

function Container707() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container708 />
      <Container709 />
    </div>
  );
}

function Container706() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container707 />
    </div>
  );
}

function Container704() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container705 />
      <Container706 />
    </div>
  );
}

function Button111() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background123 />
      <Container704 />
    </div>
  );
}

function Image101() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background125() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image101 />
    </div>
  );
}

function Container711() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[238.34px]">
        <p className="leading-[20.685px] mb-0">Community app for users to interact</p>
        <p className="leading-[20.685px]">with different groups.</p>
      </div>
    </div>
  );
}

function Svg125() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container714() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg125 />
    </div>
  );
}

function Container715() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.65px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Aug 2, 2025</p>
      </div>
    </div>
  );
}

function Container713() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container714 />
      <Container715 />
    </div>
  );
}

function Container712() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container713 />
    </div>
  );
}

function Container710() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container711 />
      <Container712 />
    </div>
  );
}

function Button112() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background125 />
      <Container710 />
    </div>
  );
}

function Image102() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background126() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image102 />
    </div>
  );
}

function Container717() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[20.32px] w-[240.8px]">
        <p className="leading-[20.685px] mb-0">Mobile application for browsing blog</p>
        <p className="leading-[20.685px]">posts related to company…</p>
      </div>
    </div>
  );
}

function Svg126() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container720() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg126 />
    </div>
  );
}

function Container721() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.37px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 29, 2025</p>
      </div>
    </div>
  );
}

function Container719() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container720 />
      <Container721 />
    </div>
  );
}

function Container718() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container719 />
    </div>
  );
}

function Container716() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container717 />
      <Container718 />
    </div>
  );
}

function Button113() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background126 />
      <Container716 />
    </div>
  );
}

function Image103() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background127() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image103 />
    </div>
  );
}

function Container723() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[235.61px]">
        <p className="leading-[20.685px] mb-0">College placement app for students</p>
        <p className="leading-[20.685px]">seeking job opportunities.</p>
      </div>
    </div>
  );
}

function Svg127() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container726() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg127 />
    </div>
  );
}

function Container727() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.27px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 27, 2025</p>
      </div>
    </div>
  );
}

function Container725() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container726 />
      <Container727 />
    </div>
  );
}

function Container724() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container725 />
    </div>
  );
}

function Container722() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container723 />
      <Container724 />
    </div>
  );
}

function Button114() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background127 />
      <Container722 />
    </div>
  );
}

function Image104() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background128() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image104 />
    </div>
  );
}

function Container729() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[152.1px]">
        <p className="leading-[20.685px]">College placement app</p>
      </div>
    </div>
  );
}

function Svg128() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container732() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg128 />
    </div>
  );
}

function Container733() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.27px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 27, 2025</p>
      </div>
    </div>
  );
}

function Container731() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container732 />
      <Container733 />
    </div>
  );
}

function Container730() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container731 />
    </div>
  );
}

function Container728() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container729 />
      <Container730 />
    </div>
  );
}

function Button115() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background128 />
      <Container728 />
    </div>
  );
}

function Image105() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background129() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image105 />
    </div>
  );
}

function Container735() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[235.61px]">
        <p className="leading-[20.685px] mb-0">College placement app for students</p>
        <p className="leading-[20.685px]">seeking internships and full-time…</p>
      </div>
    </div>
  );
}

function Svg129() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container738() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg129 />
    </div>
  );
}

function Container739() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.27px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 27, 2025</p>
      </div>
    </div>
  );
}

function Container737() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container738 />
      <Container739 />
    </div>
  );
}

function Container736() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container737 />
    </div>
  );
}

function Container734() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container735 />
      <Container736 />
    </div>
  );
}

function Button116() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background129 />
      <Container734 />
    </div>
  );
}

function ImageBackground() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image+Background" />;
}

function Background130() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <ImageBackground />
    </div>
  );
}

function Container741() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[237.25px]">
        <p className="leading-[20.685px] mb-0">A college placement app to connect</p>
        <p className="leading-[20.685px]">students with job opportunities.</p>
      </div>
    </div>
  );
}

function Svg130() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container744() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg130 />
    </div>
  );
}

function Container745() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.27px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 27, 2025</p>
      </div>
    </div>
  );
}

function Container743() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container744 />
      <Container745 />
    </div>
  );
}

function Container742() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container743 />
    </div>
  );
}

function Container740() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container741 />
      <Container742 />
    </div>
  );
}

function Button117() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background130 />
      <Container740 />
    </div>
  );
}

function Image106() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background131() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image106 />
    </div>
  );
}

function Container747() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[231.02px]">
        <p className="leading-[20.685px] mb-0">College app for students searching</p>
        <p className="leading-[20.685px]">for placements</p>
      </div>
    </div>
  );
}

function Svg131() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container750() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg131 />
    </div>
  );
}

function Container751() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.27px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 27, 2025</p>
      </div>
    </div>
  );
}

function Container749() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container750 />
      <Container751 />
    </div>
  );
}

function Container748() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container749 />
    </div>
  );
}

function Container746() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container747 />
      <Container748 />
    </div>
  );
}

function Button118() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background131 />
      <Container746 />
    </div>
  );
}

function Image107() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background132() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image107 />
    </div>
  );
}

function Container753() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[200.22px]">
        <p className="leading-[20.685px] mb-0">College placement app search</p>
        <p className="leading-[20.685px]">screen.</p>
      </div>
    </div>
  );
}

function Svg132() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container756() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg132 />
    </div>
  );
}

function Container757() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.27px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 27, 2025</p>
      </div>
    </div>
  );
}

function Container755() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container756 />
      <Container757 />
    </div>
  );
}

function Container754() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container755 />
    </div>
  );
}

function Container752() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container753 />
      <Container754 />
    </div>
  );
}

function Button119() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background132 />
      <Container752 />
    </div>
  );
}

function ImageBackground1() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image+Background" />;
}

function Background133() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <ImageBackground1 />
    </div>
  );
}

function Container759() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[235.61px]">
        <p className="leading-[20.685px] mb-0">College placement app for students</p>
        <p className="leading-[20.685px]">to find jobs and internships.</p>
      </div>
    </div>
  );
}

function Svg133() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container762() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg133 />
    </div>
  );
}

function Container763() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.93px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 14, 2025</p>
      </div>
    </div>
  );
}

function Container761() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container762 />
      <Container763 />
    </div>
  );
}

function Container760() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container761 />
    </div>
  );
}

function Container758() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container759 />
      <Container760 />
    </div>
  );
}

function Button120() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background133 />
      <Container758 />
    </div>
  );
}

function ImageBackground2() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image+Background" />;
}

function Background134() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <ImageBackground2 />
    </div>
  );
}

function Container765() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[116.52px]">
        <p className="leading-[20.685px]">Social media app.</p>
      </div>
    </div>
  );
}

function Svg134() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container768() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg134 />
    </div>
  );
}

function Container769() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.81px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 10, 2025</p>
      </div>
    </div>
  );
}

function Container767() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container768 />
      <Container769 />
    </div>
  );
}

function Container766() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container767 />
    </div>
  );
}

function Container764() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container765 />
      <Container766 />
    </div>
  );
}

function Button121() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background134 />
      <Container764 />
    </div>
  );
}

function Image108() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background135() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image108 />
    </div>
  );
}

function Container771() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[20.32px] w-[219.75px]">
        <p className="leading-[20.685px] mb-0">Mobile app for students at IITB to</p>
        <p className="leading-[20.685px]">explore and join student clubs.</p>
      </div>
    </div>
  );
}

function Svg135() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container774() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg135 />
    </div>
  );
}

function Container775() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[48.4px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 3, 2025</p>
      </div>
    </div>
  );
}

function Container773() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container774 />
      <Container775 />
    </div>
  );
}

function Container772() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container773 />
    </div>
  );
}

function Container770() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container771 />
      <Container772 />
    </div>
  );
}

function Button122() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background135 />
      <Container770 />
    </div>
  );
}

function Image109() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background136() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image109 />
    </div>
  );
}

function Container777() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[155.5px]">
        <p className="leading-[20.685px]">A university application</p>
      </div>
    </div>
  );
}

function Svg136() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container780() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg136 />
    </div>
  );
}

function Container781() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[48.31px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 2, 2025</p>
      </div>
    </div>
  );
}

function Container779() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container780 />
      <Container781 />
    </div>
  );
}

function Container778() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container779 />
    </div>
  );
}

function Container776() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container777 />
      <Container778 />
    </div>
  );
}

function Button123() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background136 />
      <Container776 />
    </div>
  );
}

function Image110() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background137() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image110 />
    </div>
  );
}

function Container783() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[188.56px]">
        <p className="leading-[20.685px]">Student community platform</p>
      </div>
    </div>
  );
}

function Svg137() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container786() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg137 />
    </div>
  );
}

function Container787() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.29px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 24, 2025</p>
      </div>
    </div>
  );
}

function Container785() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container786 />
      <Container787 />
    </div>
  );
}

function Container784() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container785 />
    </div>
  );
}

function Container782() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container783 />
      <Container784 />
    </div>
  );
}

function Button124() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background137 />
      <Container782 />
    </div>
  );
}

function Image111() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background138() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image111 />
    </div>
  );
}

function Container789() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[20.32px] w-[238.14px]">
        <p className="leading-[20.685px] mb-0">Mobile app UI for a student platform</p>
        <p className="leading-[20.685px]">search screen.</p>
      </div>
    </div>
  );
}

function Svg138() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container792() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg138 />
    </div>
  );
}

function Container793() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[57.29px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 24, 2025</p>
      </div>
    </div>
  );
}

function Container791() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container792 />
      <Container793 />
    </div>
  );
}

function Container790() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container791 />
    </div>
  );
}

function Container788() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container789 />
      <Container790 />
    </div>
  );
}

function Button125() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.49px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background138 />
      <Container788 />
    </div>
  );
}

function Image112() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background139() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image112 />
    </div>
  );
}

function Container795() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[233.21px]">
        <p className="leading-[20.685px] mb-0">Academic campus app for students</p>
        <p className="leading-[20.685px]">and alumni.</p>
      </div>
    </div>
  );
}

function Svg139() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container798() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg139 />
    </div>
  );
}

function Container799() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 21, 2025</p>
      </div>
    </div>
  );
}

function Container797() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container798 />
      <Container799 />
    </div>
  );
}

function Container796() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container797 />
    </div>
  );
}

function Container794() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container795 />
      <Container796 />
    </div>
  );
}

function Button126() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background139 />
      <Container794 />
    </div>
  );
}

function Image113() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background140() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image113 />
    </div>
  );
}

function Container801() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[20.32px] w-[241.72px]">
        <p className="leading-[20.685px] mb-0">Student portal for managing courses</p>
        <p className="leading-[20.685px]">and exams.</p>
      </div>
    </div>
  );
}

function Svg140() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container804() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg140 />
    </div>
  );
}

function Container805() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.2px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 20, 2025</p>
      </div>
    </div>
  );
}

function Container803() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container804 />
      <Container805 />
    </div>
  );
}

function Container802() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container803 />
    </div>
  );
}

function Container800() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container801 />
      <Container802 />
    </div>
  );
}

function Button127() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background140 />
      <Container800 />
    </div>
  );
}

function Image114() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background141() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image114 />
    </div>
  );
}

function Container807() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[20.32px] w-[211.68px]">
        <p className="leading-[20.685px] mb-0">Blog application for reading and</p>
        <p className="leading-[20.685px]">discovering articles.</p>
      </div>
    </div>
  );
}

function Svg141() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container810() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg141 />
    </div>
  );
}

function Container811() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.6px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 19, 2025</p>
      </div>
    </div>
  );
}

function Container809() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container810 />
      <Container811 />
    </div>
  );
}

function Container808() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container809 />
    </div>
  );
}

function Container806() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container807 />
      <Container808 />
    </div>
  );
}

function Button128() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background141 />
      <Container806 />
    </div>
  );
}

function Image115() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background142() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image115 />
    </div>
  );
}

function Container813() {
  return (
    <div className="h-[41.37px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[42px] justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[20.32px] w-[210.33px]">
        <p className="leading-[20.685px] mb-0">Mobile app for a club with quick</p>
        <p className="leading-[20.685px]">access links.</p>
      </div>
    </div>
  );
}

function Svg142() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container816() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg142 />
    </div>
  );
}

function Container817() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[55.93px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jun 18, 2025</p>
      </div>
    </div>
  );
}

function Container815() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container816 />
      <Container817 />
    </div>
  );
}

function Container814() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container815 />
    </div>
  );
}

function Container812() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container813 />
      <Container814 />
    </div>
  );
}

function Button129() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.64px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background142 />
      <Container812 />
    </div>
  );
}

function Image116() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background143() {
  return (
    <div className="bg-[#202124] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image116 />
    </div>
  );
}

function Container819() {
  return (
    <div className="h-[20.69px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[151.95px]">
        <p className="leading-[20.685px]">Weekly Class Schedule</p>
      </div>
    </div>
  );
}

function Svg143() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container822() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg143 />
    </div>
  );
}

function Container823() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[58.84px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.3px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">May 29, 2025</p>
      </div>
    </div>
  );
}

function Container821() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container822 />
      <Container823 />
    </div>
  );
}

function Container820() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container821 />
    </div>
  );
}

function Container818() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Container">
      <Container819 />
      <Container820 />
    </div>
  );
}

function Button130() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[7.88px] pt-[8.48px] px-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background143 />
      <Container818 />
    </div>
  );
}

function Background145() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background144() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background145 />
    </div>
  );
}

function Container825() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[80.04px]">
        <p className="leading-[20.685px]">New Project</p>
      </div>
    </div>
  );
}

function Svg144() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container828() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg144 />
    </div>
  );
}

function Container829() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">May 28, 2025</p>
      </div>
    </div>
  );
}

function Container827() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container828 />
      <Container829 />
    </div>
  );
}

function Container826() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container827 />
    </div>
  );
}

function Container824() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container825 />
      <Container826 />
    </div>
  );
}

function Button131() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background144 />
      <Container824 />
    </div>
  );
}

function Background147() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background146() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background147 />
    </div>
  );
}

function Container831() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[80.04px]">
        <p className="leading-[20.685px]">New Project</p>
      </div>
    </div>
  );
}

function Svg145() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container834() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg145 />
    </div>
  );
}

function Container835() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.15px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">May 28, 2025</p>
      </div>
    </div>
  );
}

function Container833() {
  return (
    <div className="content-stretch flex gap-[3.94px] items-center relative shrink-0" data-name="Container">
      <Container834 />
      <Container835 />
    </div>
  );
}

function Container832() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container833 />
    </div>
  );
}

function Container830() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container831 />
      <Container832 />
    </div>
  );
}

function Button132() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background146 />
      <Container830 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[0.4px] items-center relative shrink-0 w-full" data-name="List">
      <Container457 />
      <Button70 />
      <Button71 />
      <Button72 />
      <Button73 />
      <Button74 />
      <Button75 />
      <Button76 />
      <Button77 />
      <Button78 />
      <Button79 />
      <Button80 />
      <Button81 />
      <Button82 />
      <Button83 />
      <Button84 />
      <Button85 />
      <Button86 />
      <Button87 />
      <Button88 />
      <Button89 />
      <Button90 />
      <Button91 />
      <Button92 />
      <Button93 />
      <Button94 />
      <Button95 />
      <Button96 />
      <Button97 />
      <Button98 />
      <Button99 />
      <Button100 />
      <Button101 />
      <Button102 />
      <Button103 />
      <Button104 />
      <Button105 />
      <Button106 />
      <Button107 />
      <Button108 />
      <Button109 />
      <Button110 />
      <Button111 />
      <Button112 />
      <Button113 />
      <Button114 />
      <Button115 />
      <Button116 />
      <Button117 />
      <Button118 />
      <Button119 />
      <Button120 />
      <Button121 />
      <Button122 />
      <Button123 />
      <Button124 />
      <Button125 />
      <Button126 />
      <Button127 />
      <Button128 />
      <Button129 />
      <Button130 />
      <Button131 />
      <Button132 />
    </div>
  );
}

function Container836() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[15.6px] w-full">
        <p className="leading-[24px]">Examples</p>
      </div>
    </div>
  );
}

function ImageBackground3() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image+Background" />;
}

function Background148() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <ImageBackground3 />
    </div>
  );
}

function Container838() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[108.18px]">
        <p className="leading-[20.685px]">Main Dashboard</p>
      </div>
    </div>
  );
}

function Svg146() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container841() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg146 />
    </div>
  );
}

function Container842() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[48.56px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 8, 2026</p>
      </div>
    </div>
  );
}

function Svg147() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container844() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg147 />
    </div>
  );
}

function Container843() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container844 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container843 />
    </div>
  );
}

function Container840() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container841 />
      <Container842 />
      <Margin5 />
    </div>
  );
}

function Container839() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container840 />
    </div>
  );
}

function Container837() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container838 />
      <Container839 />
    </div>
  );
}

function Button133() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background148 />
      <Container837 />
    </div>
  );
}

function Image117() {
  return <div className="min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Image" />;
}

function Background149() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Image117 />
    </div>
  );
}

function Container846() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[106.98px]">
        <p className="leading-[20.685px]">Home Lookbook</p>
      </div>
    </div>
  );
}

function Svg148() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container849() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg148 />
    </div>
  );
}

function Container850() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.01px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 14, 2026</p>
      </div>
    </div>
  );
}

function Svg149() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container852() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg149 />
    </div>
  );
}

function Container851() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container852 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container851 />
    </div>
  );
}

function Container848() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container849 />
      <Container850 />
      <Margin6 />
    </div>
  );
}

function Container847() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container848 />
    </div>
  );
}

function Container845() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container846 />
      <Container847 />
    </div>
  );
}

function Button134() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background149 />
      <Container845 />
    </div>
  );
}

function Background151() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background150() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background151 />
    </div>
  );
}

function Container854() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.5px] top-[9.98px] w-[86.3px]">
        <p className="leading-[20.685px]">Vertical Feed</p>
      </div>
    </div>
  );
}

function Svg150() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container857() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg150 />
    </div>
  );
}

function Container858() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[48.38px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 2, 2026</p>
      </div>
    </div>
  );
}

function Svg151() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container860() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg151 />
    </div>
  );
}

function Container859() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container860 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container859 />
    </div>
  );
}

function Container856() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container857 />
      <Container858 />
      <Margin7 />
    </div>
  );
}

function Container855() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container856 />
    </div>
  );
}

function Container853() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container854 />
      <Container855 />
    </div>
  );
}

function Button135() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background150 />
      <Container853 />
    </div>
  );
}

function Background153() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background152() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background153 />
    </div>
  );
}

function Container862() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.7px] top-[9.98px] w-[72.62px]">
        <p className="leading-[20.685px]">Dashboard</p>
      </div>
    </div>
  );
}

function Svg152() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g clipPath="url(#clip0_0_43)" id="SVG">
          <path d={svgPaths.p27d20f00} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="11.82" width="11.82" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container865() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg152 />
    </div>
  );
}

function Container866() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[53.9px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.6px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 10, 2026</p>
      </div>
    </div>
  );
}

function Svg153() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container868() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg153 />
    </div>
  );
}

function Container867() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container868 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container867 />
    </div>
  );
}

function Container864() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container865 />
      <Container866 />
      <Margin8 />
    </div>
  );
}

function Container863() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container864 />
    </div>
  );
}

function Container861() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container862 />
      <Container863 />
    </div>
  );
}

function Button136() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background152 />
      <Container861 />
    </div>
  );
}

function Background155() {
  return <div className="bg-[#1f2937] min-w-[38.808998107910156px] relative rounded-[6px] shrink-0 size-[39.4px]" data-name="Background" />;
}

function Background154() {
  return (
    <div className="bg-[#1f2937] content-stretch flex items-start justify-center relative rounded-[8px] shrink-0" data-name="Background">
      <Background155 />
    </div>
  );
}

function Container870() {
  return (
    <div className="h-[20.68px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[13.6px] top-[9.98px] w-[154.15px]">
        <p className="leading-[20.685px]">Fleet Admin Dashboard</p>
      </div>
    </div>
  );
}

function Svg154() {
  return (
    <div className="relative shrink-0 size-[11.82px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.82" preserveAspectRatio="none" viewBox="0 0 11.82 11.82" width="11.82">
        <g id="SVG">
          <path d={svgPaths.p761cf32} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container873() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg154 />
    </div>
  );
}

function Container874() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[52.52px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#bdc1c6] text-[9.4px] top-[9.45px] whitespace-nowrap">
        <p className="leading-[19.208px]">Jul 21, 2026</p>
      </div>
    </div>
  );
}

function Svg155() {
  return (
    <div className="relative shrink-0 size-[15.76px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="15.76" preserveAspectRatio="none" viewBox="0 0 15.76 15.76" width="15.76">
        <g clipPath="url(#clip0_0_15)" id="SVG">
          <path d={svgPaths.p3871e100} fill="#BDC1C6" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
            <rect fill="white" height="15.76" width="15.76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container876() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg155 />
    </div>
  );
}

function Container875() {
  return (
    <div className="absolute content-stretch flex gap-[3.94px] items-center left-[8px] top-[-0.55px]" data-name="Container">
      <Container876 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9.9px] whitespace-nowrap">
        <p className="leading-[19.208px]">Shared</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[19.21px] relative shrink-0 w-[59.5px]" data-name="Margin">
      <Container875 />
    </div>
  );
}

function Container872() {
  return (
    <div className="content-stretch flex gap-[3.8px] items-center relative shrink-0" data-name="Container">
      <Container873 />
      <Container874 />
      <Margin9 />
    </div>
  );
}

function Container871() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container872 />
    </div>
  );
}

function Container869() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start justify-center min-w-px relative" data-name="Container">
      <Container870 />
      <Container871 />
    </div>
  );
}

function Button137() {
  return (
    <div className="content-stretch flex items-center justify-between p-[7.88px] relative rounded-[8px] shrink-0 w-[312.11px]" data-name="Button">
      <Background154 />
      <Container869 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[0.4px] items-center relative shrink-0 w-full" data-name="List">
      <Container836 />
      <Button133 />
      <Button134 />
      <Button135 />
      <Button136 />
      <Button137 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[12.07px_12.06px_-7760.87px_12.07px] items-start pb-[16px] px-[4px]" data-name="Container">
      <RadiogroupMargin />
      <Container19 />
      <List />
      <List1 />
      <List2 />
      <List3 />
      <List4 />
      <List5 />
      <List6 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid flex-[1_0_0] min-h-px overflow-auto relative rounded-[16px] w-full" data-name="Overlay+Border+OverlayBlur">
      <Container12 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center p-[12px] relative shrink-0 w-[375px]" data-name="Section">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[53.6px] whitespace-nowrap">
        <p className="leading-[56px]">Welcome to Stitch..</p>
      </div>
    </div>
  );
}

function Svg156() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p39ddd900} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container882() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg156 />
    </div>
  );
}

function Container883() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[134.18px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+1.41px)] not-italic text-[#f1f3f4] text-[12.9px] text-center top-[9.07px] whitespace-nowrap">
        <p className="leading-[19.5px]">Start with your design</p>
      </div>
    </div>
  );
}

function Button138() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8.067px] pr-[12.067px] py-[6.067px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Container882 />
      <Container883 />
    </div>
  );
}

function Container881() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button138 />
    </div>
  );
}

function Container888() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[15.1px] w-full">
        <p className="leading-[24px]">What native mobile app shall we design?</p>
      </div>
    </div>
  );
}

function Textbox() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[399.20001220703125px] min-h-[100px] overflow-auto pb-[76px] relative shrink-0 w-full" data-name="Textbox">
      <Container888 />
    </div>
  );
}

function Container887() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-auto relative self-stretch" data-name="Container">
      <Textbox />
    </div>
  );
}

function Container886() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[137.8699951171875px] relative shrink-0 w-full" data-name="Container">
      <Container887 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container886 />
    </div>
  );
}

function Svg157() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.p3ecade80} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container892() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg157 />
    </div>
  );
}

function ButtonMenu1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Button menu">
      <Container892 />
    </div>
  );
}

function Container891() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <ButtonMenu1 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[36px] py-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Container891 />
    </div>
  );
}

function Svg158() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p14700d80} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container896() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Svg158 />
    </div>
  );
}

function Container895() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.72px]" data-name="Container">
      <Container896 />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+11.64px)] not-italic text-[#f1f3f4] text-[14px] text-center top-[calc(50%-0.94px)] whitespace-nowrap">
        <p className="leading-[20px]">App</p>
      </div>
    </div>
  );
}

function Container894() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Container895 />
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Radio">
      <div className="absolute bg-[#3c4043] inset-0 rounded-[32px]" data-name="Background" />
      <Container894 />
    </div>
  );
}

function Container893() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Radio2 />
    </div>
  );
}

function Svg159() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2f726400} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container900() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2" data-name="Container">
      <Svg159 />
    </div>
  );
}

function Container899() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.25px]" data-name="Container">
      <Container900 />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+11.38px)] not-italic text-[#bdc1c6] text-[14px] text-center top-[calc(50%-0.94px)] whitespace-nowrap">
        <p className="leading-[20px]">Web</p>
      </div>
    </div>
  );
}

function Container898() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Container899 />
    </div>
  );
}

function Radio3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Radio">
      <Container898 />
    </div>
  );
}

function Container897() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Radio3 />
    </div>
  );
}

function Radiogroup1() {
  return (
    <div className="backdrop-blur-[20px] content-stretch flex gap-[3.99px] items-start p-[2px] relative rounded-[32px] shrink-0" data-name="Radiogroup">
      <Container893 />
      <Container897 />
    </div>
  );
}

function Container890() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <Margin11 />
      <Radiogroup1 />
    </div>
  );
}

function Svg160() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.p2660ab40} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container904() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg160 />
    </div>
  );
}

function ButtonMenu2() {
  return (
    <div className="aspect-[36/36] content-stretch flex items-center justify-center px-[9px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Button menu">
      <Container904 />
    </div>
  );
}

function Container903() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <ButtonMenu2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[10%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[20px_20px]" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Group">
          <path d={svgPaths.p1ba53d00} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Svg161() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <ClipPathGroup1 />
    </div>
  );
}

function Container905() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg161 />
    </div>
  );
}

function Container906() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[42.67px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+1.17px)] not-italic text-[#f1f3f4] text-[12.9px] text-center top-[9.07px] whitespace-nowrap">
        <p className="leading-[19.5px]">3 Flash</p>
      </div>
    </div>
  );
}

function Svg162() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="SVG">
          <path d={svgPaths.p11746cf0} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container907() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg162 />
    </div>
  );
}

function ButtonMenu3() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] content-stretch flex gap-[6px] h-[36px] items-center justify-center overflow-clip px-[10px] py-[6px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button menu">
      <div className="absolute inset-0 opacity-0 rounded-[9999px]" style={{ backgroundImage: "linear-gradient(97.6307402983306deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 35%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.08) 60%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 0) 100%)" }} data-name="Gradient" />
      <Container905 />
      <Container906 />
      <Container907 />
    </div>
  );
}

function Svg163() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p304bd900} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonStartLiveModePreview() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-name="Button - Start Live Mode (Preview)">
      <Svg163 />
    </div>
  );
}

function Container908() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <ButtonStartLiveModePreview />
    </div>
  );
}

function Svg164() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p369d6d00} fill="#202124" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container910() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg164 />
    </div>
  );
}

function ButtonGenerateDesigns() {
  return (
    <div className="bg-[#f1f3f4] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-name="Button - Generate designs">
      <Container910 />
    </div>
  );
}

function Container909() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <ButtonGenerateDesigns />
    </div>
  );
}

function Container902() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container903 />
      <ButtonMenu3 />
      <Container908 />
      <Container909 />
    </div>
  );
}

function Container901() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container902 />
    </div>
  );
}

function Container889() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container890 />
      <Container901 />
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex flex-col items-start justify-between min-h-[220px] p-[16.067px] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <Margin10 />
      <Container889 />
    </div>
  );
}

function Container885() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Container884() {
  return (
    <div className="content-stretch flex items-start justify-center relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <Container885 />
    </div>
  );
}

function ContainerAlignFlexStart() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container:align-flex-start">
      <Container884 />
    </div>
  );
}

function Container913() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-[253.87px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+41.57px)] not-italic overflow-hidden text-[#f1f3f4] text-[13px] text-center text-ellipsis top-[9.07px] whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden text-ellipsis">Make me an app for people who love skiing in the Alps</p>
      </div>
    </div>
  );
}

function Button139() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex h-[32px] items-center justify-center max-w-[280px] px-[12.067px] py-[6.067px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Container913 />
    </div>
  );
}

function Container912() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Button139 />
    </div>
  );
}

function Container915() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-[253.87px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+183.57px)] not-italic overflow-hidden text-[#f1f3f4] text-[13px] text-center text-ellipsis top-[9.07px] whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden text-ellipsis">A daily tarot card reading app with a mystical purple and gold theme and smooth card-flip animation</p>
      </div>
    </div>
  );
}

function Button140() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex h-[32px] items-center justify-center max-w-[280px] px-[12.067px] py-[6.067px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Container915 />
    </div>
  );
}

function Container914() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Button140 />
    </div>
  );
}

function Container917() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-[253.87px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+79.57px)] not-italic overflow-hidden text-[#f1f3f4] text-[13px] text-center text-ellipsis top-[9.07px] whitespace-nowrap">
        <p className="leading-[19.5px] overflow-hidden text-ellipsis">The user profile page for a guided meditation and mindfulness app</p>
      </div>
    </div>
  );
}

function Button141() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex h-[32px] items-center justify-center max-w-[280px] px-[12.067px] py-[6.067px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Container917 />
    </div>
  );
}

function Container916() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Button141 />
    </div>
  );
}

function Container911() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-auto p-[4px] relative shrink-0 w-full" data-name="Container">
      <Container912 />
      <Container914 />
      <Container916 />
    </div>
  );
}

function Container880() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container881 />
      <ContainerAlignFlexStart />
      <Container911 />
    </div>
  );
}

function Container879() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1000px] relative shrink-0 w-[1000px]" data-name="Container">
      <Container880 />
    </div>
  );
}

function Container878() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[2032px] min-h-[611.2000122070312px] pb-[83.6px] pt-[163.6px] px-[24px] relative shrink-0 w-full" data-name="Container">
      <Container879 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[22.9px] whitespace-nowrap">
        <p className="leading-[30px]">Need inspiration?</p>
      </div>
    </div>
  );
}

function Svg165() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p34e96f00} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container921() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg165 />
    </div>
  );
}

function ButtonPreviousExamples() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-50 p-[4px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button - Previous examples">
      <Container921 />
    </div>
  );
}

function Svg166() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.pca4f400} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container922() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg166 />
    </div>
  );
}

function ButtonNextExamples() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button - Next examples">
      <Container922 />
    </div>
  );
}

function Container920() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <ButtonPreviousExamples />
      <ButtonNextExamples />
    </div>
  );
}

function Container919() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container920 />
    </div>
  );
}

function AuralisDashboardScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.25px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Auralis Dashboard screenshot" />;
}

function Container927() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px] opacity-80" data-name="Image+Blur" />
      <AuralisDashboardScreenshot />
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container928() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.7px] text-white top-[9.07px] w-[112.04px]">
        <p className="leading-[19.5px]">Auralis Dashboard</p>
      </div>
    </div>
  );
}

function Background156() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container927 />
      <Container928 />
      <Background156 />
    </div>
  );
}

function Container926() {
  return (
    <div className="aspect-[320/368.7799987792969] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function BuroWalletScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[336.78px] max-w-[228px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[159.6px]" data-name="Buro Wallet screenshot" />;
}

function Container930() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px pt-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-34.2px] opacity-80" data-name="Image+Blur" />
      <BuroWalletScreenshot />
    </div>
  );
}

function OverlayBorderShadow1() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container931() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.8px] text-white top-[9.07px] w-[69.98px]">
        <p className="leading-[19.5px]">Buro Wallet</p>
      </div>
    </div>
  );
}

function Background157() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.8)] items-start left-0 pb-[16px] pt-[48px] px-[16px] right-0 to-[rgba(0,0,0,0)]" data-name="Background">
      <Heading3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container930 />
      <Container931 />
      <Background157 />
    </div>
  );
}

function Container929() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0 w-[240px]" data-name="Container">
      <Link4 />
    </div>
  );
}

function LumioLandingPageScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.33px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Lumio Landing Page screenshot" />;
}

function Container933() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px] opacity-80" data-name="Image+Blur" />
      <LumioLandingPageScreenshot />
    </div>
  );
}

function OverlayBorderShadow2() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container934() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.8px] text-white top-[9.07px] w-[123.89px]">
        <p className="leading-[19.5px]">Lumio Landing Page</p>
      </div>
    </div>
  );
}

function Background158() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container933 />
      <Container934 />
      <Background158 />
    </div>
  );
}

function Container932() {
  return (
    <div className="aspect-[320/368.7799987792969] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link5 />
    </div>
  );
}

function HorizonSaaSScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.28px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Horizon SaaS screenshot" />;
}

function Container936() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px] opacity-80" data-name="Image+Blur" />
      <HorizonSaaSScreenshot />
    </div>
  );
}

function OverlayBorderShadow3() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container937() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.6px] text-white top-[9.07px] w-[81.14px]">
        <p className="leading-[19.5px]">Horizon SaaS</p>
      </div>
    </div>
  );
}

function Background159() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container936 />
      <Container937 />
      <Background159 />
    </div>
  );
}

function Container935() {
  return (
    <div className="aspect-[320/368.7799987792969] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link6 />
    </div>
  );
}

function H612LandingPageScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.33px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="H612 Landing Page screenshot" />;
}

function Container939() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px] opacity-80" data-name="Image+Blur" />
      <H612LandingPageScreenshot />
    </div>
  );
}

function OverlayBorderShadow4() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container940() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[9.07px] w-[115.49px]">
        <p className="leading-[19.5px]">H612 Landing Page</p>
      </div>
    </div>
  );
}

function Background160() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container939 />
      <Container940 />
      <Background160 />
    </div>
  );
}

function Container938() {
  return (
    <div className="aspect-[320/368.7799987792969] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link7 />
    </div>
  );
}

function RomerAnalyticsScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.33px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Romer Analytics screenshot" />;
}

function Container942() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px] opacity-80" data-name="Image+Blur" />
      <RomerAnalyticsScreenshot />
    </div>
  );
}

function OverlayBorderShadow5() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container943() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.8px] text-white top-[9.07px] w-[99.64px]">
        <p className="leading-[19.5px]">Romer Analytics</p>
      </div>
    </div>
  );
}

function Background161() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container942 />
      <Container943 />
      <Background161 />
    </div>
  );
}

function Container941() {
  return (
    <div className="aspect-[320/368.7799987792969] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link8 />
    </div>
  );
}

function StudioPortfolioScreenshot() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[133.63px] max-w-[284px] relative rounded-[8px] shrink-0 w-[200.6px]" data-name="Studio Portfolio screenshot" />;
}

function Container945() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-42.6px] opacity-80" data-name="Image+Blur" />
      <StudioPortfolioScreenshot />
    </div>
  );
}

function OverlayBorderShadow6() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[24.067px] py-[10.067px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container946() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.58px] pt-[171.57px]" data-name="Container">
      <OverlayBorderShadow6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.7px] text-white top-[9.07px] w-[94.34px]">
        <p className="leading-[19.5px]">Studio Portfolio</p>
      </div>
    </div>
  );
}

function Background162() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container945 />
      <Container946 />
      <Background162 />
    </div>
  );
}

function Container944() {
  return (
    <div className="aspect-[320/368.7799987792969] content-stretch flex flex-col h-full items-start justify-center pl-[12px] pr-[24px] relative shrink-0" data-name="Container">
      <Link9 />
    </div>
  );
}

function Container925() {
  return (
    <div className="absolute content-stretch flex h-[368.78px] items-start left-[-12px] right-[-547px] top-0" data-name="Container">
      <Container926 />
      <Container929 />
      <Container932 />
      <Container935 />
      <Container938 />
      <Container941 />
      <Container944 />
    </div>
  );
}

function Container924() {
  return (
    <div className="h-[368.78px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Container">
      <Container925 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[40px]" data-name="Mask Group">
      <div className="absolute bg-[#202124] bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[40px_100%] opacity-0 top-0 w-[40px]" style={{ maskImage: `url("${imgBackground}")` }} data-name="Background" />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[40px]" data-name="Mask Group">
      <div className="absolute bg-[#202124] bottom-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[40px_100%] right-0 top-0 w-[40px]" style={{ maskImage: `url("${imgBackground1}")` }} data-name="Background" />
    </div>
  );
}

function Container923() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container924 />
      <MaskGroup1 />
      <MaskGroup2 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[30px] relative shrink-0 w-[186.3px]" data-name="Heading 2">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#f1f3f4] text-[22.9px] top-[14.4px] whitespace-nowrap">
        <p className="leading-[30px]">Need inspiration?</p>
      </div>
    </div>
  );
}

function Svg167() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p34e96f00} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container950() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg167 />
    </div>
  );
}

function ButtonPreviousExamples1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-50 p-[4px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button - Previous examples">
      <Container950 />
    </div>
  );
}

function Svg168() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.pca4f400} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container951() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg168 />
    </div>
  );
}

function ButtonNextExamples1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button - Next examples">
      <Container951 />
    </div>
  );
}

function Container949() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <ButtonPreviousExamples1 />
      <ButtonNextExamples1 />
    </div>
  );
}

function Container948() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container949 />
    </div>
  );
}

function RomerAnalyticsScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.32px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Romer Analytics screenshot" />;
}

function Container956() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px_-55.31px_-46.2px] opacity-80" data-name="Image+Blur" />
      <RomerAnalyticsScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow7() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container957() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow7 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.8px] text-white top-[9.2px] w-[99.71px]">
        <p className="leading-[19.5px]">Romer Analytics</p>
      </div>
    </div>
  );
}

function Background163() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading10 />
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container956 />
      <Container957 />
      <Background163 />
    </div>
  );
}

function Container955() {
  return (
    <div className="aspect-[320/368.7900085449219] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link10 />
    </div>
  );
}

function StudioPortfolioScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.24px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Studio Portfolio screenshot" />;
}

function Container959() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px_-55.31px_-46.2px] opacity-80" data-name="Image+Blur" />
      <StudioPortfolioScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow8() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container960() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow8 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.7px] text-white top-[9.2px] w-[94.4px]">
        <p className="leading-[19.5px]">Studio Portfolio</p>
      </div>
    </div>
  );
}

function Background164() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading11 />
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container959 />
      <Container960 />
      <Background164 />
    </div>
  );
}

function Container958() {
  return (
    <div className="aspect-[320/368.7900085449219] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link11 />
    </div>
  );
}

function BuroWalletScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[336.79px] max-w-[228px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[159.6px]" data-name="Buro Wallet screenshot" />;
}

function Container962() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px pt-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-34.2px_-55.31px_-34.2px] opacity-80" data-name="Image+Blur" />
      <BuroWalletScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow9() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container963() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow9 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.8px] text-white top-[9.2px] w-[70.01px]">
        <p className="leading-[19.5px]">Buro Wallet</p>
      </div>
    </div>
  );
}

function Background165() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.8)] items-start left-0 pb-[16px] pt-[48px] px-[16px] right-0 to-[rgba(0,0,0,0)]" data-name="Background">
      <Heading12 />
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container962 />
      <Container963 />
      <Background165 />
    </div>
  );
}

function Container961() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0 w-[240px]" data-name="Container">
      <Link12 />
    </div>
  );
}

function AuralisDashboardScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.25px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Auralis Dashboard screenshot" />;
}

function Container965() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px_-55.31px_-46.2px] opacity-80" data-name="Image+Blur" />
      <AuralisDashboardScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow10() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container966() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow10 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.7px] text-white top-[9.2px] w-[112.11px]">
        <p className="leading-[19.5px]">Auralis Dashboard</p>
      </div>
    </div>
  );
}

function Background166() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading13 />
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container965 />
      <Container966 />
      <Background166 />
    </div>
  );
}

function Container964() {
  return (
    <div className="aspect-[320/368.7900085449219] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link13 />
    </div>
  );
}

function HorizonSaaSScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.29px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Horizon SaaS screenshot" />;
}

function Container968() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px_-55.31px_-46.2px] opacity-80" data-name="Image+Blur" />
      <HorizonSaaSScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow11() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container969() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow11 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.6px] text-white top-[9.2px] w-[81.2px]">
        <p className="leading-[19.5px]">Horizon SaaS</p>
      </div>
    </div>
  );
}

function Background167() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading14 />
    </div>
  );
}

function Link14() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container968 />
      <Container969 />
      <Background167 />
    </div>
  );
}

function Container967() {
  return (
    <div className="aspect-[320/368.7900085449219] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link14 />
    </div>
  );
}

function LumioLandingPageScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[147.32px] max-w-[308px] relative rounded-[8px] shrink-0 w-[221px]" data-name="Lumio Landing Page screenshot" />;
}

function Container971() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-46.2px_-55.31px_-46.2px] opacity-80" data-name="Image+Blur" />
      <LumioLandingPageScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow12() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container972() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow12 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.8px] text-white top-[9.2px] w-[123.96px]">
        <p className="leading-[19.5px]">Lumio Landing Page</p>
      </div>
    </div>
  );
}

function Background168() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading15 />
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container971 />
      <Container972 />
      <Background168 />
    </div>
  );
}

function Container970() {
  return (
    <div className="aspect-[320/368.7900085449219] content-stretch flex flex-col h-full items-start justify-center pl-[12px] relative shrink-0" data-name="Container">
      <Link15 />
    </div>
  );
}

function H612LandingPageScreenshot1() {
  return <div className="drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] h-[133.72px] max-w-[284px] relative rounded-[8px] shrink-0 w-[200.6px]" data-name="H612 Landing Page screenshot" />;
}

function Container974() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px px-[24px] py-[32px] relative w-full" data-name="Container">
      <div className="absolute blur-[15px] inset-[-55.32px_-42.6px_-55.31px_-42.6px] opacity-80" data-name="Image+Blur" />
      <H612LandingPageScreenshot1 />
    </div>
  );
}

function OverlayBorderShadow13() {
  return (
    <div className="bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.15)] border-solid content-stretch flex flex-col items-start opacity-0 px-[23.8px] py-[9.8px] relative rounded-[9999px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Overlay+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[19.5px]">Explore</p>
      </div>
    </div>
  );
}

function Container975() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[155.85px] pt-[171.84px]" data-name="Container">
      <OverlayBorderShadow13 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-0 not-italic text-[12.5px] text-white top-[9.2px] w-[115.56px]">
        <p className="leading-[19.5px]">H612 Landing Page</p>
      </div>
    </div>
  );
}

function Background169() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0.6)] items-start left-0 pb-[16px] pt-[24px] px-[16px] right-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0.3)]" data-name="Background">
      <Heading16 />
    </div>
  );
}

function Link16() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px overflow-clip relative rounded-[16px] w-full" data-name="Link">
      <Container974 />
      <Container975 />
      <Background169 />
    </div>
  );
}

function Container973() {
  return (
    <div className="aspect-[320/368.7900085449219] content-stretch flex flex-col h-full items-start justify-center pl-[12px] pr-[24px] relative shrink-0" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container954() {
  return (
    <div className="absolute content-stretch flex h-[368.79px] items-start left-[-12px] right-[-675px] top-0" data-name="Container">
      <Container955 />
      <Container958 />
      <Container961 />
      <Container964 />
      <Container967 />
      <Container970 />
      <Container973 />
    </div>
  );
}

function Container953() {
  return (
    <div className="h-[368.79px] overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="Container">
      <Container954 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[40px]" data-name="Mask Group">
      <div className="absolute bg-[#202124] bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[40px_100%] opacity-0 top-0 w-[40px]" style={{ maskImage: `url("${imgBackground2}")` }} data-name="Background" />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[40px]" data-name="Mask Group">
      <div className="absolute bg-[#202124] bottom-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[40px_100%] right-0 top-0 w-[40px]" style={{ maskImage: `url("${imgBackground3}")` }} data-name="Background" />
    </div>
  );
}

function Container952() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container953 />
      <MaskGroup3 />
      <MaskGroup4 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[32px] relative shrink-0 w-full" data-name="Section">
      <Container948 />
      <Container952 />
    </div>
  );
}

function Container947() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1904px] pb-[128px] pl-[48px] pr-[24px] pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Section3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[32px] relative shrink-0 w-full" data-name="Section">
      <Container919 />
      <Container923 />
      <Container947 />
    </div>
  );
}

function Container918() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[2032px] pb-[128px] pl-[48px] pr-[24px] pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Section2 />
    </div>
  );
}

function Container877() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-0" data-name="Container">
      <Container878 />
      <Container918 />
    </div>
  );
}

function Section1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-auto relative" data-name="Section">
      <Container877 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full z-[2]" data-name="Container">
      <Section />
      <Section1 />
    </div>
  );
}

function Container976() {
  return (
    <div className="absolute inset-0 overflow-clip z-[1]" data-name="Container">
      <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1920 899.2' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(135.76 0 0 63.583 960 449.6)'><stop stop-color='rgba(102,102,102,1)' offset='0.035355'/><stop stop-color='rgba(102,102,102,0)' offset='0.035355'/></radialGradient></defs></svg>\")" }} data-name="Gradient" />
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%] opacity-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1920 899.2' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(135.76 0 0 63.583 960 449.6)'><stop stop-color='rgba(255,255,255,1)' offset='0.035355'/><stop stop-color='rgba(255,255,255,0)' offset='0.035355'/></radialGradient></defs></svg>\")", maskImage: `url("${imgGradient}")` }} data-name="Gradient" />
    </div>
  );
}

function MainMain() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start min-w-px overflow-auto relative" data-name="Main → Main">
      <Header />
      <Container11 />
      <Container976 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#202124] content-stretch flex h-[899.2px] items-start justify-center min-h-[899.2000122070312px] overflow-clip relative shrink-0 w-full" data-name="Background">
      <MainMain />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#202124] content-stretch flex flex-[1_0_0] flex-col h-[899.2px] items-start min-w-px overflow-clip relative" data-name="Background">
      <Background1 />
    </div>
  );
}

function Svg169() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.pdeb5a00} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container979() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg169 />
    </div>
  );
}

function ButtonMenuAppearance() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex items-center justify-center p-[0.067px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button menu - Appearance">
      <Container979 />
    </div>
  );
}

function Container978() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <ButtonMenuAppearance />
    </div>
  );
}

function Container977() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-center right-[16px]" data-name="Container">
      <Container978 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex h-[899.2px] items-center min-h-[899.2000122070312px] min-w-[320px] relative shrink-0 w-full" data-name="Body">
      <Background />
      <Container977 />
    </div>
  );
}

function Html() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Html">
      <Body />
    </div>
  );
}

function Iframe() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative" data-name="Iframe">
      <Html />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[898.13px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Iframe />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Main">
      <Container />
    </div>
  );
}

function AppcompanionLayout() {
  return (
    <div className="bg-[#191a1f] content-stretch flex h-[898.13px] items-start justify-center relative shrink-0 w-full" data-name="appcompanion-layout">
      <Main />
    </div>
  );
}

function BodyAppcompanionRootAppcompanionHost() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body → appcompanion-root → appcompanion-host">
      <AppcompanionLayout />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="bg-[#191a1f] content-stretch flex flex-col items-start pb-[1.07px] relative size-full" data-name="1920w default">
      <BodyAppcompanionRootAppcompanionHost />
    </div>
  );
}