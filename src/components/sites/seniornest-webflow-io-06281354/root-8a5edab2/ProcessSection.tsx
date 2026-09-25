import { PROCESS } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

export function ProcessSection() {
  return (
    <section className="relative z-10 w-full rounded-[28px] bg-dark-gunmetal py-[100px] text-white max-lg:py-[80px] max-md:py-[64px]">
      <div className="container">
        <div className="grid grid-cols-2 items-start gap-10 max-lg:grid-cols-1 max-lg:gap-8 max-md:gap-6">
          <Reveal className="flex flex-col">
            <div className="flex flex-col gap-4">
              <div className="text-[14px] font-medium leading-[150%] tracking-[-0.01em] text-mint-green">
                {PROCESS.tag}
              </div>
              <h2 className="h2 text-white">{PROCESS.title}</h2>
            </div>

            <div className="mt-10 flex flex-col gap-7 max-lg:mt-8 max-md:mt-6">
              {PROCESS.steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`leading-[20px] ${
                    index < PROCESS.steps.length - 1
                      ? "border-b border-fog-overlay pb-7"
                      : ""
                  }`}
                >
                  <div className="inline-flex">
                    <div className="mb-4 flex items-center gap-1 rounded-full bg-mint-green px-[10px] py-[5px]">
                      <span className="h-2 w-2 rounded-full bg-dark-gunmetal" />
                      <span className="text-extra-small text-dark-gunmetal">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h5 text-white">{step.title}</div>
                    <p className="text-small leading-[150%] whitespace-pre-line text-snow-gray">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="sticky top-[100px] h-[600px] w-full overflow-hidden rounded-[12px] max-md:h-[450px] max-sm:h-[300px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#e3d0b633] backdrop-blur-[10px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={ASSETS.processVideoPoster}
                src={ASSETS.processVideo}
                className="absolute inset-0 h-full w-full rounded-[12px] object-cover"
              />
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-6 backdrop-blur-[10px] max-md:h-[70px] max-md:w-[70px] max-sm:h-[60px] max-sm:w-[60px]">
                <img
                  src={ASSETS.pause}
                  alt="Pause video"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
