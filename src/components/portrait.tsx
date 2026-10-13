"use client";

import Image from "next/image";
import { useState } from "react";

const STEPS = 6; // 360° / 6 = yellow, green, cyan, blue, magenta, red, back to yellow

/** Yellow duotone portrait. Every click (or tap) rotates the duotone to the next hue. */
export function Portrait() {
  const [step, setStep] = useState(0);

  return (
    <button
      type="button"
      className="group relative mb-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background md:mb-8"
      onClick={() => setStep((s) => (s + 1) % STEPS)}
      aria-label="Change portrait colour"
      title="Click to change colour"
    >
      <Image
        className="portrait size-[200px] rounded-full ring-1 ring-brand/40 transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-active:scale-[0.98] md:size-[300px]"
        style={{ filter: `hue-rotate(${(step * 360) / STEPS}deg)` }}
        src="/iriepixel.webp"
        alt="Portrait of Jev"
        width={300}
        height={300}
        priority
      />
    </button>
  );
}
