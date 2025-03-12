/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors:{
        "navbar":'',
        "bgColor":'',
        'text':'',
        'tertiary':''
      },
      gridTemplateColumns:{
        'shop':'1fr 3fr 1fr 1fr 1fr 1fr'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
