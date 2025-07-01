/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",   // opcional: activa modo oscuro vía clase 'dark'
  theme: {
    extend: {
        keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':   { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
