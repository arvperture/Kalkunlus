/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-green-hover': '#1ed760',
        'spotify-bg': '#121212',
        'spotify-bg-light': '#191414',
        'spotify-surface': '#282828',
        'spotify-surface-light': '#404040',
        'spotify-text': '#FFFFFF',
        'spotify-text-secondary': '#B3B3B3',
        'spotify-text-subdued': '#717171',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
