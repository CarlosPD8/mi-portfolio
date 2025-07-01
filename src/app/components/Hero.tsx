'use client'
import React from 'react'
import { Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative z-10 
        flex flex-col-reverse lg:flex-row items-center lg:justify-between 
        gap-12 py-20 px-4 lg:pl-20
      "
    >
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold mb-4 text-[#006666]">
          ¡Hola! Soy <span className="text-[#008584]">Carlos Pérez Delgado</span>
        </h1>
        <p className="text-lg mb-6 text-[#006666]/80">
          Desarrollador Full-Stack apasionado por crear interfaces limpias
          y APIs eficientes. Me encanta trabajar con React, Node.js y más.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/cv.pdf"
            download
            className="
              flex items-center gap-2 
              bg-[#006666] hover:bg-[#008584] 
              text-white font-medium 
              px-6 py-3 rounded-lg 
              transition
            "
          >
            <Download className="h-5 w-5" /> Descargar CV
          </a>
          <a
            href="#proyectos"
            className="
              flex items-center gap-2 
              border-2 border-[#008584] 
              text-[#008584] 
              hover:bg-[#008584]/10 
              px-6 py-3 rounded-lg 
              transition
            "
          >
            Ver Proyectos <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
