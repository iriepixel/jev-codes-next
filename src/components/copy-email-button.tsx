"use client";

import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu";
import { copyEmail, TOAST_EVENT } from "@/lib/copy-email";

/**
 * Paper-plane email link. It is a real mailto: link, so on phones and tablets
 * (no hover) it opens the mail app. On devices with a pointer the click is
 * intercepted and the address is copied instead, with a tooltip under the icon
 * (also shown when triggered via the `c` shortcut, which fires the same event).
 */
export function CopyEmailButton({ email, className = "" }: { email: string; className?: string }) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onCopied = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2000);
    };
    window.addEventListener(TOAST_EVENT, onCopied);
    return () => {
      window.removeEventListener(TOAST_EVENT, onCopied);
      clearTimeout(timer);
    };
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const touch = window.matchMedia("(hover: none)").matches;
    if (touch) return; // let the mailto: link open the mail app
    e.preventDefault();
    void copyEmail(email);
  };

  return (
    <span className="relative inline-flex">
      <a
        href={`mailto:${email}`}
        className={className}
        aria-label={`Email ${email}`}
        title={email}
        onClick={onClick}
      >
        <LuSend className="size-[22px] md:size-6" aria-hidden="true" />
      </a>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute right-0 top-full mt-4 whitespace-nowrap rounded-md border border-foreground/10 bg-background/95 px-2.5 py-1 text-xs text-foreground shadow-lg backdrop-blur transition-[opacity,transform] duration-200 ${
          message ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        {message}
      </span>
    </span>
  );
}
