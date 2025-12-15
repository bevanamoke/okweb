"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Coffee, Wine, Hotel, UtensilsCrossed, Building2, Network } from "lucide-react"

export default function HospitalityErpWhoFor() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const businesses = [
        { icon: Coffee, title: "Restaurants & cafés" },
        { icon: Wine, title: "Bars, lounges & clubs" },
        { icon: Hotel, title: "Hotels & resorts" },
        { icon: UtensilsCrossed, title: "Cloud kitchens" },
        { icon: Building2, title: "Multi-branch hospitality chains" },
        { icon: Network, title: "Franchise operators" },
    ]

    return (
        <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Who This Is For
                    </h2>
                    <p className="text-xl text-foreground/70">
                        If food, drinks, or rooms are involved—this system fits.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {businesses.map((business, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />

                            <div className="relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <business.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{business.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
