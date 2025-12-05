import Header from "@/components/header"
import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import Services from "@/components/services"
import Industries from "@/components/industries"
import WhyChooseOKS from "@/components/why-choose-oks"
import Process from "@/components/process"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhoWeAre />
      <Services />
      <Industries />
      <WhyChooseOKS />
      <Process />      
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
