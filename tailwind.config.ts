import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04060b",
          900: "#070b14",
          800: "#0b1220",
          700: "#111a2e",
        },
        line: {
          DEFAULT: "rgba(148, 163, 184, 0.14)",
          strong: "rgba(148, 163, 184, 0.3)",
        },
        paper: "#e9edf5",
        mute: "#98a4b8",
        cyan: {
          DEFAULT: "#22d3ee",
          soft: "#67e8f9",
        },
        violet: {
          DEFAULT: "#8b7cf6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.8)" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
