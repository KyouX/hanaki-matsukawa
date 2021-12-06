module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        verde: "#8CA178",
        verdeclaro: "#d0dbcf",
        verdemedio: "#bec9bd",
        beige: "#f9f7f0"
      },
      fontFamily: {
        paddington: ["Paddington", "Helvetica", "Arial", "sans-serif"],
        palosecomedium: ["Paloseco medium", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
