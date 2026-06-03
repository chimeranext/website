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
