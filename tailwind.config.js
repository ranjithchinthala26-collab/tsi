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
        tulas: {
          crimson: '#b90124',
          'crimson-dark': '#8e001b',
          'crimson-light': '#df1b3e',
          gold: '#c09d59',
          'gold-light': '#dfbe7d',
          'gold-dark': '#9b7a37',
          teal: '#60bab1',
          'teal-dark': '#007a83',
          'teal-light': '#90ccd0',
          'teal-subtle': '#bee2e4',
          charcoal: '#1c1c1c',
          navy: '#0b1329',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-crimson': '0 0 35px -5px rgba(185, 1, 36, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(192, 157, 89, 0.35)',
        'glow-teal': '0 0 30px -5px rgba(96, 186, 177, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
