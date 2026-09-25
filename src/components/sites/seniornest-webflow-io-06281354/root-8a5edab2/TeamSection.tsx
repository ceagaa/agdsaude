"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TEAM } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function TeamSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="team" className="w-full py-[100px] max-lg:py-[80px] max-md:py-[64px]">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 max-lg:flex-col max-lg:items-start max-sm:gap-5">
          <Reveal className="w-full max-w-[600px]">
            <div className="tag mb-4">{TEAM.tag}</div>
            <h2 className="h2">{TEAM.title}</h2>
          </Reveal>
          <Reveal delay={100} className="w-full max-w-[410px]">
            <p className="body text-charcoal-blue">{TEAM.body}</p>
          </Reveal>
        </div>

        <div className="mt-12 max-lg:mt-8 max-md:mt-6">
          <div className="flex items-start max-md:flex-col max-md:gap-5">
            <div className="mr-10 flex w-full max-w-[560px] flex-none flex-col gap-2 pt-[50px] max-lg:mr-5 max-lg:w-auto max-lg:flex-1 max-lg:max-w-none max-md:grid max-md:grid-cols-1 max-md:justify-items-center max-md:pt-0 max-md:w-full">
              {TEAM.members.map((member, index) => (
                <button
                  key={member.role}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  className={cn(
                    "w-full rounded-[8px] border border-platinum px-5 py-4 text-left text-[20px] font-medium leading-[130%] tracking-[-0.01em] transition-colors duration-300 max-lg:px-4 max-lg:py-[17px] max-lg:text-[16px] max-md:py-4 max-md:text-center max-md:text-[16px] max-sm:px-3 max-sm:py-3 max-sm:text-[14px]",
                    active === index
                      ? "bg-snow-gray text-deep-teal"
                      : "bg-light-mist text-dark-gunmetal hover:bg-snow-gray hover:text-deep-teal",
                  )}
                >
                  <div>{member.role}</div>
                </button>
              ))}
            </div>

            <div className="relative h-[600px] w-full max-w-[540px] flex-none max-lg:h-[450px] max-lg:max-w-none max-lg:flex-1 max-md:flex-none">
              {TEAM.members.map((member, index) => (
                <div
                  key={member.name}
                  aria-hidden={active !== index}
                  className={cn(
                    "absolute inset-0 transition-opacity",
                    active === index
                      ? "z-10 opacity-100 duration-300"
                      : "pointer-events-none opacity-0 duration-100",
                  )}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                    <img
                      src={ASSETS[member.image]}
                      alt="Image"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-10 max-lg:p-6">
                      <div className="rounded-[16px] bg-white p-5">
                        <div className="text-learge text-dark-gunmetal">
                          {member.quote}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2.5 border-t border-platinum pt-3 max-lg:mt-2.5 max-lg:pt-2">
                          <div className="text-learge text-dark-gunmetal">
                            {member.name}
                          </div>
                          <div className="text-learge whitespace-pre-line text-deep-teal">
                            {member.suffix}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="-mt-[100px] max-lg:mt-[10px] max-md:mt-[20px]">
            <Button href={TEAM.cta.href}>{TEAM.cta.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
