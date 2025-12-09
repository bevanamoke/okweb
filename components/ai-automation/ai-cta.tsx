import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function AiCta() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-b border-primary/20">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Transform Your Business With Intelligent Automation</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          The future belongs to businesses that automate. OKS helps you build systems that work automatically—so you can
          focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start AI Project
          </Button>
          <Button size="lg" variant="outline">
            Schedule Consultation
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
