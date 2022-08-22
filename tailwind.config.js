/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sodosans": ["SoDoSans", "sans-serif"],
        "helvetica": ["Helvetica", "sans-serif"]
      }
    },
  },
  plugins: [],
}
