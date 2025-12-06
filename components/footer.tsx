import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/logo.png" alt="OKS Logo" width={40} height={40} className="h-10 w-auto" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">OKS</h3>
            <p className="text-foreground/60 text-sm">OmniTech Kernel Solutions — Smart. Scalable. African.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/odoo" className="hover:text-primary transition">
                  Odoo ERP
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-primary transition">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/web-app-development" className="hover:text-primary transition">
                  Web & App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Industries</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  All Industries
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition">
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/pricing" className="hover:text-primary transition">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="mailto:info@oks.co.ke" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                <a href="mailto:info@oks.co.ke" className="text-sm text-foreground/60 hover:text-primary transition">
                  info@oks.co.ke
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <a href="tel:+254703133390" className="text-sm text-foreground/60 hover:text-primary transition">
                  +254703133390
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <p>&copy; 2025 OmniTech Kernel Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
