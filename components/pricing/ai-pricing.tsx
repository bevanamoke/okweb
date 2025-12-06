import { Zap } from "lucide-react"

export function AIPricing() {
  const plans = [
    {
      name: "AI Starter",
      price: "$50",
      description: "For small tasks",
      features: ["Document extraction", "Basic n8n workflows", "Auto-emails & notifications"],
      icon: "🤖",
    },
    {
      name: "AI Business",
      price: "$200",
      description: "For real business automation",
      features: [
        "Multi-step workflows",
        "AI chatbot",
        "Department automation (HR, sales, support)",
        "Light integrations",
      ],
      icon: "⚙️",
      highlighted: true,
    },
    {
      name: "AI Enterprise",
      price: "$500+",
      description: "For custom AI systems",
      features: ["AI agents", "Knowledge-base bots", "Predictive analytics", "Multi-system integrations"],
      icon: "🚀",
    },
  ]

  return (
    <section className="px-4 py-20 md:py-28 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">AI Automation & Intelligent Workflows</h2>
        <p className="text-center text-muted-foreground mb-12">
          We build AI workflows, chatbots, agents, and intelligent automations
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border transition-all p-8 ${
                plan.highlighted
                  ? "border-primary bg-background ring-2 ring-primary/20 scale-105"
                  : "border-border bg-background"
              }`}
            >
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
              </div>

              <ul className="space-y-2 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 items-start">
                    <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Automate My Business
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
