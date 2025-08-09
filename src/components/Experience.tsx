'use client'

import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'

type ExperienceKey = 'engineerAccess' | 'capgemini' | 'vibbra' | 'sinai'

interface Experience {
  key: ExperienceKey
  period: string
  location: string
  type: string
  technologies: string
}

const experiences: Experience[] = [
  {
    key: 'engineerAccess',
    period: "Nov 2024 - Present",
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

export default function Experience() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.experience.title}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => {
            const position = t.experience.positions[exp.key]
            return (
              <div
                key={exp.key}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-950 dark:border-gray-800 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-900 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{position.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{position.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-gray-600 dark:text-gray-300">{exp.period}</span>
                    <div className="ml-4 flex gap-2">
                      <span className="px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary rounded-full">
                        {exp.type}
                      </span>
                      {exp.location && (
                        <span className="px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary rounded-full">
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{position.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {position.highlights.map((highlight: string, highlightIndex: number) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
                <div className="text-sm">
                  <span className="font-semibold text-primary">{t.experience.technologies}:</span>{' '}
                  <span className="text-gray-600 dark:text-gray-300">{exp.technologies}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 