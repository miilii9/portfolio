/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#FF705D",
      secondary: "#FFF9F7",
      dark: "#212032",
      light: "#FFFDFF",
      gray: "#9A9492",
    },
    fontFamily: {
      numerals: ["dananum", "sans-serif"],
      hamrah: ["hamrah", "sans-serif"],
    },

    extend: {
      keyframes: {
        jump: {
          "0%": { transform: "translate(-20px)" },
          "10%": { transform: "translate(20px)" },
          "20%": { transform: "translate(-20px)" },
          "30%": { transform: "translate(20px)" },
          "40%": { transform: "translate(-20px)" },
          "50%": { transform: "translate(20px)" },
          "60%": { transform: "translate(-20px)" },
          "70%": { transform: "translate(20px)" },
          "80%": { transform: "translate(-20px)" },
          "90%": { transform: "translate(20px)" },
          "100%": { transform: "translate(-20px)" },
        },
        bouncing: {
          "0%": { transform: "translateY(-20px)" },
          "10%": { transform: "translateY(20px)" },
          "20%": { transform: "translateY(-20px)" },
          "30%": { transform: "translateY(20px)" },
          "40%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(20px)" },
          "60%": { transform: "translateY(-20px)" },
          "70%": { transform: "translateY(20px)" },
          "80%": { transform: "translateY(-20px)" },
          "90%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        jumping: "jump 30s ease-in infinite",
        bouncing: "bouncing 30s ease-in infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
