// components/Header.tsx
'use client'

import Link from 'next/link'
import { SITE } from '@/lib/metadata'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-apothecary-cream-50 border-b-2 border-apothecary-green-600">
      {/* Decorative top border - FULL WIDTH */}
      <div className="h-1 bg-gradient-to-r from-apothecary-green-500 via-apothecary-brown-500 to-apothecary-green-500"></div>
      
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust bar */}
        <div className="hidden lg:flex justify-between items-center py-3 text-xs border-b border-apothecary-green-200">
          <div className="flex items-center space-x-6 text-apothecary-brown-700">
            <span className="flex items-center font-serif">
              <span className="text-apothecary-green-600 mr-2">✦</span>
              Farmacéuticos matriculados
            </span>
            <span className="flex items-center font-serif">
              <span className="text-apothecary-green-600 mr-2">✦</span>
              Desde 1950
            </span>
            <span className="flex items-center font-serif">
              <span className="text-apothecary-green-600 mr-2">✦</span>
              Recetas magistrales
            </span>
          </div>
          <div className="flex items-center space-x-4 text-apothecary-brown-700">
            <a 
              href={`tel:${SITE.contact.phone}`}
              className="hover:text-apothecary-green-600 transition-colors flex items-center font-medium"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE.contact.phone}
            </a>
            <span className="text-apothecary-green-300">|</span>
            <span className="font-serif font-medium text-apothecary-green-700">
              Lun-Vie: 08:00-19:30
            </span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-5 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              {/* Vintage mortar & pestle icon */}
              <div className="w-14 h-14 bg-apothecary-green-600 rounded-full flex items-center justify-center border-4 border-apothecary-cream-300 shadow-lg">
                <svg className="w-8 h-8 text-apothecary-cream-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  <circle cx="12" cy="14" r="3"/>
                </svg>
              </div>
              {/* Decorative corner element */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-apothecary-brown-500 rounded-full border-2 border-apothecary-cream-50"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-apothecary-green-700 leading-tight">
                {SITE.name}
              </span>
              <span className="text-xs font-serif text-apothecary-brown-600 italic tracking-wide">
                Hierbas medicinales & Homeopatía
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-apothecary-brown-700 hover:text-apothecary-green-700 hover:bg-apothecary-cream-200 rounded font-serif font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/nosotros" 
              className="px-4 py-2 text-apothecary-brown-700 hover:text-apothecary-green-700 hover:bg-apothecary-cream-200 rounded font-serif font-medium transition-colors"
            >
              Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="px-4 py-2 text-apothecary-brown-700 hover:text-apothecary-green-700 hover:bg-apothecary-cream-200 rounded font-serif font-medium transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="/preguntas-frecuentes" 
              className="px-4 py-2 text-apothecary-brown-700 hover:text-apothecary-green-700 hover:bg-apothecary-cream-200 rounded font-serif font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/contacto" 
              className="ml-4 px-6 py-2.5 bg-apothecary-green-600 text-apothecary-cream-50 rounded-lg hover:bg-apothecary-green-700 transition-colors font-serif font-medium shadow-md border-2 border-apothecary-green-700"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-apothecary-brown-700 p-2"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - OUTSIDE max-width container for full background */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-apothecary-green-200 bg-apothecary-cream-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex flex-col space-y-1 py-4">
              <Link 
                href="/" 
                className="px-4 py-3 text-apothecary-brown-700 hover:bg-apothecary-cream-200 font-serif font-medium transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/nosotros" 
                className="px-4 py-3 text-apothecary-brown-700 hover:bg-apothecary-cream-200 font-serif font-medium transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/servicios" 
                className="px-4 py-3 text-apothecary-brown-700 hover:bg-apothecary-cream-200 font-serif font-medium transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="/preguntas-frecuentes" 
                className="px-4 py-3 text-apothecary-brown-700 hover:bg-apothecary-cream-200 font-serif font-medium transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preguntas Frecuentes
              </Link>
              <Link 
                href="/contacto" 
                className="mx-4 mt-2 px-6 py-3 bg-apothecary-green-600 text-apothecary-cream-50 rounded-lg hover:bg-apothecary-green-700 transition-colors font-serif font-medium text-center shadow-md border-2 border-apothecary-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              
              {/* Mobile contact info */}
              <div className="px-4 pt-4 border-t-2 border-apothecary-green-200 space-y-2 mt-4">
                <a 
                  href={`tel:${SITE.contact.phone}`}
                  className="flex items-center text-apothecary-brown-700 hover:text-apothecary-green-700 py-2 font-serif"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {SITE.contact.phone}
                </a>
                <p className="text-sm text-apothecary-brown-600 font-serif italic">
                  Lun-Vie: 08:00-12:00 / 15:00-19:30
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}