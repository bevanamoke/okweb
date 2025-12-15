"use client"

import { CheckCircle2 } from "lucide-react"

export function SupportPlans() {
  const handleCheckout = (planName: string) => {
    // Map plan names to Paystack checkout URLs
    const checkoutUrls: { [key: string]: string } = {
      "Starter Support": "https://paystack.com/pay/oks-starter-support",
      "Business Support": "https://paystack.com/pay/oks-business-support",
      "Enterprise Support": "https://paystack.com/pay/oks-enterprise-support",
    }
    window.location.href = checkoutUrls[planName] || "https://paystack.com/pay/oks-support"
  }
  const plans = [
    {
      name: "Starter Support",
      price: "$25",
      period: "/month",
      features: ["Email support", "Weekly backups", "Basic monitoring"],
    },
    {
      name: "Business Support",
      price: "$75",
      period: "/month",
      features: ["Priority support", "Daily backups", "Bug fixes", "Basic customizations (2 hrs/mo)"],
      highlighted: true,
    },
    {
      name: "Enterprise Support",
      price: "$150",
      period: "/month",
      features: [
        "Dedicated engineer",
        "Unlimited tickets",
        "Server optimization",
        "Customizations (6 hrs/mo)",
        "Monthly strategy meeting",
      ],
    },
  ]

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Odoo Support Plans</h2>
        <p className="text-center text-muted-foreground mb-12">
          Keep your system running 24/7 with the right support tier
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border transition-all ${plan.highlighted
                ? "border-primary bg-primary/5 ring-2 ring-primary/20 scale-105"
                : "border-border bg-card"
                } p-8`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.name)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${plan.highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-primary text-primary hover:bg-primary/10"
                  }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
