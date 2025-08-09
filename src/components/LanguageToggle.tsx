'use client'

import { useTheme } from '@/context/ThemeContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useTheme()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-20 px-3 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-colors shadow-glow"
      aria-label="Toggle language"
    >
      <span className="text-sm font-bold text-primary">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  )
} 