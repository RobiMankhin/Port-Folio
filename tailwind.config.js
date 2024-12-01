/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
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
        profile: "profile_animate 7s ease-in-out infinite 1s",
        "up-down-hover": "up-down 1s ease-in-out infinite",
        spin: "spin 2.5s linear infinite",
        fade: "fade_in 1.5s ease-in forwards",
        scale: "scale_up 0.3s ease-in-out",
      },
      colors: {
        // Custom Colors
        darkBackground: "#1E293B", // Dark mode background
        darkText: "#CBD5E1", // Light text for dark mode
        lightBackground: "#F8FAFC", // Light mode background
        lightText: "#1E293B", // Dark text for light mode
      },
    },
  },
  plugins: [],
};
