'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="section-container py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
        <h2 className="heading-2 text-center mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About me</h2>

        <div className="rounded-xl border border-white/10 bg-white/6 backdrop-blur-lg shadow-glow overflow-hidden">
          <div className="px-4 py-2 text-xs text-gray-300 flex items-center gap-2 border-b border-white/10" style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
            <span className="text-secondary">//</span> about.ts
          </div>
          <div className="p-6 space-y-2 text-gray-200" style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
            <p><span className="text-secondary">const</span> <span className="text-primary">name</span> <span className="text-secondary">=</span> "Thiago Santos"</p>
            <p><span className="text-secondary">const</span> <span className="text-primary">role</span> <span className="text-secondary">=</span> "Senior Salesforce Developer"</p>
            <p><span className="text-secondary">const</span> <span className="text-primary">focus</span> <span className="text-secondary">=</span> ["Apex", "LWC", "Integrations", "AI", "DX"]</p>
            <p className="text-gray-400">// Arquiteturas escaláveis, qualidade, observabilidade e entrega contínua.</p>
          </div>
          <div className="px-6 pb-6 pt-2 flex gap-3">
            <Link href="#contact" className="px-6 py-2 bg-white/12 text-white rounded-full border border-white/15 hover:bg-white/20 transition-colors">Contact me</Link>
            <a href="/thiago.dev/cv.pdf" target="_blank" className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:opacity-90 transition-opacity">Download CV</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 