'use client'

import { useTheme } from '@/context/ThemeContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useTheme()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-20 p-3 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
      aria-label="Toggle language"
    >
      <span className="text-sm font-bold text-orange-500">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  )
} 