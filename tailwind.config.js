/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      boxShadow:{
        "box-shadow": "0 0 5px 4px #eee",
        "shadow": "0 0 10px 8px #eee",
      },
      backgroundColor: {
        'bg-grey': '#37424E',
        "bg-blue":"#2d343c",
        "white_bgColor": "#fff",
        "bg-header": "#37414F",
        "bg-green": "#50af31",
        "hoverBackgroundColor": "#f5f5f59a",
      },
      textColor: {
        'wrt_color': "#5C7597",
        "black-color": "#000",
        "white-textColor": "white",
        "blue-textColor": "#1a8ec1",
        "green-textColor": "#50af31",
        "pink-textColor": "#ff6699",
        "yellow-textColor": "#fecc00",
        "red-textColor": "#ed1c24",
        "orange-textColor": "#ec6825",
        "purple-textColor": "#a84d98",
      },
      borderColor: {
        'border-grey': "#5D7799",
      },
    },
  },
  plugins: [],
};
