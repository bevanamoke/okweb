import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IndustriesCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Transform Your Industry?</h2>
        <p className="text-lg text-foreground/70 mb-8">
          Whether you're in hospitality, retail, logistics, healthcare, education, or enterprise operations—we tailor
          systems that work for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/odoo">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Odoo ERP
            </Button>
          </Link>
          <Link href="/ai-automation">
            <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Discover AI Automation
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-foreground/5 rounded-lg border border-foreground/10">
          <p className="text-foreground/80 font-semibold mb-4">Talk to Our Team</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="tel:+254703133390"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
            >
              <span>Call/WhatsApp: +254703133390</span>
            </Link>
            <Link
              href="mailto:info@oks.co.ke"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
            >
              <span>Email: info@oks.co.ke</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
