import { Github } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-12 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl mb-12">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-bold">B</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Bamboo</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The lightweight, Spring Boot native blockchain indexer for modern EVM applications.
            </p>
          </div>

          {/* Docs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Documentation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary transition-colors">Getting Started</Link></li>
              <li><Link href="/docs/configuration" className="hover:text-primary transition-colors">Configuration</Link></li>
              <li><Link href="/docs/architecture" className="hover:text-primary transition-colors">Architecture</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com/lastrealm-io/bamboo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Github size={16} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-5xl border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BamBoo.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}