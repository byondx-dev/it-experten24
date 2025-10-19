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
          primary: "#1D4ED8",
          accent: "#F97316"
        },
        background: "#F8FAFF",
        text: "#0F172A"
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans]
      },
      borderRadius: {
        soft: "0.5rem"
      },
      boxShadow: {
        card: "0 10px 40px rgba(29, 78, 216, 0.12)"
      }
    }
  },
  plugins: []
};
