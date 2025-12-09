export default function WadWhy() {
  const reasons = [
    {
      title: "Business-First Approach",
      description:
        "We focus on understanding your business model, workflows, and outcomes before writing a single line of code.",
    },
    {
      title: "Full-Cycle Development",
      description: "We handle everything from idea → design → development → deployment → maintenance.",
    },
    {
      title: "Fast Delivery & Agile Execution",
      description: "Weekly demos, transparent progress, and continuous improvements.",
    },
    {
      title: "Scalable, Future-Proof Systems",
      description: "We build architectures that can handle growth—users, data, branches, and new features.",
    },
    {
      title: "Affordable & Transparent Pricing",
      description: "You get enterprise-level quality without Silicon Valley prices.",
    },
    {
      title: "Local Expertise, Global Standards",
      description: "We understand Kenyan and African market needs while maintaining international quality standards.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose OKS for Development?</h2>
          <p className="text-lg text-foreground/70">We deliver software that actually works for your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
