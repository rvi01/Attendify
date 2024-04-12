/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#001270',
        passWordTextColor: ' #535255',
        formFontColor: '#4A4543',
        placeHolderColor: '#808080',
        troubleLogging: '#252525D9',
        blueBackgroundColor: '#F9F9F9',
      },
    },
  },
  plugins: [],
};
