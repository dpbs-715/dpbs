import type { ProjectItem } from '../types'
import SectionHeading from '@/shared/ui/section-heading'

type ProjectsSectionProps = {
  projects: ProjectItem[]
  title: string
}

export default function ProjectsSection({
  projects,
  title,
}: ProjectsSectionProps) {
  return (
    <section className="py-12">
      <SectionHeading index="02" title={title} />

      <div className="mt-8 space-y-10">
        {projects.map((project) => (
          <article key={project.title} className="group">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-base font-medium underline-offset-4 transition hover:text-white group-hover:underline"
              >
                {project.title}
              </a>
            ) : (
              <h3 className="text-base font-medium underline-offset-4 group-hover:underline">
                {project.title}
              </h3>
            )}

            <p className="mt-3 text-sm leading-7 text-white/65">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
