"use client";

import { NAV } from "@/types/site-seniornest-webflow-io";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { ASSETS } from "../shared/assets";
import { Button } from "../shared/Button";

function NavDot({ active }: { active?: boolean }) {
  return (
    <span
      className={cn(
        "h-[6px] w-[6px] flex-none rounded-full transition-colors duration-300",
        active ? "bg-mint-green" : "bg-white/70",
      )}
    />
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 50 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const background = scrolled
    ? "rgba(4,13,16,0.92)"
    : "rgba(4,13,16,0)";

  const smoothBehavior = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? ("auto" as const)
      : ("smooth" as const);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: smoothBehavior() });
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }
    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      event.preventDefault();
      target.scrollIntoView({ behavior: smoothBehavior(), block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header
      style={{ backgroundColor: background }}
      className={cn(
        "fixed left-0 top-0 z-[100] w-full border-b border-white/10 transition-[transform,background-color] duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="container">
        <div className="flex h-[80px] items-center justify-between gap-10">
          <Link href="/" className="flex h-8 w-[175px] flex-none items-center">
            <img src={ASSETS.logoHeader} alt="SeniorNest" className="h-8 w-auto" />
          </Link>

          <nav className="hidden h-full items-center gap-2.5 lg:flex">
            {NAV.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group/nav flex items-center gap-1 rounded-[6px] px-2.5 text-[16px] leading-[160%] tracking-[-0.04em] text-light-mist transition-colors duration-300 hover:text-white"
              >
                <NavDot />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex-none max-lg:hidden">
            <Button href="#contact">Schedule a Visit</Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[6px] bg-white/10 lg:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-5 rounded-full bg-white transition-transform duration-300",
                mobileOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 rounded-full bg-white transition-opacity duration-200",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 rounded-full bg-white transition-transform duration-300",
                mobileOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-platinum bg-white transition-[max-height] duration-300 ease-out lg:hidden",
          mobileOpen ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <div className="container py-4">
          <nav className="flex flex-col">
            {NAV.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  handleNavClick(e, link.href);
                }}
                className="border-b border-platinum py-3 text-[16px] font-medium text-dark-gunmetal"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4">
              <Button href="#contact" className="w-full justify-between">
                Schedule a Visit
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
