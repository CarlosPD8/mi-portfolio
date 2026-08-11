'use client'
import React from 'react'
import { skills } from '../utils/skills'

const categories = [
  { label: 'Lenguajes',          ids: ['javascript', 'typescript', 'python', 'java', 'php', 'cplusplus', 'kotlin'] },
  { label: 'Frontend',           ids: ['react', 'angular', 'html'] },
  { label: 'Backend & Runtimes', ids: ['nodejs', 'express'] },
  { label: 'Mobile',             ids: ['flutter'] },
  { label: 'Bases de datos',     ids: ['sql'] },
]

export default function Skills() {
  return (
    <section id="habilidades" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-[#2563EB] mb-2 text-center">
          Habilidades
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--foreground)] mb-16 text-center">
          Stack técnico
        </h2>

        <div className="space-y-10">
          {categories.map((cat) => {
            const catSkills = cat.ids
              .map((id) => skills.find((s) => s.id === id))
              .filter(Boolean) as typeof skills
            if (catSkills.length === 0) return null

            return (
              <div key={cat.label}>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {catSkills.map((s) => {
                    const Icon = s.Icon
                    return (
                      <div
                        key={s.id}
                        className="
                          group flex items-center gap-2.5
                          bg-[var(--surface)] border border-[var(--border)]
                          rounded-xl px-4 py-3
                          hover:border-[#2563EB]
                          text-[var(--muted)] hover:text-[#2563EB]
                          transition-colors duration-200
                          cursor-default
                        "
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
