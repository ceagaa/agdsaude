"use client";

import { TESTIMONIALS } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="w-full rounded-t-[28px] bg-snow-gray py-[100px] max-lg:py-[80px] max-md:py-[64px]"
    >
      <div className="container">
        <Reveal className="mx-auto w-full max-w-[734px] text-center">
          <div className="tag mb-4">{TESTIMONIALS.tag}</div>
          <h2 className="h2">{TESTIMONIALS.title}</h2>
        </Reveal>

        <div className="mx-auto mt-12 flex w-full max-w-[860px] flex-col items-center text-center max-lg:mt-8 max-md:mt-6">
          {TESTIMONIALS.items.map((item) => (
            <Reveal
              key={item.name}
              className="flex w-full flex-col items-center"
            >
              <img
                src={ASSETS.quote}
                alt=""
                loading="lazy"
                decoding="async"
                className="mb-2.5 h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] max-sm:h-[50px] max-sm:w-[50px]"
              />
              <h3 className="h5 text-dark-gunmetal">{item.quote}</h3>
              <div className="mt-[50px] flex flex-col gap-1 max-lg:mt-[40px] max-md:mt-[30px] max-sm:mt-[20px]">
                <div className="text-extra-learge text-dark-gunmetal">
                  {item.name}
                </div>
                <div className="text-small text-charcoal-blue">
                  {item.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
