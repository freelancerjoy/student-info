/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A78E4",
        secondary: "#CCF2FD",
      },
    },
  },
  plugins: [require("daisyui")],
};
