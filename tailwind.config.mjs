/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        saffron: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        }
      },
      fontFamily: {
        bengali: ['Noto Sans Bengali', 'Hind Siliguri', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
    },
  },
  safelist: ['leading-normal', 'leading-relaxed', 'tracking-normal', 'tracking-wide'],
  plugins: [],
};
