import Image from 'next/image'
import { createMetadata, SITE } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Nosotros',
  description: 'Conocé la historia de Farmacia San José, más de 70 años de tradición en Valentín Alsina, Buenos Aires.',
  path: '/nosotros'
})

export default function Nosotros() {
  return (
    <div className="bg-apothecary-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-apothecary-green-700 to-apothecary-green-900 text-apothecary-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-apothecary-cream-100 border-2 border-apothecary-cream-300 rounded-full px-4 py-2 mb-6">
            <span className="text-apothecary-green-700 text-2xl">✦</span>
            <span className="text-apothecary-green-800 font-serif font-semibold text-sm">
              Nuestra Historia
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Más de 150 años cuidando el barrio
          </h1>
          <p className="text-xl text-apothecary-cream-200 max-w-3xl mx-auto font-serif">
            Una tradición familiar nacida en Valentín Alsina, con la misma vocación 
            de siempre: cuidar su salud con dedicación y confianza.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-apothecary-green-400 to-apothecary-brown-400 rounded-2xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-gradient-to-tl from-apothecary-cream-400 to-apothecary-green-300 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-apothecary-cream-200 rounded-2xl border-4 border-apothecary-brown-600 aspect-square overflow-hidden shadow-2xl">
                <Image
                  src="/images/farmacia-exterior.jpg"
                  alt="Fachada de Farmacia San José en Valentín Alsina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-apothecary-brown-900 mb-6">
                Una farmacia con historia
              </h2>
              <div className="space-y-4 text-apothecary-brown-700 font-serif text-lg leading-relaxed">
                <p>
                  Farmacia San José nació en el corazón de Valentín Alsina con una misión 
                  clara: brindar atención farmacéutica de calidad a los vecinos del barrio, 
                  con el trato cercano y personalizado que caracteriza a las farmacias 
                  de toda la vida.
                </p>
                <p>
                  Desde nuestros comienzos, nos especializamos en homeopatía, hierbas 
                  medicinales y recetas magistrales, ofreciendo una alternativa natural 
                  y complementaria a la medicina convencional.
                </p>
                <p>
                  Muchos de nuestros clientes nos visitan desde hace décadas. Sus hijos 
                  y nietos hoy nos siguen eligiendo. Esa continuidad es nuestro mayor 
                  orgullo y nuestra mayor responsabilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-apothecary-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-apothecary-brown-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-apothecary-brown-700 font-serif text-lg max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo cada día
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-apothecary-brown-900 mb-3">
                Vocación de Servicio
              </h3>
              <p className="text-apothecary-brown-700 font-serif leading-relaxed">
                Cada cliente es una persona, no un número. Nos tomamos el tiempo necesario 
                para escuchar y asesorar con dedicación.
              </p>
            </div>

            <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-apothecary-brown-900 mb-3">
                Confianza y Transparencia
              </h3>
              <p className="text-apothecary-brown-700 font-serif leading-relaxed">
                Trabajamos con honestidad y transparencia. Si no tenemos algo, 
                lo decimos. Si hay una alternativa mejor, la sugerimos.
              </p>
            </div>

            <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-apothecary-brown-900 mb-3">
                Conocimiento Especializado
              </h3>
              <p className="text-apothecary-brown-700 font-serif leading-relaxed">
                Farmacéuticos matriculados con años de experiencia en homeopatía, 
                fitoterapia y preparación de fórmulas magistrales.
              </p>
            </div>

            <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-apothecary-brown-900 mb-3">
                Raíces en el Barrio
              </h3>
              <p className="text-apothecary-brown-700 font-serif leading-relaxed">
                Somos parte de Valentín Alsina. Conocemos a nuestros clientes, 
                sus familias y sus necesidades. Eso no tiene precio.
              </p>
            </div>

            <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-apothecary-brown-900 mb-3">
                Medicina Natural
              </h3>
              <p className="text-apothecary-brown-700 font-serif leading-relaxed">
                Creemos en el poder de la naturaleza. Nuestras hierbas medicinales 
                y preparados homeopáticos complementan y enriquecen los tratamientos.
              </p>
            </div>

            <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-apothecary-brown-900 mb-3">
                Atención Familiar
              </h3>
              <p className="text-apothecary-brown-700 font-serif leading-relaxed">
                Atendemos a toda la familia, desde los más chicos hasta los abuelos, 
                con la calidez y el respeto que cada uno merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-apothecary-brown-900 mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-apothecary-brown-700 font-serif text-lg">
              Más de 150 años al servicio de la comunidad
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-apothecary-green-300"></div>

            <div className="space-y-12">
              {/* 1950 */}
              <div className="relative flex items-center justify-end pr-8 lg:pr-12 w-1/2">
                <div className="bg-white border-2 border-apothecary-green-400 rounded-xl p-5 shadow-md max-w-xs text-right">
                  <span className="text-apothecary-green-700 font-serif font-bold text-xl">1880</span>
                  <p className="text-apothecary-brown-800 font-serif font-semibold mt-1">Fundación</p>
                  <p className="text-apothecary-brown-600 font-serif text-sm mt-1">
                    Apertura de Farmacia San José en Valentín Alsina.
                  </p>
                </div>
                <div className="absolute right-0 translate-x-1/2 w-5 h-5 bg-apothecary-green-600 rounded-full border-4 border-apothecary-cream-50 shadow z-10"></div>
              </div>

              {/* 1970 */}
              <div className="relative flex items-center ml-auto pl-8 lg:pl-12 w-1/2">
                <div className="absolute left-0 -translate-x-1/2 w-5 h-5 bg-apothecary-green-600 rounded-full border-4 border-apothecary-cream-50 shadow z-10"></div>
                <div className="bg-white border-2 border-apothecary-green-400 rounded-xl p-5 shadow-md max-w-xs">
                  <span className="text-apothecary-green-700 font-serif font-bold text-xl">1900</span>
                  <p className="text-apothecary-brown-800 font-serif font-semibold mt-1">Expansión de Servicios</p>
                  <p className="text-apothecary-brown-600 font-serif text-sm mt-1">
                    Incorporación de homeopatía y hierbas medicinales.
                  </p>
                </div>
              </div>

              {/* 1990 */}
              <div className="relative flex items-center justify-end pr-8 lg:pr-12 w-1/2">
                <div className="bg-white border-2 border-apothecary-green-400 rounded-xl p-5 shadow-md max-w-xs text-right">
                  <span className="text-apothecary-green-700 font-serif font-bold text-xl">1940</span>
                  <p className="text-apothecary-brown-800 font-serif font-semibold mt-1">Recetas Magistrales</p>
                  <p className="text-apothecary-brown-600 font-serif text-sm mt-1">
                    Apertura del laboratorio de preparados magistrales.
                  </p>
                </div>
                <div className="absolute right-0 translate-x-1/2 w-5 h-5 bg-apothecary-green-600 rounded-full border-4 border-apothecary-cream-50 shadow z-10"></div>
              </div>

              {/* 2010 */}
              <div className="relative flex items-center ml-auto pl-8 lg:pl-12 w-1/2">
                <div className="absolute left-0 -translate-x-1/2 w-5 h-5 bg-apothecary-green-600 rounded-full border-4 border-apothecary-cream-50 shadow z-10"></div>
                <div className="bg-white border-2 border-apothecary-green-400 rounded-xl p-5 shadow-md max-w-xs">
                  <span className="text-apothecary-green-700 font-serif font-bold text-xl">1980</span>
                  <p className="text-apothecary-brown-800 font-serif font-semibold mt-1">Nueva Generación</p>
                  <p className="text-apothecary-brown-600 font-serif text-sm mt-1">
                    La siguiente generación de la familia toma las riendas.
                  </p>
                </div>
              </div>

              {/* Hoy */}
              <div className="relative flex items-center justify-end pr-8 lg:pr-12 w-1/2">
                <div className="bg-apothecary-green-700 border-2 border-apothecary-green-500 rounded-xl p-5 shadow-md max-w-xs text-right">
                  <span className="text-apothecary-cream-50 font-serif font-bold text-xl">Hoy</span>
                  <p className="text-apothecary-cream-100 font-serif font-semibold mt-1">Seguimos Creciendo</p>
                  <p className="text-apothecary-cream-300 font-serif text-sm mt-1">
                    Más de 150 años de tradición, con la misma vocación de siempre.
                  </p>
                </div>
                <div className="absolute right-0 translate-x-1/2 w-5 h-5 bg-apothecary-brown-600 rounded-full border-4 border-apothecary-cream-50 shadow z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-apothecary-green-700 to-apothecary-green-900 text-apothecary-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Venga a conocernos
          </h2>
          <p className="text-xl text-apothecary-cream-200 font-serif mb-8 max-w-2xl mx-auto">
            Estamos en {SITE.address.street}, {SITE.address.city}. 
            Le esperamos con el mismo cariño de siempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto#como-llegar"
              className="inline-flex items-center justify-center px-8 py-4 bg-apothecary-cream-50 text-apothecary-green-800 rounded-lg hover:bg-apothecary-cream-100 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-apothecary-cream-200"
            >
              Cómo llegar
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}?text=Hola,%20quisiera%20hacer%20una%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-green-400"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}