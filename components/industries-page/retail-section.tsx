import { ShoppingCart } from "lucide-react"

export default function RetailSection() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-start gap-4 mb-6">
          <ShoppingCart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Retail & Supermarkets</h2>
            <p className="text-foreground/70 mt-2">From shelves to checkout—everything synchronized and optimized.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Pain Points</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Stockouts & overstocking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Slow checkout systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Manual supplier management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Lack of visibility across branches</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">How OKS Helps</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Real-time inventory tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Automated reordering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Multi-branch management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>POS with barcode scanning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>AI-driven sales forecasting & Customer loyalty automation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-foreground font-semibold">Outcome:</p>
          <p className="text-foreground/80">Higher sales, better customer experience, fewer losses.</p>
        </div>
      </div>
    </section>
  )
}
