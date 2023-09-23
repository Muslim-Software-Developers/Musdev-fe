const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/icons/hero-image.svg')",
        "auth-layout": "url('/icons/auth-layout.svg')",
      },
      boxShadow: {
        "3xl":
          "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
      },
      colors: {
        ...colors,
        primary: "#0D706E",
        neutral01: "#141414",
        neutral02: "#808080",
        neutral03: "#F9FAFB",
        writeBg: "#FDFDFD",
        neutral05: "#CBCBCB",
        secondary01: "#0D706E",
        greenHover: "#0D703C",
        draftGray: "#B6B6B6",
        dropDownBg: "rgba(147, 253, 197, 0.32)",
        dropDownColor: "#141414",
        lightGreenBg: "#F0FFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
