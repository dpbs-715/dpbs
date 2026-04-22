import { skills } from '../model'
import SectionHeading from '@/shared/ui/section-heading'

export default function SkillsSection() {
  return (
    <section className="py-12">
      <SectionHeading index="01" title="Skills" />

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-white/20 px-3 py-1 text-sm text-white/80 transition hover:border-white/40"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
