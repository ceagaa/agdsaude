"use client";

import { FOOTER } from "@/types/site-seniornest-webflow-io";
import Link from "next/link";
import { ASSETS } from "../shared/assets";
import { ButtonSubmit } from "../shared/Button";
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
    <footer id="contact" className="w-full overflow-hidden pb-5 pt-[60px] max-lg:pt-[40px] max-md:pt-[30px]">
      <div className="container">
        <Reveal className="grid grid-cols-2 items-center gap-4 border-b border-platinum pb-[60px] max-lg:pb-[40px] max-md:grid-cols-1 max-md:pb-[30px]">
          <Link href="/" className="block h-10 w-[208px] max-md:h-8 max-md:w-[184px] max-sm:h-[25px] max-sm:w-[140px]">
            <img
              src={ASSETS.logoFooter}
              alt="SeniorNest"
              className="h-full w-full object-contain"
            />
          </Link>
          <div className="flex flex-col gap-1">
            <a href={`tel:${FOOTER.phone.replace(/\s/g, "")}`} className="home-footer-contact-text">
              <div className="h5">{FOOTER.phone}</div>
            </a>
            <a href={`mailto:${FOOTER.email}`} className="home-footer-contact-text">
              <div className="h5">{FOOTER.email}</div>
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-[1fr_1.31fr] gap-[108px] max-lg:mt-8 max-lg:grid-cols-1 max-lg:gap-10 max-md:mt-6 max-sm:gap-[30px]">
          <Reveal variant="sm">
            <div>
              <div className="home-footer-text">{FOOTER.blurb}</div>
              <div className="text-small home-footer-form-title">
                {FOOTER.form.label}
              </div>
              <form
                className="relative flex items-center gap-3 max-sm:flex-col"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="relative w-full min-w-[286px] max-lg:min-w-[520px] max-md:min-w-[280px] max-sm:min-w-0">
                  <input
                    className="home-text-field"
                    type="email"
                    name="email"
                    maxLength={256}
                    placeholder={FOOTER.form.placeholder}
                    required
                  />
                  <img
                    src={ASSETS.mail}
                    alt=""
                    className="pointer-events-none absolute left-[30px] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <div className="w-full min-w-[148px] max-lg:w-auto">
                  <ButtonSubmit className="w-full min-w-[148px] max-sm:w-full">
                    {FOOTER.form.cta}
                  </ButtonSubmit>
                </div>
              </form>
            </div>
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
                  <div className="text-small semi-bold">{column.heading}</div>
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

        <Reveal
          variant="sm"
          className="mt-[60px] flex items-center justify-between gap-4 max-lg:mt-[40px] max-md:mt-[30px] max-sm:flex-col max-sm:gap-0"
        >
          <div className="flex items-center gap-1">
            <div className="webflow-text-style-two">Powered by</div>
            <a
              href="https://webflow.com"
              target="_blank"
              rel="noreferrer"
              className="webflow-text-style"
            >
              {FOOTER.legal.poweredBy}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <div className="webflow-text-style-two">Designed by</div>
            <a
              href="https://webflow.com/templates/designers/pentaclay"
              target="_blank"
              rel="noreferrer"
              className="webflow-text-style"
            >
              {FOOTER.legal.designedBy}
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
