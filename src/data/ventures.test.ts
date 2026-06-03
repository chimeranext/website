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
