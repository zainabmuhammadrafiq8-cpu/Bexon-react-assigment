import { clientLogos } from '../../data/siteData'

const ClientMarquee = () => {
  const repeatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="bg-lightBg py-10 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Trusted by Industry Leaders & Fortune 500 Innovators
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 px-8">
          {repeatedLogos.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="text-xl sm:text-2xl font-extrabold text-slate-400 hover:text-primary transition-colors whitespace-nowrap select-none"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientMarquee
