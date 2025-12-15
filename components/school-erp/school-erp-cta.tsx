"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Shield, TrendingUp, Target } from "lucide-react"

export default function SchoolErpCta() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const principles = [
        { icon: Shield, text: "Financial discipline" },
        { icon: Target, text: "Academic transparency" },
        { icon: TrendingUp, text: "Professional governance" },
        { icon: ArrowRight, text: "Scalable growth" },
    ]

    return (
        <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />

            {/* Animated grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, oklch(0.65 0.22 290) 1px, transparent 1px),
                           linear-gradient(to bottom, oklch(0.65 0.22 290) 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                        The Strategic Reality
                    </h2>

                    <p className="text-2xl md:text-3xl text-foreground/90 mb-6 leading-relaxed">
                        International schools are not judged by intention —{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold">
                            they are judged by execution.
                        </span>
                    </p>

                    <p className="text-xl text-foreground/70 mb-12">
                        Operational excellence is not optional.
                    </p>

                    {/* Principles grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    >
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                className="p-6 bg-card/50 border border-border rounded-xl backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
                            >
                                <principle.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <p className="text-foreground font-semibold">{principle.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Main CTA message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative group mb-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative p-8 md:p-12 bg-card border-2 border-primary/50 rounded-2xl">
                            <p className="text-xl md:text-2xl text-foreground mb-4">
                                If your institution is serious about these principles,
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                Then OKS School ERP is not a luxury.
                            </p>
                            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                                It is infrastructure.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#demo"
                            className="group px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-xl hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 flex items-center gap-2"
                        >
                            Request a Private Demo Today
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Final note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="mt-8 text-foreground/60"
                    >
                        For school owners, directors, and board representatives only
                    </motion.p>
                </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            />
        </section>
    )
}
