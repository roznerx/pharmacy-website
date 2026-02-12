interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white border-2 border-apothecary-green-200 rounded-xl p-6 hover:shadow-xl transition-all hover:border-apothecary-green-400 group">
      {/* Icon */}
      <div className="w-16 h-16 bg-apothecary-green-600 rounded-full flex items-center justify-center mb-4 text-apothecary-cream-50 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold text-apothecary-brown-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-apothecary-brown-700 font-serif mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-apothecary-brown-600 font-serif">
            <span className="text-apothecary-green-600 mr-2 mt-0.5">✦</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}