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
      <span className="font-detail text-[10px] text-[#f0c979]/55">{index}</span>
      <h2 className="font-display text-2xl font-normal text-white">{title}</h2>
    </div>
  )
}
