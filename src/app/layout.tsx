import type { Metadata } from 'next'
import './globals.css'

// Public origin-bound token for dpbs.site and its subdomains; expires 2026-10-20.
const HTML_IN_CANVAS_ORIGIN_TRIAL_TOKEN =
  'AsPpLYm4lw3SWVHlB5pQ4XK6J5rA3WyYgcVZzLljQomVbFm0yOKQsRVsloKipaYkjLf01jJ1BqLHvUZ9AJ5vWwgAAABieyJvcmlnaW4iOiJodHRwczovL2RwYnMuc2l0ZTo0NDMiLCJmZWF0dXJlIjoiSFRNTEluQ2FudmFzIiwiZXhwaXJ5IjoxNzkyNDU0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZX0='

export const metadata: Metadata = {
  title: 'DPBS - Resume',
  description: 'Minimal black and white personal resume site for Mingda Li.',
  icons: {
    icon: '/dpbs.png',
    shortcut: '/dpbs.png',
    apple: '/dpbs.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="origin-trial"
          content={HTML_IN_CANVAS_ORIGIN_TRIAL_TOKEN}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
