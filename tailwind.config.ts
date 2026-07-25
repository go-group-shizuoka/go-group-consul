import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        serif: ["'Shippori Mincho'", "var(--font-noto-serif)", "Georgia", "serif"],
      },
      colors: {
        // デザイントークン（globals.css の CSS Variables を参照）
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        caption: "var(--text-caption)",
        faint: "var(--text-faint)",
        heading: {
          DEFAULT: "var(--heading-primary)",
          secondary: "var(--heading-secondary)",
        },
        line: {
          DEFAULT: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        // orange-500をアクセントカラー#D35400に上書き
        orange: {
          400: "#E05800",
          500: "#D35400",
          600: "#B84A00",
        },
        brand: {
          black: "#1a1a1a",
          dark: "#111111",
          gray: "#262626",
          orange: "#D35400",
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
