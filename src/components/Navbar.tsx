'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-black/50 backdrop-blur-md border-b border-white/10'
    }`}
    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            thiago.dev
          </span>
        </button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden md:flex space-x-8 text-sm">
          <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-left">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors text-left">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left">Contact</button>
          </div>
        </div>
      )}

      {/* VS Code Tabs */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6 flex text-xs overflow-x-auto">
          <div className="flex">
            <button 
              onClick={() => scrollToSection('hero')}
              className="py-2 px-4 bg-gray-800/90 border-r border-white/10 text-gray-200 flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              _hello.tsx
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="py-2 px-4 bg-gray-900/60 border-r border-white/10 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors whitespace-nowrap"
            >
              _about-me.js
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="py-2 px-4 bg-gray-900/60 border-r border-white/10 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors whitespace-nowrap"
            >
              _projects.json
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="py-2 px-4 bg-gray-900/60 border-r border-white/10 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors whitespace-nowrap"
            >
              _experience.md
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="py-2 px-4 bg-gray-900/60 border-r border-white/10 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors whitespace-nowrap"
            >
              _contact.yml
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 