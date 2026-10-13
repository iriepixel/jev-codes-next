"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Yellow duotone portrait. Hover (or tap on touch) reveals a black-and-white
 * version. To show a real colour photo instead, add it to /public and swap the
 * grayscale filter for a second <Image> crossfade.
 */
export function Portrait() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="group relative mb-4 cursor-pointer md:mb-8"
      onClick={() => setRevealed((v) => !v)}
      title="Tap to toggle"
    >
      <Image
        className={`portrait size-[200px] rounded-full ring-1 ring-brand/40 transition-[filter] duration-500 group-hover:grayscale md:size-[300px] ${
          revealed ? "grayscale" : ""
        }`}
        src="/iriepixel.webp"
        alt="Portrait of Jev"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
