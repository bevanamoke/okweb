"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HospitalityErpFaq() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "Can this work with my existing POS hardware?",
            answer: "Yes. We support multiple POS setups and can advise on compatible hardware. Our system is flexible and can integrate with most modern POS terminals.",
        },
        {
            question: "Can I manage multiple branches?",
            answer: "Yes. Each outlet can run independently while reporting to a central dashboard. You get complete visibility across all locations with branch-specific and consolidated reporting.",
        },
        {
            question: "Is this cloud-based?",
            answer: "Yes. Secure cloud access from anywhere with internet connectivity. On-premise options are also available for businesses with specific requirements.",
        },
        {
            question: "How long does setup take?",
            answer: "From 1–3 weeks depending on complexity and custom requirements. This includes system configuration, data migration, staff training, and testing.",
        },
        {
            question: "Can you customize it for my workflow?",
            answer: "Absolutely. Customization is one of our core strengths. We adapt the system to match your specific operations, menu structure, and business processes.",
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
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-lg transition-all duration-300 ${openIndex === index ? "opacity-100" : "opacity-0"
                                }`} />

                            <div className={`relative bg-card border rounded-xl transition-all duration-300 ${openIndex === index ? "border-primary/50" : "border-border"
                                }`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors rounded-xl"
                                >
                                    <span className="text-lg font-semibold text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? "auto" : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5 text-foreground/70 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
