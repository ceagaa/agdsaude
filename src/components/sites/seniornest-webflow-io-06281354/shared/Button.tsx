"use client";

import { cn, scrollToHash } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";
import { ASSETS } from "./assets";

type CommonProps = {
  children: ReactNode;
  className?: string;
  arrowSrc?: string;
  ariaLabel?: string;
};

/**
 * Primary CTA with the source site's text-swap hover:
 * the visible label slides up out of view while a duplicate
 * slides in from below; the white arrow chip nudges on hover.
 */
function Inner({ children, arrowSrc }: { children: ReactNode; arrowSrc?: string }) {
  return (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      <span className="button-arrow transition-transform duration-300 ease-out group-hover:translate-x-1">
        <img
          src={arrowSrc ?? ASSETS.readArrow}
          alt=""
          className="h-5 w-5 object-contain"
        />
      </span>
    </>
  );
}

export function Button({
  children,
  className,
  arrowSrc,
  ariaLabel,
  href,
}: CommonProps & { href: string }) {
  const classes = cn("group button", className);

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        onClick={(event) => {
          if (scrollToHash(href)) event.preventDefault();
        }}
        className={classes}
      >
        <Inner arrowSrc={arrowSrc}>{children}</Inner>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      <Inner arrowSrc={arrowSrc}>{children}</Inner>
    </Link>
  );
}

export function ButtonSubmit({
  children,
  className,
  arrowSrc,
}: CommonProps) {
  return (
    <button type="submit" className={cn("group button", className)}>
      <Inner arrowSrc={arrowSrc}>{children}</Inner>
    </button>
  );
}
