import { fontFamily } from "tailwindcss/defaultTheme";

/*****************
 * Tailwind Config
 *****************/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2E6BE6",
          green: "#37B26C"
        },
        background: "#F5F6F8",
        text: "#1E293B"
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans]
      },
      borderRadius: {
        soft: "0.5rem"
      },
      boxShadow: {
        card: "0 10px 40px rgba(46, 107, 230, 0.08)"
      }
    }
  },
  plugins: []
};