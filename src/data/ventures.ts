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
    purpose: "Ley-7527 rentals with escrow deposits and bidirectional claims; plus B2G compliance data for municipalities.",
    builtOn: [on("geospatial-core", true), on("marketplace-core"), on("payments-core"), on("compliance-core"), on("agentic-core")],
    domain: "https://habitanexus.com",
  },
  {
    name: "AltruPets",
    industries: ["PetTech", "GovTech"],
    market: "Municipalities · vet clinics · rescuers · LATAM",
    uvp: "The coordination layer for animal welfare — subsidies & abuse reports that actually get routed, approved and acted on.",
    purpose: "Cloud-native platform for rescuers, vet clinics and municipalities. Vet subsidies, abuse reports, adoption and P2P donations.",
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
