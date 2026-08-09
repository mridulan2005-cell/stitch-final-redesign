import svgPaths from "./svg-oxz3ubyfvz";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[36px] tracking-[-1.188px] whitespace-nowrap">
        <p className="leading-[45px]">Start with your design</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.p27cda380} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function ButtonCloseThisModal() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[9999px] shrink-0" data-name="Button - Close this modal">
      <Container4 />
    </div>
  );
}

function ButtonCloseThisModalMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Button - Close this modal:margin">
      <ButtonCloseThisModal />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <ButtonCloseThisModalMargin />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[13px] tracking-[0.195px] w-full">
        <p className="leading-[19.5px]">Paste existing DESIGN.md</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[37.13px] relative shrink-0 text-[#7168f6] w-[697.38px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[662.24px] top-[8px] w-[35.112px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[21.13px] underline">Learn</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[29.13px] w-[32.179px]">
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[21.13px] underline">more</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic pb-[2.72px] relative shrink-0 text-[13px] w-full" data-name="Container">
      <div className="flex flex-col justify-center mb-[-19px] relative shrink-0 text-[#bdc1c6] whitespace-nowrap">
        <p className="leading-[21.13px]">{`DESIGN.md is an open-source standard document that describes the desired look and feel of your product. `}</p>
      </div>
      <Link />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[3.4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container7 />
    </div>
  );
}

function OverlayBorder() {
  return <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid h-[89.6px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border" />;
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <OverlayBorder />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[13px] tracking-[0.195px] w-full">
        <p className="leading-[19.5px]">Drag and drop files</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.pce2c200} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border">
      <Container10 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-dashed content-stretch flex flex-col gap-[11.75px] items-center pb-[47.55px] pl-[34.69px] pr-[34.7px] pt-[23.8px] relative rounded-[12px] shrink-0" data-name="Button">
      <OverlayBorder1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[13px] text-center tracking-[0.195px] whitespace-nowrap">
        <p className="leading-[19.5px]">Upload a DESIGN.md file</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.pce2c200} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[1.91px] pr-[1.92px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[13px] text-center tracking-[0.195px] whitespace-nowrap">
        <p className="leading-[19.5px] mb-0">Upload code, images, fonts</p>
        <p className="leading-[19.5px]">and logos</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-dashed content-stretch flex flex-col gap-[12px] items-center pb-[28.3px] pt-[23.8px] px-[23.8px] relative rounded-[12px] shrink-0" data-name="Button">
      <OverlayBorder2 />
      <Container12 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.pce2c200} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay+Border">
      <Container13 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p204a5200} fill="#BDC1C6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[7.75px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[13px] text-center tracking-[0.195px] whitespace-nowrap">
        <p className="leading-[19.5px]">Upload a .fig file</p>
      </div>
      <Container15 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-dashed content-stretch flex flex-col gap-[12px] items-center pl-[61.25px] pr-[61.26px] py-[23.8px] relative rounded-[12px] shrink-0" data-name="Button">
      <OverlayBorder3 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p14115700} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[150px] overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Stitch.fig</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="SVG">
          <path d={svgPaths.p2ca28800} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function ButtonRemoveFile() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0" data-name="Button - Remove file">
      <Container19 />
    </div>
  );
}

function ButtonRemoveFileMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button - Remove file:margin">
      <ButtonRemoveFile />
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex gap-[6px] h-full items-center px-[11.8px] py-[5.8px] relative rounded-[8px] shrink-0" data-name="Overlay+Border">
      <Container17 />
      <Container18 />
      <ButtonRemoveFileMargin />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-wrap h-[29.6px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorder4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container9 />
      <Margin />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(22,23,24,0.1)] border border-[rgba(218,220,224,0.2)] border-solid content-stretch flex items-center p-[3.8px] relative rounded-[6px] shrink-0" data-name="Overlay+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[9px] tracking-[0.195px] whitespace-nowrap">
        <p className="leading-[9px]">PREVIEW</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[13px] tracking-[0.195px] whitespace-nowrap">
        <p className="leading-[19.5px]">Public GitHub repository</p>
      </div>
      <OverlayBorder5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bdc1c6] text-[13px] w-full">
        <p>
          <span className="leading-[19.5px]">{`Or `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[19.5px] text-[#7168f6] underline">get instructions</span>
          <span className="leading-[19.5px]">{` to generate a DESIGN.md from your private repo with your coding agent`}</span>
        </p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13px] w-full">
        <p className="leading-[normal]">{`https://github.com/owner/repo`}</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex items-start justify-center overflow-clip pb-[13.7px] pl-[15.8px] pr-[39.8px] pt-[13.4px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[3.9px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Margin1 />
      <Input />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[13px] tracking-[0.195px] w-full">
        <p className="leading-[19.5px]">Add website</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13px] w-full">
        <p className="leading-[normal]">{`https://example.com`}</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid content-stretch flex items-start justify-center overflow-clip pb-[13.7px] pl-[15.8px] pr-[39.8px] pt-[13.4px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <Container24 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Input1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[13px] tracking-[0.195px] w-full">
        <p className="leading-[19.5px]">Additional instructions</p>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return <div className="bg-[rgba(22,23,24,0.5)] border border-[rgba(218,220,224,0.15)] border-solid h-[89.6px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border" />;
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <OverlayBorder6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="SVG">
          <path d={svgPaths.p18d99300} fill="#F1F3F4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f1f3f4] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Continue</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(56,59,61,0.58)] border border-[rgba(241,243,244,0.13)] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center justify-center min-w-px px-[11.8px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Button">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[750px] px-[16px] py-[40px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container5 />
      <Container8 />
      <Container20 />
      <Container23 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-auto px-[585px] relative" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function BackgroundOverlayBlur() {
  return (
    <div className="backdrop-blur-[20px] bg-[#202124] content-stretch flex items-start justify-center overflow-clip relative rounded-[12px] size-full" data-name="Background+OverlayBlur">
      <Container />
    </div>
  );
}