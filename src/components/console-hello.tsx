"use client";

import { useEffect } from "react";
import { githubUrl } from "@/lib/site";

export function ConsoleHello({ email }: { email: string }) {
  useEffect(() => {
    console.log(
      "%cHi, fellow developer 👋%c\n\nCurious how this is built? Source: %s\nWant to work together? %s\nTip: press ? for keyboard shortcuts.",
      "color:#f2c128;font-weight:700;font-size:16px",
      "color:inherit;font-weight:400;font-size:12px",
      githubUrl + "/jev-codes-next",
      email,
    );
  }, [email]);
  return null;
}
