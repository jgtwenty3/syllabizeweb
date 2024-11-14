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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: '#255799',
        yellow: '#fecc07',
        darkblue: '#1b3d6d',
        lightblue:'#0083b3',

      },
    },
  },
  plugins: [],
} satisfies Config;
