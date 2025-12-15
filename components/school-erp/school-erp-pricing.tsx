"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Star, Crown } from "lucide-react"

export default function SchoolErpPricing() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const tiers = [
        {
            name: "Foundation Tier",
            setup: "KES 180,000",
            monthly: "KES 12,000",
            description: "Suitable for new or transitioning international schools.",
            features: [
                "Student, parent, and staff management",
                "Class and academic structure setup",
                "Fee structure configuration",
                "Manual invoicing",
                "Core reporting",
                "Administrative training",
            ],
            icon: Star,
            color: "accent",
            recommended: false,
        },
        {
            name: "Professional Tier",
            setup: "KES 350,000",
            monthly: "KES 20,000",
            description: "Designed for established international schools.",
            badge: "Recommended",
            features: [
                "Everything in Foundation, plus:",
                "Automated invoicing cycles",
                "Parent portals",
                "Exam and grading system",
                "Auto-generated report cards",
                "Attendance tracking",
                "Email and SMS notifications",
            ],
            icon: Crown,
            color: "primary",
            recommended: true,
        },
        {
            name: "Executive Tier",
            setup: "KES 600,000",
            monthly: "KES 35,000",
            description: "Built for institutions with board-level oversight.",
            features: [
                "Everything in Professional, plus:",
                "Advanced payment integrations",
                "Executive dashboards",
                "Teacher performance insights",
                "AI-driven academic and financial analytics",
                "Fully branded portals",
                "Priority SLA support",
            ],
            icon: Crown,
            color: "secondary",
            recommended: false,
        },
    ]

    return (
        <section id="pricing" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Investment Packages
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Choose the tier that matches your institution's needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative group ${tier.recommended ? "md:scale-105" : ""}`}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                                        {tier.badge}
                                    </div>
                                </div>
                            )}

                            <div className={`absolute inset-0 bg-gradient-to-br from-${tier.color}/20 to-${tier.color}/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />

                            <div className={`relative p-8 bg-card border-2 ${tier.recommended ? "border-primary" : "border-border"
                                } rounded-2xl hover:border-${tier.color} transition-all duration-300 h-full flex flex-col`}>
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-${tier.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <tier.icon className={`w-7 h-7 text-${tier.color}`} />
                                </div>

                                {/* Tier name */}
                                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>

                                {/* Pricing */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-3xl font-bold text-foreground">{tier.setup}</span>
                                        <span className="text-foreground/60">setup</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-foreground">{tier.monthly}</span>
                                        <span className="text-foreground/60">/ month</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-foreground/70 mb-6">{tier.description}</p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className={`w-5 h-5 text-${tier.color} flex-shrink-0 mt-0.5`} />
                                            <span className={`text-foreground/80 ${feature.includes("Everything") ? "font-semibold" : ""}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href="#demo"
                                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${tier.recommended
                                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 hover:scale-105"
                                            : "bg-card border border-border text-foreground hover:bg-background hover:border-primary/50"
                                        }`}
                                >
                                    Request Demo
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
                        All packages include secure hosting, regular updates, and dedicated support.
                        <br />
                        Implementation timeline: typically 3–5 weeks.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
