"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Package, AlertTriangle, Users, FileText, Calculator, TrendingDown } from "lucide-react"

export default function HospitalityErpProblems() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const problems = [
        {
            icon: DollarSign,
            title: "Cash leakage and untracked expenses",
        },
        {
            icon: Package,
            title: "Stock theft, over-portioning, and ghost inventory",
        },
        {
            icon: AlertTriangle,
            title: "POS systems that don't talk to accounting",
        },
        {
            icon: FileText,
            title: "Manual supplier tracking and unpaid invoices",
        },
        {
            icon: TrendingDown,
            title: "No visibility into branch performance",
        },
        {
            icon: Users,
            title: "Payroll errors and staff accountability issues",
        },
        {
            icon: Calculator,
            title: "Guesswork pricing instead of data-backed margins",
        },
    ]

    return (
        <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        The Problems Restaurants & Bars Face
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Most hospitality businesses are bleeding money quietly due to:
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />

                            <div className="relative p-6 bg-card border border-border rounded-xl hover:border-destructive/50 transition-all duration-300 h-full">
                                <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <problem.icon className="w-6 h-6 text-destructive" />
                                </div>
                                <p className="text-foreground/80 font-medium">{problem.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="p-8 bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl">
                        <p className="text-2xl font-bold text-foreground">
                            Running a restaurant or bar without a centralized system is running blind.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
