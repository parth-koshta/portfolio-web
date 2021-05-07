module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: '#F78DA7',
      darkpink: '#61045F',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'manrope': ['Manrope'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
