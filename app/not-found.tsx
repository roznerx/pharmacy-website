import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">Página no encontrada</p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
