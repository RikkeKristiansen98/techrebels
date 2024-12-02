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
        pinkTheme: "#ca8787",
        darkGreen: "#475841",
      },
    },
  },
  plugins: [],
};
