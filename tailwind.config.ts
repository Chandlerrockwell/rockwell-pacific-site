import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pacific palette: black, ivory, deep ocean blue
        ink: "#0a0a0a",
        bone: "#fafaf7",
        sand: "#f0ece2",
        pacific: {
          DEFAULT: "#1f4a6b",
          deep: "#102d44",
          mist: "#7da6c1",
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['var(--font-inter-tight)', '"Inter Tight"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
