"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function HospitalityErpDemo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="demo" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Request a Live Demo
                        </h2>
                        <p className="text-xl text-foreground/70">
                            See how your restaurant or bar would run with full visibility and control.
                        </p>
                        <p className="text-lg text-foreground/60 mt-4">
                            Our team will walk you through a real hospitality setup—using your use case.
                        </p>
                    </div>

                    {!submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                            <div className="relative p-8 md:p-12 bg-card border border-border rounded-2xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                                                Business Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="business"
                                                required
                                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                                placeholder="Your Restaurant/Bar"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                                placeholder="john@restaurant.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                                            Business Type *
                                        </label>
                                        <select
                                            id="businessType"
                                            required
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        >
                                            <option value="">Select business type</option>
                                            <option value="restaurant">Restaurant</option>
                                            <option value="bar">Bar/Lounge/Club</option>
                                            <option value="cafe">Café</option>
                                            <option value="hotel">Hotel/Resort</option>
                                            <option value="cloud-kitchen">Cloud Kitchen</option>
                                            <option value="chain">Multi-branch Chain</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="outlets" className="block text-sm font-medium text-foreground mb-2">
                                            Number of Outlets
                                        </label>
                                        <select
                                            id="outlets"
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        >
                                            <option value="">Select number of outlets</option>
                                            <option value="1">1 outlet</option>
                                            <option value="2-3">2-3 outlets</option>
                                            <option value="4-10">4-10 outlets</option>
                                            <option value="10+">10+ outlets</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Tell us about your needs
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                            placeholder="What challenges are you facing? What features are most important to you?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                                    >
                                        Request Demo
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />

                            <div className="relative p-12 bg-card border border-primary/50 rounded-2xl text-center">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground mb-4">
                                    Thank You!
                                </h3>
                                <p className="text-lg text-foreground/70 mb-2">
                                    Your demo request has been received.
                                </p>
                                <p className="text-foreground/60">
                                    We'll contact you within 24 hours to schedule your personalized demo.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
