/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gainsboro: "#F7F7F7",
        grayx: {
          0: "#484848",
          100: "#383838",
          200: "#6E6E6E",
          300: "#CDCDCD",
          400: "#565656",
          500: "#505050",
          600:"#A5A5A5",
          700:"#E2E8F0",
        },
        lightGray: "#E1E1E1",
        white: {
          0: "#ffffff",
          100: "#FFFFFF",
          200: "#FDFDFD",
          300: "#F3F3F3",
        },
        yellowx: {
          100: "#D3FFDD",
          200: "#2AC64C",
        },
        darkBlue: {
          100: "#6186B1",
          200: "#134A8B",
        },
        lightBlue: {
          100: "#829FC1",
          200: "#D5DFEA",
        },
      },
      borderRadius: {
        "4xl": "40px",
      },
      boxShadow: {
        "3xl":
          " 0px 1px 4px 0px rgba(91, 91, 91, 0.05), 0px 4px 16px 0px rgba(91, 91, 91, 0.05)",
        button:
          "0px 4px 10px -2px rgba(0, 0, 0, 0.05), 0px 2px 2px -1px rgba(0, 0, 0, 0.10), 0px -1px 4px 0px rgba(0, 0, 0, 0.05) inset",
      },
    },
  },
  plugins: [],
};
