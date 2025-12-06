import { Button } from "@/components/ui/button"

export default function AiHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-card/30 flex items-center justify-center py-20">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            AI Automation & Intelligent Business Systems
            <span className="text-primary"> Transform Your Operations</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            AI is no longer a luxury—it's the foundation of modern business. OKS builds practical, business-ready AI
            solutions that save time, reduce costs, and unlock growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start AI Automation
          </Button>
          <Button size="lg" variant="outline">
            See Use Cases
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">70%</div>
            <p className="text-foreground/70">Average time saved</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">40+</div>
            <p className="text-foreground/70">AI Projects Deployed</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-foreground/70">AI Operations Running</p>
          </div>
        </div>
      </div>
    </section>
  )
}
