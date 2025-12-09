import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Build Your Digital Future</h2>
        <p className="text-xl text-foreground/70 mb-12">
          Book a free consultation and discover what OKS can do for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-card gap-2 bg-transparent">
            <a href="tel:+254703133390" className="flex items-center gap-2">
              <Phone size={20} /> +254703133390
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-foreground/60">Or contact us via WhatsApp for faster response</p>
      </div>
    </section>
  )
}
