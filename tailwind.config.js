/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "Dark-Blue": "hsl(209, 23%, 22%)",
      "Very-Dark-Blue1": "hsl(207, 26%, 17%)",
      "Very-Dark-Blue2": "hsl(200, 15%, 8%)",
      "Dark-Gray": "hsl(0, 0%, 52%)",
      "Very-Light-Gray": "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
    extend: {
      gridTemplateColumns: {
        // Custom grids
        country: "repeat(auto-fit, minmax(20rem, 1fr))",
        "country-details": "repeat(auto-fit, minmax(25rem, 1fr))",
      },
    },
  },
  plugins: [],
};
