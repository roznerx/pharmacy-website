import { Metadata } from 'next'

export const SITE = {
  name: 'Farmacia San José',
  url: 'https://farmaciasanjose.com.ar',
  description: 'Farmacia de confianza en Valentín Alsina',
  address: {
    street: 'Tte. Gral. Juan Domingo Perón 2401',
    city: 'Valentín Alsina',
    province: 'Buenos Aires',
    country: 'Argentina'
  },
  contact: {
    phone: '+54 11 4208-8362',
    whatsapp: '5491165479906',
    email: 'farmaciasanjose19@gmail.com.ar'
  },
  hours: {
    weekdays: 'Lunes a Viernes: 08:00-12:00 - 15:00-19:30',
    saturday: 'Sábado: 08:00-13:00',
    sunday: 'Domingo: Cerrado'
  },
  /*social: {
    facebook: 'https://facebook.com/...',
    instagram: 'https://instagram.com/...'
  }*/
  services: 'farmacia, homeopatía, hierbas medicinales, recetas magistrales',
}

export function createMetadata({
  title,
  description,
  path = ''
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const fullTitle = title === SITE.name ? title : `${title} | ${SITE.name}`
  
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.name,
      locale: 'es_AR',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description
    },
    alternates: {
      canonical: `${SITE.url}${path}`
    }
  }
}