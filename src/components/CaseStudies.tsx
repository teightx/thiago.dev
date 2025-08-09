"use client"

import { motion } from 'framer-motion'

const studies = [
  {
    title: 'Lightning Migration Performance',
    context: 'Capgemini — Aura → LWC (Salesforce Lightning)',
    kpis: [
      { label: 'Load time', value: '-50%' },
      { label: 'Core Web Vitals', value: 'Green' },
      { label: 'Incidents', value: '-80%' },
      { label: 'DX', value: '+30% dev velocity' },
    ],
    summary: 'Re-arquitetura de componentes e otimizações em data fetching, cache e renderização reativa.'
  },
  {
    title: 'Einstein GPT KB Recommender',
    context: 'Capgemini — Atendimento e Knowledge Base',
    kpis: [
      { label: 'Time-to-resolution', value: '-35%' },
      { label: 'CSAT', value: '+15 pp' },
      { label: 'Agent deflection', value: '+20%' },
      { label: 'Coverage', value: '85%+' },
    ],
    summary: 'Recomendação contextual de artigos com Einstein GPT, telemetria e feedback loop.'
  },
  {
    title: 'AI Integrations in Salesforce',
    context: 'Engineer Access — OpenAI, AWS Comprehend, Claude',
    kpis: [
      { label: 'Throughput', value: '+2.4x' },
      { label: 'p95 latency', value: '≤ 300ms' },
      { label: 'Quality', value: '+18% accuracy' },
      { label: 'Cost', value: '-22%' },
    ],
    summary: 'Padrões idempotentes, filas assíncronas e observabilidade fim-a-fim com alarmes.'
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Case Studies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-black/50 transition-colors shadow-glow"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{cs.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{cs.context}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cs.kpis.map((kpi, k) => (
                  <span key={k} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                    {kpi.label}: {kpi.value}
                  </span>
                ))}
              </div>
              <p className="text-gray-300">{cs.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
