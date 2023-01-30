/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        400: ['Inter400'],
        500: ['Inter500'],
        600: ['Inter600'],
        700: ['Inter700'],
        900: ['Inter900'],
      },
    },
  },
  plugins: [],
}
