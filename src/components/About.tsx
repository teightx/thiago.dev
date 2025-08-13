'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { translations } from '@/translations'

export default function About() {
  const { language } = useTheme()
  const t = translations[language]

  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center"
        >
          <h2 className="heading-2 mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {language === 'en' ? 'About me' : 'Sobre mim'}
          </h2>

          <div className="max-w-6xl mx-auto glass overflow-hidden shadow-lg">
            {/* VS Code header */}
            <div className="px-4 py-2 text-xs text-gray-300 flex items-center gap-2 border-b border-white/10 bg-black/30" 
                 style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 bg-red-400/70 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-yellow-400/70 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-green-400/70 rounded-full"></span>
              </div>
              <span className="ml-2 text-cyan-400">📁</span>
              <span className="text-gray-300">about-me.js</span>
            </div>

            {/* Code content */}
            <div className="p-8 text-left space-y-3 text-base leading-relaxed" 
                 style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
              
              <p><span className="text-gray-500">1</span>&nbsp;&nbsp;<span className="text-gray-500">// Desenvolvedor Salesforce Sênior</span></p>
              <p><span className="text-gray-500">2</span>&nbsp;&nbsp;<span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-white">{'{'}</span></p>
              <p><span className="text-gray-500">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">name</span><span className="text-white">:</span> <span className="text-green-300">'Thiago Santos'</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">4</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">role</span><span className="text-white">:</span> <span className="text-green-300">'Senior Salesforce Developer'</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">experience</span><span className="text-white">:</span> <span className="text-orange-400">6</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">sectors</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">'Banking'</span><span className="text-white">,</span> <span className="text-green-300">'Insurance'</span><span className="text-white">,</span> <span className="text-green-300">'Energy'</span><span className="text-white">,</span> <span className="text-green-300">'Automotive'</span><span className="text-white">],</span></p>
              <p><span className="text-gray-500">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">specialties</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">'Apex'</span><span className="text-white">,</span> <span className="text-green-300">'LWC'</span><span className="text-white">,</span> <span className="text-green-300">'REST/SOAP APIs'</span><span className="text-white">,</span> <span className="text-green-300">'OAuth 2.0'</span><span className="text-white">],</span></p>
              <p><span className="text-gray-500">8</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">focus</span><span className="text-white">:</span> <span className="text-green-300">'Scalable solutions, process automation, team collaboration'</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">9</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">achievements</span><span className="text-white">:</span> <span className="text-white">[</span></p>
              <p><span className="text-gray-500">10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'Complex integrations reducing manual work'</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">11</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'International projects (NYC onsite)'</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">12</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'Database performance optimization'</span><span className="text-white">,</span></p>
              <p><span className="text-gray-500">13</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'Security & sharing rules implementation'</span></p>
              <p><span className="text-gray-500">14</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">],</span></p>
              <p><span className="text-gray-500">15</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-300">currentLocation</span><span className="text-white">:</span> <span className="text-green-300">'Brazil (Remote)'</span></p>
              <p><span className="text-gray-500">16</span>&nbsp;&nbsp;<span className="text-white">{'};'}</span></p>
              <p><span className="text-gray-500">17</span></p>
              <p><span className="text-gray-500">18</span>&nbsp;&nbsp;<span className="text-purple-400">export default</span> <span className="text-yellow-300">developer</span><span className="text-white">;</span></p>
            </div>

            {/* Action buttons */}
            <div className="px-8 pb-8 pt-4 flex gap-4 justify-center">
              <Link href="#contact" className="px-8 py-3 chip text-white hover:scale-105 transition-transform">
                {language === 'en' ? 'Contact me' : 'Entre em contato'}
              </Link>
              <a href="/thiago.dev/cv.pdf" target="_blank" rel="noopener noreferrer" 
                 className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full border border-white/15 hover:opacity-90 hover:scale-105 transition-all">
                {language === 'en' ? 'Download CV' : 'Baixar CV'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 