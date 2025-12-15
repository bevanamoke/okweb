"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles, TrendingUp, Building } from "lucide-react"

export default function HospitalityErpPricing() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const packages = [
        {
            name: "Starter",
            subtitle: "For Single Outlets",
            icon: Sparkles,
            features: [
                "POS + Inventory",
                "Basic accounting",
                "Staff management",
                "Reports & dashboards",
            ],
            ideal: "Ideal for cafés, bars, and small restaurants",
            color: "accent",
        },
        {
            name: "Growth",
            subtitle: "For Scaling Businesses",
            icon: TrendingUp,
            recommended: true,
            features: [
                "Everything in Starter",
                "Recipe costing & supplier management",
                "Advanced reporting",
                "Multi-user access",
                "Priority support",
            ],
            ideal: "Best for growing restaurants and bars",
            color: "primary",
        },
        {
            name: "Enterprise",
            subtitle: "For Hotels & Chains",
            icon: Building,
            features: [
                "Multi-branch setup",
                "Full accounting & finance automation",
                "Advanced analytics",
                "Custom workflows",
                "Dedicated support & onboarding",
            ],
            ideal: "Designed for hotels, resorts, and franchises",
            color: "secondary",
        },
    ]

    return (
        <section id="pricing" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Packages & Pricing
                    </h2>
                    <p className="text-xl text-foreground/70 mb-4">
                        Pricing depends on number of outlets, users, and customizations.
                    </p>
                    <p className="text-lg text-foreground/60">
                        You only pay for what your business actually needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative group ${pkg.recommended ? "md:scale-105" : ""}`}
                        >
                            {pkg.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                                        Recommended
                                    </div>
                                </div>
                            )}

                            <div className={`absolute inset-0 bg-gradient-to-br from-${pkg.color}/20 to-${pkg.color}/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />

                            <div className={`relative p-8 bg-card border-2 ${pkg.recommended ? "border-primary" : "border-border"
                                } rounded-2xl hover:border-${pkg.color} transition-all duration-300 h-full flex flex-col`}>
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-${pkg.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <pkg.icon className={`w-7 h-7 text-${pkg.color}`} />
                                </div>

                                {/* Package name */}
                                <h3 className="text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
                                <p className="text-foreground/60 mb-6">{pkg.subtitle}</p>

                                {/* Features */}
                                <ul className="space-y-3 mb-6 flex-1">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className={`w-5 h-5 text-${pkg.color} flex-shrink-0 mt-0.5`} />
                                            <span className={`text-foreground/80 ${feature.includes("Everything") ? "font-semibold" : ""}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Ideal for */}
                                <div className={`p-4 bg-${pkg.color}/10 rounded-lg mb-6`}>
                                    <p className="text-sm text-foreground/70 font-medium">{pkg.ideal}</p>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="#demo"
                                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${pkg.recommended
                                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 hover:scale-105"
                                            : "bg-card border border-border text-foreground hover:bg-background hover:border-primary/50"
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl mx-auto mt-12 text-center"
                >
                    <p className="text-foreground/60">
                        All packages include secure cloud hosting, regular updates, and local support.
                        <br />
                        Custom pricing available for large chains and franchise operations.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
