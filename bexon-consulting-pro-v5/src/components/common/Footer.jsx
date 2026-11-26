import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { navLinks, servicesData } from '../../data/siteData'

const Footer = () => {
  return (
    <footer className="bg-darkBg text-slate-300 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="animate-float-gentle w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-xl">
                B
              </div>
              <span className="text-white font-extrabold text-2xl tracking-tight">
                Bexon<span className="text-primary">Pro.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering forward-thinking enterprises with strategic advisory, financial intelligence, and digital transformation.
            </p>
            <div className="space-y-2.5 text-sm">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>350 Fifth Avenue, Suite 4800, New York</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+1 (888) 452-8900</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>advisory@bexon-consulting.com</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map(({ id, label, path }) => (
                <li key={id}>
                  <Link
                    to={path}
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5">Our Expertise</h4>
            <ul className="space-y-3 text-sm">
              {servicesData.slice(0, 5).map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to="/services"
                    className="hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5">Executive Insights</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to receive quarterly market intelligence and corporate strategy briefings.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Subscribed to Bexon Pro Executive Insights!')
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Enter corporate email"
                className="w-full px-4 py-3 rounded-xl bg-darkCard border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary hover:bg-primaryDark text-white font-semibold text-sm transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bexon Pro Consulting Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-300">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
