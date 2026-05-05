/**
 * lib/constants.js
 * Todos los datos estáticos del sitio gutiperu.com
 * Fuente canónica: gutiperu-copy.md v1.0
 */

// ── NAVBAR ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Origen',     href: '#origen' },
  { label: 'Filosofía',  href: '#filosofia' },
  { label: 'Proyectos',  href: '#ecosistema' },
  { label: 'Comunidad',  href: '#impacto' },
  { label: 'Galería',    href: '#galeria' },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Contacto',   href: '#contacto' },
]

// ── HERO ────────────────────────────────────────────────
export const HERO_DATA = {
  statusPill: 'Disponible · Lima, Perú',
  eyebrow: 'Lic. Adm. Luis Arturo Caccha Gutiérrez',
  headline: ['Construyo', 'el ', 'futuro', ' desde hoy.'],
  statement:
    '"Construyo tecnología, negocios e imágenes — siempre desde la convicción de que el progreso debe ser humano y sostenible."',
  ctas: {
    primary: 'Descubre mi historia',
    secondary: 'Hablemos de inversión',
  },
  tags: ['IA & Automatización', 'Emprendedor', 'Fotógrafo', 'Sostenibilidad', 'Docente'],
  metrics: [
    { value: '15+', label: 'Años en tecnología' },
    { value: '5',   label: 'Proyectos activos' },
    { value: 'EU',  label: 'Presencia internacional' },
    { value: '∞',   label: 'Aprendizaje continuo' },
  ],
}

// ── ORIGEN ──────────────────────────────────────────────
export const ORIGEN_DATA = {
  eyebrow: 'Origen',
  titulo: 'De Ica al mundo — una trayectoria construida desde la curiosidad.',
  parrafos: [
    'Crecí en Ica con una certeza: la tecnología no era el futuro, era el presente que pocos estaban aprovechando. Uno de mis primeros trabajos fue en una tienda especializada de cómputo y servicios informáticos — Software y hardware eran mi especialidad. por mi desempeño me nombraron coordinador del área de soporte. Ahí aprendí que el uso de la tecnología brinda ventajas a quienes la dominan.',
    'Con los años fui ingresando poco a poco hacia mi carrera profesional. Aterrizando en el mundo de las finanzas, en el sector bancario y retail. Una breve temporada en la capital me permitió asistir a eventos en las mejores universidades sobre el ecosistema de las “Startups” y programas de fomento a la innovación “Festival Internacional de Innovación Social”, meses más tarde, Fundé en Ica “Ikreo Perú - Reciclaje con propósito” — una startup de sostenibilidad que ganó reconocimientos a nivel nacional. Me formé con una Maestría en Administración “Gestión Pública”, lo que me permitió ingresar a la Docencia y dictar cursos de Innovación y emprendimientos escalables, en institutos de nivel superior durante cuatro años. La pandemia me ayudó a descubrir mi lado artístico en la fotografía. lo que me permitió años más tarde conseguir un viaje de 03 mes por europa para retratar las principales ciudades de Alemania, Austria, Italia y Suiza.',
    'Hoy desde Lima como Fundador de DW Automatizaciones — Creo soluciones con agentes de inteligencia artificial para el sector Público y Privado — Aún continúo expandiendo un ecosistema de proyectos que une tecnología, creatividad e impacto social.',
  ],
  hitos: [
    { anio: '2011', hito: 'Debut profesional en tecnología', detalle: 'Software y hardware support' },
    { anio: '2013', hito: 'Analista asesor financiero', detalle: 'Banca retail' },
    { anio: '2017', hito: 'Maestría en Administración', detalle: 'Mención Gestión Pública' },
    { anio: '2018', hito: 'Fundación Ikreo Perú', detalle: 'Sostenibilidad & reciclaje' },
    { anio: '2019', hito: 'Docente universitario', detalle: 'Innovación, startups, marketing' },
    { anio: '2020', hito: 'Descubrimiento de la fotografía', detalle: 'Aprendizaje y compra de equipos' },
    { anio: '2022', hito: 'Fundación Guti Perú Studio', detalle: 'Producción audiovisual' },
    { anio: '2024', hito: 'Proyecto Travel Europa PH', detalle: 'Tour Fotográfico' },
    { anio: '2026', hito: 'Fundación DataWithIA', detalle: 'IA & automatización con agentes' },
  ],
}

// ── FILOSOFÍA ───────────────────────────────────────────
export const PRINCIPIOS = [
  {
    num: '01',
    icono: '🔨',
    titulo: 'Construir es la mejor forma de aprender',
    texto:
      'Nunca esperé tener todo claro para comenzar. Cada proyecto fue una escuela construida desde la práctica, el error y la iteración constante.',
  },
  {
    num: '02',
    icono: '🎯',
    titulo: 'La tecnología sin propósito es ruido',
    texto:
      'Automatizo procesos, desarrollo software y creo sistemas — pero siempre preguntando primero: ¿para qué y para quién?',
  },
  {
    num: '03',
    icono: '📚',
    titulo: 'El aprendizaje no tiene institución obligatoria',
    texto:
      'Soy autodidacta por convicción. Mi curiosidad no espera calendarios académicos ni programas predefinidos. Mis certificaciones en LinkedIn son el registro visible de una exploración que no se detiene.',
  },
  {
    num: '04',
    icono: '🌿',
    titulo: 'El progreso real incluye personas y planeta',
    texto:
      'Mi trabajo en sostenibilidad y voluntariado no es paralelo a mi carrera — es parte constitutiva de ella. No construyo a pesar del entorno, construyo para él.',
  },
]

// ── PROYECTOS / ECOSISTEMA ──────────────────────────────
export const PROYECTOS = [
  {
    id: 'studio',
    nombre: 'Guti Perú Studio',
    categoria: 'Fotografía · Audiovisual',
    descripcion:
      'Producción fotográfica y audiovisual con mirada internacional. Desde Ica hasta Europa — el arte como extensión del pensamiento.',
    href: '/studio',
    accentColor: 'linear-gradient(90deg, #E8D46A, #C8A96E)',
    wide: false,
  },
  {
    id: 'dw',
    nombre: 'DW Automatizaciones',
    categoria: 'IA · Software',
    descripcion:
      'Agentes inteligentes y automatización de procesos para empresas que quieren escalar sin perder el foco humano.',
    href: '/dw',
    accentColor: 'linear-gradient(90deg, #5ECFB8, #7EEAEA)',
    wide: false,
  },
  {
    id: 'rescoperu',
    nombre: 'ResCO Perú',
    categoria: 'PropTech · SaaS',
    descripcion:
      'Plataforma SaaS para gestión inteligente de residenciales y condominios en Latinoamérica. Administración moderna para comunidades modernas.',
    href: '/rescoperu',
    accentColor: 'linear-gradient(90deg, #2A6DD9, #5ECFB8)',
    wide: false,
  },
  {
    id: 'ikreo',
    nombre: 'Ikreo Perú',
    categoria: 'Sostenibilidad',
    descripcion:
      'Startup de reciclaje, educación ambiental y moda sostenible con reconocimientos nacionales. Nacida de convicción, no de mercado.',
    href: '/ikreo',
    accentColor: 'linear-gradient(90deg, #A8D8A8, #5A8A5A)',
    wide: false,
  },
  {
    id: 'ati',
    nombre: 'ATI',
    categoria: 'Productividad Digital',
    descripcion:
      'Organiza todas tus herramientas digitales en un solo lugar. Tu hub de productividad personal — todo lo que usas, donde lo necesitas.',
    href: '/ati',
    accentColor: 'linear-gradient(90deg, #7EEAEA, #2A6DD9)',
    wide: false,
  },
  {
    id: 'proximamente',
    nombre: 'Próximamente',
    categoria: 'En desarrollo',
    descripcion:
      'Espacio reservado para un nuevo proyecto del ecosistema. Explorando nuevas integraciones y herramientas.',
    href: '#',
    accentColor: 'linear-gradient(90deg, #1C3A38, #3A6B68)',
    wide: false,
  },
]

// ── IMPACTO & COMUNIDAD ─────────────────────────────────
export const IMPACTO_DATA = {
  eyebrow: 'Impacto & Comunidad',
  titulo: ['El negocio es importante.', ' El impacto, más.'],
  bloques: [
    {
      icono: '/images/impacto/cs-logo.png',
      subtitulo: 'Red global de confianza',
      texto:
        'Desde el 2015 soy anfitrión activo en Couchsurfing — una red global donde he hospedado y asistido a viajeros de decenas de países. Eso me dio algo que ningún MBA enseña: inteligencia cultural de primera mano y una red de amigos que abarca todos los continentes.',
    },
    {
      icono: '/images/impacto/ikreoperu-logo.jpg',
      subtitulo: 'Voluntariado ambiental',
      texto:
        'Mi compromiso ambiental comenzó en Ica llevando educación ecológica a niños, jóvenes y adultos — organizando campañas de limpieza en áreas naturales junto a organizaciones juveniles locales. No fue un proyecto, fue una convicción que encontró su forma.',
    },
    {
      icono: '/images/impacto/oceana-logo.jpg',
      subtitulo: 'Oceana Perú · 2024',
      texto:
        'En 2024 ese compromiso escaló. Me uní a Oceana Perú en Lima promoviendo la preservación del litoral peruano y la salud de nuestros océanos. Porque el planeta que queremos preservar es el mismo en el que queremos construir.',
    },
  ],
  pullQuote:
    '"Creo en los negocios que dejan huella — no solo en balances, sino en comunidades y ecosistemas."',
}

// ── GALERÍA EUROPA ──────────────────────────────────────
export const GALERIA_DATA = {
  eyebrow: 'Galería',
  titulo: '2024 — Cuando el lente cruzó el Atlántico.',
  intro:
    'Una temporada de tres meses en Suiza y Europa fue el reconocimiento silencioso de años de trabajo artístico. Estas imágenes son parte de ese capítulo.',
  cta: 'Ver portafolio completo en Guti Perú Studio →',
  // Placeholders — reemplazar con rutas reales de /public/images/europa/
  fotos: [
    { id: 1, caption: 'Alemania · Munich · 2024', src: '/images/europa/zurich.jpg' },
    { id: 2, caption: 'Italia · Venecia · 2024', src: '/images/europa/venecia.jpg' },
    { id: 3, caption: 'Suiza · Neuchâtel · 2024', src: '/images/europa/paris.jpg' },
    { id: 4, caption: 'Austria · Salzburg · 2024', src: '/images/europa/barcelona.jpg' },
    { id: 5, caption: 'Alemania · Palacio de Nymphenburg · 2024', src: '/images/europa/berlin.jpg' },
    { id: 6, caption: 'Austria · Salzburg · 2024', src: '/images/europa/lisboa.jpg' },
  ],
}

// ── SERVICIOS PERSONALES ────────────────────────────────
export const SERVICIOS = [
  {
    icono: '🤖',
    titulo: 'Consultoría en Transformación Digital e IA',
    descripcion:
      'Para empresas y gremios que quieren adoptar automatización e inteligencia artificial sin perder el foco humano. Diagnóstico, hoja de ruta y acompañamiento en implementación.',
  },
  {
    icono: '🚀',
    titulo: 'Mentoría a Emprendedores',
    descripcion:
      'Acompañamiento en etapas tempranas — validación de idea, modelo de negocio, pitching e iteración. Desde la experiencia de haber construido y fallado y vuelto a construir.',
  },
  {
    icono: '🎤',
    titulo: 'Conferencias y Talleres',
    descripcion:
      'Innovación, startups, metodologías ágiles, IA aplicada, sostenibilidad. Formato presencial o remoto. Adaptado a universidades, gremios profesionales y corporativos.',
  },
  {
    icono: '📷',
    titulo: 'Producción Fotográfica y Audiovisual',
    descripcion:
      'Proyectos editoriales, institucionales y de marca personal. Cobertura nacional con experiencia internacional.',
  },
]

// ── INVERSIÓN / CONTACTO ────────────────────────────────
export const INVERSION_DATA = {
  eyebrow: 'Inversión',
  titulo: ['Construyo con quienes creen', ' en el largo plazo.'],
  parrafos: [
    'Si llegaste hasta aquí, probablemente viste algo que resuena contigo. No busco capital para una idea — busco socios estratégicos para proyectos que ya están en movimiento.',
    'Tengo un ecosistema de cinco marcas en distintas etapas: desde startups con tracción hasta SaaS en desarrollo activo. Si eres inversor ángel, fondo seed o simplemente alguien que quiere co-construir algo relevante en Perú y Latinoamérica — hablemos.',
  ],
  tiposInteres: ['Inversión', 'Colaboración', 'Servicios', 'Otro'],
  ctas: {
    primary: 'Quiero invertir / colaborar',
    secondary: 'Descargar resumen ejecutivo',
  },
}

// ── FOOTER ──────────────────────────────────────────────
export const FOOTER_DATA = {
  logo: 'GUTIPERU.COM',
  navLinks: [
    { label: 'Origen',    href: '#origen' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Proyectos', href: '#ecosistema' },
    { label: 'Comunidad', href: '#impacto' },
    { label: 'Galería',   href: '#galeria' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Inversión', href: '#contacto' },
  ],
  proyectos: [
    { label: 'DW Automatizaciones', href: '/dw' },
    { label: 'Ikreo Perú',          href: '/ikreo' },
    { label: 'Guti Perú Studio',    href: '/studio' },
    { label: 'ResCO Perú',          href: '/rescoperu' },
    { label: 'ATI',                 href: '/ati' },
  ],
  redes: [
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/arturocaccha' },
    { label: 'Instagram', href: 'https://www.instagram.com/arturocguti18' },
    { label: 'GitHub',    href: 'https://github.com/yetithecat0' },
  ],
  copyright: '© 2025 Luis Arturo Caccha Gutiérrez · gutiperu.com · Lima, Perú',
}
