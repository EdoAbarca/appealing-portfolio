/** @type {import('tailwindcss').Config} */

import tailwindScrolbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrolbar],
}