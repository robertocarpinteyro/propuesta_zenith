/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(240 10% 4%)',
        foreground: 'hsl(0 0% 100%)',
        card: {
          DEFAULT: 'hsl(240 10% 6%)',
          foreground: 'hsl(0 0% 100%)',
        },
        primary: {
          DEFAULT: 'hsl(320 100% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(20 100% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        muted: {
          DEFAULT: 'hsl(240 5% 15%)',
          foreground: 'hsl(240 5% 65%)',
        },
        accent: {
          DEFAULT: 'hsl(190 100% 50%)',
          foreground: 'hsl(0 0% 0%)',
        },
        border: 'hsl(240 10% 15%)',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
