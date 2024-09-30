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
          '90': '80vh',
          '100': '85vh',
          '110': '92vh',
          '120': '106vh',
          '150': '135vh',
          '160': '200vh'
        },
        screens: {
          'xs': '120px', 
          'sm': '430px', 
          'md': '800px', 
          'lg': '900px', 
          'xl': '1200px', 
          // '2xl': '1536px', 
          // '3xl': '1920px', 
        },
        animation: {
          marquee: 'marquee 20s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
    },
  },
  plugins: [],
}