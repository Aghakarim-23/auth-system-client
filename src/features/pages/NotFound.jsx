import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md mx-auto text-center">

        <div className="mb-6 flex justify-center">
          <div className="relative">
            <span className="text-[120px] sm:text-[160px] font-extrabold text-slate-100 leading-none select-none">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl">
              🔍
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-700 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFound
