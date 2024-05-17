/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "rgb(11, 19, 30)",
          light: "rgb(53, 69, 94)",
          DEFAULT: "rgb(32, 43, 59)",
        },
        secondary: {
          white: "#dde0e4ff",
          light: "#c4cad3ff",
          DEFAULT: "#9399a2ff",
        },
        accent: {
          blue: "rgb(0, 149, 255)",
        },
        line: "#1E2D3D",
      },
      fontSize: {
        headline: [
          "40px",
          {
            lineHeight: "50px",
            fontWeight: "600",
          },
        ],
        valueHeadline: [
          "64px",
          {
            lineHeight: "100px",
            fontWeight: "600",
          },
        ],
        subHeadline: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        label: [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        value: [
          "32px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('~/assets/images/background/bg.jpg')",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translate(3px, 0)",
          },
          "50%": {
            transform: "translate(-3px, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 150ms 2 linear",
      },
    },
  },
  plugins: [],
};
