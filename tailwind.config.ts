import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          night: "#030805",
          deep: "#07140D",
          pine: "#0D1B14",
          forest: "#12251B",
          olive: "#273B26",

          ivory: "#F7F3EA",
          linen: "#FAF7EF",
          cream: "#EFE5D3",
          sand: "#DED0B9",

          gold: "#C8A86B",
          champagne: "#D8BE82",
          bronze: "#94733F",
          copper: "#A8793D",

          charcoal: "#1E241F",
          muted: "#7D8678",
          border: "#D8CBB7",
          darkBorder: "rgba(216, 203, 183, 0.16)",
        },

        admin: {
          sidebar: "#07140D",
          sidebarHover: "#123321",
          sidebarActive: "#C8A86B",
          content: "#F7F3EA",
          card: "#FFFFFF",
          border: "#D8CBB7",
        },

        status: {
          active: "#22C55E",
          inactive: "#EF4444",
          warning: "#F59E0B",
          info: "#3B82F6",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        soft: "0 20px 60px rgba(7, 20, 13, 0.12)",
        premium: "0 30px 90px rgba(3, 8, 5, 0.35)",
        card: "0 18px 50px rgba(30, 36, 31, 0.08)",
        cardHover: "0 26px 80px rgba(30, 36, 31, 0.16)",
        gold: "0 18px 45px rgba(200, 168, 107, 0.28)",
        innerGold: "inset 0 0 0 1px rgba(200, 168, 107, 0.28)",
      },

      borderRadius: {
        premium: "2rem",
        soft: "1.25rem",
        xl2: "1.75rem",
      },

      letterSpacing: {
        luxury: "0.22em",
        wideLuxury: "0.32em",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.75s ease forwards",
        fadeIn: "fadeIn 0.75s ease forwards",
        slowZoom: "slowZoom 14s ease-in-out infinite alternate",
        floatSoft: "floatSoft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;