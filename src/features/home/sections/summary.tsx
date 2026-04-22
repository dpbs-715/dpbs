import { summary } from '../model'
import SectionHeading from '@/shared/ui/section-heading'

export default function SummarySection() {
  return (
    <section className="py-12">
      <SectionHeading index="03" title="Summary" />

      <p className="mt-6 text-sm leading-8 text-white/65">{summary}</p>
    </section>
  )
}
