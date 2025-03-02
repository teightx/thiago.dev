'use client'

import { motion } from 'framer-motion'

const achievements = [
  {
    type: 'Certificação',
    title: 'Salesforce Associate',
    issuer: 'Salesforce',
    date: '2021',
    icon: '🏆'
  },
  {
    type: 'Superbadge',
    title: 'Lightning Web Components Specialist',
    issuer: 'Salesforce',
    date: '2022',
    icon: '⚡'
  },
  {
    type: 'Superbadge',
    title: 'Apex Specialist',
    issuer: 'Salesforce',
    date: '2022',
    icon: '⚡'
  },
  {
    type: 'Ranger',
    title: 'Trailhead Ranger',
    points: '100,000+',
    badges: '100+',
    icon: '🌟'
  }
]

export default function Trailhead() {
  return (
    <section id="trailhead" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="heading-2 text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Conquistas Salesforce
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card-light dark:bg-card-dark backdrop-blur-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl mb-2">{achievement.icon}</span>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.type}
                  </p>
                </div>
                {achievement.date && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.date}
                  </span>
                )}
              </div>

              {achievement.issuer && (
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Emitido por {achievement.issuer}
                </p>
              )}

              {achievement.points && (
                <div className="mt-2 space-y-1">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    <span className="font-semibold">Pontos:</span> {achievement.points}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    <span className="font-semibold">Badges:</span> {achievement.badges}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://trailblazer.me/id/thiagodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-primary text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <span>Ver Perfil Trailhead</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
} 