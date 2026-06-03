# ChimeraNext Landing — Design Spec

**Date**: 2026-06-03
**Status**: Approved (brainstorm) — pending user review before writing-plans
**Repo**: new, `chimeranext/website` (separate from `chimeranext/better-microservices`)
**Companion artifacts**: `.superpowers/brainstorm/**` (hero, full-page, portfolio cards, palette mockups)

---

## 1. What this is

The marketing site for **ChimeraNext Shared Services LLC** — the shared-services /
venture-studio arm (formerly "LAPC506 Services LLC") of @lapc506's portfolio,
Costa Rica–based. It builds, ships and operates four ventures on its own
battle-tested infrastructure (`better-microservices`), and offers that same
capability — the stack and the teams — to external founders.

**Positioning priority** (decided):
1. **Showcase** — the studio + its four ventures (the proof).
2. **The stack** — `better-microservices`, the microservices the ventures run on.
3. **Services** — hire the studio's shared services (dev / AI / cloud / design).

Distinct from the **Better Microservices** landing (`better-ms.dev`, separate
project), which sells the bundle itself. The two reinforce each other: the
ventures are proof the stack works; the stack is the studio's leverage.

**Reference style**: golabstech.com, runitcr.com, hat.dojocoding.io,
softonitg.com — modern dark agency landings, "Driven by People, Accelerated by
AI", nearshore CR angle, Cal.com booking CTA.

## 2. Tech stack (decided)

- **Astro** (static-first SSG) — 90% static HTML, near-zero JS by default.
- **Tailwind CSS** — utility styling; design tokens (§6) as CSS vars / Tailwind theme.
- **Headless UI (React)** in **Astro islands** (`client:visible` / `client:idle`)
  — only the interactive widgets hydrate: mobile nav (`Disclosure`), FAQ
  (`Disclosure`), portfolio/services tabs (`Tab`), booking modal (`Dialog`).
- **Cal.com** embed (Dialog) for the primary CTA "Book a call".
- **Deploy**: Vercel / Netlify / GitHub Pages (TBD — pick at plan time).
- **Fonts**: Sora (headings) + Inter (body) + JetBrains Mono (code/pills),
  self-hosted or Google Fonts.

**Islands rule**: keep islands minimal — the hero, portfolio grid, services,
footer are static; only the four/five interactive widgets are React islands.
Preserve Astro's ~100 Lighthouse.

## 3. Page structure (single landing, v1)

Order (showcase-first), the v2 emphasis arrangement:

1. **Hero** — option A (portfolio-first grid). Nav + headline + sub + the 4-venture
   grid as the centerpiece. Primary CTA "Book a call".
2. **Portfolio** — *emphasis #1*. The four ventures as rich cards (§4).
3. **The stack: better-microservices** — *emphasis #2*. "The same microservices we
   built all four on." Source-available · pick-what-you-need. Grid of the 8
   services. Link → `better-ms.dev`.
4. **Build YOUR startup on our stack** — value prop for external founders: Inherit
   prod infra · Ship months faster · We operate it with you (MSA). CTA "Explore
   the stack" + "Book a call".
5. **Shared services** — *emphasis #3*. Hire teams: Nearshore dev · AI/MLOps ·
   Cloud/CloudOps · Design + product.
6. **How we work + engagement** — Scope → Embed → Ship → Operate; engagement
   models (Embedded / Project / Fractional · near/off/onshore).
7. **Proof / stats** — 4 ventures · 8 microservices · CR nearshore · BSL source-available.
8. **CTA** — Book a call (Cal.com Dialog) + Explore better-microservices.
9. **Footer** — ChimeraNext Shared Services LLC · Costa Rica · MSA · links to the
   four ventures + better-microservices · legal.

Multi-page (services / case-studies / about) is **post-v1**.

## 4. Portfolio card anatomy (approved)

Per venture, in a 2×2 grid:
- **Chips**: industry (accent border) + target market.
- **Name**.
- **UVP** — one bold sentence.
- **Purpose** — 1–2 muted sentences.
- **"Built on"** — pills of the microservices it integrates (mono font; confirmed
  ones solid/accent, draft ones dashed). Optional: pills link → the stack section
  / service doc.
- **CTA** "Learn More →" linking to the venture's **own landing page (own domain)**.

### Venture content (real — from business-model / SRD)

| Venture | Industry | Target market | UVP | Purpose | Built on (draft — confirm) | Domain |
|---|---|---|---|---|---|---|
| **Vertivolatam** | AgTech (hardware+SaaS) | Greenhouse growers · LATAM | Catch crop disease before it spreads — AI vision on the edge. | Phytopathology detection + NVIDIA physical-AI for greenhouses/field. | `vision-core` ✓, agentic-core, payments-core, marketplace-core | vertivolatam.com (confirm) |
| **HabitaNexus** | PropTech · LegalTech | Tenants + landlords · CR long-term rentals (+ B2G municipalities) | From ~60 days to under 7: rent long-term with escrow, two-way claims, no lawyer. | Search/negotiate/sign Ley-7527 rental contracts, escrow-protected deposit, bidirectional claims; + B2G compliance/data product for municipalities. | `geospatial-core` ✓, marketplace-core, payments-core, compliance-core, agentic-core | habitanexus.com (confirm) |
| **AltruPets** | PetTech · GovTech | Municipalities (B2G) · vet clinics · rescuers/NGOs · CR+LATAM | The coordination layer for animal welfare — subsidies & abuse reports that actually get routed, approved and acted on. | Cloud-native platform connecting rescuers, vet clinics and municipalities: B2G vet subsidies, authenticated abuse reports, rescue, adoption, P2P donations. Never holds funds (SUGEF-safe). | marketplace-core, agentic-core, compliance-core, filing-core, geospatial-core (all draft) | altrupets.com (confirm) |
| **Aduanext** | Customs · GovTech | Importers/exporters · customs brokers · LATAM | Clear customs in hours, not days — automated. | Customs/aduana automation SaaS for LATAM trade. | compliance-core, filing-core, invoice-core, payments-core (all draft) | aduanext.com (confirm) |

**Open content items (to confirm with owner):** exact venture→microservice
mapping (only `vision-core`→Vertivolatam and `geospatial-core`→HabitaNexus are
confirmed); the live domains; final AltruPets pills.

## 5. Hero message (to finalize)

Working/leading choice (#1). Candidates evaluated; pick one at plan time:
1. **Costa Rica's AI-native, product-led venture studio.** *(leading)*
2. We build AI-native products — and run them on shared services you can hire.
3. A product-led venture studio. Four AI-native ventures, one shared engine.

Sub-headline: "Four ventures we build, ship & operate — on a stack you can build
on too."

## 6. Design tokens — "Chimera" palette (approved, v2)

Material-3 `SchemeTonalSpot` approach (mirrors AltruPets' `tonal_palette_generator`
+ `AltruPetsTokens` structure). Codify as `ChimeraTokens` (CSS vars + Tailwind theme).
Dark theme is the base.

**Brand (4 hues) — seeds + key tones:**
- `brand.primary` — **Violet** seed `#7C5CFF` (ramp 10 `#18063F` → 95 `#EFEBFF`)
- `brand.secondary` — **Blue** seed `#3B82F6` (ramp 10 `#04183F` → 95 `#E9F1FE`)
- `brand.tertiary` — **Cyan** seed `#22D3EE` (ramp 10 `#03303A` → 95 `#E6FCFE`)
- `brand.accent` — **Magenta** seed `#EC4899` — *pops / secondary CTAs only* (ramp 10 `#3A0723` → 95 `#FEE9F2`)
- `brand.gradient` — cool: `linear-gradient(90deg, #7C5CFF, #3B82F6, #22D3EE)`

Each hue ships the full tonal ramp (tones 10,20,30,40,50,60,70,80,90,95).

**Neutral (violet-tinted) — surfaces + text:**
- `surface.background` `#08060F` · `surface.base` `#0C0A14` · `surface.elevated`
  `#12101F` · `surface.content` `#16131F` · `surface.card` `#1C1830` ·
  `surface.border` `#2A2640`
- `text.primary` `#ECE8F2` · `text.secondary` `#837C99` · `text.onPrimary` `#FFFFFF`

**Status:**
- `status.success` `#34D399` · `status.warning` `#FBBF24` · `status.error` `#FB7185`
  (each with a dark `*-bg` variant, e.g. successBg `#0D2E1F`).

**Spacing / radius**: mirror AltruPets scale — spacing 2/4/6/8/10/12/16/20/24;
radius sm 6 / md 8 / lg 10 / xl 12.

**Typography tokens:**
- `font.heading` = **Sora** (600/800) · `font.body` = **Inter** (400/600/800) ·
  `font.mono` = **JetBrains Mono** (pills, code, service names).

## 7. Components (Astro + Headless UI islands)

| Component | Static / Island | Headless UI |
|---|---|---|
| `Nav` (desktop) | static | — |
| `MobileNav` | island | `Disclosure` |
| `Hero` + venture grid | static | — |
| `PortfolioCard` ×4 | static | — (pills optionally anchor-link) |
| `StackGrid` (8 services) | static | — |
| `ServicesTabs` / `EngagementTable` | island (if tabbed) | `Tab` |
| `FAQ` | island | `Disclosure` |
| `BookingDialog` (Cal.com) | island | `Dialog` |
| `Footer` | static | — |

## 8. Out of scope (v1)

Multi-page site (services/case-studies/about/blog), CMS, i18n (EN/ES toggle),
contact-form backend (CTA is Cal.com booking), analytics beyond a basic snippet.

## 9. Open decisions (resolve at plan time)

1. Final hero headline (§5 candidates).
2. Deploy target (Vercel / Netlify / GH Pages).
3. Venture→microservice pill mapping + live domains (§4).
4. Whether pills link to the stack section / service docs.
5. EN-only v1 or EN/ES.
