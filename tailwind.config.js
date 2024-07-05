const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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

