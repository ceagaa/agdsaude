import { SERVICES } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mt-[100px] w-full pb-[100px] max-lg:mt-[80px] max-lg:pb-[80px] max-md:mt-[64px] max-md:pb-[64px]"
    >
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 max-sm:gap-5">
          <Reveal className="w-full max-w-[640px]">
            <div className="tag mb-4">{SERVICES.tag}</div>
            <h2 className="h2">{SERVICES.title}</h2>
          </Reveal>
          <Reveal delay={100} className="w-full max-w-[410px]">
            <p className="body text-charcoal-blue">{SERVICES.body}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-3 items-stretch gap-6 max-lg:mt-8 max-lg:grid-cols-1 max-md:mt-6">
          {SERVICES.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="h-full">
              <article className="group/card flex h-full flex-col overflow-hidden rounded-[16px] border border-platinum bg-white transition-colors duration-[400ms] hover:border-snow-gray hover:bg-snow-gray">
                <div className="h-[210px] w-full overflow-hidden">
                  <img
                    src={ASSETS[item.image]}
                    alt={item.title}
                    width={760}
                    height={512}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 max-sm:p-5">
                  <h3 className="h6 text-dark-gunmetal">{item.title}</h3>
                  <p className="text-small leading-[160%] text-charcoal-blue">
                    {item.body}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-small leading-[150%] text-dark-gunmetal"
                      >
                        <img
                          src={ASSETS.tickCircle}
                          alt=""
                          className="mt-[2px] h-5 w-5 flex-none"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3">
                    <Button href={item.cta.href} ariaLabel={item.cta.label}>
                      {item.cta.label}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
