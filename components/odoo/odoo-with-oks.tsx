import { Zap, Smartphone, Settings, BarChart3, ShoppingCart, Package } from "lucide-react"

const features = [
  { icon: Settings, title: "Custom Modules", description: "Tailored to your operations" },
  { icon: ShoppingCart, title: "POS Setup", description: "For restaurants, bars, and shops" },
  { icon: Package, title: "Inventory Workflows", description: "Designed for your business" },
  { icon: Zap, title: "Smart Automations", description: "AI, WhatsApp bots, email workflows" },
  { icon: Smartphone, title: "Mobile Integration", description: "App connectivity" },
  { icon: BarChart3, title: "Smart Dashboards", description: "Business-ready reporting" },
]

export default function OdooWithOKS() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How OKS Helps You Get the Most Out of Odoo</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Most businesses in Kenya don't need expensive annual licenses. With OKS, you can use Odoo Community Edition
            and still enjoy enterprise-level features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-3">We turn Odoo Community into Enterprise</h3>
          <p className="text-foreground/80 mb-0">
            Without the recurring cost. Get full Odoo setup, implementation, and training from just $800.
          </p>
        </div>
      </div>
    </section>
  )
}
