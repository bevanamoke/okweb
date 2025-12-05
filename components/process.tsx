const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "We understand your business, challenges, and goals.",
  },
  {
    number: "2",
    title: "Blueprint",
    description: "We design a clear digital transformation plan.",
  },
  {
    number: "3",
    title: "Build & Deploy",
    description: "Odoo setup, AI automation, or software development.",
  },
  {
    number: "4",
    title: "Training",
    description: "We onboard your team and refine workflows.",
  },
  {
    number: "5",
    title: "Support & Scaling",
    description: "Ongoing improvements as your business grows.",
  },
]

export default function Process() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-foreground/60">How we transform your business</p>
        </div>

        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
