"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, TrendingUp, Users, Clock, CheckCircle } from "lucide-react"

export default function SchoolErpCaseStudy() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const stats = [
        { icon: Users, value: "600+", label: "Students" },
        { icon: Clock, value: "3 weeks", label: "Implementation" },
        { icon: TrendingUp, value: "60%", label: "Query Reduction" },
    ]

    const before = [
        "Fee tracking split across spreadsheets and accounting tools",
        "Manual report card preparation",
        "High volume of parent administrative queries",
        "Limited leadership visibility",
    ]

    const after = [
        "Centralized financial and academic operations",
        "Report cards generated instantly",
        "Significant reduction in parent queries",
        "Leadership operates with real-time data",
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
                        Case Study: International School Pilot
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Real results from a real institution
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />

                                <div className="relative p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all duration-300">
                                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                                    <div className="text-foreground/70">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Before and After */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Before */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-xl blur-lg" />

                            <div className="relative p-8 bg-card border border-border rounded-xl h-full">
                                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-destructive" />
                                    Before Implementation
                                </h3>
                                <ul className="space-y-3">
                                    {before.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-foreground/70">
                                            <span className="text-destructive font-bold mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* After */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-lg" />

                            <div className="relative p-8 bg-card border border-primary/30 rounded-xl h-full">
                                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    After OKS School ERP
                                </h3>
                                <ul className="space-y-3">
                                    {after.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-foreground/70">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative p-8 md:p-12 bg-card border border-border rounded-2xl">
                            <Quote className="w-12 h-12 text-primary/30 mb-6" />
                            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
                                "This system brought structure, accountability, and visibility across our institution."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">International Primary School</div>
                                    <div className="text-foreground/60">Institution Type: International Primary School</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
