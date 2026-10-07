import { HERO } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen w-full items-end overflow-hidden pb-[80px] pt-[200px] max-lg:pb-[64px] max-lg:pt-[180px] max-md:pb-[48px] max-md:pt-[150px]">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]">
        <img src={ASSETS.heroBg} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #0b204600, #0b2046b3 62%, #0b2046e6 99.6%)",
          }}
        />
      </div>

      <div className="container">
        <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start max-sm:gap-5">
          <div className="mt-8 flex max-w-[620px] flex-col gap-4 max-lg:mt-[80px] max-lg:max-w-[480px] max-md:mt-[64px] max-sm:mt-8">
            <Reveal>
              <div className="inline-flex w-fit items-center gap-2 rounded-[60px] bg-[#0b204699] px-3 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-mint-green" />
                <span className="text-extra-small text-platinum">{HERO.badge}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="h1 text-white">{HERO.title}</h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="body max-w-[500px] text-white">{HERO.body}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-4 flex flex-wrap items-center gap-3 max-lg:mt-2 max-md:mt-0">
                <Button href={HERO.cta.href} ariaLabel={HERO.cta.label}>
                  {HERO.cta.label}
                </Button>
                <Button
                  href={HERO.ctaSecondary.href}
                  ariaLabel={HERO.ctaSecondary.label}
                  className="button-outline"
                >
                  {HERO.ctaSecondary.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="w-[300px] max-sm:w-full">
            <div className="relative h-[200px] w-full overflow-hidden rounded-[12px] bg-[#0b204633] backdrop-blur-[10px] max-md:ml-0 ml-auto">
              <img
                src={ASSETS.choose1}
                alt="Enfermeira acompanhando paciente em hospital de São Paulo"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
