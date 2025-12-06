export default function AiWhy() {
  const benefits = [
    { title: "Automating manual work", icon: "⚙️" },
    { title: "Reducing staff workload", icon: "👥" },
    { title: "Increasing accuracy", icon: "✓" },
    { title: "Improving customer experience", icon: "😊" },
    { title: "Lowering operational costs", icon: "💰" },
    { title: "Giving real-time insights", icon: "📊" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why AI Automation Matters</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Businesses waste time and money on repetitive tasks. AI eliminates this.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
