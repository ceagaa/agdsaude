import { BLOG } from "@/types/site-seniornest-webflow-io";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";
import { Reveal } from "../shared/Reveal";

export function BlogSection() {
  return (
    <section id="blog" className="mt-[100px] w-full pb-[100px] max-lg:mt-[80px] max-lg:pb-[80px] max-md:mt-[64px] max-md:pb-[64px]">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 max-lg:flex-col max-lg:items-start max-sm:gap-5">
          <Reveal className="w-full max-w-[600px]">
            <div className="tag mb-4">{BLOG.tag}</div>
            <h2 className="h2">{BLOG.title}</h2>
          </Reveal>
          <Reveal delay={100} className="w-full max-w-[410px]">
            <p className="body text-charcoal-blue">{BLOG.body}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-lg:mt-8 max-lg:grid-cols-2 max-md:mt-6 max-md:grid-cols-1 max-sm:gap-5">
          {BLOG.posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 100}>
              <div className="group block overflow-hidden rounded-[12px]">
                <div className="h-[240px] w-full overflow-hidden">
                  <img
                    src={ASSETS[post.image]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col bg-snow-gray px-4 py-5 max-sm:py-4">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={ASSETS.calendar}
                      alt=""
                      className="h-4 w-4"
                    />
                    <div className="text-small text-dark-gunmetal">
                      {post.date}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <div className="category-box">
                      <div className="home-blog-item-text">#</div>
                      <div className="home-blog-item-text">{post.category}</div>
                    </div>
                    <div className="blog-title">{post.title}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 inline-flex">
          <Button href={BLOG.cta.href}>{BLOG.cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
