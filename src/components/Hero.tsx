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
    <section className="min-h-[80vh] flex items-center py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-[280px,1fr] gap-12 items-center">
          <div className="flex justify-center">
            <ProfileImage />
          </div>

          <div className="text-center md:text-left">
            <h1 className="heading-1 mb-2" style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
              <span className="text-gray-400">$</span>{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Thiago Santos</span>
            </h1>
            <div className="flex gap-4 text-primary justify-center md:justify-start mb-6">
              <span className="inline-flex items-center gap-2 text-sm bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md">
                <FaSalesforce /> {language === 'en' ? 'Senior Salesforce Developer' : 'Desenvolvedor Salesforce Sênior'}
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 text-sm bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md">
                <FaCogs /> Integrations & AI
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 text-sm bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur-md">
                <FaProjectDiagram /> DX & Quality
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl md:max-w-3xl">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Link href="#contact" className="px-8 py-3 bg-white/12 text-white rounded-full border border-white/15 hover:bg-white/20 transition-colors text-center">{t.hero.buttons.contact}</Link>
              <a href="/thiago.dev/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:opacity-90 transition-opacity text-center">{t.hero.buttons.download}</a>
            </div>

            <div className="mt-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
              <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-8">
                {technologies.map((tech) => (
                  <div key={tech.name} className="w-12 h-12 relative bg-white/10 border border-white/15 rounded-xl p-2 backdrop-blur-md hover:bg-white/15 transition-colors">
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