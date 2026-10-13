import { headers } from "next/headers";
import { emailForHost, siteUrl } from "./site";

/** Server-only helpers that read the incoming request (do not import from client components). */

export async function requestHost() {
  const h = await headers();
  return h.get("x-forwarded-host") ?? h.get("host");
}

/**
 * Origin the page was requested on (localhost in dev, a Vercel preview URL,
 * or one of the production domains), falling back to the primary site URL.
 */
export async function requestOrigin() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) return siteUrl;
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

/** Contact email matching the domain the site was served from. */
export async function requestEmail() {
  return emailForHost(await requestHost());
}
