'use client'

import { useState } from 'react'

interface Question {
  question: string
  answer: string
}

interface FAQAccordionProps {
  questions: Question[]
}

export function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {questions.map((item, index) => (
        <div
          key={index}
          className="bg-white border-2 border-apothecary-green-200 rounded-xl overflow-hidden hover:border-apothecary-green-400 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-serif font-semibold text-apothecary-brown-900 pr-4">
              {item.question}
            </span>
            <div className={`flex-shrink-0 w-8 h-8 bg-apothecary-green-600 rounded-full flex items-center justify-center transition-transform duration-300 ${
              openIndex === index ? 'rotate-45' : ''
            }`}>
              <svg className="w-4 h-4 text-apothecary-cream-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-5 border-t-2 border-apothecary-green-100">
              <p className="text-apothecary-brown-700 font-serif leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}