import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { projectsData } from '../../data/siteData'

gsap.registerPlugin(ScrollTrigger)

/**
 * ProjectsSection with True Scroll-Linked Scrubbed Card Shift
 */
const ProjectsSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-scrub-even',
        { y: 55 },
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
        '.project-scrub-odd',
        { y: -40 },
        {
          y: 50,
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-primary/10 text-primary">
              Case Studies
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight">
              Proven Impact Across Global Industries
            </h2>
          </div>
          <Button to="/projects" variant="outlineDark">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map(({ id, title, category, client, result, image }, idx) => (
            <div
              key={id}
              className={`project-card ${
                idx % 2 === 0 ? 'project-scrub-even' : 'project-scrub-odd'
              } group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-darkBg/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                  {client} • {result}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-primary"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
