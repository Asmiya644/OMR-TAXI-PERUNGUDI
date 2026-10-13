import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        taxi: {
          yellow: "#FFC700",       // Classic Taxi Yellow
          "yellow-hover": "#E5B300",
          "yellow-light": "#FFF7D6",
          "yellow-accent": "#FDB813",
          black: "#0D0D0D",        // Deep Black for text & high contrast
          "black-soft": "#1A1A1A",
          dark: "#141414",
          surface: "#212121",
          muted: "#6B7280",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        taxi: "0 10px 25px -5px rgba(255, 199, 0, 0.3)",
        "taxi-lg": "0 20px 35px -10px rgba(255, 199, 0, 0.4)",
        card: "0 4px 20px 0 rgba(0, 0, 0, 0.06)",
        "card-hover": "0 12px 30px 0 rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 199, 0, 0.6)" },
          "50%": { boxShadow: "0 0 0 12px rgba(255, 199, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulseGlow 2.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
