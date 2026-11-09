import Image from 'next/image'
import { experiencia as exp } from '@/contenido'

export default function Experiencia() {
  return (
    <section className="band" id="experiencia">
      <div className="wrap">
        <div className="cab">
          <h2 className="h2">Experiencia</h2>
          <p className="dato gris">{exp.cuando}</p>
        </div>

        <article className="art exp">
          <Image className="exp-foto" src={exp.foto} alt={`Logo de ${exp.empresa}`} width={960} height={330} />
          <div className="info">
            <span className="num">{exp.rol}</span>
            <h3 className="h3">{exp.empresa}</h3>
            <p className="bajada">{exp.texto}</p>
            <div className="pie">
              {exp.tareas.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a className="link" href={exp.instagram.href} target="_blank" rel="noreferrer">
              {exp.instagram.usuario} en Instagram →
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
