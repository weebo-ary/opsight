/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        width: {
          '100': '100%',
          '120': '28rem',
          '128': '32rem',
          '144': '36rem', 
          '150': '38rem', 
          '160': '48rem', 
          '180': '54rem', 
          '200': '62rem', 
          '220': '70rem', 
          
        },
        height: {
          '100': '85vh',
          '110': '92vh'
        },
        screens: {
          'xs': '120px', 
          'sm': '480px', 
          'md': '800px', 
          'lg': '1024px', 
          'xl': '1280px', 
          // '2xl': '1536px', 
          // '3xl': '1920px', 
        },
    },
  },
  plugins: [],
}