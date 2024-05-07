/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '200px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sedan: ["Sedan SC"],
        Arimo: ["Arimo"]
      },
    },
  },
  plugins: [],
}

