import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-slate-900">404</h1>
        <p className="mt-2 text-slate-600">Pagina nao encontrada.</p>
        <Link
          className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          to="/"
        >
          Voltar para inicio
        </Link>
      </div>
    </div>
  )
}
