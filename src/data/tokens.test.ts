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
