import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#08050F",
        deep: "#0D0819",
        deep2: "#120B22",
        surface: "rgba(255,255,255,0.045)",
        surfaceHi: "rgba(255,255,255,0.08)",
        line: "rgba(255,255,255,0.09)",
        ink: "#ECE7F7",
        muted: "#9C90B8",
        muted2: "#6F6489",
        lavender: {
          50: "#F5F0FF",
          100: "#E9DFFF",
          200: "#D9C9FF",
          300: "#C3ABFF",
          400: "#AB8CFF",
          500: "#8B5CF6",
          600: "#7440E0",
          700: "#5C2FB8",
        },
        violet: "#8B5CF6",
        magenta: "#C86FF2",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        fa: ["var(--font-vazirmatn)", "Tahoma", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(139,92,246,0.16) 0%, rgba(139,92,246,0) 60%)",
        "noise": "url('/images/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(139,92,246,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 50px -25px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.2s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        scanline: "scanline 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
