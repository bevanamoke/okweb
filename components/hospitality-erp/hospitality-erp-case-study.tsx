"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingDown, TrendingUp, Clock, Users } from "lucide-react"

export default function HospitalityErpCaseStudy() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const results = [
        { icon: TrendingDown, label: "Stock losses reduced significantly" },
        { icon: TrendingUp, label: "Clear profit margins per menu item" },
        { icon: Clock, label: "Faster end-of-day reconciliation" },
        { icon: Users, label: "Improved staff accountability" },
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
                        Case Study (Pilot)
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Client info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <div className="p-8 bg-card border border-border rounded-2xl">
                            <h3 className="text-2xl font-bold text-foreground mb-6">
                                Client: Mid-sized restaurant & bar
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                        <span className="text-destructive">❌</span> Problem
                                    </h4>
                                    <ul className="space-y-2 text-foreground/70">
                                        <li>• Stock losses</li>
                                        <li>• Inconsistent pricing</li>
                                        <li>• No profit visibility</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                        <span className="text-primary">✓</span> Solution
                                    </h4>
                                    <ul className="space-y-2 text-foreground/70">
                                        <li>• POS + inventory + recipe costing</li>
                                        <li>• Automated accounting</li>
                                        <li>• Daily sales dashboards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                            Results (First 60 Days)
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />

                                    <div className="relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <result.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <p className="text-foreground/80 font-medium">{result.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center"
                    >
                        <div className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl">
                            <p className="text-2xl font-bold text-foreground">
                                This is what happens when data replaces guesswork.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
