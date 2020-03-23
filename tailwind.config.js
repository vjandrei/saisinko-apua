module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        white: "var(--color-white)"
      }
    },
    fontFamily: {
      display: ["Montserrat"]
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-alpha")({
      modules: {
        backgroundColors: []
      },
      alpha: {
        "25": 0.25,
        "50": 0.5,
        "75": 0.75
      }
    })
  ]
};
