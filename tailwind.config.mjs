import { tokens } from "@chimeranext/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: tokens.brand.primary,
          secondary: tokens.brand.secondary,
          tertiary: tokens.brand.tertiary,
          accent: tokens.brand.accent,
          parchment: tokens.brand.parchment,
          goldDeep: tokens.brand.goldDeep,
          goldLight: tokens.brand.goldLight,
          blood: tokens.brand.blood,
          frost: tokens.brand.frost,
          mana: tokens.brand.mana,
        },
        gold: {
          deep: tokens.brand.goldDeep,
          DEFAULT: tokens.brand.primary,
          light: tokens.brand.goldLight,
        },
        ink: {
          DEFAULT: tokens.brand.secondary,
          deep: tokens.semantic.dark.background,
        },
        parchment: tokens.brand.parchment,
        arcane: tokens.brand.tertiary,
        arcaneSoft: tokens.brand.arcaneSoft,
        frost: tokens.brand.frost,
        frostSoft: tokens.brand.frostSoft,
        mana: tokens.brand.mana,
        manaSoft: tokens.brand.manaSoft,
        charm: tokens.brand.accent,
        charmSoft: tokens.brand.charmSoft,
        blood: tokens.brand.blood,
        bloodSoft: tokens.brand.bloodSoft,
        surface: {
          background: tokens.semantic.dark.background,
          base: tokens.semantic.dark.background,
          elevated: tokens.semantic.dark.card,
          content: tokens.semantic.dark.card,
          card: tokens.semantic.dark.card,
          border: tokens.semantic.dark.border,
        },
        text: {
          primary: tokens.semantic.dark.foreground,
          secondary: tokens.semantic.dark["muted-foreground"],
          onPrimary: tokens.semantic.dark["primary-foreground"],
        },
        status: {
          success: tokens.semantic.dark.success,
          warning: tokens.semantic.dark.warning,
          error: "#FB7185",
        },
      },
      fontFamily: {
        display: [tokens.font.display, "Georgia", "serif"],
        epic: [tokens.font.epic, "Georgia", "serif"],
        heading: [tokens.font.display, "Georgia", "serif"],
        body: [tokens.font.body, "system-ui", "sans-serif"],
        mono: [tokens.font.mono, "ui-monospace", "monospace"],
      },
      borderRadius: { sm: "6px", md: "8px", lg: "10px", xl: "12px" },
      backgroundImage: { "brand-gradient": tokens.gradient.brand },
    },
  },
  plugins: [],
};
