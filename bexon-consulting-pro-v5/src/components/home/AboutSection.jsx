import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Button from '../common/Button'
import { statsData } from '../../data/siteData'

gsap.registerPlugin(ScrollTrigger)

/**
 * AboutSection with True Scroll-Linked Scrubbing + IntersectionObserver Reveal
 */
const AboutSection = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrubbed motion tied directly to scrolling through AboutSection
      gsap.fromTo(
        '.about-scrub-img',
        { y: 45, scale: 0.96 },
        {
          y: -45,
          scale: 1.02,
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
        '.about-scrub-text',
        { y: 35 },
        {
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )

      gsap.to('.about-badge-float', {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    // IntersectionObserver for stat counters when entering viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.utils.toArray('.stat-number').forEach((el) => {
              if (el.dataset.animated === 'true') return
              el.dataset.animated = 'true'
              const target = parseFloat(el.dataset.target)
              const decimals = parseInt(el.dataset.decimals || '0', 10)
              const prefix = el.dataset.prefix || ''
              const suffix = el.dataset.suffix || ''
              const obj = { val: 0 }

              gsap.to(obj, {
                val: target,
                duration: 1.8,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`
                },
              })
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      ctx.revert()
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative about-scrub-img">
            <div className="animate-float-gentle rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Corporate Strategy Session"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="about-badge-float hidden sm:block absolute -bottom-8 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl max-w-[220px]">
              <p className="text-4xl font-extrabold">18+</p>
              <p className="text-sm font-medium mt-1 text-teal-50">
                Years Delivering Measurable Enterprise Value
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 about-scrub-text">
            <SectionHeader
              align="left"
              subtitle="About Bexon Pro"
              title="Driving Sustainable Transformation Through Strategic Clarity"
              description="Founded by former Fortune 500 executives and quantitative strategists, Bexon Pro bridges the gap between high-level boardroom vision and frontline operational execution."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Tailored Enterprise Roadmaps',
                'Data-Backed Financial Modeling',
                'Agile Change Management',
                'Dedicated Partner Leadership',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <Button to="/about" variant="dark">
              Discover Our Story
            </Button>
          </div>
        </div>

        <div
          ref={statsRef}
          className="stats-bar mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-darkBg rounded-3xl p-8 sm:p-10 text-white"
        >
          {statsData.map(({ id, numericValue, prefix, suffix, decimals = 0, label }) => (
            <div
              key={id}
              className="text-center sm:text-left border-b sm:border-b-0 sm:border-r last:border-none border-white/10 pb-4 sm:pb-0 sm:pr-6"
            >
              <p
                className="stat-number text-3xl sm:text-4xl font-extrabold text-primary"
                data-target={numericValue}
                data-prefix={prefix}
                data-suffix={suffix}
                data-decimals={decimals}
              >
                {prefix}0{suffix}
              </p>
              <p className="text-sm text-slate-300 mt-1.5 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
