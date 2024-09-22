/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#196CB9',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      fontFamily: {
        'standard': ['"Old Standard TT"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
