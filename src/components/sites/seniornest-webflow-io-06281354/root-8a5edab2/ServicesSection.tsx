import { SERVICES } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

const SERVICE_DETAILS_HREF = "#contact";

export function ServicesSection() {
  return (
    <section id="services" className="relative mt-[100px] w-full pb-[100px] max-lg:mt-[80px] max-lg:pb-[80px] max-md:mt-[64px] max-md:pb-[64px]">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 max-sm:gap-5">
          <Reveal className="w-full max-w-[600px]">
            <div className="tag mb-4">{SERVICES.tag}</div>
            <h2 className="h2">{SERVICES.title}</h2>
          </Reveal>
          <Reveal delay={100} className="w-full max-w-[410px]">
            <p className="body text-charcoal-blue">{SERVICES.body}</p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 flex flex-col max-lg:mt-8 max-md:mt-6 max-md:gap-6">
        {SERVICES.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 80} className="-mt-[2px]">
            <div className="group/row border-y border-platinum bg-white transition-colors duration-[400ms] hover:border-snow-gray hover:bg-snow-gray max-md:mx-5 max-md:border max-sm:mx-4">
              <div className="container">
                <div className="grid grid-cols-[1fr_1.5fr] items-center gap-6 py-8 max-lg:grid-cols-1 max-lg:py-6 max-md:py-4 max-sm:gap-5">
                  <div className="flex items-start gap-6 max-lg:order-2 max-lg:flex-col max-lg:gap-[10px]">
                    <div className="h-[60px] w-[60px] flex-none rounded-full border border-platinum bg-white p-[14px]">
                      <img
                        src={ASSETS[item.icon]}
                        alt="Image"
                        className="h-full w-full rounded-[12px] object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <div className="h6 text-dark-gunmetal">{item.title}</div>
                      <div className="pointer-events-none mt-[42px] inline-flex translate-y-2 items-center justify-center opacity-0 transition-all duration-300 group-hover/row:pointer-events-auto group-hover/row:translate-y-0 group-hover/row:opacity-100 max-lg:mt-6 max-md:mt-4">
                        <Button href={SERVICE_DETAILS_HREF}>View Details</Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-5 max-md:flex-col max-md:items-start max-md:gap-5">
                    <div>
                      <div className="text-extra-learge text-dark-gunmetal">{item.label}</div>
                      <div className="mt-3 flex flex-col gap-[10px]">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center gap-2">
                            <img
                              src={ASSETS.tickCircle}
                              alt=""
                              className="h-5 w-5 flex-none"
                            />
                            <p className="body text-charcoal-blue">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="min-h-[146.667px] min-w-[214px] max-md:min-h-[182.667px] max-md:order-first max-sm:min-w-full">
                      <div className="ml-auto flex h-[144px] w-[214px] items-end justify-end overflow-hidden rounded-[12px] max-md:h-[180px] max-md:w-[300px] max-sm:w-full">
                        <img
                          src={ASSETS[item.image]}
                          alt="Image"
                          className="h-full w-full object-cover"
                        />
                        <div className="hidden">{item.note}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
