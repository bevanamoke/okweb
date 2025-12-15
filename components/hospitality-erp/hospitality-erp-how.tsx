"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingCart, Package, DollarSign, FileText, Users, BarChart3 } from "lucide-react"

export default function HospitalityErpHow() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const steps = [
        {
            icon: ShoppingCart,
            title: "Orders are captured via POS or sales terminals",
            color: "primary",
        },
        {
            icon: Package,
            title: "Inventory updates in real time",
            color: "accent",
        },
        {
            icon: DollarSign,
            title: "Cost of goods sold is automatically calculated",
            color: "secondary",
        },
        {
            icon: FileText,
            title: "Accounting entries post instantly",
            color: "primary",
        },
        {
            icon: Users,
            title: "Staff shifts, payroll, and commissions sync",
            color: "accent",
        },
        {
            icon: BarChart3,
            title: "Managers view real-time dashboards from anywhere",
            color: "secondary",
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
                        How the System Works
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Our ERP connects front-of-house, back-of-house, and management into one unified platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`} />

                            <div className="relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className={`w-16 h-16 rounded-xl bg-${step.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className={`w-8 h-8 text-${step.color}`} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                                    </div>
                                </div>
                                <p className="text-foreground/80 font-medium">{step.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl">
                        <p className="text-2xl font-bold text-foreground mb-4">
                            No spreadsheets. No disconnected tools. No surprises.
                        </p>
                        <p className="text-lg text-foreground/70">
                            Everything flows automatically from order to accounting to insights.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
