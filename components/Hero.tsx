import Image from 'next/image'
import { SITE } from '@/lib/metadata'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-apothecary-cream-100 via-apothecary-cream-50 to-apothecary-green-50 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233a8f62' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-apothecary-green-100 border-2 border-apothecary-green-600 rounded-full px-4 py-2 mb-6">
              <span className="text-apothecary-green-700 text-2xl">✦</span>
              <span className="text-apothecary-green-800 font-serif font-semibold text-sm">
                Desde 1950
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-apothecary-brown-900 mb-6 leading-tight">
              Su farmacia de{' '}
              <span className="text-apothecary-green-700 relative inline-block">
                confianza
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="#3a8f62" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}en Valentín Alsina
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-apothecary-brown-700 mb-8 font-serif max-w-2xl mx-auto lg:mx-0">
              Especialistas en homeopatía, hierbas medicinales y recetas magistrales. 
              Una tradición familiar que cuida de su salud hace más de 100 años.
            </p>

            {/* Service highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/60 backdrop-blur-sm border-2 border-apothecary-green-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-apothecary-cream-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-apothecary-brown-800 font-serif font-semibold text-sm">
                  Farmacéuticos matriculados
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border-2 border-apothecary-green-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-apothecary-cream-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-apothecary-brown-800 font-serif font-semibold text-sm">
                  Recetas magistrales
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border-2 border-apothecary-green-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-apothecary-cream-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
                    <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"/>
                  </svg>
                </div>
                <p className="text-apothecary-brown-800 font-serif font-semibold text-sm">
                  Hierbas medicinales
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-apothecary-green-600 text-apothecary-cream-50 rounded-lg hover:bg-apothecary-green-700 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-apothecary-green-700 hover:scale-105 transform"
              >
                Contáctenos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={`https://wa.me/${SITE.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-apothecary-green-700 rounded-lg hover:bg-apothecary-cream-100 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-apothecary-green-600 hover:scale-105 transform"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
        <div className="relative lg:block hidden">
        <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-apothecary-green-400 to-apothecary-brown-400 rounded-2xl transform rotate-3"></div>
            <div className="absolute -inset-4 bg-gradient-to-tl from-apothecary-cream-400 to-apothecary-green-300 rounded-2xl transform -rotate-3"></div>
            
            {/* Pharmacy image */}
            <div className="relative bg-apothecary-cream-200 rounded-2xl border-4 border-apothecary-brown-600 aspect-square overflow-hidden shadow-2xl">
            <Image
                src="/images/hero/farmacia-exterior.jpg"
                alt="Farmacia San José - Fachada exterior en Valentín Alsina"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 50vw"
                priority
            />
            </div>
        </div>
        </div>

        {/* Trust bar at bottom */}
        <div className="mt-16 pt-8 border-t-2 border-apothecary-green-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
            <p className="text-3xl font-serif font-bold text-apothecary-green-700">70+</p>
            <p className="text-sm text-apothecary-brown-600 font-serif mt-1">Años de tradición</p>
            </div>
            <div>
            <p className="text-3xl font-serif font-bold text-apothecary-green-700">100%</p>
            <p className="text-sm text-apothecary-brown-600 font-serif mt-1">Productos naturales</p>
            </div>
            <div>
            <p className="text-3xl font-serif font-bold text-apothecary-green-700">★★★★★</p>
            <p className="text-sm text-apothecary-brown-600 font-serif mt-1">Confianza del barrio</p>
            </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  )
}