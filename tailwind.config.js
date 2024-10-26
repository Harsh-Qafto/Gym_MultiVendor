/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#DD5405",
        secondary_color: "#FBFBFB",
        bg_color:"#FFFFFF"
      },
    },
  },
  plugins: [],
};
