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
        // Tidigare animationer
        spin: "spin 1s linear infinite",
        customSpin: "customSpin 1.5s ease-in-out infinite",
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-left-delay': 'slideInLeft 1.5s ease-out forwards',
        'delay-1500': '1.5s',
        'slide-in-right': 'slideInRight 1.7s ease-out forwards',
        'spin-slow': 'spin 4s linear infinite',
        // Ny animation
        'slide-in-right-rotate': 'slideInRightWithRotate 1s ease-out forwards',
        vibrate: 'vibrate 0.2s linear infinite',
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
