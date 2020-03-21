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
  plugins: [require("@tailwindcss/custom-forms")]
};
