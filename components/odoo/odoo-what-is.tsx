import { Package, Users, ShoppingCart, BarChart3, Settings } from "lucide-react"

const modules = [
  { icon: ShoppingCart, label: "Point of Sale (POS)", description: "Complete retail management" },
  { icon: Package, label: "Inventory & Stock", description: "Real-time stock control" },
  { icon: BarChart3, label: "Accounting & Invoicing", description: "Financial management" },
  { icon: Users, label: "CRM & Sales", description: "Customer relationship management" },
  { icon: Users, label: "HR & Payroll", description: "Employee management" },
  { icon: Settings, label: "Purchasing & Manufacturing", description: "Operations management" },
]

export default function OdooWhatIs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Is Odoo?</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Odoo is a modular business platform with integrated apps for every aspect of your business. Everything is
            connected—no more switching between different software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((module, idx) => {
            const Icon = module.icon
            return (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition">
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{module.label}</h3>
                <p className="text-sm text-foreground/70">{module.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
