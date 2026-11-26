import AboutSection from '../components/home/AboutSection'
import TeamSection from '../components/home/TeamSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const About = () => {
  return (
    <>
      <section className="bg-darkBg text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3">
            About Bexon Pro Consulting
          </h1>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Architecting long-term competitive advantage for global enterprises since 2008.
          </p>
        </div>
      </section>
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  )
}

export default About
