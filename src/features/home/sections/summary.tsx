import SectionHeading from '@/shared/ui/section-heading'

type SummarySectionProps = {
  summary: string
  title: string
}

export default function SummarySection({ summary, title }: SummarySectionProps) {
  return (
    <section className="py-12">
      <SectionHeading index="03" title={title} />

      <p className="mt-6 text-sm leading-8 text-white/65">{summary}</p>
    </section>
  )
}
