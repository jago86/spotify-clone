/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green':{
          'primary': '#1DCF5D',
          'secondary': '#1FDC62',
        },
        'light': {
          'primary': '#fff',
          'secondary': '#a7a7a7',
        },
        'dark': {
          'darker': '#121212',
          DEFAULT: '#181818',
          'light': '#282828',
        },
      },
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
