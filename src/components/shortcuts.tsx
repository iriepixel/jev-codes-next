"use client";

import { useEffect, useState } from "react";
import { copyEmail } from "@/lib/copy-email";

const keys = [
  ["t", "Toggle theme"],
  ["c", "Copy email address"],
  ["?", "Show this help"],
  ["Esc", "Close"],
];

export function Shortcuts({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;

      switch (e.key) {
        case "t":
          document.querySelector<HTMLButtonElement>("[data-theme-toggle]")?.click();
          break;
        case "c":
          void copyEmail(email);
          break;
        case "?":
          setOpen((v) => !v);
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [email]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Keyboard shortcuts"
      className="fixed inset-x-0 bottom-6 z-20 flex justify-center px-4"
      onClick={() => setOpen(false)}
    >
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-xl border border-foreground/10 bg-background/90 px-5 py-4 text-sm shadow-lg backdrop-blur">
        {keys.map(([k, label]) => (
          <div key={k} className="contents">
            <dt>
              <kbd className="rounded border border-foreground/20 px-1.5 py-0.5 font-mono text-xs text-foreground/80">{k}</kbd>
            </dt>
            <dd className="text-foreground/70">{label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
