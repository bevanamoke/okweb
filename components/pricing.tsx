import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    title: "Odoo ERP",
    items: ["Setup from KES 30,000", "Customization from KES 15,000", "Support from KES 5,000/month"],
  },
  {
    title: "AI Automation",
    items: [
      "Basic workflows: KES 10,000–40,000",
      "AI Agent setup: KES 25,000–150,000",
      "Custom AI systems: Project-based",
    ],
  },
  {
    title: "Web & App Development",
    items: ["Websites: from KES 40,000", "Web apps: from KES 120,000", "Mobile apps: from KES 150,000"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing (High-Level Overview)</h2>
          <p className="text-lg text-foreground/60">Transparent pricing for all business sizes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{tier.title}</h3>
              <ul className="space-y-4 mb-8">
                {tier.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
