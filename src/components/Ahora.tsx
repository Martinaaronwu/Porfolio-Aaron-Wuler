import { ahora } from '@/contenido'
import { Texto } from './Texto'

export default function Ahora() {
  return (
    <section className="ahora band" id="ahora">
      <div className="wrap">
        <h2 className="h2">
          Lo que estoy
          <br />
          construyendo ahora
        </h2>
        <div className="lista">
          {ahora.map((fila, i) => (
            <div className="fila" key={i}>
              <span className={fila.activo ? 'chip on' : 'chip'}>{fila.chip}</span>
              <h3 className={fila.titulo === '—' ? 'h3 gris' : 'h3'}>{fila.titulo}</h3>
              <Texto>{fila.texto}</Texto>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
