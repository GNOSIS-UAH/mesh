export type Lang = 'es' | 'en';

// Estadísticas de acceso con GoatCounter (sin cookies ni datos personales).
// Vacío para desactivarlas.
export const goatcounter = 'https://mesh-uah.goatcounter.com/count';
export const referencia = 'PID2025-174033NA-I00';
export const urlSitio = 'https://gnosis-uah.github.io/mesh/';
export const fichaUAH = 'https://portalcientifico.uah.es/proyectos/1908138/detalle';
export const repositorio = 'https://github.com/GNOSIS-UAH/mesh';

export const textos = {
  es: {
    locale: 'es-ES',
    nav: { inicio: 'inicio', proyecto: 'el proyecto', resultados: 'resultados', publicaciones: 'publicaciones', recursos: 'recursos', equipo: 'equipo' },
    cambioIdioma: { etiqueta: 'en', lang: 'en', titulo: 'English version' },
    saltar: 'Saltar al contenido',
    pie: 'Universidad de Alcalá. Proyecto MESH (PID2025-174033NA-I00), financiado por MICIU/AEI/10.13039/501100011033. Hecho con Astro y alojado en GitHub Pages.',
    privacidad: 'Las estadísticas de visitas se recogen con GoatCounter, sin cookies ni datos personales.',
    privacidadUrl: 'https://www.goatcounter.com/help/privacy',
    descripcion: 'MESH: metaheurísticas estructurales mejoradas multicapa para optimización distribuida. Proyecto de investigación de la Universidad de Alcalá financiado por la Agencia Estatal de Investigación.',
    tituloSitio: 'MESH, Universidad de Alcalá',
    temas: { modelado: 'Modelado MFG', optimizacion: 'Metaheurísticas', reconfiguracion: 'Paso de mensajes', casos: 'Casos de uso', otros: 'Otros' },
    tiposPub: { revista: 'revistas', congreso: 'congresos', capitulo: 'capítulos de libro', charla: 'charlas y talleres', divulgacion: 'divulgación' },
    estados: { enviado: 'enviado', aceptado: 'aceptado', publicado: '' },
    tiposRec: { dataset: 'datasets', software: 'software', modelo: 'modelos', documento: 'documentos' },
    clases: { tesis: 'Tesis', tfm: 'TFM', tfg: 'TFG' },
    tiposEquipo: { investigacion: 'equipo de investigación', trabajo: 'equipo de trabajo', colaborador: 'colaboradores internacionales', contratado: 'personal contratado' },
    sinNoticias: 'Todavía no hay noticias.',
    sinResultados: 'Los primeros resultados del proyecto se publicarán en cuanto estén consolidados.',
    sinPublicaciones: 'Aún no hay publicaciones asociadas al proyecto.',
    sinRecursos: 'Los recursos se irán publicando en GitHub, Zenodo y Hugging Face a lo largo del proyecto.',
    formacion: 'tesis y trabajos académicos',
    dirigidoPor: 'dirigido por',
    enlace: 'Enlace',
    comoCitar: 'Cómo citar',
    webIP: 'Web del IP',
    logosNota: 'Proyecto del grupo de investigación',
    logosNota2: '(subgrupo GNOSIS) de la Universidad de Alcalá, financiado por',
    logosNota3: '.',
    aei: 'Ministerio de Ciencia, Innovación y Universidades / Agencia Estatal de Investigación',
  },
  en: {
    locale: 'en-GB',
    nav: { inicio: 'home', proyecto: 'the project', resultados: 'results', publicaciones: 'publications', recursos: 'resources', equipo: 'team' },
    cambioIdioma: { etiqueta: 'es', lang: 'es', titulo: 'Versión en español' },
    saltar: 'Skip to content',
    pie: 'University of Alcalá. MESH project (PID2025-174033NA-I00), funded by MICIU/AEI/10.13039/501100011033. Built with Astro and hosted on GitHub Pages.',
    privacidad: 'Visit statistics are collected with GoatCounter, without cookies or personal data.',
    privacidadUrl: 'https://www.goatcounter.com/help/privacy',
    descripcion: 'MESH: multilayer enhanced structural metaheuristics for distributed optimization. Research project at the University of Alcalá funded by the Spanish State Research Agency.',
    tituloSitio: 'MESH, University of Alcalá',
    temas: { modelado: 'MFG modelling', optimizacion: 'Metaheuristics', reconfiguracion: 'Message passing', casos: 'Use cases', otros: 'Other' },
    tiposPub: { revista: 'journals', congreso: 'conferences', capitulo: 'book chapters', charla: 'talks and workshops', divulgacion: 'outreach' },
    estados: { enviado: 'submitted', aceptado: 'accepted', publicado: '' },
    tiposRec: { dataset: 'datasets', software: 'software', modelo: 'models', documento: 'documents' },
    clases: { tesis: 'PhD', tfm: 'MSc', tfg: 'BSc' },
    tiposEquipo: { investigacion: 'research team', trabajo: 'work team', colaborador: 'international collaborators', contratado: 'hired staff' },
    sinNoticias: 'No news yet.',
    sinResultados: 'The first project results will be published as soon as they are consolidated.',
    sinPublicaciones: 'No publications associated with the project yet.',
    sinRecursos: 'Resources will be released on GitHub, Zenodo and Hugging Face throughout the project.',
    formacion: 'theses and academic work',
    dirigidoPor: 'supervised by',
    enlace: 'Link',
    comoCitar: 'How to cite',
    webIP: 'PI website',
    logosNota: 'Project of the',
    logosNota2: 'research group (GNOSIS subgroup), University of Alcalá, funded by',
    logosNota3: '.',
    aei: 'Spanish Ministry of Science, Innovation and Universities / State Research Agency',
  },
} as const;

export const prefijo = (lang: Lang) => (lang === 'es' ? '' : '/en');

// Devuelve la ruta equivalente en el otro idioma.
export const rutaAlterna = (lang: Lang, rutaSinBase: string) => {
  const limpia = rutaSinBase.replace(/^\/en(?=\/|$)/, '') || '/';
  return lang === 'es' ? `/en${limpia === '/' ? '' : limpia}` || '/en' : limpia;
};

export const fecha = (d: Date, lang: Lang, opciones: Intl.DateTimeFormatOptions) =>
  d.toLocaleDateString(textos[lang].locale, opciones).replace('.', '');
