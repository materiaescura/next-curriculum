module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#808080'
      },
      backgroundImage: {
        'separator': "url('/images/separator.svg')"
      }
    },
  },
  plugins: [],
}