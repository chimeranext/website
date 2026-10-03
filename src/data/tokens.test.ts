import { describe, it, expect } from "vitest";
import { tokens } from "@chimeranext/tokens";
import tw from "../../tailwind.config.mjs";

describe("Chimera design tokens (Academy D&D, SSOT @chimeranext/tokens)", () => {
  const colors = (tw as any).theme.extend.colors;
  const fonts = (tw as any).theme.extend.fontFamily;
  it("maps the brand hues from the SSOT", () => {
    expect(colors.brand.primary).toBe(tokens.brand.primary);
    expect(colors.brand.primary).toBe("#B78E3B");
    expect(colors.brand.secondary).toBe(tokens.brand.secondary);
    expect(colors.brand.secondary).toBe("#142A46");
    expect(colors.brand.tertiary).toBe(tokens.brand.tertiary);
    expect(colors.brand.accent).toBe(tokens.brand.accent);
    expect(colors.brand.parchment).toBe("#F2EAD8");
    expect(colors.brand.goldDeep).toBe("#A67E34");
    expect(colors.brand.goldLight).toBe("#D9B45B");
    expect(colors.brand.blood).toBe("#A33B3B");
    expect(colors.brand.frost).toBe("#3B82F6");
    expect(colors.brand.mana).toBe("#22D3EE");
  });
  it("uses the dark-first semantic surface ladder from the SSOT", () => {
    expect(colors.surface.background).toBe(tokens.semantic.dark.background);
    expect(colors.surface.background).toBe("#0B1526");
    expect(colors.surface.card).toBe(tokens.semantic.dark.card);
    expect(colors.surface.card).toBe("#142A46");
    expect(colors.surface.border).toBe(tokens.semantic.dark.border);
  });
  it("uses parchment text + D&D fonts from the SSOT", () => {
    expect(colors.text.primary).toBe(tokens.semantic.dark.foreground);
    expect(colors.text.primary).toBe("#F2EAD8");
    expect(colors.status.success).toBe(tokens.semantic.dark.success);
    expect(fonts.display[0]).toBe(tokens.font.display);
    expect(fonts.display[0]).toBe("Alegreya");
    expect(fonts.epic[0]).toBe("Piazzolla");
    expect(fonts.body[0]).toBe("Alegreya Sans");
    expect(fonts.mono[0]).toBe("Inconsolata");
  });
  it("uses the gold brand gradient from the SSOT", () => {
    expect((tw as any).theme.extend.backgroundImage["brand-gradient"]).toBe(
      tokens.gradient.brand,
    );
  });
  it("exposes text-on-dark soft steps from the SSOT (arcane/frost/mana/charm/blood roles)", () => {
    expect(colors.arcaneSoft).toBe(tokens.brand.arcaneSoft);
    expect(colors.frostSoft).toBe(tokens.brand.frostSoft);
    expect(colors.manaSoft).toBe(tokens.brand.manaSoft);
    expect(colors.charmSoft).toBe(tokens.brand.charmSoft);
    expect(colors.bloodSoft).toBe(tokens.brand.bloodSoft);
  });
});
