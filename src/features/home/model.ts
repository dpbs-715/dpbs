import type { ContactItem, ProjectItem } from './types'

export const intro = {
  label: 'RESUME',
  name: 'DPBS',
  title: 'Frontend Engineer / Vue, TypeScript & Java',
  description:
    'I build enterprise frontends, component systems, and Java-backed product workflows with a strong bias toward maintainable delivery and practical AI-assisted development.',
}

export const contacts: ContactItem[] = [
  {
    label: 'Email',
    value: '840886454@qq.com',
    href: 'mailto:840886454@qq.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/dpbs-715',
    href: 'https://github.com/dpbs-715',
  },
  {
    label: 'Location',
    value: 'China / Remote',
  },
]

export const skills: string[] = [
  'Vue 3',
  'TypeScript',
  'Vite',
  'Nuxt',
  'UniApp',
  'Element Plus',
  'Pinia',
  'Three.js',
  'Node.js',
  'Java',
  'Spring Boot',
  'Spring Cloud',
  'MyBatis',
  'MySQL / Redis',
  'Elasticsearch',
  'WebSocket / MQTT',
  'AI-Assisted Development',
]

export const projects: ProjectItem[] = [
  {
    title: 'Vunio',
    href: 'https://github.com/dpbs-715/vunio',
    description:
      'A Vue 3.5 + TypeScript component library template built around Turborepo, pnpm, VitePress docs, shared hooks, directives, utilities, lint presets, changesets, and package publishing workflows.',
  },
  {
    title: 'DPBS Resume Site',
    href: 'https://github.com/dpbs-715/dpbs',
    description:
      'A minimal personal resume site using Next.js App Router, React, TypeScript, and Tailwind CSS. Designed as a small public surface for keeping profile content, dependency hygiene, and deployment workflow clean.',
  }
]

export const summary =
  'Frontend engineer with 5+ years of experience across enterprise management systems, IoT dashboards, mobile mini-programs, SSR websites, and data-heavy business workflows. My early Java full-stack work with Spring Boot, MyBatis, MySQL, Redis, and Elasticsearch makes me comfortable reading backend contracts, shaping APIs with backend teams, and handling product workflows end to end. I care about reusable architecture, typed contracts, build tooling, and turning AI coding tools into a reliable part of everyday engineering.'
