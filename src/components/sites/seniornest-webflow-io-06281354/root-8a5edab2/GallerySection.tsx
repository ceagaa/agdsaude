import { GALLERY } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

export function GallerySection() {
  const [main, ...others] = GALLERY.items;

  return (
    <section className="w-full bg-snow-gray pb-[100px] pt-[130px] max-lg:pb-[80px] max-lg:pt-[80px] max-md:pb-[64px] max-md:pt-[64px]">
      <div className="container">
        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full max-w-[734px] flex-col items-center justify-center">
            <Reveal className="w-full text-center">
              <div className="tag mb-4">{GALLERY.tag}</div>
              <h2 className="h2">{GALLERY.title}</h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-[1fr_2fr] gap-5 max-lg:mt-8 max-lg:grid-cols-1 max-md:mt-6">
          <Reveal className="h-[680px] w-full overflow-hidden rounded-[12px] max-lg:h-[400px]">
            <div className="group relative h-full w-full overflow-hidden rounded-[12px]">
              <img
                src={ASSETS[main.image]}
                alt="Image"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 flex w-full translate-y-[30%] flex-col gap-2 bg-[linear-gradient(to_bottom,transparent,#000)] px-4 pb-5 pt-[115px] opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="text-[20px] font-semibold leading-[140%] tracking-[-0.01em] text-mint-green">
                  {main.title}
                </div>
                <p className="text-extra-small text-white">{main.body}</p>
              </div>
            </div>
          </Reveal>

          <div className="flex w-full flex-col gap-5">
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {others.slice(0, 2).map((item) => (
                <Reveal key={item.title} className="w-full overflow-hidden rounded-[12px]">
                  <div className="group relative h-[330px] w-full overflow-hidden rounded-[12px]">
                    <img
                      src={ASSETS[item.image]}
                      alt="Image"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 flex w-full translate-y-[30%] flex-col gap-2 bg-[linear-gradient(to_bottom,transparent,#000)] px-4 pb-5 pt-[115px] opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="text-[20px] font-semibold leading-[140%] tracking-[-0.01em] text-mint-green">
                        {item.title}
                      </div>
                      <p className="text-extra-small text-white">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {others.slice(2).map((item) => (
              <Reveal key={item.title} className="w-full overflow-hidden rounded-[12px]">
                <div className="group relative h-[330px] w-full overflow-hidden rounded-[12px]">
                  <img
                    src={ASSETS[item.image]}
                    alt="Image"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 flex w-full translate-y-[30%] flex-col gap-2 bg-[linear-gradient(to_bottom,transparent,#000)] px-4 pb-5 pt-[115px] opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-[20px] font-semibold leading-[140%] tracking-[-0.01em] text-mint-green">
                      {item.title}
                    </div>
                    <p className="text-extra-small text-white">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
