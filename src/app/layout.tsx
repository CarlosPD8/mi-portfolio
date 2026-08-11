import './styles/globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Providers from './providers'
import BackgroundClient from './components/BackgroundClient'
import Navbar from './components/Navbar'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Carlos Pérez Delgado — Full-Stack Developer',
  description: 'Portfolio de Carlos Pérez Delgado, desarrollador Full-Stack especializado en IA y automatizaciones.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={jakarta.variable}>
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
