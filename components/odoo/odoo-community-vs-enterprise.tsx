import { Check } from "lucide-react"

export default function OdooCommunityVsEnterprise() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Odoo Community vs Odoo Enterprise</h2>
          <p className="text-foreground/70 text-lg">Which should you choose?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Community */}
          <div className="bg-card border-2 border-primary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2 text-primary">Community Edition</h3>
            <p className="text-sm text-foreground/70 mb-6">Free & Open Source</p>
            <p className="text-foreground/80 mb-6">
              Perfect for small to medium businesses looking for core functionality without subscription fees.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">100% free to use</p>
                  <p className="text-sm text-foreground/70">No license fees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Fully customizable</p>
                  <p className="text-sm text-foreground/70">Open source flexibility</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Core functionality</p>
                  <p className="text-sm text-foreground/70">POS, Inventory, Sales, Basic Accounting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Your own server</p>
                  <p className="text-sm text-foreground/70">Full control and privacy</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 italic">
              This is where OKS excels—turning Community Edition into a powerful system customized to your workflow.
            </p>
          </div>

          {/* Enterprise */}
          <div className="bg-card border-2 border-secondary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2 text-secondary">Enterprise Edition</h3>
            <p className="text-sm text-foreground/70 mb-6">Paid & Premium</p>
            <p className="text-foreground/80 mb-6">Best for businesses needing advanced features and mobile access.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Mobile apps included</p>
                  <p className="text-sm text-foreground/70">Full mobile access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Advanced accounting</p>
                  <p className="text-sm text-foreground/70">Automated reconciliation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Studio included</p>
                  <p className="text-sm text-foreground/70">No-code app builder</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Official support</p>
                  <p className="text-sm text-foreground/70">From Odoo S.A</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 italic">
              Great for growing companies that need premium features and official support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
