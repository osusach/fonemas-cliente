/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        c400: "400px",
        c450: "450px",
        c500: "500px",
        c550: "550px",
        c1400: "1400px",
        c1800: "1800px",
      },
      spacing: {
        16: "4rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        growShrink: "growShrink 0.5s ease-in-out",
        shake: "shake 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        growShrink: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
