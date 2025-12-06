import { Users, Zap, TrendingUp, Shield, DollarSign } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Multi-Service Tech Company",
    description: "Everything you need: ERP, AI, Development — in one place.",
  },
  {
    icon: TrendingUp,
    title: "Built for African Businesses",
    description: "We understand MPesa workflows, local business systems, and SME challenges.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work with speed, agility, and precision.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Transparent",
    description: "Pricing built with SMEs in mind.",
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description: "We stay with you long after deployment.",
  },
]

export default function WhyChooseOKS() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose OKS?</h2>
          <p className="text-lg text-foreground/60">Trusted by African businesses for digital transformation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div key={idx} className="bg-card border border-border rounded-lg p-8">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-foreground/70 text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
