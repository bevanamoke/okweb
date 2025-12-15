"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, DollarSign, FileText, Users } from "lucide-react"

export default function SchoolErpTruth() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const problems = [
        {
            icon: DollarSign,
            title: "Fees Are Not Truly Controlled",
            points: [
                "No real-time global view of receivables",
                "Delayed reconciliation across terms and currencies",
                "Finance teams working reactively instead of strategically",
            ],
        },
        {
            icon: FileText,
            title: "Academic Data Is Fragmented",
            points: [
                "Exams compiled manually or across multiple tools",
                "Report cards delayed or inconsistent",
                "No longitudinal performance insight",
            ],
        },
        {
            icon: Users,
            title: "Parent Communication Is Reactive",
            points: [
                "Administrators responding to emails instead of managing strategy",
                "Parents requesting information that should already be accessible",
                "Trust eroded through lack of transparency",
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-6">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                        <span className="text-sm font-medium text-foreground">The Hard Truth</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        The Hard Truth Most Schools Avoid
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Even premium schools are quietly bleeding efficiency.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                            <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-destructive/50 transition-all duration-300 h-full">
                                <div className="w-14 h-14 rounded-xl bg-destructive/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <problem.icon className="w-7 h-7 text-destructive" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-4">{problem.title}</h3>

                                <ul className="space-y-3">
                                    {problem.points.map((point, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                                            className="flex items-start gap-2 text-foreground/70"
                                        >
                                            <span className="text-destructive font-bold mt-1">•</span>
                                            <span>{point}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                        Too Many Systems. No Command Center.
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-card/50 rounded-lg">
                            <p className="text-foreground/70">Accounting software <span className="text-destructive font-semibold">here</span></p>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg">
                            <p className="text-foreground/70">Learning tools <span className="text-destructive font-semibold">there</span></p>
                        </div>
                        <div className="p-4 bg-card/50 rounded-lg">
                            <p className="text-foreground/70">Spreadsheets <span className="text-destructive font-semibold">everywhere</span></p>
                        </div>
                    </div>
                    <p className="text-center text-lg font-semibold text-foreground mt-6">
                        International schools need one authoritative system of record.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
