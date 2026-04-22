import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
