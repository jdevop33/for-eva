import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // SOPHISTICATED PRIME STRENGTH PALETTE
        prime: {
          50: "#f8fafc", // Whisper White
          100: "#f1f5f9", // Cloud Gray
          200: "#e2e8f0", // Silver Mist
          300: "#cbd5e1", // Dove Gray
          400: "#94a3b8", // Steel Blue
          500: "#64748b", // Charcoal Blue
          600: "#475569", // Deep Slate
          700: "#334155", // Midnight Blue
          800: "#1e293b", // Rich Navy
          900: "#0f172a", // Obsidian
        },
        sage: {
          50: "#f0fdf4", // Mint Whisper
          100: "#dcfce7", // Fresh Mint
          200: "#bbf7d0", // Soft Sage
          300: "#86efac", // Light Sage
          400: "#4ade80", // Sage Green
          500: "#22c55e", // Forest Sage
          600: "#16a34a", // Deep Sage
          700: "#15803d", // Rich Forest
          800: "#166534", // Dark Forest
          900: "#14532d", // Deep Forest
        },
        ocean: {
          50: "#eff6ff", // Sky Whisper
          100: "#dbeafe", // Light Sky
          200: "#bfdbfe", // Soft Ocean
          300: "#93c5fd", // Light Ocean
          400: "#60a5fa", // Ocean Blue
          500: "#3b82f6", // Deep Ocean
          600: "#2563eb", // Rich Ocean
          700: "#1d4ed8", // Navy Ocean
          800: "#1e40af", // Deep Navy
          900: "#1e3a8a", // Midnight Ocean
        },
        warmth: {
          50: "#fefce8", // Cream Whisper
          100: "#fef3c7", // Warm Cream
          200: "#fde68a", // Soft Gold
          300: "#fcd34d", // Light Gold
          400: "#fbbf24", // Warm Gold
          500: "#f59e0b", // Rich Gold
          600: "#d97706", // Deep Gold
          700: "#b45309", // Bronze
          800: "#92400e", // Rich Bronze
          900: "#78350f", // Deep Bronze
        },
        rose: {
          50: "#fdf2f8", // Blush Whisper
          100: "#fce7f3", // Soft Blush
          200: "#fbcfe8", // Light Rose
          300: "#f9a8d4", // Rose Pink
          400: "#f472b6", // Warm Rose
          500: "#ec4899", // Rich Rose
          600: "#db2777", // Deep Rose
          700: "#be185d", // Wine Rose
          800: "#9d174d", // Deep Wine
          900: "#831843", // Rich Wine
        },
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
