/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00',   // Energetic orange
        secondary: '#333333', // Dark gray
        accent: '#00B4D8',    // Cyan blue
        dark: '#1A1A1A',      // Almost black
        light: '#F5F5F5',     // Off-white
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}