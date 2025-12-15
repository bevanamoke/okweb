"use client"

import { Gift, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Bundles() {
  const handleCheckout = (bundleTitle: string) => {
    // Map bundle titles to Paystack checkout URLs
    const checkoutUrls: { [key: string]: string } = {
      "SME Digital Transformation Pack": "https://paystack.com/pay/oks-sme-digital-pack",
      "School Digital System Pack": "https://paystack.com/pay/oks-school-digital-pack",
      "Restaurant Complete Automation": "https://paystack.com/pay/oks-restaurant-automation",
    }
    window.location.href = checkoutUrls[bundleTitle] || "https://paystack.com/pay/oks-custom-bundle"
  }
  const bundles = [
    {
      title: "SME Digital Transformation Pack",
      price: "$1,200",
      description: "Complete digital overhaul for growing businesses",
      items: ["Odoo Community setup", "Business website", "AI Starter automation", "2 custom workflows"],
      icon: "💼",
    },
    {
      title: "School Digital System Pack",
      price: "$1,500",
      description: "Everything schools need to go digital",
      items: ["Odoo setup", "School module package", "Website", "Support for 3 months"],
      icon: "🏫",
      highlighted: true,
    },
    {
      title: "Restaurant Complete Automation",
      price: "$1,100",
      description: "POS, kitchen, suppliers — all connected",
      items: ["Odoo POS setup", "Kitchen stock module", "Supplier workflow", "MPesa integration", "Business website"],
      icon: "🍽️",
    },
  ]

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Popular Bundles</h2>
        <p className="text-center text-muted-foreground mb-12">
          Save money with our curated packages designed for specific industries
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.title}
              className={`rounded-lg border transition-all ${bundle.highlighted
                ? "border-primary bg-primary/5 ring-2 ring-primary/20 scale-105"
                : "border-border bg-card"
                } p-8`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bundle.icon}</span>
                <Gift className={`w-5 h-5 ${bundle.highlighted ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{bundle.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{bundle.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">{bundle.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {bundle.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleCheckout(bundle.title)}
                className={`w-full ${bundle.highlighted
                  ? "bg-primary hover:bg-primary/90"
                  : "border border-primary text-primary hover:bg-primary/10 bg-transparent"
                  }`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
