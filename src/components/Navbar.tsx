'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'

export default function Navbar() {
  const { language } = useTheme()
  const t = translations[language]
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-md py-3 border-b border-white/10' : 'bg-black/50 backdrop-blur-md py-4 border-b border-white/10'
    }`}
    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            thiago.dev
          </span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            {t.nav.home}
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            {t.nav.projects}
          </Link>
          <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
            {t.nav.experience}
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  )
} 