/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        success: "#009B31",
        danger: "#EA1317",
        muted: "#777777",
        text: "#303030",
        success_bg: "#E1ECDA",
        danger_bg: "#F6E3E3",
        input_bg: "#F7F7F7",
        Background_alt: "#EDEDED",
        btn_inactive: "#E0E0E0",
        btn_onclick: "#303030",
      },
    },
  },
  plugins: [],
};
