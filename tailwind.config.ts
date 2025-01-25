import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        },
      },
      fontFamily: {
        "circular-web": ["circular-web", "sans-serif"],
        general: ["general", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robet-regular", "sans-serif"],
        zentry: ["zentry", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
