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
              {PROCESS.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`leading-[20px] ${
                    index < PROCESS.items.length - 1
                      ? "border-b border-white/10 pb-7"
                      : ""
                  }`}
                >
                  <div className="inline-flex">
                    <div className="mb-4 flex items-center gap-1 rounded-full bg-mint-green px-[10px] py-[5px]">
                      <span className="text-extra-small font-medium text-dark-gunmetal">
                        {item.chip}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h5 text-white">{item.title}</div>
                    <p className="text-small leading-[150%] whitespace-pre-line text-snow-gray">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={100}
            className="sticky top-[100px] h-[600px] w-full overflow-hidden rounded-[12px] max-md:h-[450px] max-sm:h-[300px]"
          >
            <img
              src={ASSETS.choose2}
              alt="Profissional da AGD cuidando de paciente"
              width={853}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-[12px] object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
