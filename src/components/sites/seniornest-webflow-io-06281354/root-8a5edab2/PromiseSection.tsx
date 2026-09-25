"use client";

import { PROMISE } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { useEffect, useRef, useState } from "react";

export function PromiseSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setProgress(1);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / vh;
      const next = Math.min(1, Math.max(0, (raw - 0.15) / 0.55));
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={ref} className="mt-[80px] w-full max-md:mt-[64px]">
      <div className="container">
        <div className="promise-text">
          {PROMISE.masks.map((parts, i) => (
            <span
              key={i}
              className="promise-mask-line"
              style={{
                backgroundPositionX: `${(1 - progress) * 100}%`,
              }}
            >
              {parts.map((part, j) =>
                part.t !== undefined ? (
                  <span key={j} className="headding-three">
                    {part.t}
                  </span>
                ) : (
                  <span key={j} className="no-split">
                    <img
                      src={ASSETS[part.img!]}
                      alt=""
                      className="inline-block h-10 w-10 rounded-full object-cover align-middle"
                    />
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
