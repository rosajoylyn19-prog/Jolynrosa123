import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C766",
          dark: "#B8942C",
        },
        ink: "#111111",
        paper: "#FFFFFF",
        mist: "#F5F5F5",
        charcoal: "#0B0B0C",
        slate: {
          panel: "#161616",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-sheen":
          "linear-gradient(120deg, #B8942C 0%, #D4AF37 22%, #F3DE8A 45%, #D4AF37 68%, #B8942C 100%)",
        "hairline-gold":
          "linear-gradient(90deg, transparent, #D4AF37, transparent)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212,175,55,0.45)",
        soft: "0 10px 40px -12px rgba(0,0,0,0.15)",
        "soft-dark": "0 10px 40px -12px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        sealPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.35)" },
          "50%": { boxShadow: "0 0 0 14px rgba(212,175,55,0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        sealPulse: "sealPulse 2.4s ease-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
