'use client'
import React from 'react'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { projects, Project } from '../utils/projects'

const categoryDot: Record<string, string> = {
  'Desarrollo Móvil':    '#0EA5E9',
  'IA & Automatización': '#7C3AED',
  'IA & Inmobiliaria':   '#2563EB',
  'Full-Stack':          '#10B981',
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2 text-center">
          Proyectos
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--foreground)] mb-16 text-center">
          Lo que he construido
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p: Project) => {
            const dot = categoryDot[p.category] ?? '#2563EB'
            return (
              <article
                key={p.title}
                className="
                  group flex flex-col
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  rounded-2xl p-6
                  transition-all duration-300
                  hover:border-transparent
                  hover:shadow-[0_0_0_1px_#2563EB,0_0_0_3px_rgba(124,58,237,0.2),0_20px_40px_rgba(37,99,235,0.07)]
                "
              >
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: dot }} />
                  <span className="text-xs font-semibold tracking-wide uppercase text-[var(--muted)]">
                    {p.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[var(--border)] text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      border border-[var(--border)]
                      text-[var(--muted)] hover:text-[#2563EB] hover:border-[#2563EB]
                      rounded-xl px-4 py-2.5
                      text-sm font-semibold
                      transition-colors
                    "
                  >
                    <SiGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      bg-gradient-to-r from-[#2563EB] to-[#7C3AED]
                      text-white
                      rounded-xl px-4 py-2.5
                      text-sm font-semibold
                      hover:opacity-90 transition-opacity
                    "
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
