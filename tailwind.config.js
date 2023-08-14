/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#0f2137",
          "200": "rgba(255, 255, 255, 0)",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(15, 33, 55, 0.8)",
        },
        crimson: "#ea3a60",
        darkslategray: "#343d48",
        gainsboro: "#e4e4e4",
        mediumslateblue: "#2563ff",
        midnightblue: "#02073e",
      },
      fontFamily: {
        "dm-sans": "'DM Sans'",
        poppins: "Poppins",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        "lexend-deca": "'Lexend Deca'",
        fontawesome: "FontAwesome",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lgi: "19px",
      mini: "15px",
      sm: "14px",
      xl: "20px",
      lg: "18px",
      "17xl": "36px",
      base: "16px",
      "3xl": "22px",
      "11xl": "30px",
      "29xl": "48px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
