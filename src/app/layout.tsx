import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiago Santos | Salesforce Architect',
  description: 'Salesforce architecture and custom software for systems that cannot go down.',
  icons: {
    icon: '/thiago.dev/favicon.ico',
    shortcut: '/thiago.dev/favicon.ico',
    apple: '/thiago.dev/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: '#060B1E' }}>{children}</body>
    </html>
  )
}
