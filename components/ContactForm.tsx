// components/ContactForm.tsx
'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // For now, just simulate sending - you can integrate with a service later
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border-2 border-apothecary-green-200 rounded-xl p-8">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-apothecary-brown-900 font-serif font-semibold mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-apothecary-green-200 rounded-lg focus:outline-none focus:border-apothecary-green-600 font-serif transition-colors"
            placeholder="Juan Pérez"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-apothecary-brown-900 font-serif font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-apothecary-green-200 rounded-lg focus:outline-none focus:border-apothecary-green-600 font-serif transition-colors"
            placeholder="juan@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-apothecary-brown-900 font-serif font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-apothecary-green-200 rounded-lg focus:outline-none focus:border-apothecary-green-600 font-serif transition-colors"
            placeholder="11 1234-5678"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-apothecary-brown-900 font-serif font-semibold mb-2">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border-2 border-apothecary-green-200 rounded-lg focus:outline-none focus:border-apothecary-green-600 font-serif transition-colors resize-none"
            placeholder="Escriba su consulta aquí..."
          ></textarea>
        </div>

        {/* Success Message */}
        {status === 'success' && (
          <div className="bg-apothecary-green-100 border-2 border-apothecary-green-600 rounded-lg p-4 text-apothecary-green-800 font-serif">
            ✓ Mensaje enviado con éxito. Nos contactaremos pronto.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-apothecary-green-600 text-apothecary-cream-50 py-4 rounded-lg hover:bg-apothecary-green-700 transition-all font-serif font-semibold text-lg shadow-lg border-2 border-apothecary-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        <p className="text-sm text-apothecary-brown-600 font-serif text-center">
          * Campos obligatorios
        </p>
      </div>
    </form>
  )
}