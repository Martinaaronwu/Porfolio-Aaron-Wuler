// Todo el texto de la web está acá.
// Lo que empieza con "Completar" se muestra en gris/itálica hasta que lo reemplace.

export const nav = [
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
