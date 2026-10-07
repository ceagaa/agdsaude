import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-third",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acompanhamento Hospitalar em São Paulo | 24h — AGD Saúde",
  description:
    "Acompanhamento hospitalar em São Paulo com enfermeiros e auxiliares 24h. Escala em até 2 horas, relatório diário para a família e cuidado humanizado. AGD Saúde, home care desde 2001.",
  keywords: [
    "acompanhamento hospitalar em São Paulo",
    "cuidador hospitalar São Paulo",
    "enfermeiro home care SP",
    "cuidados em residência São Paulo",
  ],
  openGraph: {
    title: "Acompanhamento Hospitalar em São Paulo | 24h — AGD Saúde",
    description:
      "Assistência humanizada 24/7 em hospitais e clínicas de São Paulo e da Grande SP, com relatório diário para a família.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/img/logo/logo.webp",
    shortcut: "/img/logo/logo.webp",
    apple: "/img/logo/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
