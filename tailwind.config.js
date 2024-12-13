/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        bar_gap: "max(26.4px, calc(26.4px + 100vw * 0.0339))",
      },
    },
  },
  plugins: [],
};
