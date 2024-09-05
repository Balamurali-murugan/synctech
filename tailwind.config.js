/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aquamarine: {
          50: "#edfefe",
          100: "#d3f9fa",
          200: "#acf2f5",
          300: "#53e0ea",
          400: "#32d1de",
          500: "#16b4c4",
          600: "#1590a5",
          700: "#187486",
          800: "#1c5e6e",
          900: "#1c4e5d",
          950: "#0d343d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
