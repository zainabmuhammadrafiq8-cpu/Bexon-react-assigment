import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react'
import { navLinks } from '../../data/siteData'
import Button from './Button'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-darkBg/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="animate-float-gentle w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-xl transition-transform duration-300 group-hover:rotate-6">
              B
            </div>
            <span className="text-white font-extrabold text-2xl tracking-tight">
              Bexon<span className="text-primary">Pro.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ id, label, path }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-primary' : 'text-slate-200 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2.5 text-white">
              <div className="animate-float-reverse w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-primary">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="text-slate-400">Free Consultation</p>
                <p className="font-bold">+1 (888) 452-8900</p>
              </div>
            </div>
            <Button to="/contact" variant="primary">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-darkCard border-t border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map(({ id, label, path }) => (
            <NavLink
              key={id}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-slate-200 hover:bg-white/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
