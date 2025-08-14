'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'
import ProfileImage from './ProfileImage'
import { FaSalesforce, FaCogs, FaProjectDiagram } from 'react-icons/fa'

const technologies = [
  { name: 'Salesforce', icon: '/thiago.dev/tech/salesforce.png' },
  { name: 'JavaScript', icon: '/thiago.dev/tech/JavaScript.png' },
  { name: 'Apex', icon: '/thiago.dev/tech/apex.png' },
  { name: 'LWC', icon: '/thiago.dev/tech/lwc.png' },
  { name: 'React', icon: '/thiago.dev/tech/react.png' },
  { name: 'Angular', icon: '/thiago.dev/tech/angular.png' },
  { name: 'Java', icon: '/thiago.dev/tech/java.png' },
  { name: 'Node', icon: '/thiago.dev/tech/node.png' }
]

export default function Hero() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="hero" className="min-h-screen flex items-center py-24 pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <ProfileImage />
          </div>

          <div className="text-center lg:text-left flex-1 max-w-2xl">
            <h1 className="heading-1 mb-2" style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Thiago Santos</span>
            </h1>
            <div className="flex flex-wrap gap-3 text-primary justify-center lg:justify-start mb-6">
              <span className="chip inline-flex items-center gap-2 text-sm px-3 py-1">
                <FaSalesforce /> {language === 'en' ? 'Senior Salesforce Developer' : 'Desenvolvedor Salesforce Sênior'}
              </span>
              <span className="chip hidden sm:inline-flex items-center gap-2 text-sm px-3 py-1">
                <FaCogs /> Integrations & AI
              </span>
              <span className="chip hidden sm:inline-flex items-center gap-2 text-sm px-3 py-1">
                <FaProjectDiagram /> DX & Quality
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl md:max-w-3xl mx-auto md:mx-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <Link href="#contact" className="px-8 py-3 chip text-white text-center">{t.hero.buttons.contact}</Link>
              <a href="/thiago.dev/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full border border-white/15 hover:opacity-90 transition-opacity text-center">{t.hero.buttons.download}</a>
            </div>

            <div className="mt-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8">
                {technologies.map((tech) => (
                  <div key={tech.name} className="w-12 h-12 relative chip p-2">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain p-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 