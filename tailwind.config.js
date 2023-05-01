/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
// to remove the build warning, can be remove in the future
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "giants-orange": "#F74335",
        "oxford-blue": "#24365E",
        "rich-black": "#262626",
        "shady-white": "#FBFFFD",
        "pure-white": "#FFFFFF",
        "light-gray": "#EAEAEA",
        "darker-gray": "#666666",

        "sgbus-green": "#81D741",
        seasalt: "#FAFAFA",
        silver: "#A8A4A4",
        ...colors,
        // white: "#FBFFFD",
        // black: "#262626",
        // primary: "#24365E",
        // secondary: "#F74335",
        // neutral1: "#EAEAEA",
        // neutral2: "#666666",
        // bgColor: "#FFFFFF",

        // "giants-orange": "#FA611E",
        // "oxford-blue": "#171F32",
        // "rich-black": "#101726",
        // "sgbus-green": "#81D741",
        // seasalt: "#FAFAFA",
        // silver: "#A8A4A4",
      },
    },
  },
  plugins: [],
};
