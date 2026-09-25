"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.items.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section className="w-full rounded-t-[28px] bg-snow-gray py-[100px] max-lg:py-[80px] max-md:py-[64px]">
      <div className="container">
        <Reveal className="mx-auto w-full max-w-[734px] text-center">
          <div className="tag mb-4">{TESTIMONIALS.tag}</div>
          <h2 className="h2">{TESTIMONIALS.title}</h2>
        </Reveal>

        <Reveal className="relative mt-12 max-lg:mt-8 max-md:mt-6">
          <div className="grid">
            {TESTIMONIALS.items.map((item, i) => (
              <div
                key={item.name}
                aria-hidden={index !== i}
                className={cn(
                  "[grid-area:1/1] grid grid-cols-[1fr_1.16fr] items-center gap-[60px] transition-opacity duration-500 ease-in max-lg:grid-cols-1 max-lg:gap-[40px] max-md:gap-[30px]",
                  index === i
                    ? "opacity-100"
                    : "pointer-events-none opacity-0",
                )}
              >
                <div className="h-[600px] overflow-hidden rounded-[12px] max-md:h-[500px] max-sm:h-[320px]">
                  <img
                    src={ASSETS[item.image]}
                    alt="Image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="max-lg:pb-0">
                  <img
                    src={ASSETS.quote}
                    alt=""
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
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 flex gap-4 max-lg:bottom-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-platinum transition-colors duration-[400ms] hover:bg-deep-teal"
            >
              <img src={ASSETS.sliderPrev} alt="" className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-platinum transition-colors duration-[400ms] hover:bg-deep-teal"
            >
              <img src={ASSETS.sliderNext} alt="" className="h-7 w-7" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
