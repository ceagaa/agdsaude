"use client";

import { FOOTER } from "@/types/site-seniornest-webflow-io";
import Link from "next/link";
import { ASSETS } from "../shared/assets";
import { Reveal } from "../shared/Reveal";

function FooterLink({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="inline-flex">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="home-footer-link-text"
      >
        <span className="footer-dot-image-box">
          <img src={ASSETS.footerDot} alt="" className="footer-dot" />
          <img
            src={ASSETS.footerDotHover}
            alt=""
            className="footer-dot-image-two"
          />
        </span>
        <span>{label}</span>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-dark-gunmetal pb-5 pt-[60px] max-lg:pt-[40px] max-md:pt-[30px]">
      <div className="container">
        <Reveal className="grid grid-cols-2 items-center gap-4 border-b border-white/15 pb-[60px] max-lg:pb-[40px] max-md:grid-cols-1 max-md:pb-[30px]">
          <Link
            href="/"
            className="block h-16 w-[320px] max-md:h-14 max-md:w-[280px] max-sm:h-12 max-sm:w-[240px]"
          >
            <img
              src={ASSETS.logoHeader}
              alt="AGD Saúde"
              width={453}
              height={217}
              loading="lazy"
              decoding="async"
              className="h-full w-auto"
            />
          </Link>
          <div className="flex flex-col gap-1">
            <a href={FOOTER.phoneHref} className="home-footer-contact-text">
              <div className="h5">{FOOTER.phone}</div>
            </a>
            <a href={`mailto:${FOOTER.email}`} className="home-footer-contact-text">
              <div className="h5">{FOOTER.email}</div>
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-[1fr_1.31fr] gap-[108px] max-lg:mt-8 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-6 max-sm:gap-[30px]">
          <Reveal variant="sm">
            <div className="home-footer-text">{FOOTER.blurb}</div>
          </Reveal>

          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-[1fr_1fr_2fr] max-md:grid-cols-[1fr_1fr_1.4fr] max-sm:grid-cols-2">
            {FOOTER.columns.map((column, index) => (
              <Reveal
                key={index}
                variant="sm"
                delay={index * 80}
                className={index === 2 ? "max-sm:col-span-2" : undefined}
              >
                <div>
                  <div className="text-small semi-bold text-white">
                    {column.heading}
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    {column.links.map((link) => (
                      <FooterLink
                        key={link.label}
                        label={link.label}
                        href={link.href}
                        external={link.href.startsWith("http")}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-[60px] flex flex-wrap items-center justify-between gap-x-6 gap-y-2 max-lg:mt-[40px] max-md:mt-[30px] max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <div className="webflow-text-style-two flex flex-wrap items-center gap-x-2">
            <span>{FOOTER.legal.copyright}</span>
            <Link
              href={FOOTER.legal.privacyHref}
              className="webflow-text-style-two"
            >
              {FOOTER.legal.privacy}
            </Link>
          </div>
          <div className="webflow-text-style-two">{FOOTER.legal.note}</div>
        </div>
      </div>
    </footer>
  );
}
