// app/layout.tsx
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE } from '@/lib/metadata'
import './globals.css'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.province,
      addressCountry: SITE.address.country
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '12:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '15:00',
        closes: '19:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00'
      }
    ]
  }

  return (
    <html lang="es-AR">
      <body className="antialiased bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
