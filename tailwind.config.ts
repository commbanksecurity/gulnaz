import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF5F7",
          100: "#FFE8EF",
          200: "#FFD3DF",
          300: "#FBAEC5",
          400: "#F47DA3",
          500: "#E7467E",
          600: "#D32A66",
          700: "#B31B50",
          800: "#941944",
          900: "#7C193C",
          950: "#49071F",
        },
        champagne: {
          100: "#FDFCF7",
          200: "#FAF6EA",
          300: "#F5ECD0",
          400: "#E8D8A7",
          500: "#D4BC7B",
        },
        plum: {
          800: "#361626",
          900: "#220C17",
          950: "#17060F",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "girly-gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFE4EC 50%, #FFF5F9 100%)",
        "glam-gradient": "linear-gradient(135deg, #FF69B4 0%, #DA70D6 50%, #FF1493 100%)",
        "rose-glow": "radial-gradient(circle at 50% 0%, rgba(244, 114, 182, 0.25) 0%, rgba(255, 255, 255, 0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
