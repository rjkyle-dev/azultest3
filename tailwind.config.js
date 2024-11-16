/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./src/pages/**/*.{js,jsx,tsx,mdx}",
    "./src/components/**/*.{js,jsx,tsx,mdx}",
    "./src/app/**/*.{js,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,tsx,mdx}", // Or if using `src` directory
  ],
  darkMode: "class",
  theme: {
    // screens: {
    //    m:'360px',
    //    sm: '480px',
    //    md: '768px',
    //    lg: '1024px',
    //    xl: '1200px'
    // },

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
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Adding the CSS variables at the :root level
  addBase({
    ":root": newVars,
  });
}