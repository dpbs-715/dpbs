import type { ContactItem, ProjectItem } from './types'

export const intro = {
  label: 'RESUME',
  name: 'Your Name',
  title: 'Frontend / Full-Stack Engineer',
  description:
    'I focus on product experience, engineering quality, and AI-assisted development workflows.',
}

export const contacts: ContactItem[] = [
  {
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/yourname',
    href: 'https://github.com/yourname',
  },
  {
    label: 'Location',
    value: 'Remote / City',
  },
]

export const skills: string[] = [
  'Frontend Development',
  'Full-Stack Development',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
]

export const projects: ProjectItem[] = [
  {
    title: 'Project One',
    description:
      'Built core user-facing pages, improved component consistency, and optimized overall performance and maintainability.',
  },
  {
    title: 'Project Two',
    description:
      'Worked on architecture design, API integration, and collaboration workflows across product and engineering teams.',
  },
]

export const summary =
  'Solid frontend fundamentals with strong engineering awareness. Comfortable building maintainable interfaces, improving development efficiency, and exploring practical AI applications in real product workflows.'
