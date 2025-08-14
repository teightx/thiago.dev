'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function About() {
  const { language } = useTheme()

  const enCode = `// Senior Salesforce Developer — profile object (EN)

const developer = {
  name: "Thiago Santos",
  title: "Senior Salesforce Developer",
  experienceYears: 6,
  location: "Brazil (Remote)",

  sectors: ["Banking", "Insurance", "Energy", "Automotive"],

  clouds: [
    "Service Cloud",
    "Sales Cloud", 
    "Financial Services Cloud",
    "Marketing Cloud (integrations)"
  ],

  specialties: [
    "Apex (triggers, batch, queueable, schedulable, test factories)",
    "Lightning Web Components (LWC) & UI composition",
    "REST/SOAP APIs (bi‑directional integrations, mapping, retries)",
    "OAuth 2.0, Auth Provider, Named/External Credentials",
    "Custom Metadata/Settings for configuration and feature flags",
    "Flow Builder (screen/record‑triggered) + Apex Invocable",
    "SOQL/SOSL tuning and governor limits",
    "Security model (profiles, permission sets, sharing rules)"
  ],

  toolingAndMethods: [
    "Salesforce DX & VS Code",
    "Git (branching, PRs, code review)",
    "CI/CD",
    "Postman/Insomnia",
    "Jira (Scrum), Confluence",
    "Data Loader/Workbench"
  ],

  integrationHighlights: [
    "Generic bus connection via Custom Metadata + Keycloak (OAuth 2.0)",
    "Octopus GraphQL data fetch (customer/contract/vehicle)",
    "WhatsApp via Zenvia -> Service Cloud Cases",
    "Sync for Contract/Vehicle/Account/Contact + real‑time UI fill with Flow + Apex Invocable"
  ],

  processAutomationAndUX: [
    "Auto‑fill fields on screens (LWC/Flows) with dependencies/validations",
    "Escalation rules (L1/L2/L3) and case automations",
    "Dynamic Flexipages, related lists and conditional forms"
  ],

  achievements: [
    "Complex integrations eliminating manual work and accelerating operations",
    "International projects with onsite work in NYC",
    "Query/governor optimization for high‑volume orgs",
    "Security/Sharing model across multiple teams",
    "Reusable Apex frameworks (connections, logging, error handling)"
  ],

  languages: [
    { language: "Portuguese", level: "Native" },
    { language: "English", level: "Fluent" }
  ],

  summary:
    "Senior Salesforce developer focused on scalable integrations, process automation and LWC UIs. Experience in regulated industries and international delivery. Strong in Named/External Credentials, OAuth 2.0, SOQL tuning and security best practices."
};

export default developer;`

  const ptCode = `// Desenvolvedor Salesforce Sênior — objeto de perfil (PT-BR)

const developer = {
  name: "Thiago Santos",
  title: "Desenvolvedor Salesforce Sênior",
  experienceYears: 6,
  location: "Brasil (Remoto)",

  sectors: ["Bancos", "Seguros", "Energia", "Automotivo"],

  clouds: [
    "Service Cloud",
    "Sales Cloud",
    "Financial Services Cloud",
    "Marketing Cloud (integrações)"
  ],

  specialties: [
    "Apex (triggers, batch, queueable, schedulable, test factories)",
    "Lightning Web Components (LWC) e composição de UI",
    "APIs REST/SOAP (integrações bidirecionais, mapeamento, retries)",
    "OAuth 2.0, Auth Provider, Named/External Credentials",
    "Custom Metadata/Settings para configuração e feature flags",
    "Flow Builder (screen/record‑triggered) + Apex Invocable",
    "Ajuste de SOQL/SOSL e limites governados",
    "Modelo de segurança (profiles, permission sets, sharing rules)"
  ],

  toolingAndMethods: [
    "Salesforce DX e VS Code",
    "Git (branching, PRs, code review)",
    "CI/CD",
    "Postman/Insomnia",
    "Jira (Scrum), Confluence",
    "Data Loader/Workbench"
  ],

  integrationHighlights: [
    "Conexão genérica com barramento via Custom Metadata + Keycloak (OAuth 2.0)",
    "Consulta Octopus GraphQL (cliente/contrato/veículo)",
    "WhatsApp via Zenvia -> Cases no Service Cloud",
    "Sincronização Contract/Vehicle/Account/Contact + preenchimento em tempo real com Flow + Apex Invocable"
  ],

  processAutomationAndUX: [
    "Preenchimento automático de campos (LWC/Flows) com dependências/validações",
    "Regras de escalonamento (N1/N2/N3) e automações de Caso",
    "Flexipages dinâmicas, related lists e formulários condicionais"
  ],

  achievements: [
    "Integrações complexas eliminando trabalho manual e acelerando operações",
    "Projetos internacionais com atuação presencial em NYC",
    "Otimização de consultas/limites em orgs de alto volume",
    "Modelo de Segurança/Sharing para múltiplas equipes",
    "Frameworks reutilizáveis em Apex (conexões, logging, tratamento de erros)"
  ],

  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Fluente" }
  ],

  summary:
    "Dev Salesforce sênior focado em integrações escaláveis, automação de processos e UIs em LWC. Experiência em setores regulados e entrega internacional. Forte em Named/External Credentials, OAuth 2.0, otimização SOQL e segurança."
};

export default developer;`

  const codeContent = language === 'en' ? enCode : ptCode

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
            <div className="p-6 text-left text-sm leading-relaxed max-h-96 overflow-y-auto" 
                 style={{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'}}>
              <div className="space-y-1">
                <div className="text-gray-500">// Senior Salesforce Developer — profile object ({language === 'en' ? 'EN' : 'PT-BR'})</div>
                <div className="text-gray-500"></div>
                <div>
                  <span className="text-blue-400">const</span>
                  <span className="text-yellow-300"> developer</span>
                  <span className="text-white"> = </span>
                  <span className="text-white">{'{'}</span>
                </div>
                <div>
                  <span className="text-cyan-300">  name</span>
                  <span className="text-white">: </span>
                  <span className="text-green-300">"Thiago Santos"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-cyan-300">  title</span>
                  <span className="text-white">: </span>
                  <span className="text-green-300">"{language === 'en' ? 'Senior Salesforce Developer' : 'Desenvolvedor Salesforce Sênior'}"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-cyan-300">  experienceYears</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-400">6</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-cyan-300">  location</span>
                  <span className="text-white">: </span>
                  <span className="text-green-300">"{language === 'en' ? 'Brazil (Remote)' : 'Brasil (Remoto)'}"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="text-gray-500"></div>
                <div>
                  <span className="text-cyan-300">  sectors</span>
                  <span className="text-white">: [</span>
                  <span className="text-green-300">"{language === 'en' ? 'Banking' : 'Bancos'}"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-300">"{language === 'en' ? 'Insurance' : 'Seguros'}"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-300">"Energia"</span>
                  <span className="text-white">, </span>
                  <span className="text-green-300">"Automotivo"</span>
                  <span className="text-white">],</span>
                </div>
                <div className="text-gray-500"></div>
                <div>
                  <span className="text-cyan-300">  specialties</span>
                  <span className="text-white">: [</span>
                </div>
                <div>
                  <span className="text-green-300">    "Apex, LWC, Flow Builder"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">    "REST/SOAP APIs, OAuth 2.0"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">    "Named/External Credentials"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">    "SOQL/SOSL, Governor Limits"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">    "Security & Sharing Rules"</span>
                </div>
                <div>
                  <span className="text-white">  ],</span>
                </div>
                <div className="text-gray-500"></div>
                <div>
                  <span className="text-cyan-300">  achievements</span>
                  <span className="text-white">: [</span>
                </div>
                <div>
                  <span className="text-green-300">    "{language === 'en' ? 'Complex integrations eliminating manual work' : 'Integrações complexas eliminando trabalho manual'}"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">    "{language === 'en' ? 'International projects (NYC onsite)' : 'Projetos internacionais (presencial NYC)'}"</span>
                  <span className="text-white">,</span>
                </div>
                <div>
                  <span className="text-green-300">    "{language === 'en' ? 'High-volume orgs optimization' : 'Otimização em orgs de alto volume'}"</span>
                </div>
                <div>
                  <span className="text-white">  ],</span>
                </div>
                <div className="text-gray-500"></div>
                <div>
                  <span className="text-cyan-300">  summary</span>
                  <span className="text-white">:</span>
                </div>
                <div>
                  <span className="text-green-300">    "{language === 'en' ? 'Senior Salesforce developer focused on scalable integrations, process automation and security best practices.' : 'Dev Salesforce sênior focado em integrações escaláveis, automação de processos e melhores práticas de segurança.'}"</span>
                </div>
                <div>
                  <span className="text-white">{'};'}</span>
                </div>
                <div className="text-gray-500"></div>
                <div>
                  <span className="text-purple-400">export default</span>
                  <span className="text-yellow-300"> developer</span>
                  <span className="text-white">;</span>
                </div>
              </div>
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