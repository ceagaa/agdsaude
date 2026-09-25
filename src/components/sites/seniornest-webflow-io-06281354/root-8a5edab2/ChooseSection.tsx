import { CHOOSE } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

export function ChooseSection() {
  return (
    <section className="relative mt-[100px] w-full overflow-hidden rounded-[28px] bg-snow-gray max-lg:mt-[80px] max-md:mt-[64px]">
      <div className="container">
        <div className="pt-[100px] max-lg:pt-[80px] max-md:pt-[64px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="w-full max-w-[840px]">
              <div className="tag mb-4">{CHOOSE.tag}</div>
              <h2 className="h2">{CHOOSE.title}</h2>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-12 flex gap-6 pb-[100px] pl-[calc(50%_-_566px)] max-lg:ml-0 max-lg:mt-8 max-lg:grid max-lg:grid-cols-2 max-lg:px-8 max-lg:pb-[80px] max-md:mt-6 max-md:grid-cols-1 max-md:px-6 max-md:pb-[64px] max-sm:px-[15px] max-sm:gap-5">
        {CHOOSE.items.map((item, index) => (
          <Reveal
            key={item.num}
            delay={index * 100}
            className="relative z-10 flex min-h-[480px] w-full max-w-[400px] flex-none items-end overflow-hidden rounded-[12px] max-lg:max-w-none max-md:min-h-[450px] max-sm:min-h-[380px]"
          >
            <div className="relative m-5 rounded-[12px] bg-white p-5 max-sm:m-8">
              <div className="mb-[10px] max-w-[290px] border-b border-platinum pb-2 text-[24px] font-semibold leading-[130%] tracking-[-0.01em] text-dark-gunmetal max-lg:text-[22px]">
                {item.num} {item.title}
              </div>
              <p className="text-small leading-[150%] text-charcoal-blue">{item.body}</p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img src={ASSETS[item.image]} alt="Image" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
