import type { Metadata } from "next"
import OdooHero from "@/components/odoo/odoo-hero"
import OdooWhatIs from "@/components/odoo/odoo-what-is"
import OdooWhy from "@/components/odoo/odoo-why"
import OdooCommunityVsEnterprise from "@/components/odoo/odoo-community-vs-enterprise"
import OdooWithOKS from "@/components/odoo/odoo-with-oks"
import OdooServices from "@/components/odoo/odoo-services"
import OdooCTA from "@/components/odoo/odoo-cta"

export const metadata: Metadata = {
  title: "Odoo ERP Solutions | OKS - Smart Business Management",
  description:
    "Transform your business with Odoo ERP. OKS provides setup, customization, and training for Kenyan businesses. Run your entire business on one powerful platform.",
}

export default function OdooPage() {
  return (
    <>
      <main>
        <OdooHero />
        <OdooWhatIs />
        <OdooWhy />
        <OdooCommunityVsEnterprise />
        <OdooWithOKS />
        <OdooServices />
        <OdooCTA />
      </main>
    </>
  )
}
