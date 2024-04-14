/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // text stroke 
      textStrokeColor: theme => theme('colors'),
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      colors: {
        'orange' : '#FF8702',
      },
    },
  },
  plugins: [],
}
