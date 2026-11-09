import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Experiencia from '@/components/Experiencia'
import Proyectos from '@/components/Proyectos'
import Skills from '@/components/Skills'
import Ahora from '@/components/Ahora'

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Experiencia />
      <Proyectos />
      <Skills />
      <Ahora />
    </main>
  )
}
