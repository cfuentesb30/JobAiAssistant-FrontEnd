/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1e3a8a',
        'navy': '#1e40af',
        'soft-green': '#10b981',
        'teal': '#14b8a6',
        'light-gray': '#f8fafc',
        'medium-gray': '#e2e8f0',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}