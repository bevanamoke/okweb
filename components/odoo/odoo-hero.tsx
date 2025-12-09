import { Button } from "@/components/ui/button"

export default function OdooHero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <span className="text-xs font-semibold text-primary">BUSINESS AUTOMATION</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Run Your Entire Business on One Powerful Platform
        </h1>

        <p className="text-lg text-foreground/70 mb-8 max-w-3xl mx-auto text-balance">
          Odoo is an all-in-one business management software that replaces dozens of scattered tools with one integrated
          system. Whether you're running a restaurant, retail store, startup, school, or manufacturing business—Odoo
          gives you everything you need to operate smoothly, efficiently, and profitably.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started with Odoo
          </Button>
          <Button size="lg" variant="outline">
            View Pricing
          </Button>
        </div>

        <p className="text-sm text-foreground/60">
          At OKS, we help Kenyan businesses unlock the full power of Odoo through world-class setup, customization,
          automation, and training.
        </p>
      </div>
    </section>
  )
}
