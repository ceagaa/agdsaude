"use client";

import { useEffect, useRef, useState } from "react";
import { CTA } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scale, setScale] = useState(1.15);

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
      id="contact"
      className="relative z-10 w-full overflow-hidden py-[120px] max-lg:py-[96px] max-md:py-[72px]"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={ASSETS.ctaBg}
          alt=""
          className="h-full w-full object-cover"
          style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
        />
        <div className="absolute inset-0 bg-[#0b2046cc]" />
      </div>

      <div className="container relative z-10">
        <div className="flex w-full flex-col items-center gap-8 text-center">
          <Reveal>
            <div className="flex w-fit items-center gap-2 rounded-[60px] bg-[#0b204699] px-4 py-2 backdrop-blur-sm">
              <span className="h-[8px] w-[8px] flex-none rounded-full bg-mint-green" />
              <span className="text-extra-small font-semibold tracking-[-0.01em] text-white">
                {CTA.badge.title}
              </span>
              <span className="text-extra-small text-platinum">
                · {CTA.badge.text}
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="h2 max-w-[820px] text-white">{CTA.title}</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="body max-w-[640px] text-snow-gray">{CTA.body}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button href={CTA.primary.href} ariaLabel={CTA.primary.label}>
                {CTA.primary.label}
              </Button>
              <Button
                href={CTA.secondary.href}
                ariaLabel={CTA.secondary.label}
                className="button-outline"
              >
                {CTA.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
