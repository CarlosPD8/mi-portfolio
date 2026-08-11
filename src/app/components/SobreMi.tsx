'use client'
import React from 'react'

const stats = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos entregados' },
  { value: '12+', label: 'Tecnologías dominadas' },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2 text-center">
          Sobre mí
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--foreground)] mb-16 text-center">
          Quién soy
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio text */}
          <div className="space-y-5">
            <p className="text-[var(--muted)] leading-relaxed text-lg">
              Soy un desarrollador Full-Stack con pasión por construir soluciones
              tecnológicas de impacto real. Me especializo en integrar inteligencia
              artificial en productos web y móviles, creando experiencias más
              inteligentes y eficientes.
            </p>
            <p className="text-[var(--muted)] leading-relaxed text-lg">
              Me desenvuelvo bien tanto en el lado del cliente como del servidor,
              con experiencia en equipos multidisciplinares donde el liderazgo
              técnico y la comunicación clara marcan la diferencia.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="
                  bg-[var(--surface)] border border-[var(--border)]
                  rounded-2xl p-6 text-center
                  hover:border-[#2563EB] transition-colors duration-300
                "
              >
                <p className="text-3xl font-extrabold text-[#2563EB] mb-1">{s.value}</p>
                <p className="text-xs text-[var(--muted)] font-medium leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
