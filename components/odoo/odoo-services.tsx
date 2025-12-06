import { CheckCircle } from "lucide-react"

const services = [
  "Odoo installation on cloud or local server",
  "Module setup (POS, Inventory, Accounting, HR, etc.)",
  "Business workflow mapping",
  "Staff training and onboarding",
  "Unlimited customization options",
  "Email, WhatsApp & SMS automation",
  "Detailed reporting dashboards",
  "Long-term support options",
]

export default function OdooServices() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get with OKS</h2>
          <p className="text-foreground/70 text-lg">End-to-end Odoo services for your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground/90">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
