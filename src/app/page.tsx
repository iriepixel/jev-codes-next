import Image from "next/image";
import Link from "next/link";
import { JavaScript, TypeScript, React, NextJs, VueJs, NuxtJs, TailwindCSS, Sass } from "developer-icons";
import { LuSend } from "react-icons/lu";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black/95 py-20">

      <a
        className="fixed top-6 right-8 text-white/80 hover:text-white/50 transition-colors"
        href="mailto:dev@jev.codes"
      >
        <LuSend size={24} />
      </a>

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


      <div className="flex flex-col items-center gap-2 px-10">
        <p className="text-center lg:text-[20px]">Frontend Engineer & Web Developer</p>
        <p className="text-center text-white/70">based in Brighton, UK</p>
      </div>

      <div className="mt-10">
        <h2 className="text-center mb-4 text-white/30 text-[14px]">Stack</h2>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            <JavaScript size={24} />
            <TypeScript size={24} />
            <React size={24} />
            <VueJs size={24} />
            <NextJs size={24} />
            <NuxtJs size={24} />
            <TailwindCSS size={24} />
            <Sass size={24} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-center mb-4 text-white/30 text-[14px]">Recent Work</h2>
        <div className="flex flex-col md:flex-row max-md:divide-y md:divide-x divide-solid divide-white/10 max-md:text-[14px] text-center text-white/70">
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
