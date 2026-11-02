import type { Metadata } from 'next'
import { archivo, mono } from './fuentes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aaron Wuler',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
