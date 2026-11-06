// Si el texto todavía dice "completar" lo muestro en gris/itálica
export const falta = (texto: string) => /^completar/i.test(texto)

export function Texto({ children, className = '' }: { children: string; className?: string }) {
  const clases = [className, falta(children) ? 'falta' : ''].filter(Boolean).join(' ')
  return <p className={clases || undefined}>{children}</p>
}
