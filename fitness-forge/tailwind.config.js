/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00", // Orange - energetic color for gym
        secondary: "#1A1A1A", // Almost black - strength and power
        accent: "#FFB800", // Gold/Yellow - achievement and motivation
        light: "#F5F5F5", // Light gray - clean, modern look
        dark: "#0A0A0A", // Black - intensity and focus
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}