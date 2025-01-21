import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black/95 py-20">
      <Image
        className="mb-4 md:mb-8 rounded-full size-[200px] md:size-[300px]"
        src="/iriepixel.webp"
        alt="Jev"
        width={300}
        height={300}
        priority
      />

      <div className="glitch-wrapper">
        <h1
          className="relative z-[1] my-4 text-[32px] md:text-[48px] font-bold glitch"
          data-glitch="Jev"
        >
          Jev
        </h1>
      </div>

      <div className="flex flex-col items-center gap-1 mb-6 text-white/70 max-md:text-[14px]">
        <p className="">Contract Web Developer & Frontend Engineer</p>
        <p className="">JavaScript, React, Vue, Next, Nuxt</p>
        <p className="">Brighton | London | Remote</p>
      </div>

      <a
        className="underline"
        href="mailto:jev@iriepixel.com"
      >
        Get in touch
      </a>

      <div className="mt-10">
      <h2 className="text-center mb-4 text-white/25 text-[14px]">Recent Work</h2>
      <div
        className="flex flex-col md:flex-row max-md:divide-y md:divide-x divide-solid divide-white/10 max-md:text-[14px] text-center text-white/70"
      >
        <Link
          className="max-md:py-2 md:px-4 hover:underline"
          href="https://timothy.london"
          target="_blank"
        >
          Timothy London
        </Link>
        <Link
          className="max-md:py-2 md:px-4 hover:underline"
          href="https://www.alfasystems.com"
          target="_blank"
        >
          Alfa Systems
        </Link>
        <Link
          className="max-md:py-2 md:px-4 hover:underline"
          href="https://www.fairr.org"
          target="_blank"
        >
          Fairr
        </Link>
        <Link
          className="max-md:py-2 md:px-4 hover:underline"
          href="https://www.ussif.org"
          target="_blank"
        >
          US SIF
        </Link>
        <Link
          className="max-md:py-2 md:px-4 hover:underline"
          href="https://investors.pod-point.com/"
          target="_blank"
        >
          Pod Point
        </Link>
      </div>
    </div>
    </div>
  );
}
