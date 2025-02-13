import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import TanstackClientProvider from '@/components/providers/tanstack-client-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navigation } from '@/components/ui/navigation'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  preload: true,
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'HackDay 2025 - Idea Management Portal',
  description: 'Discover and engage with innovative project ideas for HackDay 2025',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="hackday-theme"
        >
          <TanstackClientProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
            </div>
          </TanstackClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
