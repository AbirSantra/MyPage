/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
      main: "#62f5ab",
      "main-dark": "#49bb78",
    },
    fontFamily: {
      Titillium: ["Titillium Web", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(10px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        "floating-div": "floating 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
