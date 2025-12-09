"use client"

import AiHero from "@/components/ai-automation/ai-hero"
import AiWhy from "@/components/ai-automation/ai-why"
import AiSolutions from "@/components/ai-automation/ai-solutions"
import AiIndustries from "@/components/ai-automation/ai-industries"
import AiPricing from "@/components/ai-automation/ai-pricing"
import AiCta from "@/components/ai-automation/ai-cta"

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen bg-background">
      <AiHero />
      <AiWhy />
      <AiSolutions />
      <AiIndustries />
      <AiPricing />
      <AiCta />
    </main>
  )
}
