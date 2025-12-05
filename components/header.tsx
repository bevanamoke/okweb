"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-2xl font-bold text-primary">
          OKS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm text-foreground/80 hover:text-foreground transition">
            Services
          </Link>
          <Link href="#industries" className="text-sm text-foreground/80 hover:text-foreground transition">
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

        {/* CTA Button */}
        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
          Get a Free Consultation
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-sm text-foreground/80">
                Services
              </Link>
              <Link href="#industries" className="text-sm text-foreground/80">
                Industries
              </Link>
              <Link href="/pricing" className="text-sm text-foreground/80">
                Pricing
              </Link>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
