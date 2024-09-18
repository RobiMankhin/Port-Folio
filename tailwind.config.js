/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        profile_animate: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
        "up-down": {
          "0%, 100%": { transform: "translateY(0)" }, // No movement at the start and end
          "50%": { transform: "translateY(5px)" }, // Move up slightly at the midpoint
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "up-down-hover": "up-down 1s ease-in-out infinite",
        spin: "spin 2.5s linear infinite",
        profile: "profile_animate 7s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
