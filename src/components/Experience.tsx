'use client'

import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'
import { FaBriefcase } from 'react-icons/fa'

type ExperienceKey = 'capgeminiCurrent' | 'engineerAccess' | 'capgemini' | 'vibbra' | 'sinai'

interface Experience {
  key: ExperienceKey
  period: string
  location: string
  type: string
  technologies: string
}

const experiences: Experience[] = [
  {
    key: 'capgeminiCurrent',
    period: "May 2025 - Present",
    location: "São Paulo, Brasil",
    type: "Remote",
    technologies: "Apex, LWC, Flow Builder, REST/SOAP APIs, Named Credentials, OAuth 2.0, DevOps, Agile/SCRUM"
  },
  {
    key: 'engineerAccess',
    period: "Nov 2024 - May 2025",
    location: "New York City",
    type: "Remote",
    technologies: "Apex, LWC, Flow Builder, Marketing Cloud, Service Cloud"
  },
  {
    key: 'capgemini',
    period: "Jan 2022 - Nov 2024",
    location: "",
    type: "Remote",
    technologies: "Apex, LWC, Visualforce, Flow Builder, Jira, Financial Cloud"
  },
  {
    key: 'vibbra',
    period: "Apr 2021 - Dec 2021",
    location: "",
    type: "Remote",
    technologies: "Java, JavaScript, AngularJS, MySQL"
  },
  {
    key: 'sinai',
    period: "Jun 2018 - Jan 2021",
    location: "",
    type: "Remote",
    technologies: "JavaScript, AngularJS, MySQL"
  }
]

function WindowChrome() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
    </div>
  )
}

export default function Experience() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center justify-center gap-3">
          <FaBriefcase className="text-primary" /> {t.experience.title}
        </h2>
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp) => {
            const position = t.experience.positions[exp.key]
            return (
              <div key={exp.key} className="group rounded-xl glass shadow-glow hover:-translate-y-1 hover:scale-[1.005] transition-all duration-300 overflow-hidden">
                <WindowChrome />
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                      <p className="text-gray-300">{position.company}</p>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="text-gray-300">{exp.period}</span>
                      <div className="ml-4 flex gap-2">
                        <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">{exp.type}</span>
                        {exp.location && (
                          <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">{exp.location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {position.highlights.map((highlight: string, highlightIndex: number) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="text-sm">
                    <span className="font-semibold text-primary">{t.experience.technologies}:</span>{' '}
                    <span className="text-gray-300">{exp.technologies}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 