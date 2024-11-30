/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stretchTop: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
        stretchBottom: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "stretch-top": "stretchTop 0.4s ease-out",
        "stretch-bottom": "stretchBottom 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
