import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Name - Resume',
  description: 'Minimal black and white personal resume site.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
