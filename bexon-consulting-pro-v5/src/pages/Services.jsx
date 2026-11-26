import ServicesSection from '../components/home/ServicesSection'
import PricingSection from '../components/home/PricingSection'

const Services = () => {
  return (
    <>
      <section className="bg-darkBg text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3">
            Our Consulting Services
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            End-to-end corporate strategy, financial risk advisory, and digital modernization.
          </p>
        </div>
      </section>
      <ServicesSection />
      <PricingSection />
    </>
  )
}

export default Services
