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
  title: "Seniornest - Webflow HTML Website Template",
  description:
    "Providing seniors with a safe, nurturing home environment. 24/7 care, personalized support, memory care, and engaging activities. A true place to belong.",
  openGraph: {
    title: "Seniornest - Webflow HTML Website Template",
    description:
      "Providing seniors with a safe, nurturing home environment. 24/7 care, personalized support, memory care, and engaging activities. A true place to belong.",
  },
  icons: {
    icon: "/sites/seniornest-webflow-io-06281354/root-8a5edab2/images/logo-mark.svg",
    shortcut:
      "/sites/seniornest-webflow-io-06281354/root-8a5edab2/images/logo-mark.svg",
    apple:
      "/sites/seniornest-webflow-io-06281354/root-8a5edab2/images/logo-alt.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
