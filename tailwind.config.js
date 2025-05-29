export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#0f172a", // dark slate
        accent: "#7c3aed",     // purple
        secondary: "#38bdf8",  // sky blue
      },
    },
  },
  plugins: [],
}