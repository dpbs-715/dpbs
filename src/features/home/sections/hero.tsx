import { contacts, intro } from '../model'

export default function HeroSection() {
  return (
    <section className="mb-16">
      <div className="text-[11px] tracking-[0.5em] text-white/40">
        {intro.label}
      </div>

      <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight">
        {intro.name}
      </h1>

      <p className="mt-4 text-base text-white/80">{intro.title}</p>

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
