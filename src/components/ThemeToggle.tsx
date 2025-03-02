'use client'

import { useTheme } from '@/context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-6 h-6 text-orange-500" />
      ) : (
        <FaMoon className="w-6 h-6 text-blue-400" />
      )}
    </button>
  )
} 