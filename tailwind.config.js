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
          '50':'100vh',
          '90': '80vh',
          '100': '85vh',
          '110': '92vh',
          '120': '106vh',
          '150': '135vh',
          '160': '200vh'
        },
        screens: {
          'xs': '240px', 
          'sm': '400px',
          // => @media (min-width: 640px) { Tab }
    
          'md': '1024px',
          // => @media (min-width: 1024px) { Lap }
    
          'lg': '1280px',
          // => @media (min-width: 1280px) { Desk }
        },
        animation: {
          slideUp: 'slideUp 1s ease-out backwards',
          marquee: 'marquee 20s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
        },
    },
  },
  plugins: [],
}