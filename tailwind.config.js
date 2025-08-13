/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00d4ff',
          DEFAULT: '#0099cc',
          dark: '#007acc',
        },
        secondary: {
          light: '#00ffff',
          DEFAULT: '#00d4ff',
          dark: '#0099cc',
        },
        dark: {
          lighter: '#122031',
          light: '#0a1524',
          DEFAULT: '#060e1a',
          dark: '#03070d',
        },
        accent: '#00ffff',
        success: '#00ff88',
        neon: {
          cyan: '#00ffff',
          blue: '#0080ff',
          purple: '#8000ff',
          pink: '#ff0080',
        },
        background: {
          dark: '#0a1524',
          light: '#eef2f6',
        },
        card: {
          dark: 'rgba(0, 20, 40, 0.4)',
          light: 'rgba(255, 255, 255, 0.7)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-secondary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 24px rgba(0, 212, 255, 0.3)',
        'glow-strong': '0 0 36px rgba(0, 255, 255, 0.5)',
        'neon': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      },
    },
  },
  plugins: [],
} 