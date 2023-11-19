/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gainsboro: '#F7F7F7',
        grayx: {
          0: '#484848',
          100: '#383838',
          200: '#6E6E6E',
        },
        lightGray: '#E1E1E1',
        white: {
          0: '#ffffff',
          100: '#FFFFFF',
          200: '#FDFDFD',
        },
        darkBlue: {
          100: '#6186B1',
          200: '#134A8B',
        },
      },
      boxShadow: {
        '3xl': ' 0px 1px 4px 0px rgba(91, 91, 91, 0.05), 0px 4px 16px 0px rgba(91, 91, 91, 0.05)',
        'button': '0px 4px 10px -2px rgba(0, 0, 0, 0.05), 0px 2px 2px -1px rgba(0, 0, 0, 0.10), 0px -1px 4px 0px rgba(0, 0, 0, 0.05) inset'
      }
    },
  },
  plugins: [],
}

