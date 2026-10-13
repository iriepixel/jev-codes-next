import Image from "next/image";
import Link from "next/link";
import { JavaScript, TypeScript, React } from "developer-icons";
import { LuSend, LuArrowUpRight, LuUserRound } from "react-icons/lu";
import { SiRemix, SiShopify } from "react-icons/si";
import { Hydrogen } from "@/components/icons/hydrogen";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteHeader } from "@/components/site-header";

// Simple Icons marks fill their viewbox edge to edge, while developer-icons
// glyphs carry padding, so they get a smaller size to match optically.
const stack = [
  { name: "JavaScript", Icon: JavaScript },
  { name: "TypeScript", Icon: TypeScript },
  { name: "React", Icon: React },
  { name: "Shopify", Icon: SiShopify, color: "#95bf47", size: 30 },
  { name: "Remix", Icon: SiRemix, size: 23 }, // currentColor: follows the theme
  { name: "Shopify Hydrogen", Icon: Hydrogen, color: "currentColor", size: 34 },
];

// Add a short `blurb` to any entry to show what the work was, e.g.
// { name: "Acme", href: "...", blurb: "Hydrogen storefront" }.
const work: { name: string; href: string; blurb?: string }[] = [
  { name: "Timothy London", href: "https://timothy.london" },
  { name: "Alfa Systems", href: "https://www.alfasystems.com" },
  { name: "Fairr", href: "https://www.fairr.org" },
  { name: "US SIF", href: "https://www.ussif.org" },
];

const linkedinUrl = "https://www.linkedin.com/in/iriepixel/";

const social = [
  { name: "LinkedIn", href: linkedinUrl, Icon: LuUserRound, external: true },
  { name: "Email Jev", href: "mailto:hi@jev.codes", Icon: LuSend, external: false },
];

const sectionLabel =
  "mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-foreground/50";

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background py-20 text-foreground">

      {/* Soft brand glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[22%] -z-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.brand/0.08),transparent)] md:top-[30%] md:size-[760px]"
      />

      <SiteHeader>
        <ThemeToggle
          className={`${focusRing} text-foreground/60 transition-colors hover:text-brand focus-visible:text-brand`}
        />
        {social.map(({ name, href, Icon, external }) => (
          <a
            key={name}
            className={`${focusRing} text-foreground/60 transition-colors hover:text-brand focus-visible:text-brand`}
            href={href}
            aria-label={name}
            title={external ? href.replace("https://", "") : href.replace("mailto:", "")}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon className="size-[22px] md:size-6" />
          </a>
        ))}
      </SiteHeader>

      <Image
        className="relative mb-4 size-[200px] rounded-full ring-1 ring-brand/40 md:mb-8 md:size-[300px]"
        src="/iriepixel.webp"
        alt="Portrait of Jev"
        width={300}
        height={300}
        priority
      />

      <h1
        className="glitch relative z-[1] my-4 text-[32px] font-bold tracking-tight md:text-[48px]"
        data-glitch="Jev"
      >
        Jev
      </h1>

      <div className="relative flex flex-col items-center gap-1 px-10">
        <p className="text-center text-lg lg:text-[20px]">Full Stack Web Developer</p>
        <p className="text-center text-foreground/60">Brighton, UK</p>
        <p className="mt-1 text-center text-sm text-foreground/50">10+ years of commercial experience</p>
      </div>

      <section className="relative mt-12">
        <h2 className={sectionLabel}>Current Stack</h2>
        <ul className="flex flex-wrap justify-center gap-6">
          {stack.map(({ name, Icon, color, size = 30 }) => (
            <li
              key={name}
              title={name}
              className="flex size-[30px] items-center justify-center text-foreground"
            >
              <Icon size={size} color={color} aria-label={name} role="img" />
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mt-12">
        <h2 className={sectionLabel}>Recent Work</h2>
        <ul className="flex flex-col text-center text-foreground/70 max-md:divide-y max-md:text-[14px] md:flex-row md:divide-x divide-solid divide-foreground/15">
          {work.map(({ name, href, blurb }) => (
            <li key={name} className="flex justify-center max-md:py-2 md:px-4">
              <Link
                className={`${focusRing} group flex flex-col items-center transition-colors hover:text-brand focus-visible:text-brand`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-1">
                  {name}
                  <LuArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="opacity-40 transition-opacity group-hover:opacity-100 touch:opacity-100"
                  />
                </span>
                {blurb && <span className="text-xs text-foreground/40">{blurb}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
