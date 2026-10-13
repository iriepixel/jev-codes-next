/**
 * Fetches a Google Font as TTF for next/og image generation. Returns
 * undefined on any failure so image routes fall back to the default font
 * instead of failing the build.
 */
export async function loadGoogleFont(family: string, weight: number) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`;
    const css = await (await fetch(url)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return undefined;
    const res = await fetch(match[1]);
    if (!res.ok) return undefined;
    return await res.arrayBuffer();
  } catch {
    return undefined;
  }
}
