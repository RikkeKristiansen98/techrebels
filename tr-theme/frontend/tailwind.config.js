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
        'slide-in-right': 'slideInRight 1.7s ease-out forwards',
        'spin-slow': 'spin 4s linear infinite',
        // Ny animation
        'slide-in-right-rotate': 'slideInRightWithRotate 1s ease-out forwards',
      },
      screens: {
        'xxs': '360px',  // Extra små skärmar
        'xs': '475px',   // Mindre än 'sm' brytpunkten
        'sm': '640px',   // Standard brytpunkt för små skärmar
        'md': '770px',   // Medium skärmar
        'lg': '1024px',  // Stora skärmar
        'xl': '1280px',  // Extra stora skärmar
      },
      keyframes: {
        // Tidigare animeringar
        customSpin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },  // Startar utanför till höger
          '100%': { transform: 'translateX(0)', opacity: 1 },    // Slutar på sin plats
        },
        // Ny slide-in-right med rotation
        slideInRightWithRotate: {
          '0%': { transform: 'translateX(100%) rotate(0deg)'},  // Startar till höger, ingen rotation
          '100%': { transform: 'translateX(0) rotate(12deg)'}, // Flyttar in, roterar ett helt varv
        },
      },
      colors: {
        orangeTheme: "#F2A45B",
        greenTheme: "#A5C882",
        blueTheme: "#84CDFA",
        purpleTheme: "#996AD9",
        pinkTheme: "#F095C1"
      },
    },
  },
  plugins: [],
};
