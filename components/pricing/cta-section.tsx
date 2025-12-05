import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-20 md:py-28 bg-gradient-to-b from-background to-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get a free consultation and discover what OKS can do for your business. No obligations, no surprises.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          <strong>Payment Terms:</strong> 50% upfront, 50% 30 days after delivery. Monthly support billed separately.
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          Special discounts available for NGOs, schools, and startups.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Button>
          <a href="tel:+254703133390" className="inline-block">
           <Button className="border border-primary text-primary hover:bg-primary/10 gap-2">
             Book Free Consultation
           </Button>
          </a>
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <p className="text-foreground font-semibold mb-3">Have questions?</p>
          <p className="text-muted-foreground mb-4">Contact us directly for custom quotes and volume discounts</p>
          <p className="text-primary font-medium">
            Call/WhatsApp:{" "}
            <a href="tel:+254" className="hover:underline">
              +254 703 133 390
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
