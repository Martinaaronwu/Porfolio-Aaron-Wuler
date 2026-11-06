import Image from 'next/image'
import { perfil } from '@/contenido'

export default function Hero() {
  const [antes, resaltado, despues] = perfil.frase

  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <h1 className="mega">
          <span>{perfil.nombre}</span>
          <span>{perfil.apellido}</span>
        </h1>

        <div className="hero-texto">
          <p className="tagline">
            {antes}
            <em>{resaltado}</em>
            {despues}
          </p>
          <div className="tags">
            {perfil.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a className="btn" href="#proyectos">
            Ver proyectos ↓
          </a>
          <p className="estado">
            <i />
            {perfil.estado}
          </p>
        </div>

        <div className="retrato">
          <Image
            className="foto"
            src={perfil.foto}
            alt="Aaron Wuler"
            width={800}
            height={1000}
            priority
            sizes="(min-width: 900px) 320px, 90vw"
          />
          <div className="etiqueta">
            <span className="dato">
              <b>AW—01</b>
            </span>
            {perfil.etiqueta.map((linea) => (
              <span className="dato" key={linea}>
                {linea}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
