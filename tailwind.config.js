/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blue : {
          500 :"#146EB4" ,
          700 : "#0E4F82"
        } ,
        lightGray : "#F2F2F2" ,
        grayText : "#4D4D4D",
        green : "#22C55E"
      }
    },
  },
  plugins: [],
}