/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E6D3',
          DEFAULT: '#D4A574',
          dark: '#B88647',
        },
        beige: {
          light: '#F5E6D3',
          DEFAULT: '#E8D5B7',
          dark: '#D4A574',
        },
        purple: {
          light: '#7C3AED',
          DEFAULT: '#6B46C1',
          dark: '#4C1D95',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

