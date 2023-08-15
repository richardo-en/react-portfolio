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
  },
  plugins: [],
}

