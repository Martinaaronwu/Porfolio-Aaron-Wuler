import type { Metadata, Viewport } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { archivo, mono } from './fuentes'
import './globals.css'

const titulo = 'Aaron Wuler — Moda · Ecommerce · Software'
const descripcion = 'Diseño ropa y programo las herramientas para hacerlo más rápido.'

export const metadata: Metadata = {
  title: {
    default: titulo,
    template: '%s — Aaron Wuler',
  },
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    type: 'website',
    locale: 'es_AR',
    siteName: 'Aaron Wuler',
  },
  twitter: {
    card: 'summary',
    title: titulo,
    description: descripcion,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0C10',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${mono.variable}`} data-scroll-behavior="smooth">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
