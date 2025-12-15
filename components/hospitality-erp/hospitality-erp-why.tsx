"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Globe, Wrench, TrendingUp, HeadphonesIcon } from "lucide-react"

export default function HospitalityErpWhy() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const reasons = [
        {
            icon: Target,
            title: "Industry-specific ERP—not generic software",
        },
        {
            icon: Globe,
            title: "Built on Odoo, trusted globally",
        },
        {
            icon: Wrench,
            title: "Customizable to your operations",
        },
        {
            icon: TrendingUp,
            title: "Scales from one outlet to dozens",
        },
        {
            icon: HeadphonesIcon,
            title: "Local support + enterprise-grade reliability",
        },
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
                        Why Businesses Choose Us
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />

                            <div className="relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 h-full">
                                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <reason.icon className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-foreground/80 font-medium">{reason.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl">
                        <p className="text-2xl font-bold text-foreground mb-2">
                            We don't sell software.
                        </p>
                        <p className="text-xl text-foreground/70">
                            We build operational systems that make hospitality businesses profitable.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
