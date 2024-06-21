/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        0.5: "2px",
        "2screen": "200vh",
      },
      colors: {
        antwhite: "antiquewhite",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
