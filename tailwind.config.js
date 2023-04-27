/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      mds: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-bg-desktop":
          'linear-gradient(to bottom, #0005 , #0002) ,url("../img/desktop/image-hero.jpg")',
        "hero-bg-mobile":
          'linear-gradient(to bottom, #0005 , #0002) ,url("../img/mobile/image-hero.jpg")',
        "feature-bg-desktop": 'url("../img/desktop/image-interactive.jpg")',
        "feature-bg-mobile": 'url("../img/mobile/image-interactive.jpg")',
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
    },
  },
  plugins: [],
};
