/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          DEFAULT: '#1e3a8a', // blue-900
          dark: '#172554', // blue-950
        },
        secondary: {
          light: '#fcd34d', // amber-300
          DEFAULT: '#f59e0b', // amber-500
          dark: '#b45309', // amber-700
        },
        accent: '#eab308', // yellow-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or system UI
      }
    },
  },
  plugins: [],
}
