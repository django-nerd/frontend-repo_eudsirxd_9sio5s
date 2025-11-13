import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 text-white grid place-items-center font-bold">P</div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Pastorate</p>
            <p className="text-xs text-gray-500">Unified Hub</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <a href="#locations" className="hover:text-gray-900">Locations</a>
          <a href="#news" className="hover:text-gray-900">News</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 to-rose-600 text-white grid place-items-center font-bold">P</div>
            <p className="font-semibold text-gray-900">Pastorate Network</p>
          </div>
          <p className="text-sm text-gray-500 mt-3">One unified, trustworthy experience across every congregation.</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Navigation</p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><Link to="/" className="hover:text-gray-900">Hub</Link></li>
            <li><a href="#locations" className="hover:text-gray-900">Locations</a></li>
            <li><a href="#news" className="hover:text-gray-900">News</a></li>
          </ul>
        </div>
        <div id="contact">
          <p className="font-medium text-gray-900">Contact</p>
          <p className="text-sm text-gray-600 mt-3">info@pastorate.org</p>
          <p className="text-sm text-gray-600">(555) 123-0000</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} Pastorate Network. All rights reserved.</div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
