"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

/**
 * Sun/moon toggle. Both icons are rendered and one is hidden with the `dark:`
 * variant, so the server and client markup match and nothing flashes on load.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className={className}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <LuSun className="hidden size-[22px] dark:block md:size-6" aria-hidden="true" />
      <LuMoon className="size-[22px] dark:hidden md:size-6" aria-hidden="true" />
    </button>
  );
}
