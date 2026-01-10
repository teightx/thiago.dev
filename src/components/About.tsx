'use client'

const whatIDo = [
  'Design Service Cloud solutions using Apex, LWC, and Flow',
  'Build REST/SOAP integrations with OAuth 2.0 and Keycloak',
  'Deliver limit-aware code with SOQL optimization and strong tests',
  'Improve reliability with validation and resilient error handling',
]

const industries = ['Banking', 'Insurance', 'Automotive', 'Energy', 'Retail']
const strengths = ['Remote', 'Global Teams', 'Enterprise']

export default function About() {
  return (
    <section id="about">
      <div className="container">
        {/* Section Header - centered */}
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            I build Salesforce solutions that survive production: scalable architecture, 
            secure integrations, and automation that stays reliable.
          </p>
        </div>

        {/* Two cards grid */}
        <div className="grid gap-4 lg:gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* What I Do */}
          <div className="card">
            <p className="card-label">What I Do</p>
            <ul className="bullet-list">
              {whatIDo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Industries & Strengths */}
          <div className="card">
            <p className="card-label">Industries</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {industries.map((industry) => (
                <span key={industry} className="chip">{industry}</span>
              ))}
            </div>

            <p className="card-label">Strengths</p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <span key={strength} className="chip chip-accent">{strength}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
