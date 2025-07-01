// src/app/components/Navbar.tsx
'use client'
import React from 'react'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-transparent">
      <div className="container mx-auto px-4 lg:px-20 flex items-center justify-between h-16">
        {/* Izquierda: Toggle de tema y lenguaje */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-white/20 transition"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-[#006666]" />
            ) : (
              <Moon className="h-5 w-5 text-[#008584]" />
            )}
          </button>
          <button className="uppercase text-sm font-medium text-[#006666]/80 hover:text-[#006666] transition">
            EN
          </button>
        </div>

        {/* Centro: Logo o nombre */}
        <Link href="/" className="text-xl font-bold text-[#006666]">
          
        </Link>

        {/* Derecha: Enlaces de navegación */}
        <ul className="hidden md:flex items-center gap-8 text-[#006666] font-medium">
          <li>
            <Link href="#hero" className="hover:text-[#008584] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#sobre-mi" className="hover:text-[#008584] transition">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link href="#proyectos" className="hover:text-[#008584] transition">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="#habilidades" className="hover:text-[#008584] transition">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="hover:text-[#008584] transition">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón móvil (opcional) */}
        <div className="md:hidden">
          {/* Aquí podrías poner un icono de menú para mobile */}
        </div>
      </div>
    </nav>
  )
}
