/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        "white-lighter": "#e3f5ff",
        "extrawhite": "#c7eaff",
        "testcolor" : "#cf8d41",
        "green-custom" : "#129874",
        "mainelement" : "#beab9c"

      },
    },
    fontFamily: {
      'gloock': ['Gloock'],
      'inconsolata': ['Inconsolata'],
     },
     zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
      'auto': 'auto',
    },
    gridTemplateRows: {
      // Simple 8 row grid
     '3': 'repeat(3, minmax(0, 0.5fr))',
    }
  },
  plugins: [],
}

