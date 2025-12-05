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
        dark: "#0F172A",
        primary: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
        accent: {
          pink: "#EC4899",
          purple: "#A855F7",
          yellow: "#FACC15",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-glow":
          "radial-gradient(1200px 800px at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(15,23,42,0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
