'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, FC } from 'react'

/**
 * Providers: envuelve aquí todos los contextos/client-side providers
 */
const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}

export default Providers
