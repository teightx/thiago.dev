'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Salesforce',
    skills: [
      { name: 'Apex', level: 95 },
      { name: 'LWC', level: 90 },
      { name: 'Visualforce', level: 85 },
      { name: 'Flow Builder', level: 90 },
      { name: 'SOQL/SOSL', level: 95 },
    ]
  },
  {
    title: 'Clouds',
    skills: [
      { name: 'Sales Cloud', level: 90 },
      { name: 'Service Cloud', level: 85 },
      { name: 'Marketing Cloud', level: 80 },
      { name: 'Financial Cloud', level: 85 },
    ]
  },
  {
    title: 'Desenvolvimento',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Git', level: 85 },
    ]
  },
  {
    title: 'Integrações',
    skills: [
      { name: 'REST API', level: 90 },
      { name: 'OpenAI', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Heroku', level: 85 },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="heading-2 text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 