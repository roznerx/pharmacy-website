import { createMetadata, SITE } from '@/lib/metadata'
import { ContactForm } from '@/components/ContactForm'

export const metadata = createMetadata({
  title: 'Contacto',
  description: 'Contáctenos para consultas, pedidos o asesoramiento. Estamos en Valentín Alsina, Buenos Aires.',
  path: '/contacto'
})

export default function Contacto() {
  return (
    <div className="bg-apothecary-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-apothecary-green-700 to-apothecary-green-900 text-apothecary-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-apothecary-cream-100 border-2 border-apothecary-cream-300 rounded-full px-4 py-2 mb-6">
            <span className="text-apothecary-green-700 text-2xl">✦</span>
            <span className="text-apothecary-green-800 font-serif font-semibold text-sm">
              Estamos para ayudarlo
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Contáctenos
          </h1>
          <p className="text-xl text-apothecary-cream-200 max-w-3xl mx-auto font-serif">
            Visite nuestra farmacia o comuníquese por los medios que prefiera. 
            Estamos a su disposición.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-apothecary-brown-900 mb-8">
                Información de Contacto
              </h2>

              {/* Address */}
              <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-apothecary-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-apothecary-brown-900 mb-2">
                      Dirección
                    </h3>
                    <p className="text-apothecary-brown-700 font-serif">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.province}<br />
                      {SITE.address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-apothecary-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-apothecary-brown-900 mb-2">
                      Teléfono
                    </h3>
                    <a 
                      href={`tel:${SITE.contact.phone}`}
                      className="text-apothecary-green-700 font-serif text-lg hover:text-apothecary-green-800 transition-colors"
                    >
                      {SITE.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-apothecary-brown-900 mb-2">
                      WhatsApp
                    </h3>
                    <a 
                      href={`https://wa.me/${SITE.contact.whatsapp}?text=Hola,%20quisiera%20hacer%20una%20consulta`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-serif text-lg hover:text-green-700 transition-colors"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-apothecary-green-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-apothecary-brown-900 mb-2">
                      Email
                    </h3>
                    <a 
                      href={`mailto:${SITE.contact.email}`}
                      className="text-apothecary-green-700 font-serif hover:text-apothecary-green-800 transition-colors break-all"
                    >
                      {SITE.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-apothecary-brown-900 border-2 border-apothecary-green-600 rounded-xl p-6">
                <h3 className="font-serif font-bold text-lg text-apothecary-cream-50 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-apothecary-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Horarios de Atención
                </h3>
                <div className="space-y-3 text-apothecary-cream-200 font-serif">
                  <div className="flex justify-between">
                    <span className="font-semibold">Lunes a Viernes:</span>
                    <span>08:00 - 12:00 / 15:00 - 19:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sábado:</span>
                    <span>08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Domingo:</span>
                    <span className="text-apothecary-cream-400">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-apothecary-brown-900 mb-8">
                Envíenos un Mensaje
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="como-llegar" className="py-16 bg-apothecary-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-apothecary-brown-900 mb-8 text-center">
            Cómo Llegar
          </h2>
          <div className="bg-white border-4 border-apothecary-green-600 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.0751038773309!2d-58.40426119712646!3d-34.674859496401204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccc906a25a117%3A0x21850165d93b65e3!2sFARMACIA%20San%20Jose!5e0!3m2!1ses!2sar!4v1770859255771!5m2!1ses!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <p className="text-center text-apothecary-brown-700 font-serif mt-6">
            📍 {SITE.address.street}, {SITE.address.city}, {SITE.address.province}
          </p>
        </div>
      </section>
    </div>
  )
}
