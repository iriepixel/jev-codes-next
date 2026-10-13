"use client";

import { useId, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { bio } from "@/lib/site";

/** A hairline that fades out toward both ends. */
const rule = "block h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent";

/** The role line; clicking it expands a short bio underneath, accordion style. */
export function BioToggle({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="group inline-flex items-center gap-1.5 rounded text-center text-lg transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-[20px]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {title}
        <LuChevronDown
          aria-hidden="true"
          className={`size-4 translate-y-[2px] text-foreground/40 transition-transform duration-300 group-hover:text-brand ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* grid-rows 0fr -> 1fr animates height without knowing it */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          open ? "my-4 grid-rows-[1fr] opacity-100 md:my-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex max-w-lg flex-col items-center">
            <span aria-hidden="true" className={rule} />
            <p className="px-2 py-4 text-center text-sm leading-7 text-foreground/70">{bio}</p>
            <span aria-hidden="true" className={rule} />
          </div>
        </div>
      </div>
    </div>
  );
}
