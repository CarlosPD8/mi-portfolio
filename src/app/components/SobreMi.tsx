'use client'
import React from 'react'

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-center text-4xl font-bold text-[#006666] mb-8">
          Sobre mí
        </h2>
        {/* Tarjeta con efecto flotante */}
        <div
          className="
            max-w-3xl mx-auto
            bg-transparent backdrop-blur-sm
            border border-[#CCCCCC]
            rounded-2xl p-8
            shadow-lg
            animate-float
          "
        >
          <p className="text-[#006666]/90 leading-relaxed text-lg">
            Soy un desarrollador Full-Stack apasionado por crear soluciones
            tecnológicas innovadoras. Destaco por mi capacidad de trabajo en
            equipo, creatividad y liderazgo. Con experiencia en múltiples
            tecnologías como React, Flask y Spring Boot, siempre busco aprender
            y crecer profesionalmente.
          </p>
        </div>
      </div>
    </section>
  )
}
