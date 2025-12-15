"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SchoolErpFaq() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "Is this suitable for international curricula?",
            answer: "Yes. The system supports flexible grading structures and reporting standards, making it compatible with IB, IGCSE, American, British, and other international curricula.",
        },
        {
            question: "Can this handle multiple campuses?",
            answer: "Yes. Multi-campus and multi-program support is available, allowing you to manage different locations and academic programs from a single unified platform.",
        },
        {
            question: "Is the system secure and compliant?",
            answer: "Yes. Role-based access control, audit logs, and secure hosting are standard. We implement industry-standard security measures including data encryption, regular backups, and compliance with international data protection standards.",
        },
        {
            question: "What is the implementation timeline?",
            answer: "Typically 3–5 weeks, depending on institutional complexity. This includes institutional mapping, data migration, staff training, and system testing before going live.",
        },
        {
            question: "Who owns the data?",
            answer: "Your institution retains full ownership of all academic and financial data. We provide secure hosting and management, but you maintain complete control and can export your data at any time.",
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
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Everything you need to know about OKS School ERP
                    </p>
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
