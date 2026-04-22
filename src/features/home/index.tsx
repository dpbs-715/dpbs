import HeroSection from './sections/hero'
import SkillsSection from './sections/skills'
import ProjectsSection from './sections/projects'
import SummarySection from './sections/summary'
import Divider from '@/shared/ui/divider'

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-20">
      <HeroSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <SummarySection />
    </main>
  )
}
