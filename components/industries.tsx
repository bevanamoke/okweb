"use client"

import {
  GraduationCap,
  UtensilsCrossed,
  Briefcase,
  ShoppingCart,
  Truck,
  Factory,
  Lightbulb,
  Building2,
  Heart,
} from "lucide-react"

const industriesData = [
  { name: "Schools & Universities", icon: GraduationCap, color: "from-blue-500 to-blue-600" },
  { name: "Restaurants & Hotels", icon: UtensilsCrossed, color: "from-orange-500 to-orange-600" },
  { name: "Law Firms", icon: Briefcase, color: "from-purple-500 to-purple-600" },
  { name: "Retail & Supermarkets", icon: ShoppingCart, color: "from-pink-500 to-pink-600" },
  { name: "Logistics & Transport", icon: Truck, color: "from-emerald-500 to-emerald-600" },
  { name: "Manufacturing", icon: Factory, color: "from-slate-500 to-slate-600" },
  { name: "Startups & Creative Agencies", icon: Lightbulb, color: "from-yellow-500 to-yellow-600" },
  { name: "Real Estate", icon: Building2, color: "from-red-500 to-red-600" },
  { name: "NGOs & Foundations", icon: Heart, color: "from-rose-500 to-rose-600" },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-lg text-foreground/60">We design technology for real African businesses</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12 place-items-center">
          {industriesData.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <div key={idx} className="group relative cursor-pointer">
                {/* Bubble background */}
                <div
                  className={`w-32 h-32 rounded-full bg-gradient-to-br ${industry.color} opacity-90 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:opacity-100`}
                >
                  <div className="absolute inset-1 rounded-full bg-background/10 blur-md group-hover:bg-background/5 transition-all"></div>
                  <Icon className="w-12 h-12 text-white relative z-10" />
                </div>

                {/* Industry name label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <p className="text-sm font-semibold text-foreground">{industry.name}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative floating element */}
        <div className="mt-20 text-center">
          <p className="text-foreground/60">Hover over any bubble to see more</p>
        </div>
      </div>
    </section>
  )
}
