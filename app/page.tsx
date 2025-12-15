import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import Services from "@/components/services"
import Industries from "@/components/industries"
import WhyChooseOKS from "@/components/why-choose-oks"
import Process from "@/components/process"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhoWeAre />
      <Services />
      <Industries />
      <WhyChooseOKS />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  )
}
