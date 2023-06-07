/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        bgBanana: "url('/imgs/banana.jpg')",
        bgBook: "url('/imgs/book.jpg')",
        bgCar: "url('/imgs/car.jpg')",
        bgComputer: "url('/imgs/computer.jpg')",
      },
    },
  },
  plugins: [],
};
