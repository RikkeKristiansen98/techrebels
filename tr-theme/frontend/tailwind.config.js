import { light } from "@mui/material/styles/createPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css", // Inkluderar din index.css i `src`
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite", // Default spin animation
        customSpin: "customSpin 1.5s ease-in-out infinite", // Custom animation
      },
      keyframes: {
        customSpin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        orangeTheme: "#F1AB86",
        greenTheme: "#A5C882",
        blueTheme: "#16697A",
      },
    },
  },
  plugins: [],
};
