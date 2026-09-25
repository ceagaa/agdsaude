import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function scrollToHash(hash: string): boolean {
  if (typeof document === "undefined" || !hash.startsWith("#")) return false
  const target = document.querySelector(hash)
  if (!(target instanceof HTMLElement)) return false
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  })
  window.history.replaceState(null, "", hash)
  return true
}

