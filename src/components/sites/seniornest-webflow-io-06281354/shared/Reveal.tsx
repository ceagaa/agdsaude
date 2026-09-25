"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Base = 60px travel, sm = 40px travel (see globals.css) */
  variant?: "base" | "sm";
  /** Stagger in ms, applied as transition-delay */
  delay?: number;
  /** One-shot (true) or re-arm when leaving the viewport (false) */
  once?: boolean;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-reveal wrapper emulating the source site's Webflow IX2
 * `opacity:0 -> 1 + translateY` entrance animations.
 */
export function Reveal({
  children,
  variant = "base",
  delay = 0,
  once = true,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setVisible(true);
          else if (!once) setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(
        variant === "sm" ? "reveal-sm" : "reveal",
        visible && "is-visible",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
