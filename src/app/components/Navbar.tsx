'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold tracking-tight">CP</span>
          </div>
          <span className="font-bold text-[var(--foreground)] hidden sm:block text-sm">
            Carlos Pérez
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-[#2563EB] transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-[var(--border)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun className="h-4 w-4 text-[var(--muted)]" />
              : <Moon className="h-4 w-4 text-[var(--muted)]" />
            }
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--border)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="h-4 w-4 text-[var(--muted)]" />
              : <Menu className="h-4 w-4 text-[var(--muted)]" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md bg-[var(--background)]/95 border-b border-[var(--border)] px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-[var(--muted)]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block hover:text-[#2563EB] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
