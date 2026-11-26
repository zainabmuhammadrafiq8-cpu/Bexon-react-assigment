import ProjectsSection from '../components/home/ProjectsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const Projects = () => {
  return (
    <>
      <section className="bg-darkBg text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3">
            Featured Case Studies
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Explore how our advisory frameworks deliver measurable financial and operational impact.
          </p>
        </div>
      </section>
      <ProjectsSection />
      <TestimonialsSection />
    </>
  )
}

export default Projects
