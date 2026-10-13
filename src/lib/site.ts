/** Single place for the content that changes most often. */
export const siteUrl = "https://jev.codes";
/** Default contact email, used when the host is not in `emailByDomain`. */
export const email = "hi@jev.codes";

/** Contact email per domain the site is served on. Subdomains and www. match too. */
export const emailByDomain: Record<string, string> = {
  "jev.codes": "hi@jev.codes",
  "iriepixel.com": "jev@iriepixel.com",
  "smolnikov.me": "jev@smolnikov.me",
};

export function emailForHost(host: string | null | undefined) {
  if (!host) return email;
  const h = host.toLowerCase().replace(/:\d+$/, "");
  for (const [domain, address] of Object.entries(emailByDomain)) {
    if (h === domain || h.endsWith(`.${domain}`)) return address;
  }
  return email;
}
export const linkedinUrl = "https://www.linkedin.com/in/iriepixel/";
export const githubUrl = "https://github.com/iriepixel";

/** One line under the experience line. Leave empty to hide. */
export const currently = "Currently building Shopify Hydrogen storefronts";
