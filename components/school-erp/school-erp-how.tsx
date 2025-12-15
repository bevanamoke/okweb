"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Map, Lock, Zap, BarChart3 } from "lucide-react"

export default function SchoolErpHow() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const steps = [
        {
            icon: Map,
            number: "01",
            title: "Institutional Mapping",
            description:
                "We model your academic calendar, grading framework, fee policies, and reporting standards exactly as your institution operates.",
            color: "from-primary/20 to-primary/5",
            borderColor: "border-primary/30",
            iconBg: "bg-primary/20",
            iconColor: "text-primary",
        },
        {
            icon: Lock,
            number: "02",
            title: "Secure Role-Based Access",
            description:
                "Administrators, teachers, parents, and finance teams access only what is relevant to them — nothing more.",
            color: "from-accent/20 to-accent/5",
            borderColor: "border-accent/30",
            iconBg: "bg-accent/20",
            iconColor: "text-accent",
        },
        {
            icon: Zap,
            number: "03",
            title: "Automated Operations",
            description:
                "Fees, exams, reports, and communication run systematically, not manually.",
            color: "from-secondary/20 to-secondary/5",
            borderColor: "border-secondary/30",
            iconBg: "bg-secondary/20",
            iconColor: "text-secondary",
        },
        {
            icon: BarChart3,
            number: "04",
            title: "Executive Visibility",
            description:
                "Leadership sees real-time dashboards covering finances, academics, and institutional performance.",
            color: "from-primary/20 to-primary/5",
            borderColor: "border-primary/30",
            iconBg: "bg-primary/20",
            iconColor: "text-primary",
        },
    ]

    return (
        <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        How OKS School ERP Works
                    </h2>
                    <p className="text-xl text-foreground/70 mb-4">
                        This is not software you "figure out."
                    </p>
                    <p className="text-lg text-foreground/60">
                        It is a system we deploy, structure, and operationalize for your school.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative mb-8 last:mb-0"
                        >
                            {/* Connecting line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-[2.75rem] top-24 w-0.5 h-16 bg-gradient-to-b from-border to-transparent hidden md:block" />
                            )}

                            <div className="group relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50`} />

                                <div className={`relative p-8 md:p-10 bg-card border ${step.borderColor} rounded-2xl hover:scale-[1.02] transition-all duration-300`}>
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        {/* Icon and number */}
                                        <div className="flex-shrink-0">
                                            <div className={`w-20 h-20 rounded-2xl ${step.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                                                <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                                                    <span className="text-xs font-bold text-foreground">{step.number}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                                {step.title}
                                            </h3>
                                            <p className="text-lg text-foreground/70 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="max-w-3xl mx-auto mt-16 text-center"
                >
                    <div className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl">
                        <p className="text-2xl font-bold text-foreground">
                            This is operational clarity — by design.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
