/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color: {
          whity: "#efefef",
          primary: "#0059ff",
          accent: "#ffc639",
          secondary: "#393e46",
          dark: "#222831",
        },
      },
      screens: {
        "tablet-l": "992px",
        hp: "576px",
        hmin: "425px",
        minni: "375px",
        mini: "320px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
