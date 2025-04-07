import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-float">
        404
      </div>
      <h2 className="mt-8 text-3xl font-semibold text-white">Page Not Found</h2>
      <p className="mt-4 text-xl text-gray-400 text-center max-w-md">
        Oops! Looks like you've wandered into uncharted territory. Let's get you back on track.
      </p>
      <Link 
        href="/" 
        className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
      <div className="mt-12 p-6 rounded-xl bg-white/5 max-w-md text-center">
        <p className="text-gray-400">
          If you believe this is a mistake, join our community and let us know!
        </p>
      </div>
    </div>
  )
} 