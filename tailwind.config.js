/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'background': 'background',
      },
      fontFamily: {
        'open-sans': '"Open Sans", sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

