export default function Sobre() {
  return (
    <section className="sobre band" id="sobre">
      <div className="wrap">
        <div>
          <p className="dato gris" style={{ marginBottom: 14 }}>
            Sobre mí
          </p>
          <p className="cuerpo">
            Soy Aaron. Me muevo entre tres cosas: <strong>ropa, ecommerce y software</strong>. Lo que más me interesa
            es donde se cruzan: diseñar la prenda, programar la herramienta que hace todo más rápido y, más adelante,
            armar mi propia tienda online.
          </p>
          <div className="quien">
            <p>
              Me encanta aprender, pero no por aprender: aprendo de las personas, de cómo se comunican, de cómo se
              comportan y de lo que saben. Me apasionan la psicología y el lenguaje corporal, y leer a la gente es algo
              que me sale natural. Por eso escucho mucho.
            </p>
            <p>
              También me encantan los deportes: me dan salud y me hacen bien a la cabeza. Y creo que el techo lo pone
              cada uno. El mío no tiene límite.
            </p>
          </div>
        </div>

        <dl className="datos">
          <div>
            <dt>Base</dt>
            <dd>Belgrano, Buenos Aires</dd>
          </div>
          <div>
            <dt>Estudio</dt>
            <dd>5° año, ORT</dd>
          </div>
          <div>
            <dt>Proyecto principal</dt>
            <dd>RAW Design</dd>
          </div>
          <div>
            <dt>Busco</dt>
            {/* TODO: poner que busco */}
            <dd className="falta">completar</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
