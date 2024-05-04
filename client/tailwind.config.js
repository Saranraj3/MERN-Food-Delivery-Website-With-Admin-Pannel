/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sedan: ["Sedan SC"],
        Arimo: ["Arimo"]
      },
      animation: {
        fade: 'fadeOut 3s ease-in-out '
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      })
    },
  },
  plugins: [],
}

