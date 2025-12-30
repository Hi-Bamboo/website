'use client'

import { useState } from 'react'
import type { FC } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Hardcoded premium links for now
  const navLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API', href: '/docs/api' },
    { name: 'Components', href: '/docs/components' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-medium tracking-tight text-foreground/90 hover:text-foreground transition-colors">
            Bamboo
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/login"
            className="px-4 py-2 text-xs font-medium text-background bg-foreground rounded-full hover:bg-foreground/90 transition-opacity"
          >
            Sign In
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-1">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b border-border/10 bg-background/95 backdrop-blur-xl p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-light text-foreground/80 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
