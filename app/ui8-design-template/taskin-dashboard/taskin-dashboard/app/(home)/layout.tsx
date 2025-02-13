import LargeSidebar from '@/components/shared/sidebar/LargeSidebar'
import { KeepThemeProvider } from '@/components/shared/theme-provider'
import { ToastWrapper } from 'keep-react'
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
          <main>
            <LargeSidebar />
            <section className="xl:m-4 xl:ml-[250px]">{children}</section>
          </main>
          <ToastWrapper />
        </KeepThemeProvider>
      </body>
    </html>
  )
}
