/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        freshGreen: '#69AF1E',  // Light green
        darkGreen: '#10B981',   // Dark green
      }, 

    },
  },
  plugins: [],
}
