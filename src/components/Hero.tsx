'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'
import ProfileImage from './ProfileImage'

const technologies = [
  { name: 'Salesforce', icon: '/tech/salesforce.png' },
  { name: 'JavaScript', icon: '/tech/javascript.png' },
  { name: 'Apex', icon: '/tech/apex.png' },
  { name: 'LWC', icon: '/tech/lwc.png' },
  { name: 'React', icon: '/tech/react.png' },
  { name: 'Angular', icon: '/tech/angular.png' },
  { name: 'Java', icon: '/tech/java.png' },
  { name: 'Node', icon: '/tech/node.png' }
]

export default function Hero() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          <div className="w-full flex justify-center">
            <ProfileImage />
          </div>
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {t.hero.highlight}
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:opacity-90 transition-opacity text-center"
              >
                {t.hero.buttons.contact}
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500/10 transition-colors text-center"
              >
                {t.hero.buttons.download}
              </a>
            </div>
            <div className="mt-12">
              <h2 className="text-sm font-semibold text-gray-400 mb-4">
                {t.hero.experience}
              </h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-12 h-12 relative bg-black/40 rounded-xl p-2 backdrop-blur-sm hover:bg-black/60 transition-colors"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain p-1"
                    />
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