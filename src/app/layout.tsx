import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/styles/globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'
import LanguageToggle from '@/components/LanguageToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thiago Santos | Salesforce Developer',
  description: 'Senior Salesforce Developer specialized in scalable architectures and AI-powered integrations.',
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
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} theme-transition antialiased`}>
        <ThemeProvider>
          <div className="blob blob1" />
          <div className="blob blob2" />
          {children}
          <ThemeToggle />
          <LanguageToggle />
        </ThemeProvider>
      </body>
    </html>
  )
} 