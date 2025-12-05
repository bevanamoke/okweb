import { Server } from "lucide-react"

export function HostingPricing() {
  const plans = [
    {
      title: "Shared Hosting",
      price: "$10/mo",
      description: "For websites and small apps",
      features: ["Shared server", "Basic support"],
    },
    {
      title: "VPS Hosting",
      price: "$25/mo",
      description: "For Odoo, apps, or medium websites",
      features: ["Dedicated resources", "Root access", "Scalability"],
    },
    {
      title: "Managed Cloud",
      price: "$50/mo",
      description: "Complete peace of mind",
      features: ["Backups", "Updates", "Security", "Uptime monitoring"],
    },
  ]

  return (
    <section className="px-4 py-20 md:py-28 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Hosting & Cloud Management</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
            >
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-foreground text-sm flex gap-2">
                    <span className="text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
