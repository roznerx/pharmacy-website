import { MetadataRoute } from 'next'
import { SITE } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/nosotros', '/servicios', '/preguntas-frecuentes', '/contacto']
  
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
