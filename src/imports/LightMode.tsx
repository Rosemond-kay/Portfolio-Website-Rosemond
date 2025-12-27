import svgPaths from "./svg-eo0ikndsl8";
import imgPic from "figma:asset/f85cf45511cd2ba02a83d564218d6500a134a91d.png";
import imgPic1 from "figma:asset/8781bda67a25952db5724f48492cd455a6e81952.png";
import imgIconPostgresql from "figma:asset/037a513d56d029729e044d6a8e68e68025aaf0c2.png";
import imgPicture from "figma:asset/13a157f2d0bfafa5cbd6a89dfe634a542f95ebd2.png";
import imgAvatar from "figma:asset/1e25dfd556240f49ec9ddde4760cb3346cc085e3.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-r1o5o";

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">About</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Work</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Testimonials</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Contact</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2eea8bc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 2V4" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 20V22" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.93 4.93L6.34 6.34" id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.66 17.66L19.07 19.07" id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 12H4" id="Vector_6" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 12H22" id="Vector_7" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.34 17.66L4.93 19.07" id="Vector_8" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19.07 4.93L17.66 6.34" id="Vector_9" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#111827] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[12px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f9fafb] text-[16px] text-nowrap">Download CV</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Actions">
      <IconButton />
      <Button />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Navigation">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[24px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(243, 244, 246, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Divider" stroke="var(--stroke-0, #F3F4F6)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Actions />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] text-center text-nowrap tracking-[-0.6px]">
            <p className="leading-[36px]">{`<SS />`}</p>
          </div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[80px] py-[16px] relative w-full">
          <Container />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0)] border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[#111827] text-[60px] text-nowrap tracking-[-1.2px]">Hi, I’m Sagar 👋</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5563] text-[16px] w-[768px]">{`I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.`}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a08480} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Ahmedabad, India</p>
    </div>
  );
}

function IconDotEmerald() {
  return <div className="bg-[#10b981] rounded-[20px] shrink-0 size-[8px]" data-name="icon-dot-emerald-500" />;
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <IconDotEmerald />
    </div>
  );
}

function Hire() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Hire">
      <Icon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Available for new projects</p>
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Group">
      <Location />
      <Hire />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon5 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton1 />
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions">
      <Links />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center max-w-[768px] overflow-clip relative self-stretch shrink-0" data-name="Column">
      <Content />
      <Group />
      <Actions1 />
    </div>
  );
}

function Background() {
  return <div className="[grid-area:1_/_1] bg-[#e5e7eb] border-8 border-solid border-white h-[320px] ml-[40px] mt-[40px] w-[280px]" data-name="Background" />;
}

function Pic() {
  return (
    <div className="[grid-area:1_/_1] h-[320px] ml-0 mt-0 pointer-events-none relative w-[280px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgPic} />
      <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0" />
    </div>
  );
}

function PicContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic Container">
      <Background />
      <Pic />
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-[384px] relative self-stretch shrink-0" data-name="Column">
      <PicContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-wrap gap-[48px] items-start px-[32px] py-0 relative w-full">
          <Column />
          <Column1 />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[80px] py-[96px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">About me</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row />
    </div>
  );
}

function Background1() {
  return <div className="[grid-area:1_/_1] bg-[#e5e7eb] border-8 border-[#f9fafb] border-solid h-[480px] ml-0 mt-[40px] w-[400px]" data-name="Background" />;
}

function Pic1() {
  return (
    <div className="[grid-area:1_/_1] h-[480px] ml-[40px] mt-0 pointer-events-none relative w-[400px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgPic1} />
      <div aria-hidden="true" className="absolute border-8 border-[#f9fafb] border-solid inset-0" />
    </div>
  );
}

function PicContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic Container">
      <Background1 />
      <Pic1 />
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-[444px] overflow-clip relative self-stretch shrink-0" data-name="Column">
      <PicContainer1 />
    </div>
  );
}

function Column3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4b5563] text-[16px]" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">B.E. in Computer Engineering</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Full time freelancer</span>
        </li>
      </ul>
    </div>
  );
}

function Column4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4b5563] text-[16px]" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Avid learner</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Aspiring indie hacker</span>
        </li>
      </ul>
    </div>
  );
}

function Checklist() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Checklist">
      <Column3 />
      <Column4 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[0px] text-[16px] w-[min-content]">
        <span>{`I'm a passionate, `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.figma.com/@shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://www.figma.com/@shahsagarm">
            self-proclaimed designer
          </span>
        </a>
        <span>{` who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[0px] text-[16px] w-[min-content]">
        <span>{`When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://twitter.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://twitter.com/shahsagarm">
            Twitter
          </span>
        </a>
        <span>{` where I share tech-related bites and build in public, or you can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://github.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://github.com/shahsagarm">
            GitHub
          </span>
        </a>
        .
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Finally, some quick bits about me.</p>
      <Checklist />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉`}</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-[444px] overflow-clip relative self-stretch shrink-0" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#111827] text-[30px] text-nowrap tracking-[-0.6px]">Curious about me? Here you have it:</p>
      <Content1 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex flex-wrap gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column2 />
      <Column5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[32px] py-0 relative w-full">
          <Row7 />
          <Row8 />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="About">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[80px] py-[96px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Skills</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag1 />
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">The skills, tools and technologies I am really good at:</p>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row9 />
      <Row10 />
    </div>
  );
}

function IconJavscript() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-javscript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-javscript">
          <path d="M0 64V0H64V64H0Z" fill="var(--fill-0, #FFD600)" id="Vector" />
          <path d={svgPaths.p2d35d500} fill="var(--fill-0, #000001)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconJavscript />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Javascript</p>
    </div>
  );
}

function IconTypescript() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-typescript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2654)" id="icon-typescript">
          <path d={svgPaths.p1f6e0680} fill="var(--fill-0, #3178C6)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pc96a1c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2654">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTypescript />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Typescript</p>
    </div>
  );
}

function IconReact() {
  return (
    <div className="h-[64px] relative shrink-0 w-[69.818px]" data-name="icon-react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8182 64">
        <g clipPath="url(#clip0_1_2610)" id="icon-react">
          <path d={svgPaths.p87cd200} fill="var(--fill-0, #087EA4)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p1f807d00} id="Vector_2" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p1dda2800} id="Vector_3" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p36c55b00} id="Vector_4" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2610">
            <rect fill="white" height="64" width="69.8182" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-end overflow-clip relative shrink-0" data-name="Tech">
      <IconReact />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">React</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.067px] mask-size-[64px_64px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-4.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.8667 67.8667">
          <g id="Group">
            <path d={svgPaths.p18907f00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="6" />
            <path d={svgPaths.p116cf100} fill="url(#paint0_linear_1_2602)" id="Vector_2" />
            <path d={svgPaths.p1159fd00} fill="url(#paint1_linear_1_2602)" id="Vector_3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2602" x1="40.6889" x2="53.3111" y1="43.3556" y2="59">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2602" x1="44.9556" x2="44.8841" y1="21.1333" y2="39.9333">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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

function IconNextjs() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="icon-nextjs">
      <MaskGroup />
    </div>
  );
}

function Tech3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNextjs />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Next.js</p>
    </div>
  );
}

function IconNodejs() {
  return (
    <div className="h-[64px] relative shrink-0 w-[56.32px]" data-name="icon-nodejs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.32 64">
        <g clipPath="url(#clip0_1_2592)" id="icon-nodejs">
          <path d={svgPaths.p53deb80} fill="var(--fill-0, #5FA04E)" id="Vector" />
          <path d={svgPaths.p3c1dba00} fill="var(--fill-0, #5FA04E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2592">
            <rect fill="white" height="64" width="56.32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNodejs />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Node.js</p>
    </div>
  );
}

function IconExpress() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-express">
          <path d={svgPaths.p371d6d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconExpress />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Express.js</p>
    </div>
  );
}

function IconNest() {
  return (
    <div className="h-[64px] relative shrink-0 w-[66.065px]" data-name="icon-nest">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0645 64">
        <g id="icon-nest">
          <path clipRule="evenodd" d={svgPaths.p205a96a0} fill="var(--fill-0, #E0234E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNest />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Nest.js</p>
    </div>
  );
}

function IconSocket() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-socket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2586)" id="icon-socket">
          <path d={svgPaths.p1bc09400} fill="var(--fill-0, #010101)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2586">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSocket />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Socket.io</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <Tech />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech7 />
      </div>
    </div>
  );
}

function Tech8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <div className="h-[64px] relative shrink-0 w-[62.047px]" data-name="icon-postgresql">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconPostgresql} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function IconMongodb() {
  return (
    <div className="h-[64px] relative shrink-0 w-[29.767px]" data-name="icon-mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7674 64">
        <g clipPath="url(#clip0_1_2599)" id="icon-mongodb">
          <path d={svgPaths.p15611b00} fill="var(--fill-0, #00684A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2599">
            <rect fill="white" height="64" width="29.7674" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconMongodb />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">MongoDB</p>
    </div>
  );
}

function IconSass() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-sass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-sass">
          <path d={svgPaths.p2482be00} fill="var(--fill-0, #F06292)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSass />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Sass/Scss</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0_1.82%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[104.727px_62.836px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.727 62.8364">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p83e5e00} fill="var(--fill-0, #38BDF8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0_1.82%_0]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function IconTailwindcss() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-[104.727px]" data-name="icon-tailwindcss">
      <ClipPathGroup />
    </div>
  );
}

function Tech11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTailwindcss />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function IconFigma() {
  return (
    <div className="h-[64px] relative shrink-0 w-[42.667px]" data-name="icon-figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6667 64">
        <g clipPath="url(#clip0_1_2573)" id="icon-figma">
          <path d={svgPaths.p168cd580} fill="var(--fill-0, #1ABCFE)" id="Vector" />
          <path d={svgPaths.p1a5faa00} fill="var(--fill-0, #0ACF83)" id="Vector_2" />
          <path d={svgPaths.p3a905b00} fill="var(--fill-0, #FF7262)" id="Vector_3" />
          <path d={svgPaths.p14877f80} fill="var(--fill-0, #F24E1E)" id="Vector_4" />
          <path d={svgPaths.p18f9a280} fill="var(--fill-0, #A259FF)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_2573">
            <rect fill="white" height="64" width="42.6667" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconFigma />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Figma</p>
    </div>
  );
}

function IconCypress() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-cypress">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2565)" id="icon-cypress">
          <path d={svgPaths.p1b477700} fill="var(--fill-0, #58D09E)" id="Vector" />
          <path d={svgPaths.p2d90c5c0} fill="var(--fill-0, #58D09E)" id="Vector_2" />
          <path d={svgPaths.pdb9a300} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p141ef200} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p391c9c00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1fb74c80} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_2565">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconCypress />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Cypress</p>
    </div>
  );
}

function IconStorybook() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-storybook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-storybook">
          <path clipRule="evenodd" d={svgPaths.p344dd080} fill="var(--fill-0, #FF4081)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p30514380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconStorybook />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Storybook</p>
    </div>
  );
}

function IconGit() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-git">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-git">
          <path d={svgPaths.p8fbe180} fill="var(--fill-0, #F4511E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconGit />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-nowrap">Git</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center self-stretch">
        <Tech8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech12 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech14 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech15 />
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Row">
      <Row12 />
      <Row13 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start px-[32px] py-0 relative w-full">
          <Row11 />
          <Row14 />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Skills">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Experience</p>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag2 />
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">Here is a quick summary of my most recent experiences:</p>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row15 />
      <Row16 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function LogoUpwork() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup1 />
    </div>
  );
}

function Column6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <LogoUpwork />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Ut pretium arcu et massa semper, id fringilla leo semper.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[384px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">Sr. Frontend Developer</p>
      <Column7 />
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Nov 2021 - Present</p>
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column6 />
      <Column8 />
      <Column9 />
    </div>
  );
}

function Row19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[896px]" data-name="Row">
      <Row18 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function LogoUpwork1() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup2 />
    </div>
  );
}

function Column10() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <LogoUpwork1 />
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[384px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">Team Lead</p>
      <Column11 />
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Jul 2017 - Oct 2021</p>
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column10 />
      <Column12 />
      <Column13 />
    </div>
  );
}

function Row21() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[896px]" data-name="Row">
      <Row20 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function LogoUpwork2() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup3 />
    </div>
  );
}

function Column14() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <LogoUpwork2 />
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[384px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">Full Stack Developer</p>
      <Column15 />
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Dec 2015 - May 2017</p>
    </div>
  );
}

function Row22() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column14 />
      <Column16 />
      <Column17 />
    </div>
  );
}

function Row23() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[896px]" data-name="Row">
      <Row22 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] py-0 relative w-full">
          <Row17 />
          <Row19 />
          <Row21 />
          <Row23 />
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Experience">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Work</p>
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag3 />
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">Some of the noteworthy projects I have built:</p>
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row24 />
      <Row25 />
    </div>
  );
}

function Picture() {
  return (
    <div className="basis-0 grow h-[384px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column18() {
  return (
    <div className="basis-0 bg-[#f9fafb] grow min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch shrink-0" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[48px] relative size-full">
          <Picture />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">React</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Next.js</p>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Typescript</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Nest.js</p>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Figma</p>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Cypress</p>
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Storybook</p>
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Git</p>
    </div>
  );
}

function Technologies() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag4 />
      <Tag5 />
      <Tag6 />
      <Tag7 />
      <Tag8 />
      <Tag9 />
      <Tag10 />
      <Tag11 />
      <Tag12 />
      <Tag13 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon6 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton4 />
    </div>
  );
}

function Column19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch shrink-0" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#111827] text-[20px] text-nowrap w-full">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function Row27() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[1152px]" data-name="Row">
      <Column18 />
      <Column19 />
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">React</p>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Next.js</p>
    </div>
  );
}

function Tag16() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Typescript</p>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Nest.js</p>
    </div>
  );
}

function Tag18() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function Tag19() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function Tag20() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Figma</p>
    </div>
  );
}

function Tag21() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Cypress</p>
    </div>
  );
}

function Tag22() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Storybook</p>
    </div>
  );
}

function Tag23() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Git</p>
    </div>
  );
}

function Technologies1() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag14 />
      <Tag15 />
      <Tag16 />
      <Tag17 />
      <Tag18 />
      <Tag19 />
      <Tag20 />
      <Tag21 />
      <Tag22 />
      <Tag23 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon7 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton5 />
    </div>
  );
}

function Column20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-bl-[12px] rounded-tl-[12px] self-stretch shrink-0" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[48px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#111827] text-[20px] text-nowrap w-full">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies1 />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function Picture1() {
  return (
    <div className="basis-0 grow h-[384px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column21() {
  return (
    <div className="basis-0 bg-[#f9fafb] grow min-h-px min-w-px relative rounded-br-[12px] rounded-tr-[12px] self-stretch shrink-0" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[48px] relative size-full">
          <Picture1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
    </div>
  );
}

function Row28() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-[1152px]" data-name="Row">
      <Column20 />
      <Column21 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] py-0 relative w-full">
          <Row26 />
          <Row27 />
          <Row28 />
          <Row27 />
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Work">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Tag24() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Testimonials</p>
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag24 />
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">Nice things people have said about me:</p>
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row29 />
      <Row30 />
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser />
    </div>
  );
}

function CustomerDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - xyz.com</p>
    </div>
  );
}

function Column22() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[48px] relative size-full">
          <IconAvatar />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
          <CustomerDetails />
        </div>
      </div>
    </div>
  );
}

function IconUser1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar1() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser1 />
    </div>
  );
}

function CustomerDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - abc.com</p>
    </div>
  );
}

function Column23() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[48px] relative size-full">
          <IconAvatar1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”</p>
          <CustomerDetails1 />
        </div>
      </div>
    </div>
  );
}

function IconUser2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar2() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser2 />
    </div>
  );
}

function CustomerDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[20px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Freelancer</p>
    </div>
  );
}

function Column24() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[48px] relative size-full">
          <IconAvatar2 />
          <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”</p>
          <CustomerDetails2 />
        </div>
      </div>
    </div>
  );
}

function Row32() {
  return (
    <div className="content-stretch flex flex-wrap gap-[48px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Column22 />
      <Column23 />
      <Column24 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] py-0 relative w-full">
          <Row31 />
          <Row32 />
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Testimonials">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Tag25() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Get in touch</p>
    </div>
  );
}

function Row33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag25 />
    </div>
  );
}

function Row34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">{`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</p>
    </div>
  );
}

function Row35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row33 />
      <Row34 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3cc2c7f0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4344e00} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p12e33300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p328b4700} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon9 />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Email">
      <Icon8 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#111827] text-[36px] text-center text-nowrap tracking-[-0.72px]">reachsagarshah@gmail.com</p>
      <IconButton6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p10773cc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p12e33300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p328b4700} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon11 />
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0" data-name="Phone">
      <Icon10 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] not-italic relative shrink-0 text-[#111827] text-[36px] text-center text-nowrap tracking-[-0.72px]">+91 8980500565</p>
      <IconButton7 />
    </div>
  );
}

function Column25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Column">
      <Email />
      <Phone />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon14 />
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton8 />
      <IconButton9 />
      <IconButton10 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Actions">
      <Links1 />
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Social">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">You may also find me on these platforms!</p>
      <Actions4 />
    </div>
  );
}

function Row36() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Social />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[32px] py-0 relative w-full">
          <Row35 />
          <Column25 />
          <Row36 />
        </div>
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact me">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[96px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2549)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28a90200} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2549">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterNote() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Footer Note">
      <Icon15 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[0px] text-nowrap">
        <p className="leading-[20px] text-[14px]">
          <span className="text-[#4b5563]">{`2023 | `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4b5563] underline" href="https://www.figma.com/@shahsagarm">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] text-[14px]" href="https://www.figma.com/@shahsagarm">
              Designed
            </span>
          </a>
          <span className="text-[#4b5563]">{` and `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4b5563] underline" href="https://github.com/shahsagarm/sagarshah.dev">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] text-[14px]" href="https://github.com/shahsagarm/sagarshah.dev">
              coded
            </span>
          </a>
          <span className="text-[#4b5563]">{` with `}</span>
          <span className="text-[#ef4444]">❤</span>
          <span className="text-[#4b5563]">️️ by Sagar Shah</span>
        </p>
      </div>
    </div>
  );
}

function Row37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <FooterNote />
    </div>
  );
}

function Row38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row37 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-0 relative w-full">
          <Row38 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[24px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function HomeDesktopLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Home / Desktop / Light">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <ContactMe />
      <Footer />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M4 12H20" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 6H20" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 18H20" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon16 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[36px]">{`<SS />`}</p>
      </div>
      <IconButton11 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0)] border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function Background2() {
  return <div className="[grid-area:1_/_1] bg-[#e5e7eb] border-8 border-solid border-white ml-0 mt-[20px] size-[280px]" data-name="Background" />;
}

function Pic2() {
  return (
    <div className="[grid-area:1_/_1] h-[280px] ml-[20.5px] mt-0 pointer-events-none relative w-[240px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgPic} />
      <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0" />
    </div>
  );
}

function PicContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic Container">
      <Background2 />
      <Pic2 />
    </div>
  );
}

function Column26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Column">
      <PicContainer2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[#111827] text-[36px] text-nowrap">Hi, I’m Sagar 👋</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.`}</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a08480} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <Icon17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Ahmedabad, India</p>
    </div>
  );
}

function IconDotEmerald1() {
  return <div className="bg-[#10b981] rounded-[20px] shrink-0 size-[8px]" data-name="icon-dot-emerald-500" />;
}

function Icon18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <IconDotEmerald1 />
    </div>
  );
}

function Hire1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Hire">
      <Icon18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Available for new projects</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Group">
      <Location1 />
      <Hire1 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton12() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton13() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon20 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton14() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon21 />
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton12 />
      <IconButton13 />
      <IconButton14 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions">
      <Links2 />
    </div>
  );
}

function Column27() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <Content2 />
      <Group6 />
      <Actions5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Column26 />
      <Column27 />
    </div>
  );
}

function Hero1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[64px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Tag26() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">About me</p>
    </div>
  );
}

function Row39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag26 />
    </div>
  );
}

function Row40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row39 />
    </div>
  );
}

function Background3() {
  return <div className="[grid-area:1_/_1] bg-[#e5e7eb] border-8 border-[#f9fafb] border-solid h-[360px] ml-0 mt-[20px] w-[320px]" data-name="Background" />;
}

function Pic3() {
  return (
    <div className="[grid-area:1_/_1] h-[360px] ml-[20px] mt-0 pointer-events-none relative w-[280px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgPic1} />
      <div aria-hidden="true" className="absolute border-8 border-[#f9fafb] border-solid inset-0" />
    </div>
  );
}

function PicContainer3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic Container">
      <Background3 />
      <Pic3 />
    </div>
  );
}

function Column28() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <PicContainer3 />
    </div>
  );
}

function Column29() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4b5563] text-[16px]" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">B.E. in Computer Engineering</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Full time freelancer</span>
        </li>
      </ul>
    </div>
  );
}

function Column30() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4b5563] text-[16px]" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Avid learner</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Aspiring indie hacker</span>
        </li>
      </ul>
    </div>
  );
}

function Checklist1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Checklist">
      <Column29 />
      <Column30 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[0px] text-[16px] w-[min-content]">
        <span>{`I'm a passionate, `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.figma.com/@shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://www.figma.com/@shahsagarm">
            self-proclaimed designer
          </span>
        </a>
        <span>{` who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[0px] text-[16px] w-[min-content]">
        <span>{`When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://twitter.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://twitter.com/shahsagarm">
            Twitter
          </span>
        </a>
        <span>{` where I share tech-related bites and build in public, or you can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://github.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://github.com/shahsagarm">
            GitHub
          </span>
        </a>
        .
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Finally, some quick bits about me.</p>
      <Checklist1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉`}</p>
    </div>
  );
}

function Column31() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#111827] text-[24px] tracking-[-0.48px] w-full">Curious about me? Here you have it:</p>
      <Content3 />
    </div>
  );
}

function Row41() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column28 />
      <Column31 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <Row40 />
      <Row41 />
    </div>
  );
}

function About1() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="About">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[64px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Tag27() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Skills</p>
    </div>
  );
}

function Row42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag27 />
    </div>
  );
}

function Row43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">The skills, tools and technologies I am really good at:</p>
    </div>
  );
}

function Row44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row42 />
      <Row43 />
    </div>
  );
}

function IconJavscript1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-javscript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-javscript">
          <path d="M0 64V0H64V64H0Z" fill="var(--fill-0, #FFD600)" id="Vector" />
          <path d={svgPaths.p2d35d500} fill="var(--fill-0, #000001)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconJavscript1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Javascript</p>
    </div>
  );
}

function IconTypescript1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-typescript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2654)" id="icon-typescript">
          <path d={svgPaths.p1f6e0680} fill="var(--fill-0, #3178C6)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pc96a1c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2654">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTypescript1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Typescript</p>
    </div>
  );
}

function IconReact1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[69.818px]" data-name="icon-react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8182 64">
        <g clipPath="url(#clip0_1_2610)" id="icon-react">
          <path d={svgPaths.p87cd200} fill="var(--fill-0, #087EA4)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p1f807d00} id="Vector_2" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p1dda2800} id="Vector_3" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p36c55b00} id="Vector_4" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2610">
            <rect fill="white" height="64" width="69.8182" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconReact1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">React</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center self-stretch">
        <Tech16 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech17 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech18 />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[1.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.067px] mask-size-[64px_64px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-4.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.8667 67.8667">
          <g id="Group">
            <path d={svgPaths.p18907f00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="6" />
            <path d={svgPaths.p116cf100} fill="url(#paint0_linear_1_2602)" id="Vector_2" />
            <path d={svgPaths.p1159fd00} fill="url(#paint1_linear_1_2602)" id="Vector_3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2602" x1="40.6889" x2="53.3111" y1="43.3556" y2="59">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2602" x1="44.9556" x2="44.8841" y1="21.1333" y2="39.9333">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group7 />
    </div>
  );
}

function IconNextjs1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="icon-nextjs">
      <MaskGroup1 />
    </div>
  );
}

function Tech19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNextjs1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Next.js</p>
    </div>
  );
}

function IconNodejs1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[56.32px]" data-name="icon-nodejs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.32 64">
        <g clipPath="url(#clip0_1_2592)" id="icon-nodejs">
          <path d={svgPaths.p53deb80} fill="var(--fill-0, #5FA04E)" id="Vector" />
          <path d={svgPaths.p3c1dba00} fill="var(--fill-0, #5FA04E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2592">
            <rect fill="white" height="64" width="56.32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNodejs1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Node.js</p>
    </div>
  );
}

function IconExpress1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-express">
          <path d={svgPaths.p371d6d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconExpress1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Express.js</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 2">
      <Tech19 />
      <Tech20 />
      <Tech21 />
    </div>
  );
}

function IconNest1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[66.065px]" data-name="icon-nest">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0645 64">
        <g id="icon-nest">
          <path clipRule="evenodd" d={svgPaths.p205a96a0} fill="var(--fill-0, #E0234E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNest1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Nest.js</p>
    </div>
  );
}

function IconSocket1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-socket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2586)" id="icon-socket">
          <path d={svgPaths.p1bc09400} fill="var(--fill-0, #010101)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2586">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSocket1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Socket.io</p>
    </div>
  );
}

function Tech24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <div className="h-[64px] relative shrink-0 w-[62.047px]" data-name="icon-postgresql">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconPostgresql} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 3">
      <Tech22 />
      <Tech23 />
      <div className="flex flex-row items-center self-stretch">
        <Tech24 />
      </div>
    </div>
  );
}

function IconMongodb1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[29.767px]" data-name="icon-mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7674 64">
        <g clipPath="url(#clip0_1_2599)" id="icon-mongodb">
          <path d={svgPaths.p15611b00} fill="var(--fill-0, #00684A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2599">
            <rect fill="white" height="64" width="29.7674" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconMongodb1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">MongoDB</p>
    </div>
  );
}

function IconSass1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-sass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-sass">
          <path d={svgPaths.p2482be00} fill="var(--fill-0, #F06292)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSass1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Sass/Scss</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0_0_1.82%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[104.727px_62.836px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.727 62.8364">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p83e5e00} fill="var(--fill-0, #38BDF8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[0_0_1.82%_0]" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function IconTailwindcss1() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-[104.727px]" data-name="icon-tailwindcss">
      <ClipPathGroup4 />
    </div>
  );
}

function Tech27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTailwindcss1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 4">
      <div className="flex flex-row items-center self-stretch">
        <Tech25 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech26 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech27 />
      </div>
    </div>
  );
}

function IconFigma1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[42.667px]" data-name="icon-figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6667 64">
        <g clipPath="url(#clip0_1_2573)" id="icon-figma">
          <path d={svgPaths.p168cd580} fill="var(--fill-0, #1ABCFE)" id="Vector" />
          <path d={svgPaths.p1a5faa00} fill="var(--fill-0, #0ACF83)" id="Vector_2" />
          <path d={svgPaths.p3a905b00} fill="var(--fill-0, #FF7262)" id="Vector_3" />
          <path d={svgPaths.p14877f80} fill="var(--fill-0, #F24E1E)" id="Vector_4" />
          <path d={svgPaths.p18f9a280} fill="var(--fill-0, #A259FF)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_2573">
            <rect fill="white" height="64" width="42.6667" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconFigma1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Figma</p>
    </div>
  );
}

function IconCypress1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-cypress">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2565)" id="icon-cypress">
          <path d={svgPaths.p1b477700} fill="var(--fill-0, #58D09E)" id="Vector" />
          <path d={svgPaths.p2d90c5c0} fill="var(--fill-0, #58D09E)" id="Vector_2" />
          <path d={svgPaths.pdb9a300} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p141ef200} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p391c9c00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1fb74c80} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_2565">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconCypress1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Cypress</p>
    </div>
  );
}

function IconStorybook1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-storybook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-storybook">
          <path clipRule="evenodd" d={svgPaths.p344dd080} fill="var(--fill-0, #FF4081)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p30514380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconStorybook1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Storybook</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 5">
      <div className="flex flex-row items-center self-stretch">
        <Tech28 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech29 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech30 />
      </div>
    </div>
  );
}

function IconGit1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-git">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-git">
          <path d={svgPaths.p8fbe180} fill="var(--fill-0, #F4511E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconGit1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Git</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 6">
      <div className="flex flex-row items-center self-stretch">
        <Tech31 />
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Row45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Grid />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Row44 />
      <Row45 />
    </div>
  );
}

function Skills1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Skills">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Tag28() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Experience</p>
    </div>
  );
}

function Row46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag28 />
    </div>
  );
}

function Row47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">Here is a quick summary of my most recent experiences:</p>
    </div>
  );
}

function Row48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row46 />
      <Row47 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function LogoUpwork3() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup5 />
    </div>
  );
}

function Column32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <LogoUpwork3 />
    </div>
  );
}

function Column33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Nov 2021 - Present</p>
    </div>
  );
}

function Column34() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Ut pretium arcu et massa semper, id fringilla leo semper.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">Sr. Frontend Developer</p>
      <Column34 />
    </div>
  );
}

function Row49() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column32 />
      <Column33 />
      <Column35 />
    </div>
  );
}

function Row50() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Row49 />
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function LogoUpwork4() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup6 />
    </div>
  );
}

function Column36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <LogoUpwork4 />
    </div>
  );
}

function Column37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Jul 2017 - Oct 2021</p>
    </div>
  );
}

function Column38() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">Team Lead</p>
      <Column38 />
    </div>
  );
}

function Row51() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column36 />
      <Column37 />
      <Column39 />
    </div>
  );
}

function Row52() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Row51 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function LogoUpwork5() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup7 />
    </div>
  );
}

function Column40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <LogoUpwork5 />
    </div>
  );
}

function Column41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Dec 2015 - May 2017</p>
    </div>
  );
}

function Column42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column43() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">Full Stack Developer</p>
      <Column42 />
    </div>
  );
}

function Row53() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column40 />
      <Column41 />
      <Column43 />
    </div>
  );
}

function Row54() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Row53 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row48 />
      <Row50 />
      <Row52 />
      <Row54 />
    </div>
  );
}

function Experience1() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Experience">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Tag29() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Work</p>
    </div>
  );
}

function Row55() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag29 />
    </div>
  );
}

function Row56() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">Some of the noteworthy projects I have built:</p>
    </div>
  );
}

function Row57() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row55 />
      <Row56 />
    </div>
  );
}

function Picture2() {
  return (
    <div className="basis-0 grow h-[192px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column44() {
  return (
    <div className="bg-[#f9fafb] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[32px] relative w-full">
          <Picture2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
    </div>
  );
}

function Tag30() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">React</p>
    </div>
  );
}

function Tag31() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Next.js</p>
    </div>
  );
}

function Tag32() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Typescript</p>
    </div>
  );
}

function Tag33() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Nest.js</p>
    </div>
  );
}

function Tag34() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function Tag35() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function Tag36() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Figma</p>
    </div>
  );
}

function Tag37() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Cypress</p>
    </div>
  );
}

function Tag38() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Storybook</p>
    </div>
  );
}

function Tag39() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Git</p>
    </div>
  );
}

function Technologies2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag30 />
      <Tag31 />
      <Tag32 />
      <Tag33 />
      <Tag34 />
      <Tag35 />
      <Tag36 />
      <Tag37 />
      <Tag38 />
      <Tag39 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon22 />
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton15 />
    </div>
  );
}

function Column45() {
  return (
    <div className="relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-full" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#111827] text-[18px] text-nowrap w-full">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies2 />
          <Actions6 />
        </div>
      </div>
    </div>
  );
}

function Row58() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <Column44 />
      <Column45 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row57 />
      {[...Array(3).keys()].map((_, i) => (
        <Row58 key={i} />
      ))}
    </div>
  );
}

function Work1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Work">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Tag40() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Testimonials</p>
    </div>
  );
}

function Row59() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag40 />
    </div>
  );
}

function Row60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">Nice things people have said about me:</p>
    </div>
  );
}

function Row61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row59 />
      <Row60 />
    </div>
  );
}

function IconUser3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar3() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser3 />
    </div>
  );
}

function CustomerDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[18px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - xyz.com</p>
    </div>
  );
}

function Column46() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[32px] relative size-full">
          <IconAvatar3 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
          <CustomerDetails3 />
        </div>
      </div>
    </div>
  );
}

function IconUser4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar4() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser4 />
    </div>
  );
}

function CustomerDetails4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[18px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - abc.com</p>
    </div>
  );
}

function Column47() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[32px] relative size-full">
          <IconAvatar4 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”</p>
          <CustomerDetails4 />
        </div>
      </div>
    </div>
  );
}

function IconUser5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="icon-user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="icon-user">
          <path clipRule="evenodd" d={svgPaths.p2eb48700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconAvatar5() {
  return (
    <div className="bg-[#9ca3af] content-stretch flex items-center justify-center overflow-clip p-[20px] relative rounded-[64px] shrink-0 size-[64px]" data-name="icon-avatar">
      <IconUser5 />
    </div>
  );
}

function CustomerDetails5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[18px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Freelancer</p>
    </div>
  );
}

function Column48() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[32px] relative size-full">
          <IconAvatar5 />
          <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”</p>
          <CustomerDetails5 />
        </div>
      </div>
    </div>
  );
}

function Row62() {
  return (
    <div className="content-stretch flex flex-wrap gap-[24px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Column46 />
      <Column47 />
      <Column48 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row61 />
      <Row62 />
    </div>
  );
}

function Testimonials1() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Testimonials">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Tag41() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Get in touch</p>
    </div>
  );
}

function Row63() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag41 />
    </div>
  );
}

function Row64() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">{`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</p>
    </div>
  );
}

function Row65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row63 />
      <Row64 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bf8f980} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p311e6900} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p10569cc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c93d960} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton16() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon24 />
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="Email">
      <Icon23 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] text-center text-nowrap tracking-[-0.36px]">reachsagarshah@gmail.com</p>
      <IconButton16 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p10569cc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c93d960} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon26 />
    </div>
  );
}

function Phone1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="Phone">
      <Icon25 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] text-center text-nowrap tracking-[-0.36px]">+91 8980500565</p>
      <IconButton17 />
    </div>
  );
}

function Column49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Column">
      <Email1 />
      <Phone1 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton18() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon28 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton20() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon29 />
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton18 />
      <IconButton19 />
      <IconButton20 />
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Actions">
      <Links3 />
    </div>
  );
}

function Social1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Social">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">You may also find me on these platforms!</p>
      <Actions7 />
    </div>
  );
}

function Row66() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Social1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row65 />
      <Column49 />
      <Row66 />
    </div>
  );
}

function ContactMe1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact me">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2549)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28a90200} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2549">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterNote1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Footer Note">
      <Icon30 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[0px] text-nowrap">
        <p className="leading-[20px] text-[14px]">
          <span className="text-[#4b5563]">{`2023 | `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4b5563] underline" href="https://www.figma.com/@shahsagarm">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] text-[14px]" href="https://www.figma.com/@shahsagarm">
              Designed
            </span>
          </a>
          <span className="text-[#4b5563]">{` and `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4b5563] underline" href="https://github.com/shahsagarm/sagarshah.dev">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] text-[14px]" href="https://github.com/shahsagarm/sagarshah.dev">
              coded
            </span>
          </a>
          <span className="text-[#4b5563]">{` with `}</span>
          <span className="text-[#ef4444]">❤</span>
          <span className="text-[#4b5563]">️️ by Sagar Shah</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <FooterNote1 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Footer">
      <Container17 />
    </div>
  );
}

function HomeMobileIPhone8Light() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[375px]" data-name="Home / Mobile (iPhone 8) / Light">
      <Header1 />
      <Hero1 />
      <About1 />
      <Skills1 />
      <Experience1 />
      <Work1 />
      <Testimonials1 />
      <ContactMe1 />
      <Footer1 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M18 6L6 18" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon31 />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between p-[16px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#111827] text-[24px] text-nowrap tracking-[-0.48px]">{`<SS />`}</p>
          <IconButton21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">About</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Work</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Testimonials</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Contact</p>
    </div>
  );
}

function Links4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Links">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Link4 />
          <Link5 />
          <Link6 />
          <Link7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2eea8bc0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 2V4" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 20V22" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.93 4.93L6.34 6.34" id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.66 17.66L19.07 19.07" id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 12H4" id="Vector_6" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 12H22" id="Vector_7" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.34 17.66L4.93 19.07" id="Vector_8" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M19.07 4.93L17.66 6.34" id="Vector_9" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton22() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon32 />
    </div>
  );
}

function SwitchTheme() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Switch Theme">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Switch Theme</p>
      <IconButton22 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#111827] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[6px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f9fafb] text-[16px] text-nowrap">Download CV</p>
        </div>
      </div>
    </div>
  );
}

function Actions8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <SwitchTheme />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[667px] items-start left-[55px] overflow-clip shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] top-0 w-[320px]" data-name="Menu">
      <Logo />
      <Links4 />
      <Actions8 />
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(17,24,39,0.1)] content-stretch flex flex-col h-[667px] items-start overflow-clip relative shrink-0 w-[375px]" data-name="Mobile Menu">
      <Menu />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M4 12H20" id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 6H20" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 18H20" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton23() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon33 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[36px]">{`<SS />`}</p>
      </div>
      <IconButton23 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0)] border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function Background4() {
  return <div className="[grid-area:1_/_1] bg-[#e5e7eb] border-8 border-solid border-white ml-0 mt-[20px] size-[280px]" data-name="Background" />;
}

function Pic4() {
  return (
    <div className="[grid-area:1_/_1] h-[280px] ml-[20.5px] mt-0 pointer-events-none relative w-[240px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgPic} />
      <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0" />
    </div>
  );
}

function PicContainer4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic Container">
      <Background4 />
      <Pic4 />
    </div>
  );
}

function Column50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Column">
      <PicContainer4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[#111827] text-[36px] text-nowrap">Hi, I’m Sagar 👋</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.`}</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a08480} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <Icon34 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Ahmedabad, India</p>
    </div>
  );
}

function IconDotEmerald2() {
  return <div className="bg-[#10b981] rounded-[20px] shrink-0 size-[8px]" data-name="icon-dot-emerald-500" />;
}

function Icon35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <IconDotEmerald2 />
    </div>
  );
}

function Hire2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Hire">
      <Icon35 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Available for new projects</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Group">
      <Location2 />
      <Hire2 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton24() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon36 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton25() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon37 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton26() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon38 />
    </div>
  );
}

function Links5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton24 />
      <IconButton25 />
      <IconButton26 />
    </div>
  );
}

function Actions9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Actions">
      <Links5 />
    </div>
  );
}

function Column51() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <Content4 />
      <Group12 />
      <Actions9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Column50 />
      <Column51 />
    </div>
  );
}

function Hero2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[64px] relative w-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Tag42() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">About me</p>
    </div>
  );
}

function Row67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag42 />
    </div>
  );
}

function Row68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Row67 />
    </div>
  );
}

function Background5() {
  return <div className="[grid-area:1_/_1] bg-[#e5e7eb] border-8 border-[#f9fafb] border-solid h-[360px] ml-0 mt-[20px] w-[320px]" data-name="Background" />;
}

function Pic5() {
  return (
    <div className="[grid-area:1_/_1] h-[360px] ml-[20px] mt-0 pointer-events-none relative w-[280px]" data-name="Pic">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgPic1} />
      <div aria-hidden="true" className="absolute border-8 border-[#f9fafb] border-solid inset-0" />
    </div>
  );
}

function PicContainer5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic Container">
      <Background5 />
      <Pic5 />
    </div>
  );
}

function Column52() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <PicContainer5 />
    </div>
  );
}

function Column53() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4b5563] text-[16px]" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">B.E. in Computer Engineering</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Full time freelancer</span>
        </li>
      </ul>
    </div>
  );
}

function Column54() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4b5563] text-[16px]" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Avid learner</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Aspiring indie hacker</span>
        </li>
      </ul>
    </div>
  );
}

function Checklist2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Checklist">
      <Column53 />
      <Column54 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[0px] text-[16px] w-[min-content]">
        <span>{`I'm a passionate, `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.figma.com/@shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://www.figma.com/@shahsagarm">
            self-proclaimed designer
          </span>
        </a>
        <span>{` who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[0px] text-[16px] w-[min-content]">
        <span>{`When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://twitter.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://twitter.com/shahsagarm">
            Twitter
          </span>
        </a>
        <span>{` where I share tech-related bites and build in public, or you can follow me on `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://github.com/shahsagarm">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] text-[16px]" href="https://github.com/shahsagarm">
            GitHub
          </span>
        </a>
        .
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Finally, some quick bits about me.</p>
      <Checklist2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">{`One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉`}</p>
    </div>
  );
}

function Column55() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#111827] text-[24px] tracking-[-0.48px] w-full">Curious about me? Here you have it:</p>
      <Content5 />
    </div>
  );
}

function Row69() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column52 />
      <Column55 />
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <Row68 />
      <Row69 />
    </div>
  );
}

function About2() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="About">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[64px] relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Tag43() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Skills</p>
    </div>
  );
}

function Row70() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag43 />
    </div>
  );
}

function Row71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">The skills, tools and technologies I am really good at:</p>
    </div>
  );
}

function Row72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row70 />
      <Row71 />
    </div>
  );
}

function IconJavscript2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-javscript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-javscript">
          <path d="M0 64V0H64V64H0Z" fill="var(--fill-0, #FFD600)" id="Vector" />
          <path d={svgPaths.p2d35d500} fill="var(--fill-0, #000001)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconJavscript2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Javascript</p>
    </div>
  );
}

function IconTypescript2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-typescript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2654)" id="icon-typescript">
          <path d={svgPaths.p1f6e0680} fill="var(--fill-0, #3178C6)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pc96a1c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2654">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTypescript2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Typescript</p>
    </div>
  );
}

function IconReact2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[69.818px]" data-name="icon-react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8182 64">
        <g clipPath="url(#clip0_1_2610)" id="icon-react">
          <path d={svgPaths.p87cd200} fill="var(--fill-0, #087EA4)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p1f807d00} id="Vector_2" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p1dda2800} id="Vector_3" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
            <path d={svgPaths.p36c55b00} id="Vector_4" stroke="var(--stroke-0, #087EA4)" strokeWidth="3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2610">
            <rect fill="white" height="64" width="69.8182" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconReact2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">React</p>
    </div>
  );
}

function Row73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center self-stretch">
        <Tech32 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech33 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech34 />
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[1.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.067px] mask-size-[64px_64px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-4.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.8667 67.8667">
          <g id="Group">
            <path d={svgPaths.p18907f00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="6" />
            <path d={svgPaths.p116cf100} fill="url(#paint0_linear_1_2602)" id="Vector_2" />
            <path d={svgPaths.p1159fd00} fill="url(#paint1_linear_1_2602)" id="Vector_3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2602" x1="40.6889" x2="53.3111" y1="43.3556" y2="59">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2602" x1="44.9556" x2="44.8841" y1="21.1333" y2="39.9333">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group13 />
    </div>
  );
}

function IconNextjs2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="icon-nextjs">
      <MaskGroup2 />
    </div>
  );
}

function Tech35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNextjs2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Next.js</p>
    </div>
  );
}

function IconNodejs2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[56.32px]" data-name="icon-nodejs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.32 64">
        <g clipPath="url(#clip0_1_2592)" id="icon-nodejs">
          <path d={svgPaths.p53deb80} fill="var(--fill-0, #5FA04E)" id="Vector" />
          <path d={svgPaths.p3c1dba00} fill="var(--fill-0, #5FA04E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2592">
            <rect fill="white" height="64" width="56.32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNodejs2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Node.js</p>
    </div>
  );
}

function IconExpress2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-express">
          <path d={svgPaths.p371d6d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconExpress2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Express.js</p>
    </div>
  );
}

function Row74() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 2">
      <Tech35 />
      <Tech36 />
      <Tech37 />
    </div>
  );
}

function IconNest2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[66.065px]" data-name="icon-nest">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0645 64">
        <g id="icon-nest">
          <path clipRule="evenodd" d={svgPaths.p205a96a0} fill="var(--fill-0, #E0234E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconNest2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Nest.js</p>
    </div>
  );
}

function IconSocket2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-socket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2586)" id="icon-socket">
          <path d={svgPaths.p1bc09400} fill="var(--fill-0, #010101)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2586">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSocket2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Socket.io</p>
    </div>
  );
}

function Tech40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <div className="h-[64px] relative shrink-0 w-[62.047px]" data-name="icon-postgresql">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconPostgresql} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function Row75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 3">
      <Tech38 />
      <Tech39 />
      <div className="flex flex-row items-center self-stretch">
        <Tech40 />
      </div>
    </div>
  );
}

function IconMongodb2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[29.767px]" data-name="icon-mongodb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.7674 64">
        <g clipPath="url(#clip0_1_2599)" id="icon-mongodb">
          <path d={svgPaths.p15611b00} fill="var(--fill-0, #00684A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2599">
            <rect fill="white" height="64" width="29.7674" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconMongodb2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">MongoDB</p>
    </div>
  );
}

function IconSass2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-sass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-sass">
          <path d={svgPaths.p2482be00} fill="var(--fill-0, #F06292)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconSass2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Sass/Scss</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[0_0_1.82%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[104.727px_62.836px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.727 62.8364">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p83e5e00} fill="var(--fill-0, #38BDF8)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-[0_0_1.82%_0]" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function IconTailwindcss2() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-[104.727px]" data-name="icon-tailwindcss">
      <ClipPathGroup8 />
    </div>
  );
}

function Tech43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconTailwindcss2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function Row76() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 4">
      <div className="flex flex-row items-center self-stretch">
        <Tech41 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech42 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech43 />
      </div>
    </div>
  );
}

function IconFigma2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[42.667px]" data-name="icon-figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6667 64">
        <g clipPath="url(#clip0_1_2573)" id="icon-figma">
          <path d={svgPaths.p168cd580} fill="var(--fill-0, #1ABCFE)" id="Vector" />
          <path d={svgPaths.p1a5faa00} fill="var(--fill-0, #0ACF83)" id="Vector_2" />
          <path d={svgPaths.p3a905b00} fill="var(--fill-0, #FF7262)" id="Vector_3" />
          <path d={svgPaths.p14877f80} fill="var(--fill-0, #F24E1E)" id="Vector_4" />
          <path d={svgPaths.p18f9a280} fill="var(--fill-0, #A259FF)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_2573">
            <rect fill="white" height="64" width="42.6667" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconFigma2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Figma</p>
    </div>
  );
}

function IconCypress2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-cypress">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_2565)" id="icon-cypress">
          <path d={svgPaths.p1b477700} fill="var(--fill-0, #58D09E)" id="Vector" />
          <path d={svgPaths.p2d90c5c0} fill="var(--fill-0, #58D09E)" id="Vector_2" />
          <path d={svgPaths.pdb9a300} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p141ef200} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p391c9c00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1fb74c80} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_2565">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tech45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconCypress2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Cypress</p>
    </div>
  );
}

function IconStorybook2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-storybook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-storybook">
          <path clipRule="evenodd" d={svgPaths.p344dd080} fill="var(--fill-0, #FF4081)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p30514380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tech46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconStorybook2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Storybook</p>
    </div>
  );
}

function Row77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 5">
      <div className="flex flex-row items-center self-stretch">
        <Tech44 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech45 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Tech46 />
      </div>
    </div>
  );
}

function IconGit2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="icon-git">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="icon-git">
          <path d={svgPaths.p8fbe180} fill="var(--fill-0, #F4511E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tech47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip relative shrink-0" data-name="Tech">
      <IconGit2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">Git</p>
    </div>
  );
}

function Row78() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row 6">
      <div className="flex flex-row items-center self-stretch">
        <Tech47 />
      </div>
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid">
      <Row73 />
      <Row74 />
      <Row75 />
      <Row76 />
      <Row77 />
      <Row78 />
    </div>
  );
}

function Row79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Grid1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Row72 />
      <Row79 />
    </div>
  );
}

function Skills2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Skills">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Tag44() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Experience</p>
    </div>
  );
}

function Row80() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag44 />
    </div>
  );
}

function Row81() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">Here is a quick summary of my most recent experiences:</p>
    </div>
  );
}

function Row82() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row80 />
      <Row81 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function LogoUpwork6() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup9 />
    </div>
  );
}

function Column56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <LogoUpwork6 />
    </div>
  );
}

function Column57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Nov 2021 - Present</p>
    </div>
  );
}

function Column58() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Ut pretium arcu et massa semper, id fringilla leo semper.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">Sr. Frontend Developer</p>
      <Column58 />
    </div>
  );
}

function Row83() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column56 />
      <Column57 />
      <Column59 />
    </div>
  );
}

function Row84() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Row83 />
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function LogoUpwork7() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup10 />
    </div>
  );
}

function Column60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <LogoUpwork7 />
    </div>
  );
}

function Column61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Jul 2017 - Oct 2021</p>
    </div>
  );
}

function Column62() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full" data-name="Column">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Sed quis justo ac magna.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column63() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">Team Lead</p>
      <Column62 />
    </div>
  );
}

function Row85() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column60 />
      <Column61 />
      <Column63 />
    </div>
  );
}

function Row86() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Row85 />
        </div>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[0_0.48%_0_0.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.484px_0px] mask-size-[102px_28px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.026 27.9999">
        <g id="Group">
          <path d={svgPaths.pba44100} fill="var(--fill-0, #14A800)" id="Vector" />
          <path d={svgPaths.p34c59c98} fill="var(--fill-0, #14A800)" id="Vector_2" />
          <path d={svgPaths.p34e5a00} fill="var(--fill-0, #14A800)" id="Vector_3" />
          <path d={svgPaths.p390a340} fill="var(--fill-0, #14A800)" id="Vector_4" />
          <path d={svgPaths.pb08b240} fill="var(--fill-0, #14A800)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group17 />
    </div>
  );
}

function LogoUpwork8() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[102px]" data-name="logo-upwork">
      <ClipPathGroup11 />
    </div>
  );
}

function Column64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <LogoUpwork8 />
    </div>
  );
}

function Column65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Column">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#374151] text-[16px] text-nowrap">Dec 2015 - May 2017</p>
    </div>
  );
}

function Column66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Column">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </li>
      </ul>
    </div>
  );
}

function Column67() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">Full Stack Developer</p>
      <Column66 />
    </div>
  );
}

function Row87() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Column64 />
      <Column65 />
      <Column67 />
    </div>
  );
}

function Row88() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Row87 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row82 />
      <Row84 />
      <Row86 />
      <Row88 />
    </div>
  );
}

function Experience2() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Experience">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Tag45() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Work</p>
    </div>
  );
}

function Row89() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag45 />
    </div>
  );
}

function Row90() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">Some of the noteworthy projects I have built:</p>
    </div>
  );
}

function Row91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row89 />
      <Row90 />
    </div>
  );
}

function Picture3() {
  return (
    <div className="basis-0 grow h-[192px] min-h-px min-w-px relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Picture">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgPicture} />
    </div>
  );
}

function Column68() {
  return (
    <div className="bg-[#f9fafb] relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-full" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[32px] relative w-full">
          <Picture3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
    </div>
  );
}

function Tag46() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">React</p>
    </div>
  );
}

function Tag47() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Next.js</p>
    </div>
  );
}

function Tag48() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Typescript</p>
    </div>
  );
}

function Tag49() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Nest.js</p>
    </div>
  );
}

function Tag50() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">PostgreSQL</p>
    </div>
  );
}

function Tag51() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Tailwindcss</p>
    </div>
  );
}

function Tag52() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Figma</p>
    </div>
  );
}

function Tag53() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Cypress</p>
    </div>
  );
}

function Tag54() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Storybook</p>
    </div>
  );
}

function Tag55() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Git</p>
    </div>
  );
}

function Technologies3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Technologies">
      <Tag46 />
      <Tag47 />
      <Tag48 />
      <Tag49 />
      <Tag50 />
      <Tag51 />
      <Tag52 />
      <Tag53 />
      <Tag54 />
      <Tag55 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton27() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon39 />
    </div>
  );
}

function Actions10() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Actions">
      <IconButton27 />
    </div>
  );
}

function Column69() {
  return (
    <div className="relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-full" data-name="Column">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[32px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#111827] text-[18px] text-nowrap w-full">Fiskil</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <Technologies3 />
          <Actions10 />
        </div>
      </div>
    </div>
  );
}

function Row92() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Row">
      <Column68 />
      <Column69 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row91 />
      {[...Array(3).keys()].map((_, i) => (
        <Row92 key={i} />
      ))}
    </div>
  );
}

function Work2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Work">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Tag56() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Testimonials</p>
    </div>
  );
}

function Row93() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag56 />
    </div>
  );
}

function Row94() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-full">Nice things people have said about me:</p>
    </div>
  );
}

function Row95() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row93 />
      <Row94 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[64px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgAvatar} />
    </div>
  );
}

function CustomerDetails6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[18px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - xyz.com</p>
    </div>
  );
}

function Column70() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[32px] relative size-full">
          <Avatar />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
          <CustomerDetails6 />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[64px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgAvatar} />
    </div>
  );
}

function CustomerDetails7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[18px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Founder - abc.com</p>
    </div>
  );
}

function Column71() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[32px] relative size-full">
          <Avatar1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”</p>
          <CustomerDetails7 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[64px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgAvatar} />
    </div>
  );
}

function CustomerDetails8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="Customer Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#111827] text-[18px] w-full">John Doe</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4b5563] text-[14px] w-full">Freelancer</p>
    </div>
  );
}

function Column72() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[300px] relative rounded-[12px] self-stretch shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07),0px_2px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Column">
      <div className="flex flex-col items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center min-w-[inherit] p-[32px] relative size-full">
          <Avatar2 />
          <p className="-webkit-box font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b5563] text-[16px] w-[min-content]">“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”</p>
          <CustomerDetails8 />
        </div>
      </div>
    </div>
  );
}

function Row96() {
  return (
    <div className="content-stretch flex flex-wrap gap-[24px] items-start relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Column70 />
      <Column71 />
      <Column72 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row95 />
      <Row96 />
    </div>
  );
}

function Testimonials2() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Testimonials">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Tag57() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] text-nowrap">Get in touch</p>
    </div>
  );
}

function Row97() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Tag57 />
    </div>
  );
}

function Row98() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] max-w-[576px] not-italic relative shrink-0 text-[#4b5563] text-[20px] text-center w-full">{`What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.`}</p>
    </div>
  );
}

function Row99() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Row97 />
      <Row98 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bf8f980} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p311e6900} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton28() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon41 />
    </div>
  );
}

function Email2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="Email">
      <Icon40 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] text-center text-nowrap tracking-[-0.36px]">reachsagarshah@gmail.com</p>
      <IconButton28 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton29() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon43 />
    </div>
  );
}

function Phone2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip relative shrink-0" data-name="Phone">
      <Icon42 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] text-center text-nowrap tracking-[-0.36px]">+91 8980500565</p>
      <IconButton29 />
    </div>
  );
}

function Column73() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Column">
      <Email2 />
      <Phone2 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2a7857e0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18C4.49 20 4 16 2 16" id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton30() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon44 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fc4c880} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton31() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon45 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pebb5300} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p8329500} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p12cf1d00} id="Vector_3" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f94800} id="Vector_4" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p253aee00} id="Vector_5" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconButton32() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-name="Icon Button">
      <Icon46 />
    </div>
  );
}

function Links6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Links">
      <IconButton30 />
      <IconButton31 />
      <IconButton32 />
    </div>
  );
}

function Actions11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Actions">
      <Links6 />
    </div>
  );
}

function Social2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Social">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] text-nowrap">You may also find me on these platforms!</p>
      <Actions11 />
    </div>
  );
}

function Row100() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 w-full" data-name="Row">
      <Social2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Row99 />
      <Column73 />
      <Row100 />
    </div>
  );
}

function ContactMe2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact me">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[64px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2549)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28a90200} id="Vector_2" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2549">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FooterNote2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Footer Note">
      <Icon47 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[0px] text-nowrap">
        <p className="leading-[20px] text-[14px]">
          <span className="text-[#4b5563]">{`2023 | `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4b5563] underline" href="https://www.figma.com/@shahsagarm">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] text-[14px]" href="https://www.figma.com/@shahsagarm">
              Designed
            </span>
          </a>
          <span className="text-[#4b5563]">{` and `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4b5563] underline" href="https://github.com/shahsagarm/sagarshah.dev">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] text-[14px]" href="https://github.com/shahsagarm/sagarshah.dev">
              coded
            </span>
          </a>
          <span className="text-[#4b5563]">{` with `}</span>
          <span className="text-[#ef4444]">❤</span>
          <span className="text-[#4b5563]">️️ by Sagar Shah</span>
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <FooterNote2 />
    </div>
  );
}

function Footer2() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center px-0 py-[24px] relative shrink-0 w-full" data-name="Footer">
      <Container26 />
    </div>
  );
}

function HomeMobileIPhone8LightMobileMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[667px] items-start overflow-clip relative shrink-0 w-[375px]" data-name="Home / Mobile (iPhone 8) / Light / Mobile Menu">
      <MobileMenu />
      <Header2 />
      <Hero2 />
      <About2 />
      <Skills2 />
      <Experience2 />
      <Work2 />
      <Testimonials2 />
      <ContactMe2 />
      <Footer2 />
    </div>
  );
}

export default function LightMode() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative size-full" data-name="Light Mode">
      <HomeDesktopLight />
      <HomeMobileIPhone8Light />
      <HomeMobileIPhone8LightMobileMenu />
    </div>
  );
}