import { skills } from '@/contenido'

export default function Skills() {
  return (
    <section className="skills band" id="skills">
      <div className="wrap">
        <div className="cab">
          <h2 className="h2">Skills</h2>
          <p className="dato gris">Ficha técnica · 3 talles</p>
        </div>
        <div className="tp">
          {skills.map((col) => (
            <section key={col.area}>
              <header>
                <h3 className="h3">{col.area}</h3>
                <span className="dato">{col.talle}</span>
              </header>
              <ul>
                {col.items.map(([skill, deDonde]) => (
                  <li key={skill}>
                    {skill}
                    <span>{deDonde}</span>
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
