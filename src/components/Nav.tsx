import Link from 'next/link'

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Aaron Wuler, inicio">
          A<b>/</b>W
        </Link>
        {/* en el celu se esconde, queda solo el boton */}
        <ul>
          <li>
            <Link href="/#experiencia">Experiencia</Link>
          </li>
          <li>
            <Link href="/#proyectos">Proyectos</Link>
          </li>
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/#ahora">Ahora</Link>
          </li>
        </ul>
        <Link className="btn" href="/#contacto">
          Escribime
        </Link>
      </div>
    </header>
  )
}
