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
        bg: {
          primary: '#0a0a0f',
          secondary: '#111118',
          card: '#16161f',
        },
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          violet: '#a78bfa',
          glow: 'rgba(99,102,241,0.15)',
        },
        text: {
          primary: '#f1f5f9',
          muted: '#64748b',
          soft: '#94a3b8',
        },
        border: {
          dark: 'rgba(255,255,255,0.06)',
          accent: 'rgba(99,102,241,0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(99,102,241,0.15)',
        'glow-lg': '0 0 80px rgba(99,102,241,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
