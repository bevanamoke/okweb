"use client"

import WadHero from "@/components/web-app-development/wad-hero"
import WadWhy from "@/components/web-app-development/wad-why"
import WadServices from "@/components/web-app-development/wad-services"
import WadProcess from "@/components/web-app-development/wad-process"
import WadCta from "@/components/web-app-development/wad-cta"

export default function WebAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <WadHero />
      <WadWhy />
      <WadServices />
      <WadProcess />
      <WadCta />
    </main>
  )
}
