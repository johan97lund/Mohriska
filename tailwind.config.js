/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C1014",
        surface: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.10)",
        text: "#FCF6EA",
        muted: "rgba(252,246,234,0.70)",
        accent: "#F49E0F"
      },
      fontFamily: {
        heading: ["var(--font-space)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 25px rgba(244, 158, 15, 0.35)",
        card: "0 16px 40px rgba(0,0,0,0.4)"
      },
      borderRadius: {
        xl: "16px"
      }
    }
  },
  plugins: []
};
