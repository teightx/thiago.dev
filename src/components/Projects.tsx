'use client'

import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'

const projects = [
  {
    title: 'Portfolio Next.js',
    description: 'Portfólio profissional desenvolvido com tecnologias modernas como Next.js, TypeScript e Tailwind CSS. Inclui tema escuro, internacionalização e animações suaves.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/teightx/Thiago.Dev'
  },
  {
    title: 'MyMoneyBox Flutter',
    description: 'Aplicativo de finanças pessoais desenvolvido em Flutter, focado em simplicidade e eficiência. Funciona offline com recursos como dashboard financeiro, histórico de transações e gráficos interativos.',
    technologies: ['Flutter', 'Dart', 'Hive', 'Provider'],
    link: 'https://github.com/teightx/mymoneybox_flutter'
  },
  {
    title: 'MyMoneyBox React Native',
    description: 'Versão React Native do aplicativo de finanças pessoais, com funcionalidades como gestão de despesas, categorias personalizáveis e relatórios detalhados.',
    technologies: ['React Native', 'TypeScript', 'Expo'],
    link: 'https://github.com/teightx/MyMoneyBox'
  },
  {
    title: 'LWC Superbadge',
    description: 'Implementação do Superbadge Lightning Web Components Specialist, demonstrando proficiência em desenvolvimento Salesforce com LWC.',
    technologies: ['LWC', 'Apex', 'SLDS'],
    link: 'https://github.com/teightx/lwc-superbadge'
  },
  {
    title: 'API Rest Spring Boot',
    description: 'API REST desenvolvida com Spring Boot e SQL, implementando boas práticas de desenvolvimento e padrões REST.',
    technologies: ['Java', 'Spring Boot', 'SQL'],
    link: 'https://github.com/teightx/Api-Rest-Java-Sprintboot-SQL'
  },
  {
    title: 'Weather App',
    description: 'Aplicação web para consulta de previsão do tempo, integrando com APIs de clima e geolocalização.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
    link: 'https://github.com/teightx/Mostrar-Clima'
  },
  {
    title: 'Login Screen',
    description: 'Interface moderna de login com validações e animações, seguindo boas práticas de UX/UI.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/teightx/tela-de-login'
  },
  {
    title: 'Calculator',
    description: 'Calculadora web interativa com interface responsiva e operações matemáticas básicas.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/teightx/calculadora-html'
  },
  {
    title: 'Tic Tac Toe',
    description: 'Jogo da velha implementado com JavaScript puro, demonstrando lógica de programação e manipulação do DOM.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/teightx/jogo-da-velha-JS'
  }
]

export default function Projects() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 dark:bg-gray-950 dark:border-gray-800 rounded-xl p-6 hover:bg-white/90 dark:hover:bg-gray-900 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors"
              >
                {t.projects.viewProject} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 