/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#020408",
        secondary: "#00D68F",
        success: "#009B31",
        info: "#2B7FFF",
        danger: "#EF4444",
        warning: "#FF6900",
        pink: "#F6339A",
        muted: "#94A3B8",
        light: "#F8FAFC",
        accent: "#003322",
        input: "#1E293B",
        border: "#1E293B",
        purple: "#AD46FF",
        ocean: "#00B8DB",
      },
      padding: {
        container: "16px",
      },
    },
  },
  plugins: [],
};
