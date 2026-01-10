'use client'

interface Job {
  company: string
  role: string
  client: string
  period: string
  type: string
  bullets: string[]
}

// Order: Captios → Capgemini (Audi) → Engineer Access → Capgemini (Bradesco)
const jobs: Job[] = [
  {
    company: 'Captios Partners',
    role: 'Salesforce Architect',
    client: 'AgQuest Financial',
    period: 'Feb 2025 – Jan 2026',
    type: 'Contract',
    bullets: [
      'Rebuilt end-to-end payment lifecycle with LWC + Apex and complex orchestration',
      'Integrated 3 external services with secure API interactions and failure handling',
      'Worked directly with US stakeholders from requirements through production',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Senior Salesforce Developer',
    client: 'Audi Global (Dealers)',
    period: 'May 2025 – Present',
    type: 'Remote',
    bullets: [
      'Delivered solutions across Service/Sales/Experience Cloud using Apex, LWC, and Flow',
      'Built integrations (REST/SOAP) with OAuth 2.0 and Named/External Credentials',
      'Applied metadata-driven patterns reducing coupling for new endpoints',
    ],
  },
  {
    company: 'Engineer Access',
    role: 'Salesforce Developer III',
    client: 'CVS (Payments)',
    period: 'Nov 2024 – May 2025',
    type: 'Hybrid',
    bullets: [
      'Built LWC UI and Apex logic supporting payment workflows in enterprise env',
      'Improved stability through SOQL/SOSL optimization and limit-aware patterns',
      'Implemented access control using profiles, permission sets, and sharing',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Salesforce Developer',
    client: 'Bradesco, Enel Italia',
    period: 'Jan 2022 – Nov 2024',
    type: 'Remote',
    bullets: [
      'Migrated Salesforce Classic to Lightning (Aura → LWC) and modernized workflows',
      'Built automations using Flow + Apex to enforce business rules',
      'Supported enterprise governance: security model, sharing, data consistency',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Enterprise delivery across banking, insurance, automotive, and energy sectors.
          </p>
        </div>

        {/* Timeline - Desktop: alternating, Mobile: stacked */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line - visible on lg+ */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.08]" />
          
          {/* Left line - visible on mobile */}
          <div className="lg:hidden absolute left-[14px] top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="space-y-5 lg:space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="relative">
                {/* Mobile: dot on left */}
                <div className="lg:hidden absolute left-[14px] top-7 -translate-x-1/2">
                  <div className="timeline-dot" />
                </div>
                
                {/* Desktop: centered dot */}
                <div className="hidden lg:block absolute left-1/2 top-7 -translate-x-1/2">
                  <div className="timeline-dot" />
                </div>

                {/* Card positioning - fixed width on desktop */}
                <div
                  className={`
                    pl-9 lg:pl-0
                    lg:w-[440px]
                    ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}
                  `}
                >
                  <div className="card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-[15px] font-semibold text-white/90">{job.company}</h3>
                        <span className="text-white/25">—</span>
                        <span className="text-white/55 text-sm">{job.role}</span>
                      </div>
                      <p className="text-xs text-white/40 mb-2">Client: {job.client}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/45">{job.period}</span>
                        <span className="chip text-[10px] py-0.5 px-2">{job.type}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="bullet-list">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
