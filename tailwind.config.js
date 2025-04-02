/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          50: 'oklch(var(--primary-50))',
          100: 'oklch(var(--primary-100))',
          200: 'oklch(var(--primary-200))',
          300: 'oklch(var(--primary-300))',
          400: 'oklch(var(--primary-400))',
          500: 'oklch(var(--primary-500))',
          600: 'oklch(var(--primary-600))',
          700: 'oklch(var(--primary-700))',
          800: 'oklch(var(--primary-800))',
          900: 'oklch(var(--primary-900))',
        },
      },
    },
  },
  plugins: [],
} 