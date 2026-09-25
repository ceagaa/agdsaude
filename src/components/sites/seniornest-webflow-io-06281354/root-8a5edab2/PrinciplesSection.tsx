"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PRINCIPLES } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn(
        "h-6 w-6 min-w-6 transition-transform duration-300",
        open && "rotate-180",
      )}
    >
      <path
        d="M6 9.5L12 15.5L18 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrinciplesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 w-full overflow-hidden py-[100px] max-lg:py-[80px] max-md:py-[64px]">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={ASSETS.blogImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(50deg,#242c35_13%,#03060d66_58%,#1d307200)]" />
      </div>

      <div className="container relative z-10">
        <div className="w-full max-w-[580px]">
          <Reveal>
            <div className="flex flex-col gap-5">
              <div className="text-[14px] font-medium leading-[150%] tracking-[-0.01em] text-mint-green">
                {PRINCIPLES.tag}
              </div>
              <h2 className="h2 white">{PRINCIPLES.title}</h2>
            </div>
          </Reveal>

          <div className="mt-[100px] flex min-h-[400px] flex-col gap-4 max-lg:mt-[80px] max-md:mt-[30px] max-sm:min-h-0">
            {PRINCIPLES.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <Reveal key={item.title} delay={index * 80} variant="sm">
                  <div
                    className={cn(
                      "flex w-full flex-col rounded-[8px] p-4 transition-colors duration-300 max-sm:p-3",
                      isOpen ? "bg-deep-teal" : "bg-white",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-2.5 text-left"
                    >
                      <p
                        className={cn(
                          "text-extra-learge transition-colors duration-300",
                          isOpen ? "text-mint-green" : "text-dark-gunmetal",
                        )}
                      >
                        {item.title}
                      </p>
                      <span
                        className={cn(
                          "mt-[5px] flex h-6 min-w-6 items-center justify-center transition-colors duration-300",
                          isOpen ? "text-white" : "text-dark-gunmetal",
                        )}
                      >
                        <Chevron open={isOpen} />
                      </span>
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={cn(
                            "pt-2 text-[16px] leading-[150%] tracking-[-0.01em] transition-colors duration-300",
                            isOpen ? "text-white" : "text-dark-gunmetal",
                          )}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
