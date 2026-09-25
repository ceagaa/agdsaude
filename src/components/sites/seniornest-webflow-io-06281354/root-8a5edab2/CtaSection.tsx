"use client";

import { useEffect, useRef, useState } from "react";
import { CTA } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scale, setScale] = useState(1.15);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setScale(1);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.9)));
      setScale(1.15 - 0.15 * progress);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full overflow-hidden py-[100px] max-lg:py-[80px] max-md:py-[64px]"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={ASSETS.ctaBg}
          alt=""
          className="h-full w-full object-cover"
          style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="w-full">
          <Reveal>
            <div className="ml-auto flex w-full max-w-[514px] flex-col gap-7 rounded-[12px] bg-dark-gunmetal p-8 backdrop-blur-[10px] max-lg:p-6 max-md:p-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h5 white text-center">{CTA.title}</div>
                <div className="text-small silver-mist w-full max-w-[375px] text-center">
                  {CTA.body}
                </div>
              </div>

              {submitted ? (
                <div className="rounded-[8px] bg-deep-teal p-5 text-center text-[16px] leading-[150%] text-white">
                  {CTA.success}
                </div>
              ) : (
                <form
                  className="mb-[15px] flex flex-col gap-7"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 max-sm:flex-col">
                      <input
                        className="cta-text-field"
                        type="text"
                        name="first-name"
                        maxLength={256}
                        placeholder={CTA.fields.firstName}
                        required
                      />
                      <input
                        className="cta-text-field"
                        type="text"
                        name="last-name"
                        maxLength={256}
                        placeholder={CTA.fields.lastName}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 items-end gap-3 max-sm:grid-cols-1">
                      <input
                        className="cta-text-field"
                        type="tel"
                        name="phone"
                        maxLength={256}
                        placeholder={CTA.fields.phone}
                        required
                      />
                      <div className="relative z-10">
                        <select
                          className="select-field w-full"
                          name="service"
                          defaultValue=""
                          required
                        >
                          <option value="">{CTA.placeholder}</option>
                          {CTA.options.map((option) => (
                            <option key={option.label} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <img
                          src={ASSETS.selectChevron}
                          alt=""
                          className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-[70%]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        className="cta-text-field"
                        type="email"
                        name="email"
                        maxLength={256}
                        placeholder={CTA.fields.email}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-[12px] bg-deep-teal px-4 py-4 text-[16px] font-semibold leading-[125%] tracking-[-0.01em] text-white transition-all duration-300 hover:bg-mint-green hover:text-black"
                  >
                    {CTA.submit}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
