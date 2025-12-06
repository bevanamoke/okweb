import { Button } from "@/components/ui/button"

export default function OdooCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Let OKS Set Up Your Odoo System Today</h2>

        <p className="text-lg text-foreground/70 mb-12 text-balance">
          Whether you're a small bar, a busy restaurant, a retail shop, or a multi-branch business—Odoo is the tool you
          need to scale, and OKS is the partner to get you there.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book a Consultation
          </Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-foreground/70">
          <div>
            <p className="font-semibold text-foreground mb-1">Email</p>
            <p>info@oks.co.ke</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border"></div>
          <div>
            <p className="font-semibold text-foreground mb-1">Call/WhatsApp</p>
            <p>+254703133390</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-border"></div>
          <div>
            <p className="font-semibold text-foreground mb-1">Website</p>
            <p>OKS — Omnitech Kernel Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
