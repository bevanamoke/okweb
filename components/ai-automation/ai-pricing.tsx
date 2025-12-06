import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function AiPricing() {
  const packages = [
    {
      name: "Starter AI Package",
      price: "$500",
      description: "Perfect for businesses just starting with automation",
      features: ["WhatsApp bot", "Basic automations (invoices, reminders)", "AI business reports"],
    },
    {
      name: "Professional AI Package",
      price: "$1,000",
      description: "For growing businesses ready to scale",
      features: [
        "Multiple workflow automations",
        "Odoo integration",
        "Advanced WhatsApp agent",
        "Predictive analytics",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Intelligence",
      price: "$3,500+",
      description: "Full-suite automation for large organizations",
      features: [
        "Full automation suite",
        "Custom AI tools",
        "Machine learning models",
        "Dedicated AI agent",
        "System-wide integration",
      ],
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI Automation Packages</h2>
          <p className="text-lg text-foreground/70 mb-2">Choose a package or customize for your needs</p>
          <p className="text-sm text-foreground/60">
            Pricing depends on complexity, number of workflows, and integrations required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg border p-8 transition ${
                pkg.highlighted ? "bg-primary/10 border-primary/50 md:scale-105" : "bg-background border-border"
              }`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
              <p className="text-foreground/70 text-sm mb-6">{pkg.description}</p>

              <Button className="w-full mb-6 bg-primary hover:bg-primary/90">Get Started</Button>

              <div className="space-y-3">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
