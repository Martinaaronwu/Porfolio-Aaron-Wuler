import type { Metadata } from 'next'
import Link from 'next/link'
import { rawDesign as raw } from '@/contenido'
import Image from 'next/image'
import Buzo from '@/components/Buzo'
import { Texto, falta } from '@/components/Texto'

export const metadata: Metadata = {
  title: 'RAW Design',
  description: raw.bajada,
  openGraph: {
    title: 'RAW Design — Aaron Wuler',
    description: raw.bajada,
  },
}

export default function RawDesign() {
  return (
    <main>
      <section className="cs-top">
        <div className="wrap">
          <Link className="volver" href="/#proyectos">
            ← Volver a proyectos
          </Link>
          <p className="dato lima">01 · Case study</p>
          <h1 className="mega">
            RAW
            <br />
            Design
          </h1>
          <p className="bajada">{raw.bajada}</p>
          <dl className="ficha">
            {raw.ficha.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd className={falta(f.valor) ? 'falta' : undefined}>{f.valor}</dd>
              </div>
            ))}
            <div className="dest">
              <dt>Validación</dt>
              <dd>{raw.validacion}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cs-hero">
        <div className="wrap marco">
          <Image className="captura" src={raw.editor.src} alt={raw.editor.alt} width={1254} height={564} priority />
          <div className="caja-buzo">
            <Buzo />
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="paso">
          <div>
            <p className="n">01</p>
            <h2 className="h3">Problema</h2>
          </div>
          <div className="cuerpo">
            {raw.problema.map((p) => (
              <Texto key={p}>{p}</Texto>
            ))}
          </div>
        </section>

        <section className="paso">
          <div>
            <p className="n">02</p>
            <h2 className="h3">Qué hicimos</h2>
          </div>
          <div className="cuerpo">
            <p>{raw.queHicimos}</p>
            <div className="modulos">
              {raw.modulos.map(([titulo, texto]) => (
                <div key={titulo}>
                  <b>{titulo}</b>
                  <span>{texto}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="paso">
          <div>
            <p className="n">03</p>
            <h2 className="h3">Validación</h2>
          </div>
          <div className="cuerpo">
            <div className="gran">
              <span className="num">80%</span>
              <p>
                {raw.validacionTexto}
                <br />
                <span className="falta">{raw.validacionFalta}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="paso">
          <div>
            <p className="n">04</p>
            <h2 className="h3">Resultado y aprendizajes</h2>
          </div>
          <div className="cuerpo">
            <ul className="aprendi">
              {raw.aprendizajes.map((texto, i) => (
                <li key={i}>
                  <span>{'ABC'[i]}</span>
                  <Texto>{texto}</Texto>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="paso">
          <div>
            <p className="n">05</p>
            <h2 className="h3">Galería</h2>
          </div>
          <div className="galeria">
            {raw.galeria.map((g) => (
              <figure key={g.src}>
                <Image className="captura" src={g.src} alt={g.alt} width={1254} height={564} />
                <figcaption className="dato gris">{g.pie}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>

      <section className="sig-borde">
        <div className="wrap sig">
          <Link className="volver" href="/#proyectos">
            ← Todos los proyectos
          </Link>
          <Link className="btn" href="/#contacto">
            Hablemos de RAW →
          </Link>
        </div>
      </section>
    </main>
  )
}
