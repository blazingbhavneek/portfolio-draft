export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              "playfair": ["Playfair Display", 'serif'],
              'lato': ["Lato", 'sans-serif']
          },

          animation: {
            float: 'float 2s ease-in-out infinite',
          },    

          keyframes: {
            float: {
              '0%, 100%': {
                transform: 'translateY(-2px)'
              },
            
              '50%': {
                transform: 'translateY(2px)'
              }
            }
          }
      },
  },
  plugins: [],
}