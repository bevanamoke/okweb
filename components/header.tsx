"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="OKS Logo" width={40} height={40} className="w-10 h-10" />
          <span className="hidden sm:block text-2xl font-bold text-primary">OKS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-foreground/80 hover:text-foreground transition">
            Home
          </Link>
          <Link href="/odoo" className="text-sm text-foreground/80 hover:text-foreground transition">
            Odoo
          </Link>
          <Link href="/ai-automation" className="text-sm text-foreground/80 hover:text-foreground transition">
            AI Automation
          </Link>
          <Link href="/web-app-development" className="text-sm text-foreground/80 hover:text-foreground transition">
            Web & App Development
          </Link>
          <Link href="/industries" className="text-sm text-foreground/80 hover:text-foreground transition">
            Industries
          </Link>
          <Link href="/pricing" className="text-sm text-foreground/80 hover:text-foreground transition">
            Pricing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/quote">
            Get a Quote
          </Link>
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm text-foreground/80">
                Home
              </Link>
              <Link href="/odoo" className="text-sm text-foreground/80">
                Odoo
              </Link>
              <Link href="/ai-automation" className="text-sm text-foreground/80">
                AI Automation
              </Link>
              <Link href="/web-app-development" className="text-sm text-foreground/80">
                Web & App Development
              </Link>
              <Link href="/industries" className="text-sm text-foreground/80">
                Industries
              </Link>
              <Link href="/pricing" className="text-sm text-foreground/80">
                Pricing
              </Link>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/quote">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
