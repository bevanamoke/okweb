import { PricingHeader } from "@/components/pricing/pricing-header"
import { OdooPricing } from "@/components/pricing/odoo-pricing"
import { OdooAddOns } from "@/components/pricing/odoo-addons"
import { SupportPlans } from "@/components/pricing/support-plans"
import { AIPricing } from "@/components/pricing/ai-pricing"
import { WebMobilePricing } from "@/components/pricing/web-mobile-pricing"
import { HostingPricing } from "@/components/pricing/hosting-pricing"
import { Bundles } from "@/components/pricing/bundles"
import { CTASection } from "@/components/pricing/cta-section"

export const metadata = {
  title: "Pricing | OmniTech Kernel Solutions",
  description:
    "Transparent, fair pricing for Odoo ERP, AI automation, and web/app development. Built for growing businesses.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PricingHeader />
      <OdooPricing />
      <OdooAddOns />
      <SupportPlans />
      <AIPricing />
      <WebMobilePricing />
      <HostingPricing />
      <Bundles />
      <CTASection />
    </main>
  )
}
