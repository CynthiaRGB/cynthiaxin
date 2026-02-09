import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          offwhite: "#FAFCFD",
          "light-gray": "#E6E9EC",
        },
        font: {
          black: "#333333",
          gray: "#858E97",
        },
      },
      fontFamily: {
        display: ["var(--font-martina)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "h1": ["48px", { lineHeight: "1" }],
        "h2": ["32px", { lineHeight: "1" }],
        "h3": ["24px", { lineHeight: "1" }],
        "body1": ["16px", { lineHeight: "1.4" }],
        "h4": ["16px", { lineHeight: "1", letterSpacing: "0.05em" }],
      },
      maxWidth: {
        reading: "1800px",
        "text-col": "560px",
      },
      spacing: {
        gutter: "24px",
        "gutter-mobile": "16px",
        "col-gap": "56px",
      },
      borderRadius: {
        DEFAULT: "0",
      },
      boxShadow: {
        none: "none",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1800px",
    },
  },
  plugins: [],
};

export default config;
