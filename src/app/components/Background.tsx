// src/app/components/Background.tsx
'use client'
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { useTheme } from 'next-themes'

export default function Background() {
  const { theme } = useTheme()

  // El fondo será blanco en modo claro y negro en modo oscuro
  const bgColor = theme === 'dark' ? '#000000' : '#ffffff'

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: bgColor,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: '#888888' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: '#bbbbbb',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.6 } },
            push: { quantity: 4 },
          },
        },
      }}
    />
  )
}
