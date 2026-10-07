import { STATS } from "@/types/site-seniornest-webflow-io";
import { Reveal } from "../shared/Reveal";

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-title"
      className="mt-[60px] w-full max-lg:mt-[64px] max-md:mt-[48px]"
    >
      <div className="container">
        <Reveal>
          <div className="rounded-[28px] bg-snow-gray px-10 py-[60px] max-lg:px-8 max-lg:py-[48px] max-md:px-6 max-md:py-8 max-sm:px-5">
            <h2 id="stats-title" className="sr-only">
              {STATS.title}
            </h2>
            <dl className="grid grid-cols-4 gap-x-6 gap-y-10 max-lg:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-8">
              {STATS.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-l border-platinum pl-6 first:border-l-0 first:pl-0 max-lg:[&:nth-child(odd)]:border-l-0 max-lg:[&:nth-child(odd)]:pl-0 max-lg:[&:nth-child(even)]:border-l max-lg:[&:nth-child(even)]:pl-6"
                >
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="flex flex-col gap-1">
                    <span className="flex items-baseline gap-[2px]">
                      <span className="text-[56px] font-semibold leading-[105%] tracking-[-0.03em] text-dark-gunmetal max-md:text-[46px] max-sm:text-[40px]">
                        {item.value}
                      </span>
                      <span className="text-[36px] font-semibold leading-[105%] tracking-[-0.03em] text-deep-teal max-md:text-[30px] max-sm:text-[26px]">
                        {item.suffix}
                      </span>
                    </span>
                    <span className="text-[17px] font-semibold leading-[140%] tracking-[-0.01em] text-dark-gunmetal">
                      {item.label}
                    </span>
                    <span className="text-extra-small text-charcoal-blue">
                      {item.hint}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
