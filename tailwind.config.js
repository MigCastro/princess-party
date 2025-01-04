/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fcb2a7', // 
        secondary: '#D1D5DB', // Light gray
        dark: '#1F2937', // Dark gray for text
        light: '#F3F4F6', // Light gray for background
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'custom-sm': '1035px', // Define the custom breakpoint at 450px
      },
    },
  },
  plugins: [],
}
