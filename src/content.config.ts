import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Noticias y resultados tienen un fichero por idioma: los ingleses van en la
// subcarpeta `en/`. Publicaciones, recursos y equipo se comparten entre
// idiomas y admiten campos opcionales con sufijo `_en`.

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    url: z.string().url().optional(),
    etiqueta: z.string().default('Más información'),
  }),
});

const resultados = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resultados' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    // modelado (grafos factor multicapa), optimizacion (metaheurísticas),
    // reconfiguracion (paso de mensajes y reconformado), casos (casos de uso)
    tema: z.enum(['modelado', 'optimizacion', 'reconfiguracion', 'casos', 'otros']),
    resumen: z.string(),
    // 'tesis', 'tfm' o 'tfg' para trabajos académicos dirigidos en el marco del proyecto
    clase: z.enum(['resultado', 'tesis', 'tfm', 'tfg']).default('resultado'),
    autor: z.string().optional(),
    direccion: z.string().optional(),
    titulacion: z.string().optional(),
    enlaces: z
      .array(z.object({ etiqueta: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

const publicaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publicaciones' }),
  schema: z.object({
    titulo: z.string(),
    titulo_en: z.string().optional(),
    autores: z.string(),
    venue: z.string(),
    venue_en: z.string().optional(),
    abrev: z.string().optional(),
    anio: z.number(),
    tipo: z.enum(['revista', 'congreso', 'capitulo', 'divulgacion', 'charla']),
    estado: z.enum(['enviado', 'aceptado', 'publicado']).default('publicado'),
    doi: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    titulo: z.string(),
    tipo: z.enum(['dataset', 'software', 'modelo', 'documento']),
    resumen: z.string(),
    resumen_en: z.string().optional(),
    licencia: z.string().optional(),
    github: z.string().url().optional(),
    zenodo: z.string().url().optional(),
    huggingface: z.string().url().optional(),
    cita: z.string().optional(),
  }),
});

const equipo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equipo' }),
  schema: z.object({
    nombre: z.string(),
    rol: z.string(),
    rol_en: z.string().optional(),
    // afiliación: grupo o institución
    grupo: z.string(),
    tipo: z.enum(['investigacion', 'trabajo', 'colaborador', 'formacion', 'contratado']).default('investigacion'),
    orden: z.number(),
    orcid: z.string().optional(),
    web: z.string().url().optional(),
  }),
});

export const collections = { noticias, resultados, publicaciones, recursos, equipo };
