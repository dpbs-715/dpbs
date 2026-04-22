import { contacts, intro } from '../model'

export default function HeroSection() {
  return (
    <section className="mb-16">
      <div className="font-detail text-[11px] uppercase text-[#f0c979]/70">
        {intro.label}
      </div>

      <h1 className="font-display mt-6 text-6xl font-normal leading-none text-white sm:text-7xl">
        {intro.name}
      </h1>

      <p className="mt-5 text-[15px] font-medium text-white/85">
        {intro.title}
      </p>

      <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
        {intro.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
        {contacts.map((item) => {
          const content = (
            <>
              <span className="text-white/35">{item.label}</span>
              <span className="ml-2">{item.value}</span>
            </>
          )

          if (item.href) {
            return (
              <a
                key={`${item.label}-${item.value}`}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition hover:text-white"
              >
                {content}
              </a>
            )
          }

          return <span key={`${item.label}-${item.value}`}>{content}</span>
        })}
      </div>
    </section>
  )
}
