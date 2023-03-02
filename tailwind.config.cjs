/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,jsx,js}"],

  theme: {
    fontFamily: {
      inter: ["inter","serif","inherit"],
    },
    extend: {
      colors: {
        midnight: "#121063",
      },
    },
  },
  plugins: [],
}