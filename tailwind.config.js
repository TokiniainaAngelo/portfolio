/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#64ffda',
          dark: '#64ffda',
          light: '#0d9373',
        },
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        'slate-custom': {
          lightest: '#ccd6f6',
          light: '#a8b2d1',
          DEFAULT: '#8892b0',
          dark: '#495670',
        },
        surface: {
          light: '#f8fafc',
          'light-alt': '#f1f5f9',
          dark: '#0a192f',
          'dark-alt': '#112240',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
