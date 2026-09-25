import { HERO } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function HeroSection() {
  return (
    <section className="relative z-10 flex h-screen w-full items-end overflow-hidden pb-[80px] pt-[160px] max-lg:h-auto max-lg:pb-[64px] max-lg:pt-[140px] max-md:pb-[48px] max-md:pt-[100px]">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-b-[28px]">
        <img src={ASSETS.heroBg} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #1d307200, #03050c99 73%, #03050ccc 99.6%)",
          }}
        />
      </div>

      <div className="container">
        <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start max-sm:gap-5">
          <div className="mt-8 flex max-w-[600px] flex-col gap-4 max-lg:mt-[80px] max-lg:max-w-[450px] max-md:mt-[64px] max-sm:mt-8">
            <Reveal>
              <div className="inline-flex w-fit items-center gap-2 rounded-[60px] bg-[#040d1066] px-3 py-1.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-mint-green" />
                <span className="text-extra-small text-platinum">{HERO.badge}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="h1 text-white">{HERO.title}</h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="body max-w-[470px] text-white">{HERO.body}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-4 max-lg:mt-2 max-md:mt-0">
                <Button href={HERO.cta.href}>{HERO.cta.label}</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="w-[300px] max-sm:w-full">
            <div className="relative h-[200px] w-full overflow-hidden rounded-[12px] bg-[#e3d0b633] backdrop-blur-[10px] max-md:ml-0 ml-auto">
              <video
                className="h-full w-full object-cover"
                poster={ASSETS.heroVideoPoster}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={ASSETS.heroVideo} type="video/mp4" />
              </video>
              <button
                type="button"
                aria-label="Pause background video"
                className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-[10px]"
              >
                <img src={ASSETS.pause} alt="" className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
