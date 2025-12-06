import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import IndustriesCarousel from "./industries-carousel"

export default function Hero() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Subtitle */}
        <div className="mb-6 inline-block">
          <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
            Smart. Scalable. African.
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          Transform Your Business With Modern Technology
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance">
          From Odoo ERP to AI automations and web/app development, OKS builds the digital systems that power the next
          generation of African businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Get a Free Consultation <ArrowRight size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent">
            Learn More
          </Button>
        </div>

        <IndustriesCarousel />
      </div>
    </section>
  )
}
