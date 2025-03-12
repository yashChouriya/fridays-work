/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5722', // Orange
          dark: '#E64A19',
          light: '#FFCCBC',
        },
        secondary: {
          DEFAULT: '#757575', // Grey
          dark: '#424242',
          light: '#BDBDBD',
        },
        accent: '#FFC107', // Amber
        background: '#FAFAFA',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};