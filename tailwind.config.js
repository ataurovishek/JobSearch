/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'blueColor':'#492E87',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#f7f8f9',
        'textcolor':'#252b36'
      }
    },
  },
  plugins: [],
}

