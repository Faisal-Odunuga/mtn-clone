/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        mtn: "#ffcc01",
        specialBlack: "#202020",
        hover: "rgba(255, 204, 1, .6)",
      },
      boxShadow: {
        linkShadow: "inset 0px -200px 100px 0px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        shadowBg:
          "linear-gradient(180deg, rgba(32, 32, 32, 0.96), rgba(32, 32, 32, 0))",
        btnGradient: "linear-gradient(#FCD818, #F8C800)",
        headImage: "url('/src/assets/images/header.jpg')",
        quickLink: "url('/src/assets/images/quick-links.jpg')",
        fiveG: "url('/src/assets/images/router-5g.jpg')",
        fourG: "url('/src/assets/images/router-4g.jpg')",
        fibreX: "url('/src/assets/images/fibre-x.jpg')",
        getStarted: "url('/src/assets/images/get-started.jpg')",
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
