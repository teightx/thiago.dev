'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Track which section is in view
      const sections = ['hero', 'about', 'projects', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
    setActiveSection(sectionId)
  }

  const getTabClassName = (sectionId: string) => {
    const baseClasses = "py-2 px-4 border-r border-white/10 cursor-pointer transition-colors whitespace-nowrap flex items-center gap-2"
    if (activeSection === sectionId) {
      return `${baseClasses} bg-gray-800/90 text-gray-200`
    }
    return `${baseClasses} bg-gray-900/60 text-gray-400 hover:text-gray-200`
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-md border-b border-white/10' : 'bg-black/50 backdrop-blur-md border-b border-white/10'
    }`}
    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      
      {/* VS Code style header with thiago.dev on left and tabs on right */}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            thiago.dev
          </span>
        </button>
        
        {/* VS Code Tabs on right */}
        <div className="hidden md:flex text-xs">
          <div className="flex">
            <button 
              onClick={() => scrollToSection('hero')}
              className={getTabClassName('hero')}
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              _hello.tsx
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={getTabClassName('about')}
            >
              <span className="w-2 h-2 bg-primary rounded-full opacity-50"></span>
              _about-me.js
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={getTabClassName('projects')}
            >
              <span className="w-2 h-2 bg-primary rounded-full opacity-50"></span>
              _projects.json
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={getTabClassName('experience')}
            >
              <span className="w-2 h-2 bg-primary rounded-full opacity-50"></span>
              _experience.md
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={getTabClassName('contact')}
            >
              <span className="w-2 h-2 bg-primary rounded-full opacity-50"></span>
              _contact.yml
            </button>
          </div>
        </div>

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
    </header>
  )
} 