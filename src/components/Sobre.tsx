import { perfil } from '@/contenido'
import { falta } from './Texto'

export default function Sobre() {
  const { sobre, quienSoy, datos } = perfil

  return (
    <section className="sobre band" id="sobre">
      <div className="wrap">
        <div>
          <p className="dato gris" style={{ marginBottom: 14 }}>
            Sobre mí
          </p>
          <p className="cuerpo">
            {sobre.antes}
            <strong>{sobre.fuerte}</strong>
            {sobre.despues}
          </p>
          <div className="quien">
            {quienSoy.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="datos">
          {datos.map((d) => (
            <div key={d.label}>
              <dt>{d.label}</dt>
              <dd className={falta(d.valor) ? 'falta' : undefined}>{d.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
