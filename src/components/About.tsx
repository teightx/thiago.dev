'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-6">
        <h2 className="heading-2 text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About me</h2>

        <div className="rounded-xl glass shadow-glow overflow-hidden">
          <div className="px-4 py-2 text-xs text-gray-300 flex items-center gap-2 border-b border-white/10" style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
            <span className="text-secondary">//</span> about.ts
          </div>
          <div className="p-6 space-y-2" style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
            <p className="text-gray-400">// Perfil</p>
            <p><span className="text-secondary">const</span> <span className="text-primary">name</span> <span className="text-secondary">=</span> "Thiago Santos"</p>
            <p><span className="text-secondary">const</span> <span className="text-primary">role</span> <span className="text-secondary">=</span> "Senior Salesforce Developer"</p>
            <p><span className="text-secondary">const</span> <span className="text-primary">summary</span> <span className="text-secondary">=</span> `Crio soluções Salesforce escaláveis para setores como bancos, seguros e energia. Foco em Apex, LWC e integrações (REST/SOAP), com automações que reduzem esforço manual e aumentam a qualidade dos dados. Atuação colaborativa em times ágeis, mentoria e entregas internacionais.`</p>
            <p><span className="text-secondary">const</span> <span className="text-primary">focus</span> <span className="text-secondary">=</span> ["Arquitetura", "DX", "Observabilidade", "Segurança"]</p>
          </div>
          <div className="px-6 pb-6 pt-2 flex gap-3">
            <Link href="#contact" className="px-6 py-2 chip text-white">Contact me</Link>
            <a href="/thiago.dev/cv.pdf" target="_blank" className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full border border-white/15 hover:opacity-90 transition-opacity">Download CV</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 