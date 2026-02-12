import Link from 'next/link'
import { SITE } from '@/lib/metadata'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-apothecary-brown-900 text-apothecary-cream-100">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-apothecary-green-600 via-apothecary-cream-500 to-apothecary-green-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-apothecary-green-600 rounded-full flex items-center justify-center border-2 border-apothecary-cream-400">
                <svg className="w-6 h-6 text-apothecary-cream-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  <circle cx="12" cy="14" r="3"/>
                </svg>
              </div>
              <h3 className="text-apothecary-cream-50 font-serif font-bold text-xl">
                {SITE.name}
              </h3>
            </div>
            <p className="text-sm mb-3 text-apothecary-cream-300 font-serif">
              {SITE.description}
            </p>
            <p className="text-xs text-apothecary-cream-400 italic font-serif border-l-2 border-apothecary-green-600 pl-3">
              {SITE.services}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-apothecary-cream-50 font-serif font-bold text-lg mb-4 flex items-center">
              <span className="text-apothecary-green-500 mr-2">✦</span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm font-serif">
              <li>
                <Link href="/" className="text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Servicios
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-apothecary-cream-50 font-serif font-bold text-lg mb-4 flex items-center">
              <span className="text-apothecary-green-500 mr-2">✦</span>
              Contacto
            </h3>
            <ul className="space-y-3 text-sm font-serif">
              <li className="flex items-start text-apothecary-cream-300">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-apothecary-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.province}
                </span>
              </li>
              <li>
                <a 
                  href={`tel:${SITE.contact.phone}`}
                  className="flex items-center text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2 text-apothecary-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {SITE.contact.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${SITE.contact.email}`}
                  className="flex items-center text-apothecary-cream-300 hover:text-apothecary-green-400 transition-colors break-all"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 text-apothecary-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {SITE.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-apothecary-cream-50 font-serif font-bold text-lg mb-4 flex items-center">
              <span className="text-apothecary-green-500 mr-2">✦</span>
              Horarios
            </h3>
            <div className="space-y-4 text-sm font-serif">
              <div className="bg-apothecary-brown-800 rounded-lg p-3 border border-apothecary-brown-700">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-apothecary-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-apothecary-cream-100">Lunes a Viernes</p>
                    <p className="text-apothecary-cream-400 text-xs mt-1">08:00 - 12:00</p>
                    <p className="text-apothecary-cream-400 text-xs">15:00 - 19:30</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-apothecary-brown-800 rounded-lg p-3 border border-apothecary-brown-700">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-apothecary-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-apothecary-cream-100">Sábado</p>
                    <p className="text-apothecary-cream-400 text-xs mt-1">08:00 - 13:00</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-apothecary-cream-500 italic">
                <span className="text-apothecary-green-500">✦</span> Domingos cerrado
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-apothecary-brown-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-serif">
            <p className="text-apothecary-cream-400 mb-4 md:mb-0">
              © {currentYear} {SITE.name}. Todos los derechos reservados.
            </p>
            <p className="text-apothecary-cream-500 text-xs italic">
              Una tradición de confianza desde 1850
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-apothecary-green-600 via-apothecary-cream-500 to-apothecary-green-600"></div>
    </footer>
  )
}