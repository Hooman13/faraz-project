/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', ...fontFamily.sans],
      },
      colors: {
        primary: {
          200: '#DDF0FC',
          300: '#0C73B8',
          400: '#164BC4',
          500: '#2A447F',
        },
        secondary: {
          200: '#F7E4C2',
          300: '#FBB030',
          400: '#F89633',
          500: '#F79633',
        },
        'santGreen': '#42D90D'
      }
    },
  },
  plugins: [require("daisyui")],
}