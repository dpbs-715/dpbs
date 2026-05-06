import HomePage from '@/features/home'
import { defaultLanguage, resolveLanguage } from '@/features/home/model'

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const languageParam = Array.isArray(params?.lang)
    ? params.lang[0]
    : params?.lang
  const envLanguage = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE
  const initialLanguage =
    resolveLanguage(languageParam) ??
    resolveLanguage(envLanguage) ??
    defaultLanguage
  const showIcp = resolveLanguage(envLanguage) === 'zh'

  return <HomePage initialLanguage={initialLanguage} showIcp={showIcp} />
}
