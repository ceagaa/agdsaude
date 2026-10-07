import {
  Header,
  HeroSection,
  StatsSection,
  AboutSection,
  ServicesSection,
  PrinciplesSection,
  ProcessSection,
  TestimonialsSection,
  CtaSection,
  Footer,
} from "@/components/sites/seniornest-webflow-io-06281354/root-8a5edab2";
import { CONTACT } from "@/types/site-seniornest-webflow-io";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "AGD Saúde",
  description:
    "Acompanhamento hospitalar em São Paulo com enfermeiros e auxiliares 24h. Home care, cuidados em residência, consultas e exames. Atendimento em toda a Grande São Paulo desde 2001.",
  telephone: "+5511987654321",
  email: CONTACT.email,
  foundingDate: "2001",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "São Paulo" },
    { "@type": "AdministrativeArea", name: "Grande São Paulo" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de cuidado",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acompanhamento Hospitalar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cuidados em Residência" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acompanhamento em Consultas e Exames" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cuidados Paliativos" } },
    ],
  },
};

export default function Page() {
  return (
    <main className="relative w-full overflow-x-clip bg-white text-[#0b2046]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PrinciplesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
