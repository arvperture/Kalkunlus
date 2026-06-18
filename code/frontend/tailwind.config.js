/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kalkun-olive': '#7e8d5f',
        'kalkun-olive-light': '#9cb075',
        'kalkun-brown': '#c8b6a6',
        'kalkun-brown-light': '#e4d5c7',
        'kalkun-grey': '#f0f0f0',
        'kalkun-dark': '#2c2c2c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
