/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff8f2',
        foreground: '#3a2418',
        primary: {
          DEFAULT: '#7A1F1F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E0A526',
          foreground: '#3A2418',
        },
        accent: {
          DEFAULT: '#3A2418',
          foreground: '#FFFFFF',
        },
        cream: '#FFF3DC',
        beige: '#F4E1C1',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Literata', 'serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
      boxShadow: {
        'warm': '0 4px 14px 0 rgba(58, 36, 24, 0.1)',
        'warm-lg': '0 10px 25px -5px rgba(58, 36, 24, 0.15)',
      }
    },
  },
  plugins: [],
}
