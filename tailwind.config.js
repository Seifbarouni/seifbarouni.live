module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'eerie-black': '#110c11',
        'cyan': '#00ffff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
