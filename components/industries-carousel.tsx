"use client"

import { useEffect, useState } from "react"
import {
  GraduationCap,
  UtensilsCrossed,
  Gavel,
  ShoppingCart,
  Truck,
  Factory,
  Lightbulb,
  Building,
  Heart,
} from "lucide-react"

const industries = [
  { icon: GraduationCap, label: "Schools & Universities", color: "text-blue-500" },
  { icon: UtensilsCrossed, label: "Restaurants & Hotels", color: "text-orange-500" },
  { icon: Gavel, label: "Law Firms", color: "text-purple-500" },
  { icon: ShoppingCart, label: "Retail & Supermarkets", color: "text-green-500" },
  { icon: Truck, label: "Logistics & Transport", color: "text-red-500" },
  { icon: Factory, label: "Manufacturing", color: "text-gray-500" },
  { icon: Lightbulb, label: "Startups & Agencies", color: "text-yellow-500" },
  { icon: Building, label: "Real Estate", color: "text-amber-500" },
  { icon: Heart, label: "NGOs & Foundations", color: "text-rose-500" },
]

export default function IndustriesCarousel() {
  const [duplicatedIndustries, setDuplicatedIndustries] = useState(industries)

  useEffect(() => {
    // Duplicate industries to create seamless infinite loop
    setDuplicatedIndustries([...industries, ...industries])
  }, [])

  return (
    <div className="mt-16 pt-12 border-t border-border/30">
      <p className="text-sm text-foreground/60 mb-8 uppercase tracking-wider text-center">
        Trusted by businesses across these industries
      </p>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 1rem));
            }
          }
          
          .carousel-track {
            animation: scroll 30s linear infinite;
            will-change: transform;
          }
          
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="carousel-track flex gap-4 md:gap-6 lg:gap-8">
          {duplicatedIndustries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center gap-3 px-6 py-4 rounded-lg border border-border/20 bg-card/50 hover:bg-card/80 hover:border-border/40 transition-all duration-300 min-w-max"
              >
                <Icon className={`${industry.color} w-5 h-5`} />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">{industry.label}</span>
              </div>
            )
          })}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
