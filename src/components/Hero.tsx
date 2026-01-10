'use client'

import { FiDownload, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaSalesforce } from 'react-icons/fa'

const focusAreas = ['Service Cloud', 'Integrations', 'Payments']
const techStack = ['Apex', 'LWC', 'Flow', 'REST/SOAP', 'OAuth 2.0', 'Keycloak']

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center pt-20">
      <div className="container">
        <div className="max-w-2xl">
          {/* Focus chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {focusAreas.map((area) => (
              <span key={area} className="chip chip-accent">{area}</span>
            ))}
          </div>

          {/* Name & Role */}
          <h1 className="mb-2">Thiago Santos</h1>
          <p className="text-xl text-white/55 font-medium mb-5">
            Salesforce Architect
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span key={tech} className="chip">{tech}</span>
            ))}
          </div>

          {/* Summary - 2 lines */}
          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-lg">
            5+ years delivering enterprise Salesforce solutions. Specialized in payment 
            workflows, secure integrations, and reliable automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="/thiago.dev/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FiDownload size={16} />
              Download Resume
            </a>
            <a href="mailto:thiago.santosdev@hotmail.com" className="btn btn-secondary">
              <FiMail size={16} />
              Email Me
            </a>
          </div>

          {/* Social links - small and discrete */}
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/thiagosantosdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-[#22d3ee] transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://salesforce.com/trailblazer/teightx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-[#22d3ee] transition-colors"
              aria-label="Trailhead"
            >
              <FaSalesforce size={18} />
            </a>
            <a
              href="https://github.com/teightx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 hover:text-[#22d3ee] transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
