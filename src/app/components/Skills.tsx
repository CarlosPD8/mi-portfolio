// src/app/components/Skills.tsx
'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { skills, Skill } from '../utils/skills'

export default function Skills() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? skills : skills.slice(0, 6)

  return (
    <section id="habilidades" className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#006666] mb-12">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {visible.map((s: Skill) => {
            const Icon = s.Icon
            return (
              <div
                key={s.id}
                className="
                  flex items-center justify-center 
                  bg-transparent backdrop-blur-sm 
                  border border-[#CCCCCC] rounded-xl 
                  h-28 
                  transition-transform duration-200
                  hover:scale-105
                "
                title={s.name}
              >
                <Icon className="h-12 w-12 text-[#006666]" />
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              inline-flex items-center gap-2 
              border border-[#006666] 
              text-[#006666] 
              hover:bg-[#006666]/10 
              rounded-lg px-6 py-3 
              font-medium transition
            "
          >
            {showAll ? 'Mostrar menos' : 'Mostrar más'}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showAll ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
