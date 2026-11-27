// cada skill tiene al lado de donde la saque
const columnas = [
  {
    area: 'Negocio',
    talle: 'A',
    items: [
      ['Ventas y alquileres', 'Imar'],
      ['Tasaciones', 'Imar'],
      ['Análisis de márgenes', 'Ecommerce'],
      ['Importación desde China', 'Ecommerce'],
      ['Mercado Libre, Tiendanube y Dropi', 'Ecommerce'],
      ['Validación con encuestas', 'RAW'],
    ],
  },
  {
    area: 'Diseño',
    talle: 'B',
    items: [
      ['Diseño de indumentaria', 'RAW'],
      ['Techpacks y medidas', 'RAW'],
      ['Producto y UI', 'RAW'],
      ['Redes y atención por chat', 'Imar'],
    ],
  },
  {
    area: 'Desarrollo',
    talle: 'C',
    items: [
      ['React + TypeScript', 'RAW'],
      ['Fabric.js', 'RAW'],
      ['Supabase (backend)', 'RAW'],
      ['Bots de IA con Kommo CRM', 'Llavi'],
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills band" id="skills">
      <div className="wrap">
        <div className="cab">
          <h2 className="h2">Skills</h2>
          <p className="dato gris">Ficha técnica / 3 talles</p>
        </div>
        <div className="tp">
          {columnas.map((col) => (
            <section key={col.area}>
              <header>
                <h3 className="h3">{col.area}</h3>
                <span className="dato">{col.talle}</span>
              </header>
              <ul>
                {col.items.map((item) => (
                  <li key={item[0]}>
                    {item[0]}
                    <span>{item[1]}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
