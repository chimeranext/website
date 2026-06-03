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
