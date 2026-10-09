import { ABOUT } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="mt-[80px] w-full max-lg:mt-[64px] max-md:mt-[48px]">
      <div className="container">
        <div className="flex items-end justify-between gap-6 max-lg:flex-wrap max-sm:gap-5">
          <Reveal className="w-full max-w-[560px]">
            <div className="tag mb-4">{ABOUT.tag}</div>
            <h2 className="h2">{ABOUT.title}</h2>
          </Reveal>
          <Reveal delay={100} className="w-full max-w-[410px]">
            <p className="body text-charcoal-blue">{ABOUT.body}</p>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-12 max-lg:mt-8 max-md:mt-6">
          <div className="relative z-10 overflow-hidden rounded-[16px] bg-snow-gray p-5 max-md:pt-[300px] max-sm:px-4 max-sm:pt-[200px]">
            <div className="absolute inset-0">
              <img
                src={ASSETS.aboutBanner}
                alt="Cuidadora da AGD Saúde ao lado de um paciente"
                width={2880}
                height={966}
                loading="lazy"
                decoding="async"
                className="ml-[-50px] h-full w-[calc(100%+50px)] object-cover"
              />
            </div>
            <div
              className="absolute right-[-100px] top-0 h-full w-[30%] max-md:hidden"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #e8f0fe00, #e8f0fe 30.76%, #fff)",
              }}
            />

            <div className="relative z-10 ml-auto flex w-full max-w-[410px] flex-col gap-[60px] rounded-[12px] bg-dark-gunmetal px-5 py-8 max-lg:max-w-[350px] max-lg:gap-[40px] max-lg:py-6 max-md:max-w-full max-md:gap-[30px] max-md:py-4">
              <p className="text-[24px] font-medium leading-[1.3] tracking-[-0.01em] text-white max-lg:text-[20px] max-sm:text-[18px]">
                {ABOUT.bannerBody}
              </p>

              <div className="flex flex-col gap-[18px]">
                {ABOUT.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <img src={ASSETS.star} alt="" className="mt-1 h-5 w-5 flex-none" />
                    <p className="body text-light-mist">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="inline-flex w-fit">
                <Button href={ABOUT.cta.href} className="button-outline">
                  {ABOUT.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
