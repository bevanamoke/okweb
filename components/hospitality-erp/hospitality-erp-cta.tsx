"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function HospitalityErpCta() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />

            {/* Grid pattern */}
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
                        Final CTA
                    </h2>

                    <p className="text-2xl md:text-3xl text-foreground/90 mb-6 leading-relaxed">
                        Your hospitality business deserves{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold">
                            control, clarity, and profit visibility.
                        </span>
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group mb-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                        <div className="relative p-8 md:p-12 bg-card border-2 border-primary/50 rounded-2xl">
                            <p className="text-xl md:text-2xl text-foreground mb-4">
                                If you're serious about running a tighter, more profitable operation:
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col gap-4 items-center"
                    >
                        <a
                            href="#demo"
                            className="group px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-xl hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 flex items-center gap-2"
                        >
                            Book a Demo
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </a>

                        <p className="text-2xl font-bold text-foreground">
                            Stop guessing. Start managing.
                        </p>
                    </motion.div>
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
