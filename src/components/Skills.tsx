'use client'

interface SkillGroup {
  title: string
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Salesforce',
    items: ['Apex', 'LWC', 'Flow Builder', 'Triggers', 'Async Jobs', 'SOQL/SOSL', 'Testing'],
  },
  {
    title: 'Integrations & Security',
    items: ['REST/SOAP', 'OAuth 2.0', 'Named Credentials', 'External Credentials', 'Keycloak', 'Resilience'],
  },
  {
    title: 'Platform',
    items: ['Governor Limits', 'Performance', 'Security Model', 'Permission Sets', 'Sharing'],
  },
  {
    title: 'Delivery',
    items: ['Git', 'Jira', 'Agile', 'Code Reviews', 'Stakeholders'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technical expertise across the Salesforce ecosystem and modern development practices.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid gap-4 lg:gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {skillGroups.map((group, index) => (
            <div key={index} className="card">
              <p className="card-label">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span key={i} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
