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
- `src/components/portrait.tsx` – portrait with hover/tap reveal. `pointer-glow.tsx` – glow that drifts toward the cursor.
- `src/components/copy-email-button.tsx` – click the paper plane to copy the email; a tooltip confirms under the icon (falls back to mailto).
- `src/components/shortcuts.tsx` – keyboard shortcuts: `t` theme, `c` copy email, `?` help.
- `src/components/console-hello.tsx` – message in the browser console.
- `src/app/icon.svg` – favicon that follows the OS colour scheme. Film grain and print styles live in `globals.css`.
- Analytics: `@vercel/analytics` (no-op outside Vercel).
- `src/components/icons/hydrogen.tsx` – inline Shopify Hydrogen mark (no icon library has one).
- `src/styles/globals.css` – colour tokens (`--background`, `--foreground`, `--brand`; light on `:root`, dark under `.dark`) and the glitch heading effect.
- `public/iriepixel.webp` / `src/app/portrait.png` – portrait for the page and for generated images.
