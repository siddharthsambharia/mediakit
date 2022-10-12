/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CirculaBold: ["Circula-Std-Bold", "sans-serif"],
        CirculaBook: ["Circula-Std-Book", "sans-serif"],
        CirculaMedium: ["Circula-Std-Medium", "sans-serif"],
    
      },
    },
  },
  plugins: [],
}
