// el buzo de raw design separado en piezas, con medidas
// (las medidas son inventadas, es solo para mostrar)
export default function Buzo({ label = 'Buzo despiezado en módulos' }: { label?: string }) {
  return (
    <svg className="despiece" viewBox="0 0 640 520" role="img" aria-label={label}>
      <g className="buzo">
        {/* capucha */}
        <ellipse className="sombra" cx="322" cy="128" rx="70" ry="8" />
        <path className="pieza" d="M262 112 C262 52 302 28 322 28 C342 28 382 52 382 112 L360 116 C356 84 340 66 322 66 C304 66 288 84 284 116 Z" />
        <path className="cos" d="M270 106 C272 60 304 38 322 38 C340 38 372 60 374 106" />

        {/* cuerpo */}
        <ellipse className="sombra" cx="322" cy="414" rx="104" ry="10" />
        <path className="pieza" d="M244 154 L284 140 C296 150 348 150 360 140 L400 154 L404 400 L240 400 Z" />
        <path className="cos" d="M248 388 L396 388" />
        <path className="cos" d="M286 150 C300 160 344 160 358 150" />

        {/* bolsillo canguro */}
        <path className="pieza osc" d="M280 318 L364 318 L380 372 L264 372 Z" />
        <path className="cos" d="M286 324 L358 324 L372 366 L272 366 Z" />

        {/* manga izquierda */}
        <ellipse className="sombra" cx="166" cy="372" rx="40" ry="6" />
        <path className="pieza" d="M200 160 L224 172 L190 352 L146 348 Z" />
        <path className="pieza osc" d="M146 352 L190 356 L188 384 L142 380 Z" />
        <path className="cos" d="M148 362 L188 366" />

        {/* manga derecha */}
        <ellipse className="sombra" cx="478" cy="372" rx="40" ry="6" />
        <path className="pieza" d="M444 160 L420 172 L454 352 L498 348 Z" />
        <path className="pieza osc" d="M498 352 L454 356 L456 384 L502 380 Z" />
        <path className="cos" d="M496 362 L456 366" />

        {/* nombres de las piezas */}
        <line className="cota" x1="382" y1="70" x2="440" y2="70" />
        <text x="446" y="74">CAPUCHA</text>
        <line className="cota" x1="200" y1="210" x2="120" y2="210" />
        <text x="40" y="214">MANGA L</text>
        <line className="cota" x1="444" y1="210" x2="520" y2="210" />
        <text x="526" y="214">MANGA R</text>
        <line className="cota" x1="264" y1="345" x2="210" y2="440" />
        <text x="120" y="456">BOLSILLO</text>
        <text className="g" x="120" y="477">CANGURO</text>
        <line className="cota" x1="142" y1="384" x2="100" y2="408" />
        <text x="40" y="420">PUÑO</text>

        {/* cotas */}
        <line className="cota" x1="240" y1="440" x2="404" y2="440" />
        <line className="cota" x1="240" y1="434" x2="240" y2="446" />
        <line className="cota" x1="404" y1="434" x2="404" y2="446" />
        <text x="300" y="460">56 cm</text>
        <line className="cota punt" x1="424" y1="154" x2="424" y2="400" />
        <text x="532" y="300">72 cm</text>
        <line className="cota" x1="428" y1="296" x2="526" y2="296" />

        <text className="g" x="40" y="40">MOD · 05 PIEZAS</text>
        <text className="g" x="40" y="62">MEDIDAS DE EJEMPLO</text>
      </g>
    </svg>
  )
}
