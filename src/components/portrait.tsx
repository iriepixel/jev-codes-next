"use client";

import Image from "next/image";
import { useState } from "react";

const STEPS = 6; // 360° / 6 = yellow, green, cyan, blue, magenta, red, back to yellow

/**
 * Yellow duotone portrait. Every click (or tap) rotates the duotone to the
 * next hue. Three hue-shifted copies sit on top, invisible at rest, and
 * glitch in sliced bursts on staggered clocks so it looks random (globals.css).
 */
export function Portrait() {
  const [step, setStep] = useState(0);
  const hue = (step * 360) / STEPS;

  const copy = (variant: "a" | "b" | "c", offset: number) => (
    <Image
      key={variant}
      aria-hidden="true"
      className={`portrait-glitch portrait-glitch-${variant} absolute inset-0 size-full transition-[filter] duration-500`}
      style={{ filter: `hue-rotate(${hue + offset}deg) saturate(1.6)` }}
      src="/iriepixel.webp"
      alt=""
      width={300}
      height={300}
    />
  );

  return (
    <button
      type="button"
      className="group relative mb-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background md:mb-8"
      onClick={() => setStep((s) => (s + 1) % STEPS)}
      aria-label="Change portrait colour"
      title="Click to change colour"
    >
      <span className="portrait relative block size-[200px] overflow-hidden rounded-full ring-1 ring-brand/40 transition-transform duration-500 group-hover:scale-[1.02] group-active:scale-[0.98] md:size-[300px]">
        <Image
          className="portrait-base size-full transition-[filter] duration-500"
          style={{ filter: `hue-rotate(${hue}deg)` }}
          src="/iriepixel.webp"
          alt="Portrait of Jev"
          width={300}
          height={300}
          priority
        />
        {copy("a", 70)}
        {copy("b", -70)}
        {copy("c", 150)}
      </span>
    </button>
  );
}
