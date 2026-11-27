import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Buzo from '@/components/Buzo'

const bajada =
  'Una web app para diseñar ropa como si fuera Lego, con medidas reales y el techpack listo para la fábrica.'

export const metadata: Metadata = {
  title: 'RAW Design | Aaron Wuler',
  description: bajada,
}

const modulos = [
  ['Mockups modulares', 'Remeras, buzos y pantalones con cuellos, mangas y bolsillos intercambiables.'],
  ['Pinceles de confección', 'Pinceles específicos para costuras, cierres y bordados.'],
  ['Texturas', 'Telas aplicadas sobre la prenda.'],
  ['Medidas reales', 'Todo en centímetros, no en píxeles.'],
  ['Techpack automático', 'La ficha técnica sale del mismo diseño, sin rearmarla.'],
  ['Backend', 'Supabase: usuarios, proyectos y datos de cada prenda.'],
]

export default function RawDesign() {
  return (
    <main>
      <section className="cs-top">
        <div className="wrap">
          <Link className="volver" href="/#proyectos">
            ← Volver a proyectos
          </Link>
          <p className="dato lima">01 / Case study</p>
          <h1 className="mega">
            RAW
            <br />
            Design
          </h1>
          <p className="bajada">{bajada}</p>

          <dl className="ficha">
            <div>
              <dt>Rol</dt>
              <dd>Backend y producto</dd>
            </div>
            <div>
              <dt>Equipo</dt>
              <dd>3 personas</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>React, TS, Fabric.js, Supabase</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd className="falta">completar</dd>
            </div>
            <div className="dest">
              <dt>Validación</dt>
              <dd>80% lo usaría</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="cs-hero">
        <div className="wrap marco">
          <Image
            className="captura"
            src="/fotos/raw-editor.webp"
            alt="Editor de RAW con una remera de denim y el panel de texturas"
            width={1254}
            height={564}
            priority
          />
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
            <p>
              Diseñar una prenda hoy es saltar entre un programa de dibujo, una planilla de medidas y un techpack armado
              a mano. Cada salto es un lugar donde se pierde información antes de llegar a la fábrica.
            </p>
            <p className="falta">Completar: a quién le pasa (marcas chicas, estudiantes de diseño) y un ejemplo concreto.</p>
          </div>
        </section>

        <section className="paso">
          <div>
            <p className="n">02</p>
            <h2 className="h3">Qué hicimos</h2>
          </div>
          <div className="cuerpo">
            <p>Un editor donde la prenda se arma por partes y cada parte sabe sus medidas. Yo hice el backend en Supabase.</p>
            <div className="modulos">
              {modulos.map((m) => (
                <div key={m[0]}>
                  <b>{m[0]}</b>
                  <span>{m[1]}</span>
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
                de los encuestados lo usaría como su herramienta principal de diseño.
                <br />
                <span className="falta">Completar: cuántas personas respondieron y quiénes eran.</span>
              </p>
            </div>
          </div>
        </section>

        {/* TODO: llenar esto cuando tengamos el mvp andando */}
        <section className="paso">
          <div>
            <p className="n">04</p>
            <h2 className="h3">Resultado y aprendizajes</h2>
          </div>
          <div className="cuerpo">
            <ul className="aprendi">
              <li>
                <span>A</span>
                <p className="falta">Completar: qué funciona hoy (MVP, usuarios de prueba, demo).</p>
              </li>
              <li>
                <span>B</span>
                <p className="falta">Completar: qué aprendiste construyendo el backend.</p>
              </li>
              <li>
                <span>C</span>
                <p className="falta">Completar: qué cambiarías o qué sigue.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="paso">
          <div>
            <p className="n">05</p>
            <h2 className="h3">Galería</h2>
          </div>
          <div className="galeria">
            <figure>
              <Image className="captura" src="/fotos/raw-medidas.webp" alt="Editor de RAW" width={1254} height={564} />
              <figcaption className="dato gris">MEDIDAS EN CM</figcaption>
            </figure>
            <figure>
              <Image
                className="captura"
                src="/fotos/raw-techpack.webp"
                alt="Techpack generado por RAW"
                width={1254}
                height={564}
              />
              <figcaption className="dato gris">TECHPACK EXPORTADO</figcaption>
            </figure>
            <figure>
              <Image
                className="captura"
                src="/fotos/raw-prendas.webp"
                alt="Pantalla para elegir la prenda de un proyecto nuevo"
                width={1254}
                height={564}
              />
              <figcaption className="dato gris">NUEVO PROYECTO</figcaption>
            </figure>
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
