import {
  Header,
  HeroSection,
  LogoMarqueeSection,
  PromiseSection,
  AboutSection,
  ChooseSection,
  ServicesSection,
  ProcessSection,
  GallerySection,
  TeamSection,
  TestimonialsSection,
  PrinciplesSection,
  BlogSection,
  CtaSection,
  Footer,
} from "@/components/sites/seniornest-webflow-io-06281354/root-8a5edab2";

export default function Page() {
  return (
    <main className="relative w-full overflow-x-clip bg-white text-[#040d10]">
      <Header />
      <HeroSection />
      <LogoMarqueeSection />
      <PromiseSection />
      <AboutSection />
      <ChooseSection />
      <ServicesSection />
      <ProcessSection />
      <div className="-mt-[30px]">
        <GallerySection />
      </div>
      <TeamSection />
      <TestimonialsSection />
      <PrinciplesSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
