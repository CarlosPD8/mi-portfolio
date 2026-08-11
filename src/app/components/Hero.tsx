'use client'
import React from 'react'
import { Download, ArrowRight } from 'lucide-react'

const stackRows = [
  { label: 'Frontend',        techs: ['React', 'Next.js', 'Angular'] },
  { label: 'Backend',         techs: ['Node.js', 'Express', 'PHP'] },
  { label: 'Mobile',          techs: ['Flutter', 'Kotlin'] },
  { label: 'IA / Automación', techs: ['Python', 'n8n', 'OpenAI'] },
  { label: 'Bases de datos',  techs: ['MySQL', 'MongoDB', 'Firebase'] },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-20">

        {/* Left: Text */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-5">
            Full-Stack · IA · Automatización
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--foreground)] mb-3">
            Hola, soy<br />
            <span>Carlos Pérez</span>
          </h1>
          <p className="text-2xl font-bold mb-6 animate-gradient-text w-fit">
            Desarrollador Full-Stack
          </p>
          <p className="text-base leading-relaxed text-[var(--muted)] mb-8 max-w-md">
            Construyo aplicaciones web y móviles escalables, con foco especial
            en integraciones de IA y automatizaciones que generan valor real.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="
                inline-flex items-center gap-2
                bg-gradient-to-r from-[#2563EB] to-[#7C3AED]
                hover:opacity-90
                text-white font-semibold
                px-6 py-3 rounded-xl
                transition-opacity shadow-lg shadow-blue-500/20
              "
            >
              <Download className="h-4 w-4" /> Descargar CV
            </a>
            <a
              href="#proyectos"
              className="
                inline-flex items-center gap-2
                border border-[var(--border)]
                text-[var(--foreground)]
                hover:border-[#2563EB] hover:text-[#2563EB]
                font-semibold
                px-6 py-3 rounded-xl
                transition-colors
              "
            >
              Ver Proyectos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: Stack card */}
        <div className="hidden lg:block">
          <div className="
            relative
            bg-[var(--surface)]
            border border-[var(--border)]
            rounded-2xl p-6
            shadow-xl shadow-blue-500/5
          ">
            {/* Top gradient line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50" />

            <p className="text-xs font-mono text-[var(--muted)] mb-5 tracking-wide">
              {'// stack principal'}
            </p>

            <div className="space-y-4">
              {stackRows.map((row) => (
                <div key={row.label} className="flex items-start gap-3">
                  <span className="text-xs text-[#2563EB] font-semibold w-32 shrink-0 pt-0.5 leading-tight">
                    {row.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {row.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-[var(--border)] text-[var(--muted)] px-2 py-0.5 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-[var(--muted)]">Disponible para proyectos</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
