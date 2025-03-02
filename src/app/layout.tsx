import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'
import LanguageToggle from '@/components/LanguageToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thiago Santos | Salesforce Developer',
  description: 'Salesforce Developer specialized in creating scalable and innovative solutions.',
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
          {children}
          <ThemeToggle />
          <LanguageToggle />
        </ThemeProvider>
      </body>
    </html>
  )
} 