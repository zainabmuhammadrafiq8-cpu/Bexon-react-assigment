import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import ServiceCard from '../common/ServiceCard'
import { servicesData } from '../../data/siteData'

gsap.registerPlugin(ScrollTrigger)

/**
 * Services Continuous Left-to-Right Slider + ScrollTrigger Scrubbed Drift
 */
const ServicesSection = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [manualOffset, setManualOffset] = useState(0)

  const sliderItems = [...servicesData, ...servicesData]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrubbed horizontal & vertical drift synced with scroll progress
      gsap.fromTo(
        '.services-scroll-wrapper',
        { x: -50 },
        {
          x: 50,
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

  const handleStepRight = () => {
    setIsPaused(true)
    setManualOffset((prev) => prev + 180)
  }

  const handleStepLeft = () => {
    setIsPaused(true)
    setManualOffset((prev) => prev - 180)
  }

  const handleResumeAutoSlide = () => {
    setManualOffset(0)
    setIsPaused(false)
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-lightBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services • Live Slider"
          title="Comprehensive Consulting Solutions"
          description="Explore our advisory services moving continuously from left to right with live scroll-linked motion."
        />

        <div className="flex items-center justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={handleStepLeft}
            className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-800 hover:border-primary hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Move Slider Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-darkBg text-white text-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
            aria-label={isPaused ? 'Play Slider' : 'Pause Slider'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{isPaused ? 'Resume Auto-Slide' : 'Pause Slider'}</span>
          </button>

          {manualOffset !== 0 && (
            <button
              type="button"
              onClick={handleResumeAutoSlide}
              className="px-3 h-10 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              Reset Loop
            </button>
          )}

          <button
            type="button"
            onClick={handleStepRight}
            className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-800 hover:border-primary hover:text-primary flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Move Slider Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="services-scroll-wrapper relative w-full overflow-hidden py-4">
        <div
          ref={trackRef}
          className={`animate-slider-ltr flex items-stretch gap-7 px-4 ${
            isPaused ? 'slider-paused' : ''
          }`}
          style={
            isPaused && manualOffset !== 0
              ? { transform: `translateX(${manualOffset}px)`, transition: 'transform 0.45s ease-out' }
              : undefined
          }
        >
          {sliderItems.map((service, index) => (
            <ServiceCard key={`${service.id}-${index}`} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
