/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor:"#EDF1FD",
        textColor:"#3C4156",
        ctaColor:"#FF013D",
        ctaHover:"#cc0030"
      }
    },
   
  },
  plugins: [],
}

