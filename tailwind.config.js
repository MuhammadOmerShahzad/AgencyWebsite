/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#42e49b',
          2: '#02ffe2',
        },
        gradient: {
          1: '#2e838e',
          2: '#0088d8',
        },
        // Custom color variations for different shades
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#42e49b', // Primary color 1
          600: '#2e838e', // Gradient color 1
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#02ffe2', // Primary color 2
          600: '#0088d8', // Gradient color 2
          700: '#0891b2',
          800: '#0e7490',
          900: '#164e63',
        },
      },
    },
  },
  plugins: [],
};
