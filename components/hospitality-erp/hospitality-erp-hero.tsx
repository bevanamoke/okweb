"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed, TrendingUp, Shield, Zap } from "lucide-react"

export default function HospitalityErpHero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, oklch(0.2 0 0) 1px, transparent 1px),
                           linear-gradient(to bottom, oklch(0.2 0 0) 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8"
                    >
                        <UtensilsCrossed className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Complete Hospitality Management</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
                    >
                        Restaurants, Bars & Hospitality{" "}
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            ERP
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-foreground/90 mb-4 font-semibold"
                    >
                        Run Your Entire Operation From One Screen.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl text-foreground/80 mb-6"
                    >
                        Cut Losses. Increase Margins. Scale With Control.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg text-foreground/60 max-w-3xl mx-auto mb-12"
                    >
                        The hospitality business is fast, unforgiving, and margin-thin. If your systems are slow, fragmented, or manual—you are already losing money. Our Hospitality ERP replaces chaos with control.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="https://calendly.com/omnitechkernelsolutions/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                        >
                            Book Consultation
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a
                            href="/quote"
                            className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold text-lg hover:bg-card/80 transition-all duration-300 hover:scale-105"
                        >
                            Get Pricing
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
                    >
                        {[
                            { icon: TrendingUp, title: "Profit Visibility", desc: "Real-time margins" },
                            { icon: Shield, title: "Stock Control", desc: "Zero leakage" },
                            { icon: Zap, title: "Fast Setup", desc: "1-3 weeks" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                                className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105"
                            >
                                <item.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                                <p className="text-foreground/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
