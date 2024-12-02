import { light } from '@mui/material/styles/createPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css", // Inkluderar din index.css i `src`
  ],
  theme: {
    extend: {
      colors: {
       lightBeigeTheme: "#FBE5C0",
       orangeTheme: "#F88379",
       lightBlueTheme: "#D0E6F0",
       darkBlueTheme: "#4C5D70",
      },
    },
  },
  plugins: [],
};
