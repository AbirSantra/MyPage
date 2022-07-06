/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white-one": "#fefeff",
      "white-two": "#f7fafc",
      grey: "#edf2f6",
      "light-grey": "#7b889c",
      "dark-grey": "#4a5768",
      "light-black": "#2c2e33",
      "dark-black": "#25262a",
      green: "#62f5ab",
      "green-dark": "#49bb78",
    },
    fontFamily: {
      Titillium: ["Titillium Web", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
