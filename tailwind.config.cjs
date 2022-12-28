/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        spaceIn: "1rem",
        space: "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "emerald"],
  },
};
