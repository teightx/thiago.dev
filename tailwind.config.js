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
          light: '#22b8e6',
          DEFAULT: '#0b84c4',
          dark: '#076d9f',
        },
        secondary: {
          light: '#6ee7ff',
          DEFAULT: '#22d3ee',
          dark: '#0fb7d5',
        },
        dark: {
          lighter: '#122031',
          light: '#0a1524',
          DEFAULT: '#060e1a',
          dark: '#03070d',
        },
        accent: '#0ea5e9',
        success: '#22c55e',
        background: {
          dark: '#0a1524',
          light: '#eef2f6',
        },
        card: {
          dark: 'rgba(2, 6, 23, 0.45)',
          light: 'rgba(255, 255, 255, 0.85)',
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
        'glow': '0 0 24px rgba(34, 211, 238, 0.25)',
        'glow-strong': '0 0 36px rgba(11, 132, 196, 0.45)',
      },
    },
  },
  plugins: [],
} 