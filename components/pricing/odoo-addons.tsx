export function OdooAddOns() {
  const addons = [
    {
      title: "Custom Odoo Modules",
      price: "$100–$400",
      description: "For features not available in standard Odoo",
      icon: "⚙️",
    },
    {
      title: "MPesa Integration",
      price: "$150–$300",
      description: "STK Push, Paybill, Till Number, or reconciliation options",
      icon: "💳",
    },
    {
      title: "Advanced Inventory & Manufacturing",
      price: "$150–$300",
      description: "Complex workflows and tracking",
      icon: "📦",
    },
    {
      title: "School Management Pack",
      price: "$300",
      description: "Students, fees, transport, reporting",
      icon: "🏫",
    },
    {
      title: "Restaurant / POS Pack",
      price: "$250",
      description: "Kitchen management, POS, purchasing workflows",
      icon: "🍽️",
    },
    {
      title: "Law Firm Pack",
      price: "$250",
      description: "Documents, billing, case tracking",
      icon: "⚖️",
    },
  ]

  return (
    <section className="px-4 py-20 md:py-28 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Odoo Add-Ons & Customizations</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl mb-3">{addon.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{addon.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
              <div className="text-primary font-semibold text-lg">{addon.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
