/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF006E',
        secondary: '#FB5607',
        accent: '#FFBE0B',
        surface: '#3A0CA3',
        purple: '#8338EC',
        success: '#06FFA5',
        warning: '#FFB700',
        error: '#FF1654',
        info: '#00B4D8',
      },
      fontFamily: {
        'display': ['Bungee', 'cursive'],
        'body': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 0, 110, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}