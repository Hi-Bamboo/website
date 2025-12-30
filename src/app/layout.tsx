import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import { NextraTheme } from '@/components/nextra-theme'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    absolute: '',
    template: '%s - Nextra'
  }
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" className={inter.className}>
      <Head faviconGlyph="✦" />
      <body style={{ margin: 0 }}>
        <NextraTheme pageMap={pageMap}>{children}</NextraTheme>
      </body>
    </html>
  )
}

export default RootLayout