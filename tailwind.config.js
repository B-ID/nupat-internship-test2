/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dashboard": '#1D1042',
        "dashboard-active": '#45269C',
        "slider-gray": '#EBEBEB',
        "slider-orange": '#FF5737',
        "primary": '#FBFCFB',
        "slider-green": '#8BC488',
        "dull-white": "#FAF9FA",
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
  plugins: [],
  darkMode: "class",
};
