/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backPoster': "url('src/assets/backPoster.png')", 
      },
    },
  },
  plugins: [],
};
