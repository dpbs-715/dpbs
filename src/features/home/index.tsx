'use client'

import { useEffect, useMemo, useState } from 'react'
import Droplets from '@/components/canvasui/Droplets'
import HeroSection from './sections/hero'
import SkillsSection from './sections/skills'
import ProjectsSection from './sections/projects'
import SummarySection from './sections/summary'
import Divider from '@/shared/ui/divider'
import { defaultLanguage, homeCopy, icpNumber, languageOptions } from './model'
import type { Language } from './types'

type HomePageProps = {
  initialLanguage?: Language
  showIcp?: boolean
}

export default function HomePage({
  initialLanguage = defaultLanguage,
  showIcp = false,
}: HomePageProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const copy = homeCopy[language]

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const languageLabel = useMemo(
    () => (language === 'zh' ? 'Switch to English' : '切换到中文'),
    [language],
  )

  return (
    <Droplets
      className="resume-droplets bg-black"
      contentClassName="bg-cover bg-[position:42%_center] bg-no-repeat sm:bg-center"
      interactionDistortion={0.7}
      contentStyle={{
        backgroundImage:
          'linear-gradient(90deg, rgb(0 0 0 / 48%), rgb(0 0 0 / 68%) 50%, rgb(0 0 0 / 46%)), linear-gradient(180deg, rgb(0 0 0 / 12%), rgb(0 0 0 / 48%)), url("/resume-rain-background.jpg")',
      }}
      style={{
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      <main className="mx-auto min-h-screen max-w-2xl px-6 py-20">
        <div className="fixed right-4 top-4 z-10 sm:right-8 sm:top-8">
          <div
            className="flex rounded-full border border-white/15 bg-black/75 p-1 text-xs text-white/55 shadow-2xl shadow-black/40 backdrop-blur"
            aria-label={languageLabel}
          >
            {languageOptions.map((option) => {
              const isActive = language === option.value

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setLanguage(option.value)}
                  className={`h-8 min-w-9 rounded-full px-3 transition ${
                    isActive
                      ? 'bg-[#f0c979] text-black'
                      : 'text-white/55 hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>

        <HeroSection contacts={copy.contacts} intro={copy.intro} />
        <Divider />
        <SkillsSection skills={copy.skills} title={copy.skillsTitle} />
        <Divider />
        <ProjectsSection projects={copy.projects} title={copy.projectsTitle} />
        <Divider />
        <SummarySection summary={copy.summary} title={copy.summaryTitle} />
        {showIcp ? (
          <footer className="pt-10 text-center text-xs text-white/35">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/65"
            >
              {icpNumber}
            </a>
          </footer>
        ) : null}
      </main>
    </Droplets>
  )
}
