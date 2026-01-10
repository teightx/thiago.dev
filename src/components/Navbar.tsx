'use client'

import { useState, useEffect } from 'react'
import { FiDownload, FiMail } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="text-[15px] font-semibold text-white/85 hover:text-white transition-colors"
          >
            Thiago Santos
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/45 hover:text-white/85 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="/thiago.dev/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary py-2 px-4 text-[13px]"
              >
                <FiDownload size={14} />
                Resume
              </a>
              <a
                href="mailto:thiago.santosdev@hotmail.com"
                className="btn btn-primary py-2 px-4 text-[13px]"
              >
                <FiMail size={14} />
                Email
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/45 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.05]">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-white/55 hover:text-white transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-5 pt-5 border-t border-white/[0.05]">
              <a href="/thiago.dev/cv.pdf" target="_blank" className="btn btn-secondary justify-center">
                <FiDownload size={15} />
                Download Resume
              </a>
              <a href="mailto:thiago.santosdev@hotmail.com" className="btn btn-primary justify-center">
                <FiMail size={15} />
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
