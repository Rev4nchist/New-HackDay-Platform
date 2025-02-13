import OnboardContent from '@/components/onboard/OnboardContent'
import { KeepThemeProvider } from '@/components/shared/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskIn || Manage your projects',
  description: 'Keep Design System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-metal-100 dark:bg-[#31373F]`} suppressHydrationWarning>
        <KeepThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main className="bg-white dark:bg-metal-900">
            <section className="mx-auto grid min-h-screen grid-cols-12 gap-5">
              <OnboardContent />
              {children}
            </section>
          </main>
        </KeepThemeProvider>
      </body>
    </html>
  )
}
