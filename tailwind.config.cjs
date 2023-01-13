/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#213F7D",
        subprimary: "#545F7D",
        secondary: "#39CDCC",
      },
    },
  },
  plugins: [],
};
