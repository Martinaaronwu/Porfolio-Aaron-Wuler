import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <h1 className="mega">
          <span>Aaron</span>
          <span>Wuler</span>
        </h1>

        <div className="hero-texto">
          <p className="tagline">
            Diseño ropa y <em>programo las herramientas</em> para hacerlo más rápido.
          </p>

          <div className="tags">
            <span>Moda</span>
            <span>Ecommerce</span>
            <span>Software</span>
          </div>

          <a className="btn" href="#proyectos">
            Ver proyectos ↓
          </a>

          <p className="estado">
            <i />
            Ahora: construyendo RAW Design
          </p>
        </div>

        <div className="retrato">
          <Image
            className="foto"
            src="/fotos/aaron.webp"
            alt="Aaron Wuler"
            width={800}
            height={1000}
            priority
            sizes="(min-width: 900px) 320px, 90vw"
          />
          {/* la etiqueta de la foto, como la de una prenda */}
          <div className="etiqueta">
            <span className="dato">
              <b>AW-01</b>
            </span>
            <span className="dato">FOUNDER</span>
            <span className="dato">BUENOS AIRES, BELGRANO</span>
            <span className="dato">5° AÑO ORT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
