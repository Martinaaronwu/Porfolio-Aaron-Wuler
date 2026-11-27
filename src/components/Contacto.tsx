export default function Contacto() {
  return (
    <section className="contacto band" id="contacto">
      <div className="wrap">
        <p className="dato gris">Contacto</p>
        <h2 className="mega">
          <a href="mailto:aaronwuler10@gmail.com">¿Hablamos?</a>
        </h2>
        <p className="mail">aaronwuler10@gmail.com</p>

        <nav className="redes" aria-label="Redes">
          <a href="mailto:aaronwuler10@gmail.com">
            <span className="dato gris">Email</span>
            <b>Escribime</b>
          </a>
          {/* TODO: cambiar por el link directo a mi perfil */}
          <a
            href="https://www.linkedin.com/search/results/people/?keywords=aaron%20wuler"
            target="_blank"
            rel="noreferrer"
          >
            <span className="dato gris">LinkedIn</span>
            <b>Aaron Wuler</b>
          </a>
          <a href="https://www.instagram.com/aaronwuler/" target="_blank" rel="noreferrer">
            <span className="dato gris">Instagram</span>
            <b>@aaronwuler</b>
          </a>
          <a href="https://github.com/Martinaaronwu" target="_blank" rel="noreferrer">
            <span className="dato gris">GitHub</span>
            <b>@martinaaronwu</b>
          </a>
        </nav>
      </div>
    </section>
  )
}
