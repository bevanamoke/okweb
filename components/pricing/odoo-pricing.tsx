"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OdooPricing() {
  const handleCheckout = () => {
    // Redirect to Paystack checkout for Odoo Community Edition
    window.location.href = "https://paystack.com/pay/oks-odoo-community"
  }
  const features = [
    "Full Odoo Community installation",
    "Server setup (Local, VPS, or Cloud)",
    "Configuration of core modules",
    "Basic workflows setup",
    "User access & security configuration",
    "Data import (up to 1,000 records)",
    "3 training sessions for your team",
    "Go-live support for 7 days",
  ]

  const excluded = ["Custom module development", "MPesa integration", "Advanced features"]

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Odoo Community Edition</h2>
        <p className="text-center text-muted-foreground mb-12">Odoo Setup + Implementation + Training</p>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">$800</div>
            <p className="text-muted-foreground">Fixed Flat Price</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">What's Not Included:</h3>
              <ul className="space-y-3">
                {excluded.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded border border-muted flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-6">✦ Priced separately below</p>
            </div>
          </div>

          <Button onClick={handleCheckout} className="w-full md:w-auto mt-8 mx-auto block bg-primary hover:bg-primary/90">
            Get Started with Odoo
          </Button>
        </div>
      </div>
    </section>
  )
}
