/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ["Inter", 'sans-serif']
    },
    extend: {
      colors: {
        "dashboard": '#1D1042',
        "dashboard-active": '#45269C',
        "slider-gray": '#EBEBEB',
        "neutral": "#B8B9BD",
        "slider-orange": '#FF5737',
        "primary": '#FBFCFB',
        "dull-white": "#FBFAFB",
        "slider-green": '#8BC488',
        "secondary": '#F3F5F7',
      },
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "768px",
      // => @media (min-width: 768px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [
require('tailwind-scrollbar-hide')
  ],
  darkMode: "class",
};
