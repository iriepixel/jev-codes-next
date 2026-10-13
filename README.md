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

- `src/app/page.tsx` – the page. Edit the `stack`, `work` and `social` arrays to change content.
- `src/app/layout.tsx` – fonts, metadata, Open Graph/Twitter tags, JSON-LD.
- `src/app/opengraph-image.tsx` / `apple-icon.tsx` – generated share image and iOS icon.
- `src/app/not-found.tsx` – 404 page.
- `src/components/theme-provider.tsx` / `theme-toggle.tsx` – light/dark switch (next-themes, class strategy, dark by default, remembered in localStorage).
- `src/components/icons/hydrogen.tsx` – inline Shopify Hydrogen mark (no icon library has one).
- `src/styles/globals.css` – colour tokens (`--background`, `--foreground`, `--brand`; light on `:root`, dark under `.dark`) and the glitch heading effect.
- `public/iriepixel.webp` / `src/app/portrait.png` – portrait for the page and for generated images.
