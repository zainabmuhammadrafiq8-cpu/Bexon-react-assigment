import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, Award, CheckCircle2, Sparkles } from 'lucide-react'
import Button from '../common/Button'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero with ScrollTrigger Scrubbed Parallax + Continuous Motion
 */
const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-orb', {
        scale: 1.18,
        opacity: 0.4,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-badge-float', {
        x: 8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Scrubbed scroll motion while scrolling past Hero
      gsap.to('.hero-scrub-left', {
        y: -45,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.hero-scrub-right', {
        y: 55,
        rotation: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative bg-darkBg text-white overflow-hidden pt-14 pb-24 lg:pt-20 lg:pb-32"
      style={{
        backgroundImage:
          'radial-gradient(circle at 80% 20%, rgba(30, 138, 138, 0.24), transparent 48%)',
      }}
    >
      <div className="hero-orb pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 hero-scrub-left">
            <div className="hero-badge-float inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span>Trusted Corporate Advisory Partner</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight mb-6">
              Strategic Solutions For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-emerald-300">
                Modern Enterprise
              </span>{' '}
              Growth
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              We partner with ambitious executives to navigate complex market shifts, optimize capital efficiency, and build resilient global businesses.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button to="/contact" variant="primary">
                Schedule Consultation
              </Button>
              <Button to="/projects" variant="outline">
                Explore Case Studies
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>ISO-Certified Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>24/7 Executive Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>450+ Global Clients</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hero-scrub-right relative">
            <div className="animate-float relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Bexon Pro Executive Consulting Team"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-darkCard/95 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">
                    Average Client ROI
                  </p>
                  <p className="text-2xl font-extrabold text-white mt-0.5">+185% Growth</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
