"use client"

import { Settings, Users, Globe, FileText, LifeBuoy } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const differentiators = [
  {
    icon: Settings,
    text: "Industry-specific Odoo configurations",
  },
  {
    icon: Users,
    text: "Clean UI/UX tailored for non-technical users",
  },
  {
    icon: Globe,
    text: "Local implementation with global standards",
  },
  {
    icon: FileText,
    text: "Clear documentation and staff training",
  },
  {
    icon: LifeBuoy,
    text: "Ongoing support and optimization",
  },
]

export default function WhyChooseOKS() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const yFg = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </motion.div>

      {/* Foreground shapes parallax */}
      <motion.div style={{ y: yFg }} className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <motion.div style={{ y: yBg }} className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why OKS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-primary mb-6"
          >
            Specialization beats generalization.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            We deliberately focus on two industries so we can deliver deeper expertise, faster implementations, and better outcomes.
          </motion.p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
          <h4 className="text-2xl font-bold mb-8 text-center">What Sets Us Apart</h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground/90 pt-2">{item.text}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border/50 text-center"
          >
            <p className="text-2xl font-serif italic text-foreground/80">"We speak both business and systems fluently."</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
