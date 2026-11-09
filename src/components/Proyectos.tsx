import Image from 'next/image'
import Link from 'next/link'
import { principal, proyectos } from '@/contenido'
import Buzo from './Buzo'
import { falta } from './Texto'

export default function Proyectos() {
  const total = String(proyectos.length + 1).padStart(2, '0')

  return (
    <section className="band" id="proyectos">
      <div className="wrap">
        <div className="cab">
          <h2 className="h2">Proyectos</h2>
          <p className="dato gris">{total} artículos · problema → qué hice → resultado</p>
        </div>

        <div className="grilla">
          <article className="art prin">
            <div className="img">
              <Buzo label="Buzo despiezado en módulos: capucha, cuerpo, mangas, bolsillo y puños" />
            </div>
            <div className="info">
              <span className="num">{principal.num}</span>
              <h3 className="h3">{principal.titulo}</h3>
              <p className="bajada">{principal.bajada}</p>
              <div className="metrica">
                <b>{principal.metrica.valor}</b>
                <span>{principal.metrica.texto}</span>
              </div>
              <div className="pie">
                {principal.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <Link className="link" href={principal.href}>
                Ver case study →
              </Link>
            </div>
          </article>

          {proyectos.map((p) => (
            <article className={`art ${p.clase}`} key={p.num}>
              {p.foto && (
                <figure className="img">
                  <Image src={p.foto.src} alt={p.foto.alt} width={1200} height={900} sizes="(min-width: 760px) 66vw, 90vw" />
                  {p.foto.credito && <figcaption>{p.foto.credito}</figcaption>}
                </figure>
              )}
              <div className="info">
                <span className="num">{p.num}</span>
                <h3 className="h3">{p.titulo}</h3>
                <dl className="pqr">
                  <div>
                    <dt>Problema</dt>
                    <dd>{p.problema}</dd>
                  </div>
                  <div>
                    <dt>Qué hice</dt>
                    <dd>{p.hice}</dd>
                  </div>
                  <div>
                    <dt>Resultado</dt>
                    <dd className={falta(p.resultado) ? 'falta' : undefined}>{p.resultado}</dd>
                  </div>
                </dl>
                <div className="pie">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                {p.href && (
                  <Link className="link" href={p.href}>
                    Ver case study →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
