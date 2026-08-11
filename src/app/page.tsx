import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Mail } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SobreMi />
      <Projects />
      <Skills />

      <footer id="contacto" className="relative z-10 mt-auto border-t border-[var(--border)] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Carlos Pérez Delgado. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/CarlosPD8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[#2563EB] transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href="mailto:carlitospd8@gmail.com"
              className="text-[var(--muted)] hover:text-[#2563EB] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
