

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerBg': `url("https://res.cloudinary.com/dxuxmr72e/image/upload/v1650905187/Bookstore/Banner/bannerimg_ax99iw.png)`,
        
      }
    },
  },
  plugins: [],

}