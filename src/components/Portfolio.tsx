'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'MyMoneyBox Flutter',
    description: 'Aplicativo de finanças pessoais desenvolvido com Flutter, focado em uma experiência de usuário intuitiva e design moderno.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    link: 'https://github.com/teightx/mymoneybox_flutter',
    type: 'Mobile App'
  },
  {
    title: 'LWC Superbadge',
    description: 'Implementação do Superbadge Lightning Web Components Specialist, demonstrando expertise em desenvolvimento Salesforce moderno.',
    tech: ['LWC', 'Apex', 'SLDS'],
    link: 'https://github.com/teightx/lwc-superbadge',
    type: 'Salesforce'
  },
  {
    title: 'API REST Spring Boot',
    description: 'API RESTful desenvolvida com Spring Boot e SQL, implementando boas práticas e padrões de projeto.',
    tech: ['Java', 'Spring Boot', 'SQL'],
    link: 'https://github.com/teightx/Api-Rest-Java-Sprintboot-SQL',
    type: 'Backend'
  },
  {
    title: 'Weather App',
    description: 'Aplicação web para consulta de previsão do tempo, integrando com APIs externas.',
    tech: ['JavaScript', 'API Integration', 'CSS'],
    link: 'https://github.com/teightx/Mostrar-Clima',
    type: 'Web App'
  },
  {
    title: 'Login Screen',
    description: 'Interface moderna de login com animações CSS e validações em JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/teightx/tela-de-login',
    type: 'Frontend'
  },
  {
    title: 'Tic Tac Toe',
    description: 'Jogo da velha interativo desenvolvido com JavaScript puro.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/teightx/jogo-da-velha-JS',
    type: 'Game'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="heading-2 text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              <div className="h-full bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-gradient-primary text-white">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 