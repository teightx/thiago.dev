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
          light: '#0ea5e9',
          DEFAULT: '#0369a1', // darker than LinkedIn
          dark: '#0b3b64',
        },
        secondary: {
          light: '#22d3ee',
          DEFAULT: '#0891b2',
          dark: '#065f73',
        },
        dark: {
          lighter: '#1f2937',
          light: '#0b1220',
          DEFAULT: '#070b16',
          dark: '#04070e',
        },
        accent: '#0ea5e9',
        success: '#22c55e',
        background: {
          dark: '#0b1220',
          light: '#f1f5f9',
        },
        card: {
          dark: 'rgba(2, 6, 23, 0.6)',
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
        'glow': '0 0 20px rgba(8, 145, 178, 0.25)',
        'glow-strong': '0 0 30px rgba(3, 105, 161, 0.45)',
      },
    },
  },
  plugins: [],
} 