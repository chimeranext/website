# ChimeraNext Landing — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the ChimeraNext Shared Services LLC marketing landing — a showcase-first venture-studio single page in `chimeranext/website`.

**Architecture:** Astro static-first (near-zero JS); Tailwind v3 carries the "Chimera" design tokens; Headless UI (React) only in small Astro islands (`client:visible`) for the mobile nav and the Cal.com booking dialog. Content lives in typed `src/data/*.ts` files consumed by `.astro` section components assembled in `src/pages/index.astro`.

**Tech Stack:** Astro 5, Tailwind CSS 3 (`@astrojs/tailwind`), React 18 + `@astrojs/react`, Headless UI v2 (React), Sora/Inter/JetBrains Mono (`@fontsource`), Vitest (unit), Playwright (island smoke).

**Spec:** `docs/superpowers/specs/2026-06-03-chimeranext-landing-design.md`

---

## File Structure

```
chimeranext/website/
├── astro.config.mjs              # integrations: react, tailwind
├── tailwind.config.mjs           # Chimera tokens (colors, fonts, radius, spacing)
├── tsconfig.json · package.json
├── vitest.config.ts · playwright.config.ts
├── src/
│   ├── styles/global.css         # tailwind layers + base dark theme
│   ├── layouts/Layout.astro      # <html> shell, fonts, SEO/meta, dark bg
│   ├── data/
│   │   ├── ventures.ts           # 4 ventures (typed) + Venture type
│   │   ├── ventures.test.ts      # vitest
│   │   ├── microservices.ts      # 8 better-microservices
│   │   └── sharedServices.ts     # hire-teams offerings
│   ├── components/
│   │   ├── Nav.astro · Footer.astro
│   │   ├── Hero.astro · Portfolio.astro · PortfolioCard.astro
│   │   ├── Stack.astro · BuildOnStack.astro · SharedServices.astro
│   │   ├── HowWeWork.astro · Proof.astro · CtaBand.astro
│   │   └── islands/MobileNav.tsx · islands/BookingDialog.tsx
│   └── pages/index.astro         # assembles sections
├── e2e/smoke.spec.ts             # Playwright
└── public/                       # favicon, og-image
```

Each section is a focused `.astro` file consuming data; the only JS islands are `MobileNav` and `BookingDialog`.

---

## Task 1: Scaffold Astro + integrations + test tooling

**Files:** Create `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `playwright.config.ts`, `src/pages/index.astro`, `src/env.d.ts`.

- [ ] **Step 1: Init the Astro project (non-interactive)**

Run from `chimeranext/website/` (the dir + `.git` + `docs/` already exist):
```bash
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict --yes
```
Expected: creates `astro.config.mjs`, `package.json`, `tsconfig.json`, `src/pages/index.astro`. If it refuses on a non-empty dir, create the files manually per the steps below.

- [ ] **Step 2: Add integrations + deps**

```bash
npm install astro @astrojs/react @astrojs/tailwind tailwindcss@^3.4 react react-dom @types/react @types/react-dom @headlessui/react@^2 @fontsource/sora @fontsource/inter @fontsource/jetbrains-mono
npm install -D vitest @playwright/test
```

- [ ] **Step 3: Configure Astro integrations**

`astro.config.mjs`:
```js
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://chimeranext.com",
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
```

- [ ] **Step 4: Add scripts to package.json**

Ensure `"scripts"` contains:
```json
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "test": "vitest run",
  "test:e2e": "playwright test"
}
```

- [ ] **Step 5: Vitest + Playwright config**

`vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
export default defineConfig({ test: { include: ["src/**/*.test.ts"], environment: "node" } });
```
`playwright.config.ts`:
```ts
import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./e2e",
  webServer: { command: "npm run preview", url: "http://localhost:4321", reuseExistingServer: !process.env.CI },
  use: { baseURL: "http://localhost:4321" },
});
```

- [ ] **Step 6: Verify the project builds**

Run: `npm run build`
Expected: build succeeds, emits `dist/`.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "chore: scaffold Astro + React + Tailwind + test tooling"
```

---

## Task 2: Chimera design tokens (Tailwind theme) + test

**Files:** Create `tailwind.config.mjs`, `src/data/tokens.test.ts`.

- [ ] **Step 1: Write the failing token test**

`src/data/tokens.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import tw from "../../tailwind.config.mjs";

describe("Chimera design tokens", () => {
  const colors = (tw as any).theme.extend.colors;
  it("defines the four brand hues", () => {
    expect(colors.brand.primary).toBe("#7C5CFF");
    expect(colors.brand.secondary).toBe("#3B82F6");
    expect(colors.brand.tertiary).toBe("#22D3EE");
    expect(colors.brand.accent).toBe("#EC4899");
  });
  it("defines the violet-tinted surface ladder", () => {
    expect(colors.surface.background).toBe("#08060F");
    expect(colors.surface.card).toBe("#1C1830");
    expect(colors.surface.border).toBe("#2A2640");
  });
  it("defines status + text + fonts", () => {
    expect(colors.status.success).toBe("#34D399");
    expect(colors.text.primary).toBe("#ECE8F2");
    expect((tw as any).theme.extend.fontFamily.heading[0]).toBe("Sora");
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/data/tokens.test.ts`
Expected: FAIL — cannot import missing `tailwind.config.mjs`.

- [ ] **Step 3: Write the tokens (tailwind.config.mjs)**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: { primary: "#7C5CFF", secondary: "#3B82F6", tertiary: "#22D3EE", accent: "#EC4899" },
        violet: { 10:"#18063F",20:"#281060",30:"#3B2183",40:"#5036A6",50:"#654CCB",60:"#7C5CFF",70:"#9B82FF",80:"#BBABFF",90:"#DDD4FF",95:"#EFEBFF" },
        blue:   { 10:"#04183F",20:"#082A66",30:"#0E3D8C",40:"#1655B5",50:"#2A6CD8",60:"#3B82F6",70:"#6BA1F9",80:"#9DC1FB",90:"#CFE0FD",95:"#E9F1FE" },
        cyan:   { 10:"#03303A",20:"#064656",30:"#095E73",40:"#0D8298",50:"#15A8C5",60:"#22D3EE",70:"#5FE3F5",80:"#93EEF9",90:"#C8F7FC",95:"#E6FCFE" },
        magenta:{ 10:"#3A0723",20:"#570F39",30:"#761A50",40:"#9E246B",50:"#C33485",60:"#EC4899",70:"#F472B6",80:"#F9A8CE",90:"#FCD3E5",95:"#FEE9F2" },
        surface: { background:"#08060F", base:"#0C0A14", elevated:"#12101F", content:"#16131F", card:"#1C1830", border:"#2A2640" },
        text: { primary:"#ECE8F2", secondary:"#837C99", onPrimary:"#FFFFFF" },
        status: { success:"#34D399", warning:"#FBBF24", error:"#FB7185" },
      },
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: { sm:"6px", md:"8px", lg:"10px", xl:"12px" },
      backgroundImage: { "brand-gradient": "linear-gradient(90deg,#7C5CFF,#3B82F6,#22D3EE)" },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/data/tokens.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.mjs src/data/tokens.test.ts && git commit -m "feat: Chimera design tokens (Tailwind theme) + test"
```

---

## Task 3: Global styles, fonts, base Layout

**Files:** Create `src/styles/global.css`, `src/layouts/Layout.astro`.

- [ ] **Step 1: global.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-surface-background text-text-primary font-body antialiased; }
  h1,h2,h3 { @apply font-heading; }
  ::selection { @apply bg-brand-primary/30; }
}
```

- [ ] **Step 2: Layout.astro (shell + fonts + SEO)**

```astro
---
import "@fontsource/sora/600.css";
import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "../styles/global.css";
interface Props { title?: string; description?: string; }
const {
  title = "ChimeraNext — Costa Rica's AI-native, product-led venture studio",
  description = "We build, ship & operate four ventures — on a stack you can build on too.",
} = Astro.props;
---
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 3: Placeholder favicon**

Create `public/favicon.svg`:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#7C5CFF"/><stop offset=".5" stop-color="#3B82F6"/><stop offset="1" stop-color="#22D3EE"/></linearGradient></defs><rect width="32" height="32" rx="7" fill="#0C0A14"/><path d="M9 21l4-10 3 7 3-7 4 10" fill="none" stroke="url(#g)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
```

- [ ] **Step 4: Build check**

Run: `npm run build`
Expected: succeeds (Layout imports resolve).

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css src/layouts/Layout.astro public/favicon.svg && git commit -m "feat: global styles, fonts, base Layout"
```

---

## Task 4: Venture data (typed) + test

**Files:** Create `src/data/ventures.ts`, `src/data/ventures.test.ts`.

- [ ] **Step 1: Write the failing test**

`src/data/ventures.test.ts`:
```ts
import { describe, it, expect } from "vitest";
import { ventures, type Venture } from "./ventures";

describe("ventures data", () => {
  it("has exactly four ventures", () => { expect(ventures).toHaveLength(4); });
  it("each venture has all required fields", () => {
    for (const v of ventures as Venture[]) {
      expect(v.name).toBeTruthy();
      expect(v.industries.length).toBeGreaterThan(0);
      expect(v.market).toBeTruthy();
      expect(v.uvp).toBeTruthy();
      expect(v.purpose).toBeTruthy();
      expect(v.builtOn.length).toBeGreaterThan(0);
      expect(v.domain).toMatch(/\./);
    }
  });
  it("includes the confirmed venture→service mappings", () => {
    const verti = ventures.find((v) => v.name === "Vertivolatam")!;
    const habi = ventures.find((v) => v.name === "HabitaNexus")!;
    expect(verti.builtOn.find((b) => b.slug === "vision-core")!.confirmed).toBe(true);
    expect(habi.builtOn.find((b) => b.slug === "geospatial-core")!.confirmed).toBe(true);
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/data/ventures.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement ventures.ts**

```ts
export interface BuiltOn { slug: string; confirmed: boolean; }
export interface Venture {
  name: string;
  industries: string[];
  market: string;
  uvp: string;
  purpose: string;
  builtOn: BuiltOn[];
  domain: string; // own landing page
}

const on = (slug: string, confirmed = false): BuiltOn => ({ slug, confirmed });

export const ventures: Venture[] = [
  {
    name: "Vertivolatam",
    industries: ["AgTech"],
    market: "Greenhouse growers · LATAM",
    uvp: "Catch crop disease before it spreads — AI vision on the edge.",
    purpose: "Phytopathology detection + NVIDIA physical-AI for greenhouses and field. Hardware + SaaS.",
    builtOn: [on("vision-core", true), on("agentic-core"), on("payments-core"), on("marketplace-core")],
    domain: "https://vertivolatam.com",
  },
  {
    name: "HabitaNexus",
    industries: ["PropTech", "LegalTech"],
    market: "Tenants + landlords · CR (+ B2G municipalities)",
    uvp: "From ~60 days to under 7: rent long-term with escrow, two-way claims, no lawyer.",
    purpose: "Search, negotiate and sign Ley-7527 rental contracts with escrow-protected deposits and bidirectional claims; plus a B2G compliance/data product for municipalities.",
    builtOn: [on("geospatial-core", true), on("marketplace-core"), on("payments-core"), on("compliance-core"), on("agentic-core")],
    domain: "https://habitanexus.com",
  },
  {
    name: "AltruPets",
    industries: ["PetTech", "GovTech"],
    market: "Municipalities · vet clinics · rescuers · LATAM",
    uvp: "The coordination layer for animal welfare — subsidies & abuse reports that actually get routed, approved and acted on.",
    purpose: "Cloud-native platform connecting rescuers, vet clinics and municipalities: B2G vet subsidies, authenticated abuse reports, rescue, adoption and P2P donations. Never holds funds (SUGEF-safe).",
    builtOn: [on("marketplace-core"), on("agentic-core"), on("compliance-core"), on("filing-core"), on("geospatial-core")],
    domain: "https://altrupets.com",
  },
  {
    name: "Aduanext",
    industries: ["Customs", "GovTech"],
    market: "Importers/exporters · customs brokers · LATAM",
    uvp: "Clear customs in hours, not days — automated.",
    purpose: "Customs/aduana automation SaaS for LATAM trade.",
    builtOn: [on("compliance-core"), on("filing-core"), on("invoice-core"), on("payments-core")],
    domain: "https://aduanext.com",
  },
];
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/data/ventures.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/data/ventures.ts src/data/ventures.test.ts && git commit -m "feat: typed venture portfolio data + test"
```

---

## Task 5: Microservices + shared-services data

**Files:** Create `src/data/microservices.ts`, `src/data/sharedServices.ts`.

- [ ] **Step 1: microservices.ts**

```ts
export interface Microservice { slug: string; blurb: string; }
export const microservices: Microservice[] = [
  { slug: "payments-core", blurb: "Payment gateways, escrow, settlement" },
  { slug: "marketplace-core", blurb: "Storefront + schema-driven catalog" },
  { slug: "agentic-core", blurb: "Agent runtime — LLM orchestration, tools" },
  { slug: "compliance-core", blurb: "KYC/AML, sanctions, audit" },
  { slug: "invoice-core", blurb: "E-invoicing (Hacienda CR v4.4, XAdES)" },
  { slug: "filing-core", blurb: "Regulatory filing automation" },
  { slug: "vision-core", blurb: "Crop pest & disease vision (Triton/vLLM)" },
  { slug: "geospatial-core", blurb: "Remote-sensing land-use AI (H3, Sentinel-2)" },
];
```

- [ ] **Step 2: sharedServices.ts**

```ts
export interface SharedService { title: string; blurb: string; }
export const sharedServices: SharedService[] = [
  { title: "Nearshore dev teams", blurb: "Embedded CR/LATAM engineers." },
  { title: "AI / MLOps", blurb: "VLM/NIM, vision, MLOps pipelines." },
  { title: "Cloud / CloudOps", blurb: "Kubernetes, IaC, platform engineering." },
  { title: "Design + product", blurb: "UX research, atomic design systems." },
];
```

- [ ] **Step 3: Build check + commit**

Run: `npm run build` (Expected: succeeds).
```bash
git add src/data/microservices.ts src/data/sharedServices.ts && git commit -m "feat: microservices + shared-services data"
```

---

## Task 6: Nav + MobileNav island (+ Playwright smoke)

**Files:** Create `src/components/Nav.astro`, `src/components/islands/MobileNav.tsx`, `e2e/smoke.spec.ts`. Modify `src/pages/index.astro`.

- [ ] **Step 1: MobileNav island (Headless UI Disclosure)**

`src/components/islands/MobileNav.tsx`:
```tsx
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
];

export default function MobileNav() {
  return (
    <Disclosure as="div" className="md:hidden">
      <DisclosureButton
        aria-label="Toggle menu"
        data-testid="mobile-menu-button"
        className="rounded-md border border-surface-border px-3 py-2 text-text-primary"
      >
        Menu
      </DisclosureButton>
      <DisclosurePanel
        data-testid="mobile-menu-panel"
        className="absolute left-0 right-0 mt-2 flex flex-col gap-1 border-y border-surface-border bg-surface-content px-6 py-4"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} className="py-2 text-text-secondary hover:text-text-primary">
            {l.label}
          </a>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
```

- [ ] **Step 2: Nav.astro**

```astro
---
import MobileNav from "./islands/MobileNav.tsx";
---
<header class="sticky top-0 z-40 border-b border-surface-border bg-surface-background/80 backdrop-blur">
  <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <a href="#top" class="font-heading text-lg font-extrabold text-text-primary">ChimeraNext</a>
    <div class="hidden items-center gap-6 text-sm text-text-secondary md:flex">
      <a href="#portfolio" class="hover:text-text-primary">Portfolio</a>
      <a href="#stack" class="hover:text-text-primary">Stack</a>
      <a href="#services" class="hover:text-text-primary">Services</a>
      <a href="#book" class="rounded-md border border-brand-secondary px-4 py-2 text-brand-secondary hover:bg-brand-secondary/10">Book a call</a>
    </div>
    <MobileNav client:visible />
  </nav>
</header>
```

- [ ] **Step 3: Mount Nav in index.astro**

Replace `src/pages/index.astro` with:
```astro
---
import Layout from "../layouts/Layout.astro";
import Nav from "../components/Nav.astro";
---
<Layout>
  <a id="top"></a>
  <Nav />
  <main class="mx-auto max-w-6xl px-6"></main>
</Layout>
```

- [ ] **Step 4: Playwright smoke for the island**

`e2e/smoke.spec.ts`:
```ts
import { test, expect } from "@playwright/test";

test("mobile menu toggles open", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto("/");
  await expect(page.getByTestId("mobile-menu-panel")).toBeHidden();
  await page.getByTestId("mobile-menu-button").click();
  await expect(page.getByTestId("mobile-menu-panel")).toBeVisible();
});
```

- [ ] **Step 5: Run build + e2e**

Run: `npm run build && npx playwright install --with-deps chromium && npm run test:e2e`
Expected: build succeeds; the smoke test passes (panel hidden → visible).

- [ ] **Step 6: Commit**

```bash
git add src/components/Nav.astro src/components/islands/MobileNav.tsx e2e/smoke.spec.ts src/pages/index.astro && git commit -m "feat: nav + mobile-nav island + smoke test"
```

---

## Task 7: Hero (section 1)

**Files:** Create `src/components/Hero.astro`. Modify `src/pages/index.astro`.

- [ ] **Step 1: Hero.astro (portfolio-first grid, brand gradient headline)**

```astro
---
import { ventures } from "../data/ventures.ts";
---
<section class="py-16 text-center">
  <h1 class="bg-brand-gradient bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl">
    Costa Rica's AI-native,<br />product-led venture studio.
  </h1>
  <p class="mx-auto mt-4 max-w-2xl text-text-secondary">
    Four ventures we build, ship &amp; operate — on a stack you can build on too.
  </p>
  <div class="mt-6">
    <a href="#book" class="inline-block rounded-lg bg-brand-gradient px-6 py-3 font-semibold text-white">Book a call</a>
  </div>
  <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {ventures.map((v) => (
      <a href={v.domain} class="flex h-20 items-center justify-center rounded-lg border border-surface-border bg-surface-card text-text-primary transition hover:border-brand-primary">
        {v.name}
      </a>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Mount Hero**

In `src/pages/index.astro`, import `Hero` and place `<Hero />` inside `<main>`:
```astro
import Hero from "../components/Hero.astro";
...
<main class="mx-auto max-w-6xl px-6">
  <Hero />
</main>
```

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: succeeds; `dist/index.html` contains "venture studio" and the four venture names.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.astro src/pages/index.astro && git commit -m "feat: hero section (portfolio-first grid)"
```

---

## Task 8: Portfolio section + PortfolioCard (section 2)

**Files:** Create `src/components/PortfolioCard.astro`, `src/components/Portfolio.astro`. Modify `src/pages/index.astro`.

- [ ] **Step 1: PortfolioCard.astro**

```astro
---
import type { Venture } from "../data/ventures.ts";
const { v } = Astro.props as { v: Venture };
---
<article class="flex flex-col rounded-xl border border-surface-border bg-surface-card p-5">
  <div class="mb-3 flex flex-wrap gap-2">
    {v.industries.map((i) => (
      <span class="rounded-full border border-brand-secondary px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-brand-tertiary">{i}</span>
    ))}
    <span class="rounded-full border border-surface-border px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-text-secondary">{v.market}</span>
  </div>
  <h3 class="text-lg font-extrabold text-text-primary">{v.name}</h3>
  <p class="mt-1 font-semibold text-text-primary">{v.uvp}</p>
  <p class="mt-2 flex-1 text-sm text-text-secondary">{v.purpose}</p>
  <p class="mb-1.5 mt-3 text-[10px] uppercase tracking-wide text-text-secondary">Built on</p>
  <div class="mb-4 flex flex-wrap gap-1.5">
    {v.builtOn.map((b) => (
      <a href={`#stack`} class:list={["rounded-md border px-2 py-0.5 font-mono text-[11px]", b.confirmed ? "border-brand-secondary text-brand-tertiary" : "border-dashed border-surface-border text-text-secondary"]}>{b.slug}</a>
    ))}
  </div>
  <a href={v.domain} class="self-start rounded-lg border border-brand-secondary px-4 py-2 text-sm text-brand-secondary hover:bg-brand-secondary/10">Learn More →</a>
</article>
```

- [ ] **Step 2: Portfolio.astro**

```astro
---
import { ventures } from "../data/ventures.ts";
import PortfolioCard from "./PortfolioCard.astro";
---
<section id="portfolio" class="py-16">
  <p class="text-xs uppercase tracking-widest text-brand-tertiary">Portfolio</p>
  <h2 class="mt-2 text-3xl font-extrabold text-text-primary">Four ventures we build, run and own.</h2>
  <div class="mt-8 grid gap-4 sm:grid-cols-2">
    {ventures.map((v) => <PortfolioCard v={v} />)}
  </div>
</section>
```

- [ ] **Step 3: Mount + build check**

Add `import Portfolio from "../components/Portfolio.astro";` and `<Portfolio />` after `<Hero />`.
Run: `npm run build` (Expected: succeeds; output contains all four UVP strings).

- [ ] **Step 4: Commit**

```bash
git add src/components/PortfolioCard.astro src/components/Portfolio.astro src/pages/index.astro && git commit -m "feat: portfolio section with microservice pills + Learn More"
```

---

## Task 9: Stack (3) + Build-on-stack (4) sections

**Files:** Create `src/components/Stack.astro`, `src/components/BuildOnStack.astro`. Modify `src/pages/index.astro`.

- [ ] **Step 1: Stack.astro**

```astro
---
import { microservices } from "../data/microservices.ts";
---
<section id="stack" class="rounded-2xl border border-brand-secondary/40 bg-surface-content py-12 px-6">
  <p class="text-xs uppercase tracking-widest text-brand-tertiary">The stack</p>
  <h2 class="mt-2 text-3xl font-extrabold text-text-primary">The same microservices we built all four on.</h2>
  <p class="mt-2 text-text-secondary">Source-available · pick-what-you-need. Production-grade, already running four ventures. → <a class="text-brand-secondary" href="https://better-ms.dev">better-ms.dev</a></p>
  <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {microservices.map((m) => (
      <div class="flex h-14 items-center justify-center rounded-lg border border-surface-border bg-surface-card font-mono text-xs text-text-primary">{m.slug}</div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: BuildOnStack.astro**

```astro
---
const benefits = [
  { t: "Inherit prod infra", b: "The same microservices running four live ventures. Battle-tested, no scaffolding." },
  { t: "Ship months faster", b: "Payments, marketplace, e-invoice, vision, geo — already built. Start in your domain, not the plumbing." },
  { t: "We operate it with you", b: "Optional: the studio's shared services run and scale the stack via MSA." },
];
---
<section class="my-4 rounded-2xl border border-brand-secondary/40 bg-surface-content py-12 px-6">
  <p class="text-xs uppercase tracking-widest text-brand-tertiary">Build on our stack</p>
  <h2 class="mt-2 text-3xl font-extrabold text-text-primary">Your startup, on the rails we run our own on.</h2>
  <div class="mt-6 grid gap-3 sm:grid-cols-3">
    {benefits.map((x) => (
      <div class="rounded-xl border border-surface-border bg-surface-card p-5">
        <h3 class="font-extrabold text-text-primary">{x.t}</h3>
        <p class="mt-1 text-sm text-text-secondary">{x.b}</p>
      </div>
    ))}
  </div>
  <div class="mt-6 flex flex-wrap gap-3">
    <a href="#stack" class="rounded-lg bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white">Explore the stack</a>
    <a href="#book" class="rounded-lg border border-brand-accent px-5 py-2.5 text-sm text-magenta-70">Book a call</a>
  </div>
</section>
```

- [ ] **Step 3: Mount + build check + commit**

Add imports + `<Stack />` and `<BuildOnStack />` after `<Portfolio />`. Run `npm run build` (Expected: succeeds).
```bash
git add src/components/Stack.astro src/components/BuildOnStack.astro src/pages/index.astro && git commit -m "feat: stack + build-on-stack sections (emphasis #2)"
```

---

## Task 10: Shared services (5) + How we work (6) + Proof (7)

**Files:** Create `src/components/SharedServices.astro`, `src/components/HowWeWork.astro`, `src/components/Proof.astro`. Modify `src/pages/index.astro`.

- [ ] **Step 1: SharedServices.astro**

```astro
---
import { sharedServices } from "../data/sharedServices.ts";
---
<section id="services" class="py-16">
  <p class="text-xs uppercase tracking-widest text-brand-tertiary">Shared services</p>
  <h2 class="mt-2 text-3xl font-extrabold text-text-primary">Hire the studio's shared services.</h2>
  <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {sharedServices.map((s) => (
      <div class="rounded-xl border border-surface-border bg-surface-card p-5">
        <h3 class="font-extrabold text-text-primary">{s.title}</h3>
        <p class="mt-1 text-sm text-text-secondary">{s.blurb}</p>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: HowWeWork.astro**

```astro
---
const steps = ["Scope", "Embed", "Ship", "Operate"];
---
<section class="py-16">
  <p class="text-xs uppercase tracking-widest text-brand-tertiary">How we work</p>
  <h2 class="mt-2 text-3xl font-extrabold text-text-primary">Embedded, productized, accountable.</h2>
  <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {steps.map((s, i) => (
      <div class="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-4 py-5">
        <span class="font-mono text-xs text-text-secondary">0{i + 1}</span>
        <span class="font-semibold text-text-primary">{s}</span>
      </div>
    ))}
  </div>
  <p class="mt-3 text-sm text-text-secondary">Engagement models: Embedded team · Project · Fractional (near/off/onshore).</p>
</section>
```

- [ ] **Step 3: Proof.astro**

```astro
---
const stats = [
  { n: "4", l: "ventures shipped" },
  { n: "8", l: "microservices" },
  { n: "CR", l: "nearshore base" },
  { n: "BSL", l: "source-available" },
];
---
<section class="py-12">
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
    {stats.map((s) => (
      <div class="flex flex-col items-center justify-center rounded-xl border border-surface-border bg-surface-card py-6">
        <span class="text-2xl font-extrabold text-text-primary">{s.n}</span>
        <span class="font-mono text-[11px] text-text-secondary">{s.l}</span>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 4: Mount + build check + commit**

Add imports + the three components in order after `<BuildOnStack />`. Run `npm run build` (Expected: succeeds).
```bash
git add src/components/SharedServices.astro src/components/HowWeWork.astro src/components/Proof.astro src/pages/index.astro && git commit -m "feat: shared-services, how-we-work, proof sections"
```

---

## Task 11: Booking dialog island (Cal.com) + CTA band + Footer

**Files:** Create `src/components/islands/BookingDialog.tsx`, `src/components/CtaBand.astro`, `src/components/Footer.astro`. Modify `src/pages/index.astro`, `e2e/smoke.spec.ts`.

- [ ] **Step 1: BookingDialog island (Headless UI Dialog + Cal.com link)**

`src/components/islands/BookingDialog.tsx`:
```tsx
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const CAL_URL = "https://cal.com/chimeranext/intro"; // confirm handle at deploy time

export default function BookingDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-testid="open-booking"
        onClick={() => setOpen(true)}
        className="rounded-lg bg-brand-gradient px-6 py-3 font-semibold text-white"
      >
        Book a call
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel data-testid="booking-panel" className="w-full max-w-md rounded-xl border border-surface-border bg-surface-content p-6">
            <DialogTitle className="font-heading text-xl font-extrabold text-text-primary">Let's talk.</DialogTitle>
            <p className="mt-2 text-sm text-text-secondary">Pick a slot — 30 minutes, no slides.</p>
            <a href={CAL_URL} target="_blank" rel="noopener" className="mt-4 inline-block rounded-lg bg-brand-gradient px-5 py-2.5 font-semibold text-white">Open scheduler →</a>
            <button onClick={() => setOpen(false)} className="ml-3 text-sm text-text-secondary hover:text-text-primary">Close</button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
```

- [ ] **Step 2: CtaBand.astro (anchors #book, mounts the dialog)**

```astro
---
import BookingDialog from "./islands/BookingDialog.tsx";
---
<section id="book" class="my-8 rounded-2xl border border-surface-border bg-surface-content py-14 text-center">
  <h2 class="text-3xl font-extrabold text-text-primary">Build on the stack — or let's build together.</h2>
  <div class="mt-6 flex justify-center gap-3">
    <BookingDialog client:visible />
    <a href="https://better-ms.dev" class="rounded-lg border border-brand-secondary px-6 py-3 text-brand-secondary hover:bg-brand-secondary/10">Explore better-microservices</a>
  </div>
</section>
```

- [ ] **Step 3: Footer.astro**

```astro
---
import { ventures } from "../data/ventures.ts";
---
<footer class="border-t border-surface-border py-10 text-sm text-text-secondary">
  <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p class="font-heading font-extrabold text-text-primary">ChimeraNext Shared Services LLC</p>
      <p class="mt-1">Costa Rica · MSA model · source-available stack</p>
    </div>
    <div class="flex flex-wrap gap-4">
      {ventures.map((v) => <a href={v.domain} class="hover:text-text-primary">{v.name}</a>)}
      <a href="https://better-ms.dev" class="hover:text-text-primary">better-microservices</a>
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Mount CtaBand (inside main) + Footer (after main) in index.astro**

Add `import CtaBand` + `import Footer`. Place `<CtaBand />` last inside `<main>`, and `<Footer />` after `</main>`.

- [ ] **Step 5: Extend the Playwright smoke for the dialog**

Append to `e2e/smoke.spec.ts`:
```ts
test("booking dialog opens", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("booking-panel")).toBeHidden();
  await page.getByTestId("open-booking").click();
  await expect(page.getByTestId("booking-panel")).toBeVisible();
});
```

- [ ] **Step 6: Build + e2e + commit**

Run: `npm run build && npm run test:e2e`
Expected: build succeeds; both smoke tests pass.
```bash
git add src/components/islands/BookingDialog.tsx src/components/CtaBand.astro src/components/Footer.astro src/pages/index.astro e2e/smoke.spec.ts && git commit -m "feat: booking dialog island + CTA band + footer"
```

---

## Task 12: Final assembly, a11y/Lighthouse check, deploy config

**Files:** Modify `src/pages/index.astro` (verify full order), create `README.md`, `public/og-image.svg`.

- [ ] **Step 1: Verify the full section order in index.astro**

`src/pages/index.astro` `<main>` order must be: `Hero · Portfolio · Stack · BuildOnStack · SharedServices · HowWeWork · Proof · CtaBand`, with `Nav` above and `Footer` below `main`.

- [ ] **Step 2: OG image + README**

Create `public/og-image.svg` (1200×630 brand-gradient title card) and a `README.md` documenting: `npm run dev/build`, the data files to edit (`src/data/*`), and the **deploy-time TODOs** (Cal.com handle in `BookingDialog.tsx`, confirm venture domains + pill mapping, final hero headline, choose host).

- [ ] **Step 3: Full test sweep**

Run: `npm run check && npm run test && npm run build && npm run test:e2e`
Expected: type-check clean; vitest (tokens + ventures) pass; build succeeds; both Playwright smokes pass.

- [ ] **Step 4: Lighthouse / a11y sanity (manual)**

Run: `npm run preview` then run Lighthouse (or `npx @lhci/cli autorun` if added) on `http://localhost:4321`. Expected: Performance ≥ 95, Accessibility ≥ 95 (static page, fonts preloaded, minimal JS). Fix any contrast/alt issues the audit flags.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "chore: final assembly, OG image, README, deploy TODOs"
```

---

## Self-Review

**Spec coverage:**
- Repo `chimeranext/website` → Tasks 1–12 (already git-init'd). ✓
- Stack Astro+Tailwind+Headless UI React islands → Task 1 (config), islands in Tasks 6, 11. ✓
- Chimera tonal tokens (violet/blue/cyan + magenta accent, neutral, status, Sora/Inter/mono) → Task 2 (tested). ✓
- 9 sections in showcase-first order → Hero(7) · Portfolio(8) · Stack+BuildOnStack(9) · SharedServices+HowWeWork+Proof(10) · CtaBand+Footer(11); order verified in Task 12. ✓
- Portfolio card anatomy (industry/market chips, UVP, purpose, microservice pills, Learn More→domain) → Task 8 + venture data Task 4. ✓
- Cal.com booking CTA → Task 11 (Dialog island). ✓
- Real venture content → Task 4 data. ✓
- Islands-minimal rule → only MobileNav + BookingDialog hydrate (`client:visible`). ✓
- Open decisions (§9 spec) → surfaced as deploy-time TODOs in Task 12 README (Cal handle, domains, pill mapping, hero headline, host, i18n). ✓ (intentionally deferred, not silently dropped.)

**Placeholder scan:** No "TBD/implement later" in code steps; every code step ships complete code. The deferred items (Cal handle, domains) are real owner inputs, documented as explicit deploy-time TODOs, with working placeholder values so the build is green.

**Type consistency:** `Venture`/`BuiltOn` defined in Task 4 and consumed unchanged in Tasks 7, 8, 11 (`v.name/industries/market/uvp/purpose/builtOn[].slug/.confirmed/domain`). `Microservice.slug`/`SharedService.title` consistent across Tasks 5, 9, 10. Tailwind token names (`brand.*`, `surface.*`, `text.*`, `status.*`, `font-heading/body/mono`, `bg-brand-gradient`) defined in Task 2 and used identically in all components.
