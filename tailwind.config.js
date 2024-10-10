/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#1C2E3D",

        "primary-100": "#E8594E",
        "primary-200": "#73AFBA",
        "secondary-100": "#3C4A51",
      },
      fontFamily: {
        sfpro: ["SFPro", "sans-serif"],
        sftext: ["SFText", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "340px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
