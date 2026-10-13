import Image from "next/image";
import Link from "next/link";
import { JavaScript, TypeScript, React } from "developer-icons";
import { LuSend, LuArrowUpRight } from "react-icons/lu";
import { SiRemix, SiShopify } from "react-icons/si";
import { Hydrogen } from "@/components/icons/hydrogen";

// Simple Icons marks fill their viewbox edge to edge, while developer-icons
// glyphs carry padding, so they get a smaller size to match optically.
const stack = [
  { name: "JavaScript", Icon: JavaScript },
  { name: "TypeScript", Icon: TypeScript },
  { name: "React", Icon: React },
  { name: "Shopify", Icon: SiShopify, color: "#95bf47", size: 30 },
  { name: "Remix", Icon: SiRemix, color: "#ffffff", size: 23 },
  { name: "Shopify Hydrogen", Icon: Hydrogen, size: 34 },
];

const work = [
  { name: "Timothy London", href: "https://timothy.london" },
  { name: "Alfa Systems", href: "https://www.alfasystems.com" },
  { name: "Fairr", href: "https://www.fairr.org" },
  { name: "US SIF", href: "https://www.ussif.org" },
];

const sectionLabel = "mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/50";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background py-20 text-white">

      {/* Soft brand glow behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[22%] -z-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.brand/0.08),transparent)] md:top-[30%] md:size-[760px]"
      />

      <a
        className="fixed right-8 top-6 z-10 text-white/60 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none"
        href="mailto:hi@jev.codes"
        aria-label="Email Jev"
        title="hi@jev.codes"
      >
        <LuSend size={24} />
      </a>

      <Image
        className="relative mb-4 size-[200px] rounded-full ring-1 ring-brand/40 md:mb-8 md:size-[300px]"
        src="/iriepixel.webp"
        alt="Jev"
        width={300}
        height={300}
        priority
      />

      <div className="glitch-wrapper relative">
        <h1
          className="glitch relative z-[1] my-4 text-[32px] font-bold tracking-tight md:text-[48px]"
          data-glitch="Jev"
        >
          Jev
        </h1>
      </div>

      <div className="relative flex flex-col items-center gap-1 px-10">
        <p className="text-center text-lg lg:text-[20px]">Full Stack Web Developer</p>
        <p className="text-center text-white/60">Brighton, UK</p>
      </div>

      <section className="relative mt-12">
        <h2 className={sectionLabel}>Current Stack</h2>
        <ul className="flex flex-wrap justify-center gap-6">
          {stack.map(({ name, Icon, color, size = 30 }) => (
            <li
              key={name}
              title={name}
              className="flex size-[30px] items-center justify-center opacity-60 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0"
            >
              <Icon size={size} color={color} aria-label={name} role="img" />
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mt-12">
        <h2 className={sectionLabel}>Recent Work</h2>
        <ul className="flex flex-col text-center text-white/70 max-md:divide-y max-md:text-[14px] md:flex-row md:divide-x divide-solid divide-white/15">
          {work.map(({ name, href }) => (
            <li key={name}>
              <Link
                className="group inline-flex items-center gap-1 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none max-md:py-2 md:px-4"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
                <LuArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="opacity-40 transition-opacity group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
