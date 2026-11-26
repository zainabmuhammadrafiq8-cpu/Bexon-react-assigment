import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Button from '../common/Button'
import { pricingPlans } from '../../data/siteData'

gsap.registerPlugin(ScrollTrigger)

/**
 * PricingSection with Scroll-Linked Scrubbed Scale/Y Shift + Continuous Motion
 */
const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pricing-scrub-side',
        { y: 40 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )

      gsap.fromTo(
        '.pricing-scrub-center',
        { y: -30, scale: 0.98 },
        {
          y: 35,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-darkBg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          lightText
          subtitle="Advisory Retainers"
          title="Flexible Engagement Models"
          description="Transparent advisory packages designed to scale seamlessly with your organization's strategic priorities."
        />

        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-semibold ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 rounded-full bg-primary p-1 transition-colors flex items-center cursor-pointer"
            aria-label="Toggle Billing Cycle"
          >
            <span
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${isYearly ? 'text-white' : 'text-slate-400'}`}>
            Annual <span className="text-teal-300 text-xs font-bold">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map(
            ({ id, name, monthlyPrice, yearlyPrice, description, features, isPopular }) => (
              <div
                key={id}
                className={`pricing-card ${
                  isPopular ? 'pricing-scrub-center' : 'pricing-scrub-side'
                } relative rounded-3xl p-8 border transition-all duration-300 ${
                  isPopular
                    ? 'bg-darkCard border-primary shadow-2xl scale-100 lg:scale-105'
                    : 'bg-darkCard/60 border-white/10'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3.5 right-8 bg-primary text-white text-xs font-bold uppercase px-3.5 py-1 rounded-full">
                    Most Selected
                  </span>
                )}

                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-sm text-slate-400 mb-6">{description}</p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl font-extrabold">
                    ${isYearly ? yearlyPrice : monthlyPrice}
                  </span>
                  <span className="text-slate-400 text-sm"> / month</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contact"
                  variant={isPopular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Select Plan
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
