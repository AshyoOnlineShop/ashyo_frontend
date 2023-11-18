/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        global_blue: "#134E9B",
        bg_grey: "#EBEFF3",
        text_grey: "#545D6A",
      },
    },
  },
  plugins: [],
};
