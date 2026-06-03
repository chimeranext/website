# ChimeraNext — Landing

Marketing landing for **ChimeraNext Shared Services LLC** — a showcase-first
venture-studio single page. Astro (static-first, near-zero JS) + Tailwind CSS
(Chimera design tokens) + Headless UI React islands (`client:visible`) for the
mobile nav and the Cal.com booking dialog.

## Develop

```bash
npm install        # first time
npm run dev        # dev server at http://localhost:4321
npm run build      # static build → dist/
npm run preview    # serve the built dist/ at http://localhost:4321
```

## Test

```bash
npm run test       # vitest (design tokens + venture data)
npm run check      # astro type-check (needs @astrojs/check + typescript)
npm run test:e2e   # playwright island smokes (mobile nav + booking dialog)
```

> This environment blocks headless Playwright via a policy hook and has
> `DISPLAY=:0`, so run the e2e smokes headed: `npx playwright test --headed`.

## Editing content

All copy lives in typed data files under `src/data/` — edit these, not the
`.astro` section components:

- `src/data/ventures.ts` — the 4 ventures (name, industries, market, UVP,
  purpose, `builtOn` microservice pills, `domain`). Drives Hero, Portfolio,
  and Footer.
- `src/data/microservices.ts` — the 8 better-microservices (slug + blurb).
  Drives the Stack section.
- `src/data/sharedServices.ts` — the studio's hire-teams offerings.

Section components (`src/components/*.astro`) and the islands
(`src/components/islands/*.tsx`) consume this data and are assembled in
`src/pages/index.astro`.

## Deploy-time TODOs

These are real owner inputs deliberately left as placeholders so the build
stays green. Resolve before shipping:

- **Cal.com handle** — replace `CAL_URL` (`https://cal.com/chimeranext/intro`)
  in `src/components/islands/BookingDialog.tsx` with the confirmed handle.
- **Venture domains + pill mapping** — confirm each venture's `domain` and the
  `builtOn` microservice mapping (and which pills are `confirmed`) in
  `src/data/ventures.ts`.
- **Final hero headline** — confirm the headline/subhead copy in
  `src/components/Hero.astro` (and the matching SEO title/description defaults
  in `src/layouts/Layout.astro`).
- **Host** — choose a static host (e.g. Netlify / Vercel / Cloudflare Pages /
  GitHub Pages) and wire up the deploy. `site` is set to
  `https://chimeranext.com` in `astro.config.mjs`.
- **EN/ES** — decide on internationalization (currently English only); add an
  Astro i18n setup + Spanish copy if a bilingual site is wanted.
- **OG image format** — export `og-image.svg` → `og-image.png` (many social
  scrapers don't render SVG OG images) and point the `og:image` meta at the PNG.
