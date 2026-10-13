"use client";

import { useEffect, useState } from "react";

/**
 * Fixed top bar. Transparent at the top of the page; once the visitor scrolls
 * it gains a translucent, blurred background so content doesn't collide with
 * the icons.
 */
export function SiteHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      aria-label="Contact"
      className={`fixed inset-x-0 top-0 z-10 flex items-center justify-end gap-5 px-6 py-5 transition-[background-color,backdrop-filter] duration-300 md:px-8 md:py-6 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {children}
    </nav>
  );
}
