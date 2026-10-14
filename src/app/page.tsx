import Link from "next/link";
import { TypeScript, React } from "developer-icons";
import { LuArrowUpRight, LuBriefcase, LuMapPin, LuUserRound } from "react-icons/lu";
import { SiClaude, SiRemix, SiShopify } from "react-icons/si";
import { Hydrogen } from "@/components/icons/hydrogen";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteHeader } from "@/components/site-header";
import { CopyEmailButton } from "@/components/copy-email-button";
import { PointerGlow } from "@/components/pointer-glow";
import { Portrait } from "@/components/portrait";
import { BioToggle } from "@/components/bio-toggle";
import { currently, linkedinUrl } from "@/lib/site";
import { requestEmail } from "@/lib/request";

// Simple Icons marks fill their viewbox edge to edge, while developer-icons
// glyphs carry padding, so they get a smaller size to match optically.
const stack = [
  { name: "TypeScript", Icon: TypeScript },
  { name: "React", Icon: React },
  { name: "Shopify", Icon: SiShopify, color: "#95bf47", size: 30 },
  { name: "Remix", Icon: SiRemix, size: 23 }, // currentColor: follows the theme
  { name: "Shopify Hydrogen", Icon: Hydrogen, color: "currentColor", size: 34 },
  { name: "Claude", Icon: SiClaude, color: "#d97757", size: 27 },
];

// Add a short `blurb` to any entry to show what the work was, e.g.
// { name: "Acme", href: "...", blurb: "Hydrogen storefront" }.
const work: { name: string; href: string; blurb?: string }[] = [
  { name: "Timothy London", href: "https://timothy.london" },
  { name: "Alfa Systems", href: "https://www.alfasystems.com" },
  { name: "Fairr", href: "https://www.fairr.org" },
  { name: "US SIF", href: "https://www.ussif.org" },
];

const social = [
  { name: "LinkedIn", href: linkedinUrl, Icon: LuUserRound },
];

const sectionLabel =
  "mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-foreground/50";

const focusRing =
  "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const navItem = `${focusRing} text-foreground/60 transition-colors hover:text-brand focus-visible:text-brand`;

export default async function Home() {
  const email = await requestEmail();
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background py-20 text-foreground">
      <div aria-hidden="true" className="grain" />
      <div aria-hidden="true" className="vhs">
        <span className="vhs-band" />
        <span className="vhs-line" />
        <span className="vhs-tear" />
        <span className="vhs-drop vhs-drop-a" />
        <span className="vhs-drop vhs-drop-b" />
        <span className="vhs-drop vhs-drop-c" />
      </div>
      <div aria-hidden="true" className="crt-mask" />
      <div aria-hidden="true" className="crt-bezel" />
      <div aria-hidden="true" className="crt-on" />
      <PointerGlow />

      <SiteHeader>
        <ThemeToggle className={navItem} />
        {social.map(({ name, href, Icon }) => (
          <a
            key={name}
            className={navItem}
            href={href}
            aria-label={name}
            title={href.replace("https://", "")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="size-[22px] md:size-6" />
          </a>
        ))}
        <CopyEmailButton email={email} className={navItem} />
      </SiteHeader>

      <Portrait />

      <h1
        className="glitch relative z-[1] my-4 text-[32px] font-bold tracking-tight md:text-[48px]"
        data-glitch="Jev"
      >
        Jev
      </h1>

      <div className="relative flex flex-col items-center gap-3 px-10">
        <BioToggle title="Full Stack Web Developer" />
        <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm text-foreground/60">
          <span className="inline-flex items-center gap-1.5">
            <LuMapPin className="size-3.5 text-foreground/40" aria-hidden="true" />
            Brighton, UK
          </span>
          <span aria-hidden="true" className="text-foreground/25">·</span>
          <span className="inline-flex items-center gap-1.5">
            <LuBriefcase className="size-3.5 text-foreground/40" aria-hidden="true" />
            15+ years of commercial experience
          </span>
        </p>
        {currently && (
          <p className="mt-1 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs text-foreground/80">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
            {currently}
          </p>
        )}
      </div>

      <section className="relative mt-12">
        <h2 className={sectionLabel}>Current Stack</h2>
        <ul className="flex flex-wrap justify-center gap-6">
          {stack.map(({ name, Icon, color, size = 30 }) => (
            <li
              key={name}
              className="stack-item relative flex size-[30px] items-center justify-center text-foreground"
            >
              <Icon size={size} color={color} aria-label={name} role="img" />
              <span
                aria-hidden="true"
                className="stack-tip pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2"
              >
                <span className="tip-in tip-in-center block whitespace-nowrap rounded-md border border-foreground/10 bg-background/95 px-2.5 py-1 text-xs text-foreground shadow-lg backdrop-blur">
                  {name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mt-12">
        <h2 className={sectionLabel}>Past Work</h2>
        <ul className="work-list flex flex-col text-center text-foreground/70 max-md:divide-y max-md:text-[14px] md:flex-row md:divide-x divide-solid divide-foreground/15">
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
