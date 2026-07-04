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
        brand: {
          DEFAULT: "#0B2B26",
          dark: "#071F1B",
          light: "#0D3A33",
        },
        gold: {
          DEFAULT: "#C5A059",
          50: "#fdf8ef",
          100: "#f9eed9",
          200: "#f2d9a8",
          300: "#e8c070",
          400: "#C5A059",
          500: "#b08d4a",
          600: "#967640",
        },
        cream: {
          50: "#FAF8F5",
          100: "#F5F1EB",
          200: "#EBE5DA",
        },
        emerald: {
          950: "#0B2B26",
          900: "#0D3A33",
          800: "#115E4A",
          700: "#047857",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 43, 38, 0.08)",
        nav: "0 2px 20px rgba(11, 43, 38, 0.08)",
        card: "0 4px 24px rgba(11, 43, 38, 0.07)",
        elevated: "0 12px 40px rgba(11, 43, 38, 0.12)",
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
