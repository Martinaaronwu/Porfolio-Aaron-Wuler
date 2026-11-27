import localFont from 'next/font/local'

// archivo es variable, tiene peso y ancho (el ancho lo cambio con 'wdth' en el css)
export const archivo = localFont({
  src: '../fonts/archivo-wdth.woff2',
  weight: '100 900',
  variable: '--font-archivo',
  display: 'swap',
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
})

export const mono = localFont({
  src: [
    { path: '../fonts/jbmono-400.woff2', weight: '400' },
    { path: '../fonts/jbmono-500.woff2', weight: '500' },
  ],
  variable: '--font-mono',
  display: 'swap',
})
