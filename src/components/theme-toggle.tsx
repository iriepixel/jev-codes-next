"use client";

import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

/**
 * Sun/moon toggle. Both icons are rendered and one is hidden with the `dark:`
 * variant, so the server and client markup match and nothing flashes on load.
 * Where the View Transitions API exists (and motion isn't reduced) the switch
 * is animated as a circle growing out of the button; see globals.css.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const doc = document as DocumentWithVT;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;
    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);
    root.style.setProperty("--vt-r", `${r}px`);

    doc.startViewTransition(() => flushSync(() => setTheme(next)));
  };

  return (
    <button
      type="button"
      data-theme-toggle
      className={className}
      aria-label="Toggle light and dark theme"
      title="Toggle theme (t)"
      onClick={toggle}
    >
      <LuSun className="hidden size-[22px] dark:block md:size-6" aria-hidden="true" />
      <LuMoon className="size-[22px] dark:hidden md:size-6" aria-hidden="true" />
    </button>
  );
}
