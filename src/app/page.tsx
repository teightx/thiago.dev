import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import NeonDivider from '@/components/NeonDivider'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NeonDivider />
      <About />
      <NeonDivider />
      <Projects />
      <NeonDivider />
      <Experience />
      <NeonDivider />
      <Contact />
    </main>
  )
} 