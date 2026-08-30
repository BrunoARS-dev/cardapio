import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f3eb",
        ink: "#1c1b18",
        clay: "#a83f20",
        herb: "#2f6039",
        line: "#d9d1c4",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-cormorant)"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(28, 27, 24, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
