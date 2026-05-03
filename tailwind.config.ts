import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBFAF7",
        "soft-blue": "#A7C5E3",
        "soft-blue-strong": "#7AA8CC",
        "soft-yellow": "#F6E9B2",
        "soft-yellow-warm": "#FBF1C8",
        navy: "#2A3D5F",
        "navy-deep": "#1F2E47",
        "warm-grey": "#6B7280",
        "warm-grey-light": "#8A8E97",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "720px",
        "prose-narrow": "640px",
      },
      boxShadow: {
        soft: "0 4px 16px rgba(42, 61, 95, 0.06)",
        "soft-lg": "0 8px 28px rgba(42, 61, 95, 0.08)",
      },
      borderRadius: {
        xl2: "20px",
      },
      animation: {
        "fade-up": "fadeUp 600ms ease-out both",
        "drift-slow": "drift 60s ease-in-out infinite",
        "drift-slower": "drift 90s ease-in-out infinite",
        "float-soft": "floatSoft 18s ease-in-out infinite",
        "fly-across": "flyAcross 80s linear infinite",
        "twinkle": "twinkle 7s ease-in-out infinite",
        "blink": "blink 520ms steps(2, start) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "50%": { transform: "translateX(20px) translateY(-12px)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flyAcross: {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(112%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
