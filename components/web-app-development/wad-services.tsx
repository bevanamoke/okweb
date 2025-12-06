export default function WadServices() {
  const services = [
    {
      title: "Web Application Development",
      description: "Fast, secure, and beautiful web apps using modern technologies",
      examples: [
        "Business dashboards & admin portals",
        "ERP extensions & custom modules",
        "Booking & reservation systems",
        "E-commerce websites",
        "Learning management systems",
      ],
      tech: "React, Vue, Django, Laravel, Node.js, FastAPI, Firebase, Supabase",
    },
    {
      title: "Mobile App Development",
      description: "Smooth, user-friendly apps for Android & iOS",
      examples: [
        "Customer apps (food ordering, taxi, delivery)",
        "Business tools (POS, staff management)",
        "Community & social apps",
        "Marketplace apps",
        "Fintech & savings apps",
      ],
      tech: "Flutter, React Native, Kotlin, Swift, Firebase",
    },
    {
      title: "Custom Business Software",
      description: "Workflow automation and unique internal systems",
      examples: [
        "Custom POS systems",
        "HR & payroll systems",
        "Inventory & warehouse systems",
        "CRM systems",
        "Reporting & analytics dashboards",
      ],
      tech: "Full-stack development tailored to your needs",
    },
    {
      title: "API Development & Integrations",
      description: "Connect your tools so data flows seamlessly",
      examples: [
        "Mobile ↔ Web ↔ Odoo integrations",
        "Payment gateways (M-Pesa, PayPal, Stripe)",
        "SMS & email systems",
        "ERP and CRM integrations",
      ],
      tech: "REST APIs, GraphQL, webhooks, cloud services",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
          <p className="text-lg text-foreground/70">Everything you need to build your digital product</p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {index + 1}. {service.title}
              </h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What we build:</h4>
                  <ul className="space-y-2">
                    {service.examples.map((example, i) => (
                      <li key={i} className="text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <p className="text-foreground/70">{service.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
