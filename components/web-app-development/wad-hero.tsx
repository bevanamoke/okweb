import { Button } from "@/components/ui/button"

export default function WadHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-card/30 flex items-center justify-center py-20">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            Custom Web & Mobile Apps
            <span className="text-primary"> Built for Growth</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            From startup MVPs to enterprise platforms—OKS builds fast, scalable digital products that solve real
            business problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Project
          </Button>
          <Button size="lg" variant="outline">
            View Our Work
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-foreground/70">Apps Delivered</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-foreground/70">On-Time Delivery</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">40+</div>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
