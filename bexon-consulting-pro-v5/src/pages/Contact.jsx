import { useState } from 'react'
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react'
import Button from '../components/common/Button'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-darkBg text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3">
            Schedule a Strategy Session
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Connect with our senior partners to discuss your organization’s growth objectives.
          </p>
        </div>
      </section>

      <section className="py-20 bg-lightBg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Global Headquarters</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach out directly via phone, email, or submit the advisory inquiry form and a partner will respond within 24 hours.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Office Address</h4>
                  <p className="text-sm text-slate-600">350 Fifth Avenue, Suite 4800, New York, NY</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Direct Hotline</h4>
                  <p className="text-sm text-slate-600">+1 (888) 452-8900</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Advisory Desk</h4>
                  <p className="text-sm text-slate-600">advisory@bexon-consulting.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Thank you! A Bexon Pro Senior Partner will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Zainab Rafiq"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Advisory Service Needed
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-primary">
                    <option>Business Strategy & Growth</option>
                    <option>Financial Risk & Advisory</option>
                    <option>Digital Transformation</option>
                    <option>M&A Due Diligence</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Project Overview
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your business goals..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Submit Advisory Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
