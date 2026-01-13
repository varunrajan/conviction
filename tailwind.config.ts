import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          accent: "#FFEB3B",
          DEFAULT: "#FFEB3B",
          400: "#FFEB3B",
          300: "#FFF176",
          500: "#FFC107",
        },
      },
    },
  },
  plugins: [],
};
export default config;

