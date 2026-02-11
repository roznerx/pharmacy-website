import { createMetadata } from '@/lib/metadata'
import { ServiceCard } from '@/components/ServiceCard'

export const metadata = createMetadata({
  title: 'Servicios',
  description: 'Farmacia, homeopatía, hierbas medicinales y recetas magistrales. Servicios especializados en Valentín Alsina.',
  path: '/servicios'
})

export default function Servicios() {
  return (
    <div className="bg-apothecary-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-apothecary-green-700 to-apothecary-green-900 text-apothecary-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-apothecary-cream-100 border-2 border-apothecary-cream-300 rounded-full px-4 py-2 mb-6">
            <span className="text-apothecary-green-700 text-2xl">✦</span>
            <span className="text-apothecary-green-800 font-serif font-semibold text-sm">
              Nuestros Servicios
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Cuidamos su salud con tradición y experiencia
          </h1>
          <p className="text-xl text-apothecary-cream-200 max-w-3xl mx-auto font-serif">
            Más de 100 años brindando servicios farmacéuticos especializados, 
            combinando la sabiduría tradicional con el conocimiento moderno.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  <circle cx="12" cy="14" r="3"/>
                </svg>
              }
              title="Farmacia General"
              description="Amplio stock de medicamentos de venta libre y bajo receta. Asesoramiento profesional personalizado para cada necesidad."
              features={[
                'Medicamentos de todas las marcas',
                'Atención farmacéutica personalizada',
                'Descuentos para jubilados'
              ]}
            />

            <ServiceCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              title="Homeopatía"
              description="Especialistas en medicina homeopática. Preparación de remedios personalizados según prescripción médica."
              features={[
                'Medicamentos homeopáticos',
                'Preparación de diluciones',
                'Asesoramiento especializado',
                'Tratamientos personalizados'
              ]}
            />

            <ServiceCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              }
              title="Hierbas Medicinales"
              description="Selección premium de hierbas medicinales naturales. Conocimiento ancestral para su bienestar."
              features={[
                'Hierbas medicinales seleccionadas',
                'Productos naturales certificados',
                'Tés y tisanas terapéuticas',
                'Asesoramiento en fitoterapia'
              ]}
            />

            <ServiceCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
                  <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"/>
                </svg>
              }
              title="Recetas Magistrales"
              description="Preparación artesanal de fórmulas magistrales según receta médica. Precisión y calidad garantizada."
              features={[
                'Preparados personalizados',
                'Fórmulas dermocosméticas',
                'Control de calidad estricto',
                'Envases adecuados'
              ]}
            />

            <ServiceCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              }
              title="Dermocosmética"
              description="Productos dermatológicos y cosméticos de primeras marcas. Cuidado especializado para su piel."
              features={[
                'Productos dermatológicos',
                'Cosmética selectiva',
                'Protección solar',
                'Cuidado capilar'
              ]}
            />

            <ServiceCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              }
              title="Perfumería"
              description="Fragancias selectas y productos de cuidado personal de las mejores marcas internacionales."
              features={[
                'Perfumes importados',
                'Maquillaje profesional',
                'Cuidado personal',
                'Sets de regalo'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services Banner */}
      <section className="bg-apothecary-brown-900 text-apothecary-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-apothecary-cream-300 font-serif text-lg">
              Siempre pensando en su comodidad y bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-apothecary-brown-800 border-2 border-apothecary-green-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Pedidos Telefónicos</h3>
              <p className="text-apothecary-cream-400 text-sm font-serif">
                Encargue por teléfono y retire en farmacia
              </p>
            </div>

            <div className="bg-apothecary-brown-800 border-2 border-apothecary-green-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Consultas por WhatsApp</h3>
              <p className="text-apothecary-cream-400 text-sm font-serif">
                Respuesta rápida a sus consultas
              </p>
            </div>

            <div className="bg-apothecary-brown-800 border-2 border-apothecary-green-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Asesoramiento</h3>
              <p className="text-apothecary-cream-400 text-sm font-serif">
                Orientación profesional personalizada
              </p>
            </div>

            <div className="bg-apothecary-brown-800 border-2 border-apothecary-green-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-apothecary-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Precios Accesibles</h3>
              <p className="text-apothecary-cream-400 text-sm font-serif">
                Descuentos especiales y planes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-apothecary-cream-100 to-apothecary-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-apothecary-brown-900 mb-6">
            ¿Necesita asesoramiento personalizado?
          </h2>
          <p className="text-lg text-apothecary-brown-700 font-serif mb-8">
            Nuestro equipo de farmacéuticos está siempre disponible para ayudarlo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-apothecary-green-600 text-apothecary-cream-50 rounded-lg hover:bg-apothecary-green-700 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-apothecary-green-700"
            >
              Contáctenos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}