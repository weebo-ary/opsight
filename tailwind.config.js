/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        width: {
          '128': '32rem',
          '144': '36rem', 
          '160': '48rem', 
        },
    },
  },
  plugins: [],
}