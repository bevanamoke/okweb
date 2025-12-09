import { Eye, Zap, TrendingUp, DollarSign, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Visibility",
    description: "Real-time dashboards for sales, stock levels, revenue, staff performance, and expenses.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Automated workflows reduce manual tasks and human errors.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Start with one module and grow as your business grows—with no limits.",
  },
  {
    icon: DollarSign,
    title: "Cost-Reduction",
    description: "Replace 10+ software subscriptions with one unified platform.",
  },
  {
    icon: BarChart3,
    title: "Decision Power",
    description: "Data-driven insights that help owners make confident business decisions.",
  },
]

export default function OdooWhy() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Every Business Needs Odoo</h2>
          <p className="text-foreground/70 text-lg">
            Whether small or large, businesses succeed when systems are organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="bg-background rounded-lg p-6 border border-border">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/70">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
