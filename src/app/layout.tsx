import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DPBS - Resume',
  description: 'Minimal black and white personal resume site for Mingda Li.',
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
