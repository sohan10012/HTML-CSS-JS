/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: ["focus"],
      colors: {
        customGreen: "rgb(54, 164, 32)",
        customBlue: "#2563eb",
        customwhite: "f2f4f7",
        specialgreen: "rgb(66, 183, 42)",
        specialblue: "rgb(8, 102, 255)",
      },
      margin: {
        "10p": "10%",
        "13p": "13%",
        "20p": "20%",
        "28p": "28%",
        "30p": "30%",
        "25p": "25%",
        "15p": "15%",
        "24p": "24%",
        "35p": "35%",
        "26p": "26%",
      },
      screens: {
        "lg-xl": { min: "1150px", max: "1279px" },
        "xl-2xl": { min: "1400px", max: "1600px" },
        "2xl-3xl": { min: "1601px", max: "1900px" },
      },
    },
  },
  plugins: [],
};

