import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function WadCta() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-b border-primary/20">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build Your App?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Let's talk about your project. Our team will help you build software that moves the needle for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://calendly.com/omnitechkernelsolutions/30min" target="_blank" rel="noopener noreferrer">
              Book Consultation
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/quote">
              Get Pricing
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
          <a
            href="mailto:info@oks.co.ke"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition"
          >
            <Mail size={20} />
            <span>info@oks.co.ke</span>
          </a>
          <a
            href="tel:+254703133390"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition"
          >
            <Phone size={20} />
            <span>+254703133390</span>
          </a>
        </div>
      </div>
    </section>
  )
}
