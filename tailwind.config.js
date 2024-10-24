/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      textColor: {
        "white-textColor": "white",
        "blue-textColor": "#1a8ec1",
        "green-textColor": "#50af31",
        "pink-textColor": "#ff6699",
        "yellow-textColor": "#fecc00",
        "red-textColor": "#ed1c24",
        "orange-textColor": "#ec6825",
        "purple-textColor": "#a84d98",
      }
    },
  },
  plugins: [],
}