

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "MainBlue": "rgb(20, 26, 34)"
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'sans-serif'] 
      },
    },
  },
  plugins: [require("daisyui")],
}
