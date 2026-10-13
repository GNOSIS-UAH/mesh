import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Español en la raíz, inglés en /en/.
// Si se cambia el repositorio o el dominio, ajustar `site` y `base`.
export default defineConfig({
  site: 'https://gnosis-uah.github.io',
  base: '/mesh',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
