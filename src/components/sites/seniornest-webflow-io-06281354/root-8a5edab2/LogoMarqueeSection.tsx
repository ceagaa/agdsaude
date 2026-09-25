import { MARQUEE } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

const LOGOS = [
  ASSETS.marqueeLogo3,
  ASSETS.brandLogo2,
  ASSETS.brandLogo3,
  ASSETS.brandLogo4,
  ASSETS.brandLogo5,
  ASSETS.marqueeLogo4,
  ASSETS.marqueeLogo2,
  ASSETS.marqueeLogo3,
  ASSETS.marqueeLogo5,
  ASSETS.marqueeLogo1,
] as const;

export function LogoMarqueeSection() {
  return (
    <section className="mt-[60px] w-full max-lg:mt-[80px] max-md:mt-[64px]">
      <div className="container">
        <div className="flex items-center gap-6 max-md:flex-col max-md:items-start max-md:gap-6">
          <Reveal className="w-full max-w-[312px] flex-none max-lg:max-w-[200px] max-md:max-w-full">
            <div className="flex max-w-[198px] flex-wrap items-start gap-[2px] max-md:max-w-full">
              {MARQUEE.lines.map((line) => (
                <div
                  key={line}
                  className="text-small font-medium leading-[150%] tracking-[-0.01em] text-dark-gunmetal"
                >
                  {line}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_25%,#000_75%,transparent_100%)] max-md:w-full">
            <div className="sn-marquee flex w-max items-center">
              {[0, 1].map((pass) => (
                <div key={pass} className="flex items-center" aria-hidden={pass === 1}>
                  {LOGOS.map((logo, i) => (
                    <div key={`${pass}-${i}`} className="mr-[72px] h-6 w-auto flex-none max-lg:mr-[62px] max-lg:h-8 max-lg:w-[100px] max-md:mr-[52px] max-md:h-[26px] max-md:w-[100px]">
                      <img src={logo} alt="" className="h-full w-full object-contain" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
