import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import CaseStudies from '@/components/CaseStudies'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <CaseStudies />
      <Experience />
      <Contact />
    </main>
  )
} 