module.exports = {
  content: ["./views/**/*.ejs", "./public/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        primary: '#e91e63',
        secondary: '#9c27b0',
        dark: '#0a0a0a',
        light: '#ffffff',
        accent: '#ffca28',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero.jpg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}