// Todo el texto de la web está acá.
// Lo que empieza con "Completar" se muestra en gris/itálica hasta que lo reemplace.

export const nav = [
  { texto: 'Experiencia', href: '/#experiencia' },
  { texto: 'Proyectos', href: '/#proyectos' },
  { texto: 'Skills', href: '/#skills' },
  { texto: 'Ahora', href: '/#ahora' },
]

export const perfil = {
  nombre: 'Aaron',
  apellido: 'Wuler',
  frase: ['Diseño ropa y ', 'programo las herramientas', ' para hacerlo más rápido.'],
  tags: ['Moda', 'Ecommerce', 'Software'],
  estado: 'Ahora: construyendo RAW Design',
  foto: '/fotos/aaron.webp',
  etiqueta: ['FOUNDER', 'BUENOS AIRES · BELGRANO', '5° AÑO · ORT'],
  sobre: {
    antes: 'Soy Aaron. Me muevo entre tres cosas: ',
    fuerte: 'ropa, ecommerce y software',
    despues:
      '. Lo que más me interesa es donde se cruzan: diseñar la prenda, programar la herramienta que hace todo más rápido y, más adelante, armar mi propia tienda online.',
  },
  quienSoy: [
    'Me encanta aprender, pero no por aprender: aprendo de las personas, de cómo se comunican, de cómo se comportan y de lo que saben. Me apasionan la psicología y el lenguaje corporal, y leer a la gente es algo que me sale natural. Por eso escucho mucho.',
    'También me encantan los deportes: me dan salud y me hacen bien a la cabeza. Y creo que el techo lo pone cada uno; el mío no tiene límite.',
  ],
  datos: [
    { label: 'Base', valor: 'Belgrano, Buenos Aires' },
    { label: 'Estudio', valor: '5° año · ORT' },
    { label: 'Proyecto principal', valor: 'RAW Design' },
    { label: 'Busco', valor: 'completar' },
  ],
}

export type Proyecto = {
  num: string
  titulo: string
  clase: 'a2' | 'a3'
  foto?: { src: string; alt: string; credito?: string }
  problema: string
  hice: string
  resultado: string
  stack: string[]
  // cuando tenga su propia página: /proyectos/ecommerce, /proyectos/llavi
  href?: string
}

export const principal = {
  num: '01 · Proyecto principal',
  titulo: 'RAW Design',
  bajada:
    'Web app para diseñar ropa armándola como Lego: módulos de cuello, mangas y bolsillos, medidas reales en cm y techpack automático.',
  metrica: { valor: '80%', texto: 'lo usaría como herramienta principal (encuesta)' },
  stack: ['React', 'TypeScript', 'Fabric.js', 'Supabase', 'Equipo de 3'],
  href: '/proyectos/raw-design',
}

export const proyectos: Proyecto[] = [
  {
    num: '02',
    titulo: 'Ecommerce',
    clase: 'a2',
    foto: {
      src: '/fotos/ecommerce.webp',
      alt: 'Remeras colgadas en un perchero con un cartel de precio',
      credito: 'Foto: Diego Torres Silvestre · CC BY 2.0',
    },
    problema: 'Quiero arrancar mi propio ecommerce de ropa sin quedarme con stock parado.',
    hice: 'Comparé márgenes de importar desde China para vender en Mercado Libre contra dropshipping con Tiendanube + Dropi, y armé el roadmap para implementarlo.',
    resultado: 'Todavía no arranqué: es mi próximo proyecto.',
    stack: ['Mercado Libre', 'Tiendanube', 'Dropi'],
  },
  {
    num: '03',
    titulo: 'Llavi',
    clase: 'a3',
    problema:
      'Una inmobiliaria recibe consultas por WhatsApp, Instagram y TikTok, y los asesores las filtran a mano.',
    hice: 'Bot de IA sobre Kommo CRM: detecta intención, califica el lead y lo deriva al asesor.',
    resultado: 'Completar: leads por mes, tiempo ahorrado.',
    stack: ['IA', 'Kommo CRM'],
  },
]

export const experiencia = {
  empresa: 'Inmobiliaria Imar',
  rol: 'Rookie · ventas y redes',
  cuando: 'Veranos + parte de 2026',
  foto: '/fotos/imar.webp',
  texto:
    'Todos los veranos, y parte de este año, trabajé en la inmobiliaria de mi mamá. Entré como rookie para aprender de ventas y me terminé especializando en las redes y en la charla con el cliente: asistencia, ventas, alquileres y tasaciones.',
  tareas: ['Redes', 'Atención al cliente', 'Ventas', 'Alquileres', 'Tasaciones'],
  instagram: { usuario: '@InmobiliariaImar', href: 'https://www.instagram.com/inmobiliariaimar/' },
}

export const skills = [
  {
    area: 'Negocio',
    talle: 'A',
    items: [
      ['Ventas y alquileres', 'Imar'],
      ['Tasaciones', 'Imar'],
      ['Análisis de márgenes', 'Ecommerce'],
      ['Importación desde China', 'Ecommerce'],
      ['Mercado Libre · Tiendanube · Dropi', 'Ecommerce'],
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
      ['React · TypeScript', 'RAW'],
      ['Fabric.js', 'RAW'],
      ['Supabase (backend)', 'RAW'],
      ['Bots de IA · Kommo CRM', 'Llavi'],
    ],
  },
]

export const ahora = [
  {
    chip: 'EN CURSO',
    activo: true,
    titulo: 'RAW Design',
    texto: 'Pasar de la validación (80% lo usaría) a un producto que diseñadores usen todos los días.',
  },
  { chip: 'PRÓXIMO', titulo: 'Ecommerce', texto: 'Arrancar mi propio ecommerce de ropa.' },
]

export const contacto = {
  mail: 'aaronwuler10@gmail.com',
  redes: [
    { red: 'Email', texto: 'Escribime', href: 'mailto:aaronwuler10@gmail.com' },
    { red: 'LinkedIn', texto: 'Aaron Wuler', href: 'https://www.linkedin.com/search/results/people/?keywords=aaron%20wuler' },
    { red: 'Instagram', texto: '@aaronwuler', href: 'https://www.instagram.com/aaronwuler/' },
    { red: 'GitHub', texto: '@martinaaronwu', href: 'https://github.com/Martinaaronwu' },
  ],
}

export const rawDesign = {
  bajada:
    'Una web app para diseñar ropa como si fuera Lego, con medidas reales y el techpack listo para la fábrica.',
  ficha: [
    { label: 'Rol', valor: 'Backend · producto' },
    { label: 'Equipo', valor: '3 personas' },
    { label: 'Stack', valor: 'React · TS · Fabric.js · Supabase' },
    { label: 'Estado', valor: 'completar' },
  ],
  validacion: '80% lo usaría',
  editor: { src: '/fotos/raw-editor.webp', alt: 'Editor de RAW con una remera de denim y el panel de texturas' },
  problema: [
    'Diseñar una prenda hoy es saltar entre un programa de dibujo, una planilla de medidas y un techpack armado a mano. Cada salto es un lugar donde se pierde información antes de llegar a la fábrica.',
    'Completar: a quién le pasa (marcas chicas, estudiantes de diseño) y un ejemplo concreto.',
  ],
  queHicimos: 'Un editor donde la prenda se arma por partes y cada parte sabe sus medidas. Yo hice el backend en Supabase.',
  modulos: [
    ['Mockups modulares', 'Remeras, buzos y pantalones con cuellos, mangas y bolsillos intercambiables.'],
    ['Pinceles de confección', 'Pinceles específicos para costuras, cierres y bordados.'],
    ['Texturas', 'Telas aplicadas sobre la prenda.'],
    ['Medidas reales', 'Todo en centímetros, no en píxeles.'],
    ['Techpack automático', 'La ficha técnica sale del mismo diseño, sin rearmarla.'],
    ['Backend', 'Supabase: usuarios, proyectos y datos de cada prenda.'],
  ],
  validacionTexto: 'de los encuestados lo usaría como su herramienta principal de diseño.',
  validacionFalta: 'Completar: cuántas personas respondieron y quiénes eran.',
  aprendizajes: [
    'Completar: qué funciona hoy (MVP, usuarios de prueba, demo).',
    'Completar: qué aprendiste construyendo el backend.',
    'Completar: qué cambiarías o qué sigue.',
  ],
  galeria: [
    { src: '/fotos/raw-medidas.webp', alt: 'Editor de RAW', pie: 'MEDIDAS EN CM' },
    { src: '/fotos/raw-techpack.webp', alt: 'Techpack generado por RAW', pie: 'TECHPACK EXPORTADO' },
    { src: '/fotos/raw-prendas.webp', alt: 'Pantalla para elegir la prenda de un proyecto nuevo', pie: 'NUEVO PROYECTO' },
  ],
}
