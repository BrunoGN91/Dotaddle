module.exports = {
  content: ["./index.html", 
  "./src/**/*.{jsx}",
  "./src/**"],
  theme: {
    extend: {
      animation: {
        fadeOut: 'fadeOut 600ms ease-in forwards'
      },
      keyframes: {
        fadeOut: {
          '0%': { 
            opacity: '1' 
          },
          '100%': { 
            opacity: '0' 
          },
        }
      }
    },
  },
  plugins: [],
}
