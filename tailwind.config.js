export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              "playfair": ["Playfair Display", 'serif'],
              'lato': ["Lato", 'sans-serif'],
              'banger': ["Bangers", 'regular']
          },
      },
  },
  plugins: [],
}