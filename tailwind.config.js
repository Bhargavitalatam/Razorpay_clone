/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // Add this to include the root HTML file
    "./src/**/*.{html,js}"       // Keep this for other files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
