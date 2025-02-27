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
      },
      screens: {
        'xxs': '360px',  // Extra små skärmar
        'xs': '475px',   // Mindre än 'sm' brytpunkten
        'sm': '640px',   // Standard brytpunkt för små skärmar
        'md': '768px',   // Medium skärmar
        'xl': '1280px',  // Extra stora skärmar
      },
      keyframes: {
      },
      colors: {
        orangeTheme: "#EF8532",
        yellowTheme: "#F0CD5F",
        whiteTheme: "#FAF3EB",
        blackTheme: "#251A09",
        pinkTheme: "#E49AE0"
      },
    },
  },
  plugins: [],
};
