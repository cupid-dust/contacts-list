const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './views/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}',
  ],
  media: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        'true-gray': colors.neutral,
        'g-100': '#141414',
        'g-90': '#191919',
        'g-80': '#1E1E1E',
        'g-70': '#232323',
        'g-60': '#282828',
        'g-50': '#2D2D2D',
        'g-40': '#323232',
        'g-30': '#373737',
        'g-20': '#3C3C3C',
        'g-10': '#414141',
      },
      fontFamily: {
        primary: ['Glysa', ...defaultTheme.fontFamily.sans],
        secondary: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '4xl': '2rem',
      },

      lineHeight: {
        11: '3rem',
        12: '3.5rem',
      },
      letterSpacing: {
        1: '0.01rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
