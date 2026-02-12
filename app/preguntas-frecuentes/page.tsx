import { createMetadata, SITE } from '@/lib/metadata'
import { FAQAccordion } from '@/components/FAQAccordion'

export const metadata = createMetadata({
  title: 'Preguntas Frecuentes',
  description: 'Respondemos las preguntas más frecuentes sobre nuestros servicios, horarios y productos en Farmacia San José.',
  path: '/preguntas-frecuentes'
})

const faqs = [
  {
    category: 'Servicios',
    questions: [
      {
        question: '¿Qué es la homeopatía y cómo puedo acceder a ella?',
        answer: 'La homeopatía es un sistema terapéutico que utiliza sustancias naturales en altas diluciones para estimular la capacidad de curación del organismo. En Farmacia San José contamos con farmacéuticos especializados que pueden asesorarlo y preparar los remedios homeopáticos según la prescripción de su médico homeópata.'
      },
      {
        question: '¿Qué son las recetas magistrales?',
        answer: 'Las recetas magistrales son preparados farmacéuticos elaborados artesanalmente según la prescripción de un médico, adaptados a las necesidades específicas de cada paciente. Contamos con un laboratorio equipado para preparar fórmulas dermocosméticas, ungüentos, cremas, soluciones y más.'
      },
      {
        question: '¿Tienen hierbas medicinales a granel?',
        answer: 'Sí, contamos con una amplia selección de hierbas medicinales a granel y en presentaciones comerciales. Podemos asesorarlo sobre propiedades, usos y formas de preparación. También disponemos de tés, tisanas y productos de fitoterapia.'
      },
      {
        question: '¿Puedo solicitar un medicamento que no está en stock?',
        answer: 'Por supuesto. Si el medicamento que necesita no se encuentra en stock, podemos pedirlo especialmente. En la mayoría de los casos lo tenemos disponible en 24 a 48 horas hábiles. Puede consultarnos por teléfono o WhatsApp antes de venir.'
      }
    ]
  },
  {
    category: 'Obras Sociales y Pagos',
    questions: [
      {
        question: '¿Trabajan con obras sociales y prepagas?',
        answer: 'No, pero ofrecemos descuentos especiales para jubilados y pensionados a través de los programas vigentes. Consulte con nuestros farmacéuticos para conocer los beneficios disponibles según su obra social o caja de jubilaciones.'
      },
      {
        question: '¿Qué medios de pago aceptan?',
        answer: 'Aceptamos efectivo, tarjetas de débito y crédito. Consulte las cuotas disponibles al momento de su visita ya que pueden variar según la tarjeta y el producto.'
      }
    ]
  },
  {
    category: 'Horarios y Atención',
    questions: [
      {
        question: '¿Cuáles son los horarios de atención?',
        answer: `Atendemos de lunes a viernes de 08:00 a 12:00 y de 15:00 a 19:30, y los sábados de 08:00 a 13:00. Los domingos permanecemos cerrados. Para consultas fuera del horario, puede escribirnos por WhatsApp.`
      },
      {
        question: '¿Realizan envíos a domicilio?',
        answer: 'Por el momento no contamos con servicio de envío a domicilio, pero puede realizar su pedido por teléfono o WhatsApp y retirarlo en farmacia cuando le sea conveniente. Estamos trabajando para incorporar este servicio próximamente.'
      },
      {
        question: '¿Puedo hacer consultas por WhatsApp?',
        answer: `Sí, puede escribirnos por WhatsApp para consultas sobre disponibilidad de medicamentos, precios o cualquier duda farmacéutica. Respondemos durante el horario de atención.`
      }
    ]
  },
  {
    category: 'Ubicación',
    questions: [
      {
        question: '¿Dónde están ubicados?',
        answer: `Estamos ubicados en ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.province}. Puede encontrarnos fácilmente en Google Maps buscando "Farmacia San José Valentín Alsina".`
      },
      {
        question: '¿Hay estacionamiento cerca?',
        answer: 'Sí, hay lugar para estacionar sobre la calle frente a la farmacia y en las calles aledañas. La zona cuenta con buena accesibilidad tanto en auto como en transporte público.'
      }
    ]
  }
]

export default function PreguntasFrecuentes() {
  return (
    <div className="bg-apothecary-cream-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-apothecary-green-700 to-apothecary-green-900 text-apothecary-cream-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-apothecary-cream-100 border-2 border-apothecary-cream-300 rounded-full px-4 py-2 mb-6">
            <span className="text-apothecary-green-700 text-2xl">✦</span>
            <span className="text-apothecary-green-800 font-serif font-semibold text-sm">
              Preguntas Frecuentes
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
            ¿En qué podemos ayudarlo?
          </h1>
          <p className="text-xl text-apothecary-cream-200 max-w-3xl mx-auto font-serif">
            Respondemos las consultas más habituales. Si no encuentra lo que busca, 
            contáctenos directamente.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <span className="text-apothecary-green-600 text-2xl mr-3">✦</span>
                  <h2 className="text-2xl font-serif font-bold text-apothecary-brown-900">
                    {category.category}
                  </h2>
                  <div className="flex-1 ml-4 h-0.5 bg-apothecary-green-200"></div>
                </div>

                {/* Questions */}
                <FAQAccordion questions={category.questions} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 bg-apothecary-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-apothecary-brown-900 mb-4">
            ¿Tiene otra consulta?
          </h2>
          <p className="text-apothecary-brown-700 font-serif text-lg mb-8">
            Estamos disponibles para responder cualquier pregunta que tenga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-apothecary-green-600 text-apothecary-cream-50 rounded-lg hover:bg-apothecary-green-700 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-apothecary-green-700"
            >
              Contactar
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${SITE.contact.whatsapp}?text=Hola,%20tengo%20una%20consulta`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-green-400"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}