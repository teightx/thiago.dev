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
          light: '#ff7e5f',
          DEFAULT: '#ff5f4f',
          dark: '#e64c3d',
        },
        secondary: {
          light: '#feb47b',
          DEFAULT: '#ff9966',
          dark: '#ff7e5f',
        },
        dark: {
          lighter: '#2d2d2d',
          light: '#1a1a1a',
          DEFAULT: '#171717',
          dark: '#121212',
        },
        accent: '#06b6d4', // Cyan
        success: '#22c55e', // Green
        background: {
          dark: '#0f172a', // Slate 900
          light: '#f8fafc', // Slate 50
        },
        card: {
          dark: 'rgba(30, 41, 59, 0.5)', // Slate 800 with opacity
          light: 'rgba(255, 255, 255, 0.8)',
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
        'glow': '0 0 20px rgba(99, 102, 241, 0.2)',
        'glow-strong': '0 0 30px rgba(99, 102, 241, 0.4)',
      },
    },
  },
  plugins: [],
} 