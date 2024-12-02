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
       lightBeigeTheme: "#F2F3AE",
       orangeTheme: "#FF9B71",
       lightBlueTheme: "#95B8D1",
       darkBlueTheme: "#383F51",
      },
    },
  },
  plugins: [],
};
