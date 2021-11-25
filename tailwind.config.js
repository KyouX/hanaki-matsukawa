module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        verde: "#8CA178",
        verdeclaro: "#d0dbcf"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
