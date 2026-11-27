import Image from 'next/image'

const tareas = ['Redes', 'Atención al cliente', 'Ventas', 'Alquileres', 'Tasaciones']

export default function Experiencia() {
  return (
    <section className="band" id="experiencia">
      <div className="wrap">
        <div className="cab">
          <h2 className="h2">Experiencia</h2>
          <p className="dato gris">Veranos + parte de 2026</p>
        </div>

        <article className="art exp">
          <Image className="exp-foto" src="/fotos/imar.webp" alt="Logo de Inmobiliaria Imar" width={447} height={447} />
          <div className="info">
            <span className="num">Rookie, ventas y redes</span>
            <h3 className="h3">Inmobiliaria Imar</h3>
            <p className="bajada">
              Todos los veranos, y parte de este año, trabajé en la inmobiliaria de mi mamá. Entré como rookie para
              aprender de ventas y me terminé especializando en las redes y en la charla con el cliente: asistencia,
              ventas, alquileres y tasaciones.
            </p>
            <div className="pie">
              {tareas.map((tarea) => (
                <span key={tarea}>{tarea}</span>
              ))}
            </div>
            <a className="link" href="https://www.instagram.com/inmobiliariaimar/" target="_blank" rel="noreferrer">
              @InmobiliariaImar en Instagram →
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
