import { contacto } from '@/contenido'

export default function Contacto() {
  return (
    <section className="contacto band" id="contacto">
      <div className="wrap">
        <p className="dato gris">Contacto</p>
        <h2 className="mega">
          <a href={`mailto:${contacto.mail}`}>¿Hablamos?</a>
        </h2>
        <p className="mail">{contacto.mail}</p>
        <nav className="redes" aria-label="Redes">
          {contacto.redes.map((r) => {
            const externo = r.href.startsWith('http')
            return (
              <a key={r.red} href={r.href} target={externo ? '_blank' : undefined} rel={externo ? 'noreferrer' : undefined}>
                <span className="dato gris">{r.red}</span>
                <b>{r.texto}</b>
              </a>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
