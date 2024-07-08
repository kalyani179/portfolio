const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '600px'},
      // => @media (max-width: 767px) { ... }

      'md': {'min': '601px','max':'900px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '900px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1201px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }


      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '576px'},
      // // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        lato:["'Lato'","sans-serif"],
        merriweather:["'Merriweather'","serif"],
        playfairdisplay:["'Playfair Display'","serif"]
      },
  },
  },
  plugins: [
    createThemes({
      light:{
        
      },
      dark:{
        
      }
    })
  ],
}

