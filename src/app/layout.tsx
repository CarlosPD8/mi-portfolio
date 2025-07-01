import './styles/globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import BackgroundClient from './components/BackgroundClient'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Mi Portfolio',
  description: 'Desarrollado por Carlos Perez Delgado',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es"  suppressHydrationWarning>
      <body>
       <Providers>     
          <BackgroundClient />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
