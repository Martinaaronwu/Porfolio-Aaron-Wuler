import type { Metadata, Viewport } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { archivo, mono } from './fuentes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aaron Wuler | Moda, Ecommerce y Software',
  description: 'Diseño ropa y programo las herramientas para hacerlo más rápido.',
  // para que se vea bien cuando paso el link por whatsapp o linkedin
  openGraph: {
    title: 'Aaron Wuler',
    description: 'Diseño ropa y programo las herramientas para hacerlo más rápido.',
    type: 'website',
    locale: 'es_AR',
  },
}

// color de la barra del navegador en el celu
export const viewport: Viewport = {
  themeColor: '#0B0C10',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={archivo.variable + ' ' + mono.variable} data-scroll-behavior="smooth">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
