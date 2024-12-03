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
       orangeTheme: "#F1AB86",
       greenTheme: "#A5C882",
       blueTheme: "#16697A",
      },
    },
  },
  plugins: [],
};
