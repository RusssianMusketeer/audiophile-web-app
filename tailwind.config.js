/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope"],
      },
    },
    colors: {
      hover: "#d87d4a",
      black: "#000000",
      white: "#FFFFFF",
      light_black: "#101010",
      dark_grey: "#979797",
      grey: "#f1f1f1",
      jetGrey: "#3d3d3d",
      text:"rgba(0,0,0,0.5)",
      accent: "#d87d4a"
    },
  },
  plugins: [],
};
