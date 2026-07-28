# Habits Pioneer — Landing page

Marketing landing for the Habits Pioneer app, built with **Astro** (static, zero-runtime).
Trilingual (ES / EN / PT) with per-locale routes + `hreflang`, fully responsive, and
Lighthouse **100 / 100 / 100 / 100** (Performance · Accessibility · Best-Practices · SEO) on mobile.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve the built dist/
```

## Structure

- `src/pages/{index,en/index,pt/index}.astro` — one route per language (ES at `/`, EN at `/en`, PT at `/pt`).
- `src/components/Landing.astro` — the whole page (all sections + scoped styles).
- `src/data/strings.ts` — all copy for the 3 locales (rioplatense voseo in ES).
- `src/styles/tokens.css` — design tokens from the handoff (+ WCAG-AA color adjustments).
- `src/scripts/steps.ts` — the scroll-driven "six steps" path + reveal-on-scroll (respects `prefers-reduced-motion`).
- `public/screenshots/*.webp` — real app screenshots (light mode).
- `public/og/og-cover.png`, `favicon.svg`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest`, `robots.txt`.
- `scripts/convert-shots.mjs`, `scripts/gen-icons.mjs` — regenerate screenshots / icons / OG image with sharp.

## Before deploy — TODO

1. Set the real production domain in `astro.config.mjs` (`site`) and in `public/robots.txt`.
2. Replace the placeholder store URLs in `src/data/config.ts` (the Google id is real; the Apple id is a placeholder).
3. (Optional) swap the screenshots in `public/screenshots/` for final polished captures.

## Deploy

Static output — host `dist/` anywhere: **Vercel / Netlify / Cloudflare Pages / EAS Hosting**.
Most hosts auto-detect Astro; otherwise: build command `npm run build`, output dir `dist`.
