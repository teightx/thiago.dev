'use client'

import { useTheme } from '@/context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white/8 border border-white/10 backdrop-blur-md hover:bg-white/15 transition-colors shadow-glow"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-6 h-6 text-primary" />
      ) : (
        <FaMoon className="w-6 h-6 text-secondary" />
      )}
    </button>
  )
} 