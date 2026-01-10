'use client'

import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaSalesforce } from 'react-icons/fa'

const links = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'thiago.santosdev@hotmail.com',
    href: 'mailto:thiago.santosdev@hotmail.com',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/thiagosantosdev',
    href: 'https://linkedin.com/in/thiagosantosdev',
  },
  {
    icon: FaSalesforce,
    label: 'Trailhead',
    value: 'salesforce.com/trailblazer/teightx',
    href: 'https://salesforce.com/trailblazer/teightx',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/teightx',
    href: 'https://github.com/teightx',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to remote roles and international projects.
          </p>
        </div>

        {/* Contact cards - 2x2 grid */}
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="card flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 group-hover:text-[#22d3ee] group-hover:border-[#22d3ee]/25 group-hover:bg-[#22d3ee]/[0.05] transition-all">
                  <Icon size={17} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm text-white/65 group-hover:text-white/85 transition-colors truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
