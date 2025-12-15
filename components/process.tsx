"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Server, Settings, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Diagnostic Deep Dive",
    description: "We map your workflows before writing code.",
  },
  {
    icon: Server,
    title: "Infrastructure Setup",
    description: "Server configuration, security hardening, and core installation.",
  },
  {
    icon: Settings,
    title: "Workflow Configuration",
    description: "Tailoring Odoo modules to your specific academic or hospitality processes.",
  },
  {
    icon: GraduationCap,
    title: "Training & Handoff",
    description: "We don't leave until your team is confident.",
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The OKS Standard</h2>
          <p className="text-lg text-foreground/60">A structured approach to digital transformation</p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 -translate-x-1/2 hidden md:block" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex gap-6 md:gap-12 items-center group relative ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Icon Circle (Center) */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border-4 border-card shadow-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 pl-20 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
