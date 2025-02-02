import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        jetbrains: ["var(--font-jetbrains-mono)"],
      },
      colors: {
        linkedin: "#2867B2",
        github: "#000000"
      }
    },
  },
  plugins: [
    createThemes({
      light: {
        "primary": "#10821F",
        "secondary": "#CFE6D2",
        "background": "#EFEFEF",
        "middleground": "#F9F9F9",
        "foreground": "#FFFFFF",
        "header": "#3D3D3D",
        "text": "#737373",
        "support": "#CFCFCF",
      },
      dark: {
        "primary": "#10821F", //#4CAF50
        "secondary": "#CFE6D2", //#2E7D32
        "background": "#121212",
        "middleground": "#1E1E1E",
        "foreground": "#242424",
        "header": "#FFFFFF",
        "text": "#E0E0E0",
        "support": "#757575",
      }
    }, {
      defaultTheme: 'light',
    }),
  ],
} satisfies Config;
