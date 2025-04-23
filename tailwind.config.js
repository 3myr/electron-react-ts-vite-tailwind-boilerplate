/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          dark: '#202020',
          light: '#31363F'
        }
      }
    }
  }
}

