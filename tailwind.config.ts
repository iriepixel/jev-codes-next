import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    // `touch:` applies on devices with no hover (phones, tablets), where
    // hover-only reveals would otherwise never show.
    plugin(({ addVariant }) => addVariant("touch", "@media (hover: none)")),
  ],
} satisfies Config;
