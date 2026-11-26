import Hero from '../components/home/Hero'
import ClientMarquee from '../components/home/ClientMarquee'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import ProjectsSection from '../components/home/ProjectsSection'
import PricingSection from '../components/home/PricingSection'
import TeamSection from '../components/home/TeamSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const Home = () => {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  )
}

export default Home
