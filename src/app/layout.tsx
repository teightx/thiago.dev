import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thiago Santos | Salesforce Architect',
  description: 'Salesforce Architect with 5+ years delivering enterprise solutions. Specialized in payment workflows, secure integrations, and reliable automation.',
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
    <html lang="en">
      <body className={inter.className}>
        {/* Premium gradient glows */}
        <div className="glow-wrapper" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
