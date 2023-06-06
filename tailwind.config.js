/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        bgBanana: "url('/public/imgs/banana.jpg')",
        bgBook: "url('/public/imgs/book.jpg')",
        bgCar: "url('/public/imgs/car.jpg')",
        bgComputer: "url('/public/imgs/computer.jpg')",
      },
    },
  },
  plugins: [],
};
