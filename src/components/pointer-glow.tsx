"use client";

import { useEffect, useRef } from "react";

/** The soft brand glow behind the portrait; drifts a little toward the pointer. */
export function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const dx = (e.clientX - innerWidth / 2) * 0.04;
        const dy = (e.clientY - innerHeight / 2) * 0.04;
        el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-print-hide
      className="pointer-events-none absolute left-1/2 top-[22%] -z-0 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.brand/0.08),transparent)] transition-transform duration-700 ease-out md:top-[30%] md:size-[760px]"
    />
  );
}
