'use client'

import { FaGithub, FaLinkedin, FaSalesforce, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'

export default function Contact() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.contact.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-center text-lg mb-8">
            {language === 'en' 
              ? "I'm always interested in new projects and opportunities. Feel free to get in touch!"
              : "Estou sempre interessado em novos projetos e oportunidades. Sinta-se à vontade para entrar em contato!"}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com/teightx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thiagosantosdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://salesforce.com/trailblazer/teightx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaSalesforce className="text-2xl" />
              <span>Trailhead</span>
            </a>
            <a
              href="mailto:thiago.santosdev@hotmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaEnvelope className="text-2xl" />
              <span>thiago.santosdev@hotmail.com</span>
            </a>
            <a
              href="https://wa.me/12016865610"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 