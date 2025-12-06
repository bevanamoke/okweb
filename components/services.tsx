import { Code2, Zap, Database } from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Odoo ERP Implementation",
    subtitle: "(Community Edition)",
    description: "We deploy, customize, and support Odoo Community Edition for Kenyan businesses.",
    modules: ["Sales", "Inventory", "Accounting", "HR", "Projects", "POS", "School Management"],
    services: [
      "Installation & Server Setup",
      "Custom Modules",
      "MPesa Integrations",
      "Hosting & Backups",
      "Ongoing Support",
    ],
  },
  {
    icon: Zap,
    title: "AI Automation & Intelligent Workflows",
    description: "We build AI-powered systems and automations that save businesses time and money.",
    solutions: [
      "AI agents for HR, sales, customer service",
      "AI-powered document processing",
      "Automated workflows using n8n",
      "Business insights & analytics",
      "Chatbot development",
      "Predictive tools",
    ],
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description: "We build fast, elegant, and scalable digital experiences.",
    creates: [
      "Modern business websites",
      "E-commerce platforms",
      "Custom web apps",
      "Mobile apps",
      "Internal management systems",
      "API integrations",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-foreground/60">Comprehensive tech solutions for African businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition">
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                {"subtitle" in service && <p className="text-sm text-primary font-medium mb-4">{service.subtitle}</p>}
                <p className="text-foreground/70 mb-6">{service.description}</p>

                {"modules" in service && (
                  <>
                    <p className="text-sm font-semibold text-foreground mb-2">Modules we configure:</p>
                    <p className="text-sm text-foreground/60 mb-6">{service.modules.join(", ")}</p>
                    <p className="text-sm font-semibold text-foreground mb-2">Services:</p>
                    <ul className="space-y-1 text-sm text-foreground/60">
                      {service.services.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {"solutions" in service && (
                  <ul className="space-y-2 text-sm text-foreground/60">
                    {service.solutions.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                )}

                {"creates" in service && (
                  <ul className="space-y-2 text-sm text-foreground/60">
                    {service.creates.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-lg text-foreground/80">
            <span className="font-semibold">If the work is repetitive, manual, or slow — we automate it.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
