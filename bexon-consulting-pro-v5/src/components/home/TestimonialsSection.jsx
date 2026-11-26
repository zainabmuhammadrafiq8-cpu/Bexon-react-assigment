import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import { testimonialsData } from '../../data/siteData'

gsap.registerPlugin(ScrollTrigger)

/**
 * TestimonialsSection with True Scroll-Linked Scrubbed Opposing Horizontal Drift
 */
const TestimonialsSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-scrub-left',
        { x: -35 },
        {
          x: 35,
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
        '.testimonial-scrub-right',
        { x: 35 },
        {
          x: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )

      gsap.to('.quote-icon-float', {
        x: 7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Client Endorsements"
          title="What Global Executives Say"
          description="Direct feedback from leadership teams we have partnered with across North America, Europe, and Asia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map(({ id, quote, author, position, rating }, idx) => (
            <div
              key={id}
              className={`testimonial-card ${
                idx % 2 === 0 ? 'testimonial-scrub-left' : 'testimonial-scrub-right'
              } rounded-3xl p-8 sm:p-10 bg-lightBg border border-slate-200/80 relative hover:shadow-lg transition-shadow`}
            >
              <Quote className="quote-icon-float w-10 h-10 text-primary/30 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                "{quote}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{author}</h4>
                <p className="text-sm text-primary font-medium">{position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
