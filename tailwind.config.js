module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1D3557',
        'medium-blue': '#457B9D',
        'light-blue': '#A8DADC',
        'light-green': '#F1FAEE',
        'medium-green': '#2A9D8F',
        red: '#E63946',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      pointerEvents: ['disabled'],
      backgroundColor: ['disabled'],
      backgroundOpacity: ['disabled'],
    },
  },
  plugins: [],
};
