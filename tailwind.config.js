/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./src/assets/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db", 
        secondary: "#2ecc71", 
        contrast: "#000000", 
      },
      fontSize: {
        tiny: "0.75rem",
        base: "1rem",
        large: "1.5rem",
      },
      spacing: {
        128: "32rem", 
        144: "36rem",
      },
    },
  },
  plugins: [

  ],
};
