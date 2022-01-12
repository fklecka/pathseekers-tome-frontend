module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      headline: "'Goudy Bookletter 1911'",
    },
    extend: {
      fontSize: {
        xs2: ".3rem",
      },
      borderStyle: ["responsive", "hover"],
      colors: {
        dark: "#232A33",
        bg: "#2C3540",
        font: "rgba(256,256,256,0.87)",
        highlight: "rgba(256,256,256,0.05)",
        card: "#565D66",
        cardlight: "rgba(256,256,256,0.15)",
        orange: "#F28241",
        green: "#33A162",
      },
      padding: {
        50: "50px",
      },
      inset: {
        38: "38px",
      },
      width: {
        150: "150px",
        400: "400px",
        512: "512px",
        758: "758px",
      },
      height: {
        426: "426px",
        278: "278px",
        app: "calc(100vh - 64px)",
      },
      boxShadow: {
        bottom: "0px 5px 5px #00000020",
        right: "5px 5px 5px #00000020",
        top: "5px -5px 5px #00000020",
        preview: "0px 0px 20px #000000",
        card: "5px 10px 5px #00000020",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(256px, 1fr))",
        "auto-fill": "repeat(auto-fit, minmax(256px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(256px, 1fr))",
        "auto-fill": "repeat(auto-fit, minmax(256px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
