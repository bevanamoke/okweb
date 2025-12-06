export default function WadProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We understand your idea, business model, and core requirements.",
    },
    {
      number: "02",
      title: "Design",
      description: "UI/UX wireframes + system architecture.",
    },
    {
      number: "03",
      title: "Development",
      description: "Agile sprints with weekly progress updates.",
    },
    {
      number: "04",
      title: "Testing",
      description: "Quality assurance, optimization, stress tests.",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Launch on server, Google Play, App Store, or cloud platforms.",
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing updates, new features, performance monitoring.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-foreground/70">Six steps to bringing your app to life</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
                <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
