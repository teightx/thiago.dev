import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import NeonDivider from '@/components/NeonDivider'

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-auto h-screen">
      <Navbar />
      <section className="snap-start"><Hero /></section>
      <NeonDivider />
      <section className="snap-start"><Projects /></section>
      <NeonDivider />
      <section className="snap-start"><Experience /></section>
      <NeonDivider />
      <section className="snap-start"><Contact /></section>
    </main>
  )
} 