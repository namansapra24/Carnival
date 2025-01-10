/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all source files are covered
  theme: {
    extend: {
      fontFamily: {
        ramaraja: ['Ramaraja', 'serif'],  // Add Ramaraja font
        roboto: ['Roboto', 'sans-serif'],  // Add Roboto font
      },
    },
  },
  plugins: [],
});