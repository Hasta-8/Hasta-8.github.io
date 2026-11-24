import ContactCta from '../components/home/ContactCta'
import ExperiencePreview from '../components/home/ExperiencePreview'
import Expertise from '../components/home/Expertise'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Expertise />
      <ExperiencePreview />
      <ContactCta />
    </>
  )
}
