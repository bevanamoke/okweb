import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function WadPricing() {
  const packages = [
    {
      name: "Starter Web App",
      price: "$500",
      description: "Simple systems, landing pages, basic dashboards",
      features: ["Single-page application", "Basic database", "Responsive design", "Email support"],
    },
    {
      name: "Professional Web/Mobile App",
      price: "$1,200",
      description: "Intermediate features, multi-user, dashboards, APIs",
      features: [
        "Full web application",
        "Mobile app (iOS or Android)",
        "Advanced features",
        "User authentication",
        "API integrations",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Software",
      price: "$2,500+",
      description: "Large systems, custom workflows, integrations",
      features: [
        "Web + Mobile combo",
        "Custom workflows",
        "System integrations",
        "Advanced analytics",
        "Dedicated support",
        "Odoo integration",
      ],
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Development Packages</h2>
          <p className="text-lg text-foreground/70 mb-8">Choose a package or customize for your needs</p>
          <p className="text-sm text-foreground/60">
            Monthly support available from $50–$200 for updates, monitoring, and improvements.
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
