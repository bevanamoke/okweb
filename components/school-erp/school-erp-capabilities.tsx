"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { DollarSign, GraduationCap, Users, Settings, Check } from "lucide-react"

export default function SchoolErpCapabilities() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [activeTab, setActiveTab] = useState(0)

    const capabilities = [
        {
            icon: DollarSign,
            title: "Financial Control & Fee Intelligence",
            color: "primary",
            features: [
                "Automated multi-term invoicing",
                "Real-time fee balances per student",
                "Fee aging and defaulter analysis",
                "Discounts, scholarships, and credits",
                "Multi-currency support",
                "Optional mobile and bank payment integrations",
            ],
        },
        {
            icon: GraduationCap,
            title: "Academic Excellence & Reporting",
            color: "accent",
            features: [
                "Subject-level grading frameworks",
                "Continuous assessment and examinations",
                "Weighted grading logic",
                "Branded, board-ready PDF report cards",
                "Term, annual, and cohort performance analytics",
            ],
        },
        {
            icon: Users,
            title: "Parent & Student Experience",
            color: "secondary",
            features: [
                "Secure parent and student portals",
                "Real-time access to balances and reports",
                "Attendance visibility",
                "Official announcements and academic notices",
                "Reduced administrative queries by design",
            ],
        },
        {
            icon: Settings,
            title: "Administration & Governance",
            color: "primary",
            features: [
                "Centralized student records",
                "Attendance tracking",
                "Academic calendars and term controls",
                "Audit-ready data trails",
            ],
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
                        Enterprise-Grade Capabilities
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Everything your institution needs in one unified platform
                    </p>
                </motion.div>

                {/* Tab navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {capabilities.map((cap, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                                    : "bg-card border border-border text-foreground/70 hover:text-foreground hover:border-primary/50"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <cap.icon className="w-5 h-5" />
                                <span className="hidden md:inline">{cap.title}</span>
                                <span className="md:hidden">{cap.title.split(" ")[0]}</span>
                            </div>
                        </button>
                    ))}
                </motion.div>

                {/* Tab content */}
                <div className="max-w-5xl mx-auto">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                activeTab === index
                                    ? { opacity: 1, y: 0, display: "block" }
                                    : { opacity: 0, y: 20, transitionEnd: { display: "none" } }
                            }
                            transition={{ duration: 0.5 }}
                            className={activeTab === index ? "block" : "hidden"}
                        >
                            <div className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br from-${cap.color}/10 to-${cap.color}/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />

                                <div className="relative p-8 md:p-12 bg-card border border-border rounded-2xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-${cap.color}/20 flex items-center justify-center`}>
                                            <cap.icon className={`w-8 h-8 text-${cap.color}`} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-foreground">{cap.title}</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {cap.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 group/item"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                                                    <Check className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
