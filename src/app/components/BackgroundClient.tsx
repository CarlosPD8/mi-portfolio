'use client'

import dynamic from 'next/dynamic'

// Cargamos dinámicamente tu Background sin SSR
const Background = dynamic(
  () => import('./Background'),
  { ssr: false }
)

export default function BackgroundClient() {
  return <Background />
}
