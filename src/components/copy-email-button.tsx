"use client";

import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu";
import { copyEmail, TOAST_EVENT } from "@/lib/copy-email";

/**
 * Paper-plane button that copies the email address. A small tooltip appears
 * under the icon for a moment after copying (also when triggered via the
 * `c` shortcut, which fires the same event).
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

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        className={className}
        aria-label={`Copy email address ${email}`}
        title={`Copy ${email}`}
        onClick={() => void copyEmail(email)}
      >
        <LuSend className="size-[22px] md:size-6" aria-hidden="true" />
      </button>
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
