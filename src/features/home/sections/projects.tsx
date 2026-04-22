import { projects } from '../model'
import SectionHeading from '@/shared/ui/section-heading'

export default function ProjectsSection() {
  return (
    <section className="py-12">
      <SectionHeading index="02" title="Projects" />

      <div className="mt-8 space-y-10">
        {projects.map((project) => (
          <article key={project.title} className="group">
            <h3 className="text-base font-medium underline-offset-4 group-hover:underline">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
