/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
       m:'360px',
       sm: '480px',
       md: '768px',
       lg: '1024px',
       xl: '1200px'
    },
    extend: {
      colors: {
        // primary: "#00c3c7",
        primary: "#0287a8",
        secondary: "#00c3c7",
        dark: "#ffcf22",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

