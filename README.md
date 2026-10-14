# jev.codes

Personal site for Jev, Full Stack Web Developer in Brighton, UK.

Single page built with Next.js (App Router), React 19, TypeScript and Tailwind CSS 3. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `src/lib/site.ts` – URLs, the "currently" line, and `emailByDomain` (contact email per domain: jev.codes, iriepixel.com, smolnikov.me). Edit here first.
- `src/lib/request.ts` – server helpers that read the request host (origin for metadata, email for the domain).
- `src/app/page.tsx` – the page. Edit the `stack` and `work` arrays to change content.
- `src/app/layout.tsx` – fonts, metadata, Open Graph/Twitter tags, JSON-LD.
- `src/app/opengraph-image.tsx` / `apple-icon.tsx` – generated share image and iOS icon.
- `src/app/not-found.tsx` – 404 page.
- `src/components/theme-provider.tsx` / `theme-toggle.tsx` – light/dark switch (next-themes, dark by default, remembered in localStorage; animated circular wipe where View Transitions are supported).
- `src/components/portrait.tsx` – portrait; each click rotates the duotone hue (6 steps back to yellow). `bio-toggle.tsx` – the role line expands a short bio (text in `site.ts`). `pointer-glow.tsx` – glow that drifts toward the cursor.
- `src/components/copy-email-button.tsx` – the paper plane is a mailto: link; on touch devices it opens the mail app, on desktop the click copies the address and a tooltip confirms under the icon.
- `src/components/shortcuts.tsx` – keyboard shortcuts: `t` theme, `c` copy email, `?` help.
- `src/components/console-hello.tsx` – message in the browser console.
- `src/app/icon.svg` + `icon.tsx` – favicon: black rounded square with a yellow J (SVG, plus a generated PNG for Safari).
- Analytics: `@vercel/analytics` (no-op outside Vercel).
- `src/components/icons/hydrogen.tsx` – inline Shopify Hydrogen mark (no icon library has one).
- `src/styles/globals.css` – colour tokens (`--background`, `--foreground`, `--brand`; light on `:root`, dark under `.dark`), the screen-effect tokens (`--ink` and the `*-alpha` strengths, tuned per theme), the glitch on the heading and portrait, and the fixed overlay layers: film grain, VHS (scanlines, vignette, rolling band, sweep line, tracking tear) and CRT (phosphor grille, tube bezel, power-on sweep). Every animation is gated behind `prefers-reduced-motion`, and the overlays are hidden in print.
- `public/iriepixel.webp` / `src/app/portrait.png` – portrait for the page and for generated images.
