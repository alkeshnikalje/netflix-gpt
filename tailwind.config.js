/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        rgb: "rgb(40 40 40)",
      },
    },
  },
  plugins: [],
};
