type SectionHeadingProps = {
  index: string
  title: string
}

export default function SectionHeading({
  index,
  title,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs text-white/35">{index}</span>
      <h2 className="text-lg font-medium tracking-wide">{title}</h2>
    </div>
  )
}
