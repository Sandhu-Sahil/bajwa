module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: { 900: "var(--black_900)", "900_3f": "var(--black_900_3f)" },
        blue: { 800: "var(--blue_800)" },
        blue_gray: { 100: "var(--blue_gray_100)", 700: "var(--blue_gray_700)", 800: "var(--blue_gray_800)" },
        gray: {
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "300_01": "var(--gray_300_01)",
          "400_cc": "var(--gray_400_cc)",
          "500_3f": "var(--gray_500_3f)"
        },
        indigo: { 900: "var(--indigo_900)" },
        light_green: { 600: "var(--light_green_600)" },
        orange: { 300: "var(--orange_300)" },
        red: { 900: "var(--red_900)" },
        white: { a700: "var(--white_a700)" }
      },
      boxShadow: { xs: "0 4px 10px #a5a5a53f" },
      fontFamily: { lato: "Lato" },
      textShadow: { ts: "0px 4px 2px #0000003f" }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
