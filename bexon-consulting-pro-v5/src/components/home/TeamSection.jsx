import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../common/SectionHeader'
import { teamData } from '../../data/siteData'

gsap.registerPlugin(ScrollTrigger)

/**
 * TeamSection with True Scroll-Linked Scrubbed Horizontal & Vertical Shift
 */
const TeamSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.team-scrub-even',
        { y: 45 },
        {
          y: -45,
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
        '.team-scrub-odd',
        { y: -45 },
        {
          y: 45,
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-lightBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Leadership Team"
          title="Meet Our Senior Partners"
          description="Seasoned strategists, economists, and industry practitioners dedicated to your competitive advantage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map(({ id, name, role, experience, image }, idx) => (
            <div
              key={id}
              className={`team-card ${
                idx % 2 === 0 ? 'team-scrub-even' : 'team-scrub-odd'
              } group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-darkBg/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {experience}
                </span>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
