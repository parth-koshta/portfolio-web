module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: '#F78DA7',
      darkpink: '#61045F',
      titlegrey: '#363636'
    },
    screens: {
      'xs': '520px',
      
      'xxs': '420px',
      
      'xxxs': '320px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'manrope': ['Manrope'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
