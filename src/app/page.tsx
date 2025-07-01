
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Hero />

     {/* Sobre mí */}
     <SobreMi />

      {/* Proyectos */}
      <Projects />
      {/* Habilidades */}
      <Skills />
      {/* Footer */}
      <footer className="mt-auto py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[#006666]/80">
          © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
