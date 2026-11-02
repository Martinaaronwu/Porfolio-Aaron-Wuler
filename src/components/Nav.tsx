import Link from 'next/link'
import { nav } from '@/contenido'

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Aaron Wuler, inicio">
          A<b>/</b>W
        </Link>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.texto}</Link>
            </li>
          ))}
        </ul>
        <Link className="btn" href="/#contacto">
          Escribime
        </Link>
      </div>
    </header>
  )
}
