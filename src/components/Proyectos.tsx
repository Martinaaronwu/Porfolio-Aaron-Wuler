import Image from 'next/image'
import Link from 'next/link'
import Buzo from './Buzo'

// los otros proyectos (raw design va aparte porque es el grande)
// TODO: cuando tengan su pagina agregarles el link a /proyectos/...
const proyectos = [
  {
    num: '02',
    titulo: 'Ecommerce',
    clase: 'a2',
    foto: '/fotos/ecommerce.webp',
    alt: 'Remeras colgadas en un perchero con un cartel de precio',
    credito: 'Foto: Diego Torres Silvestre, CC BY 2.0',
    problema: 'Quiero arrancar mi propio ecommerce de ropa sin quedarme con stock parado.',
    hice: 'Comparé márgenes de importar desde China para vender en Mercado Libre contra dropshipping con Tiendanube + Dropi, y armé el roadmap para implementarlo.',
    resultado: 'Todavía no arranqué: es mi próximo proyecto.',
    stack: ['Mercado Libre', 'Tiendanube', 'Dropi'],
  },
  {
    num: '03',
    titulo: 'Llavi',
    clase: 'a3',
    problema:
      'Una inmobiliaria recibe consultas por WhatsApp, Instagram y TikTok, y los asesores las filtran a mano.',
    hice: 'Bot de IA sobre Kommo CRM: detecta intención, califica el lead y lo deriva al asesor.',
    resultado: 'Completar: leads por mes, tiempo ahorrado.',
    pendiente: true,
    stack: ['IA', 'Kommo CRM'],
  },
]

export default function Proyectos() {
  return (
    <section className="band" id="proyectos">
      <div className="wrap">
        <div className="cab">
          <h2 className="h2">Proyectos</h2>
          <p className="dato gris">03 artículos / problema → qué hice → resultado</p>
        </div>

        <div className="grilla">
          <article className="art prin">
            <div className="img">
              <Buzo label="Buzo despiezado en módulos: capucha, cuerpo, mangas, bolsillo y puños" />
            </div>
            <div className="info">
              <span className="num">01 / Proyecto principal</span>
              <h3 className="h3">RAW Design</h3>
              <p className="bajada">
                Web app para diseñar ropa armándola como Lego: módulos de cuello, mangas y bolsillos, medidas reales en
                cm y techpack automático.
              </p>
              <div className="metrica">
                <b>80%</b>
                <span>lo usaría como herramienta principal (encuesta)</span>
              </div>
              <div className="pie">
                <span>React</span>
                <span>TypeScript</span>
                <span>Fabric.js</span>
                <span>Supabase</span>
                <span>Equipo de 3</span>
              </div>
              <Link className="link" href="/proyectos/raw-design">
                Ver case study →
              </Link>
            </div>
          </article>

          {proyectos.map((p) => (
            <article className={'art ' + p.clase} key={p.num}>
              {p.foto && (
                <figure className="img">
                  <Image src={p.foto} alt={p.alt} width={1200} height={900} sizes="(min-width: 760px) 66vw, 90vw" />
                  <figcaption>{p.credito}</figcaption>
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
                    <dd className={p.pendiente ? 'falta' : ''}>{p.resultado}</dd>
                  </div>
                </dl>
                <div className="pie">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
