"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function WhoWeAre() {
  return (
    <section className="py-20 md:py-32 px-4 bg-card/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">
              What We Do
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Clarity Before <br />
              <span className="text-primary">Complexity</span>
            </h3>

            <p className="text-xl font-medium text-foreground mb-4">
              Most ERP projects fail because they are sold as software. We approach ERP as infrastructure.
            </p>

            <p className="text-foreground/70 mb-8 leading-relaxed">
              At OKS, we analyze your operational workflows, eliminate manual work, and deliver systems your staff can actually use. Our specialization allows us to move faster, deploy cleaner, and deliver measurable results.
            </p>

            <ul className="space-y-4">
              {[
                "Analyze your operational workflows",
                "Configure Odoo to match real-world processes",
                "Eliminate manual work and data silos",
                "Deliver systems your staff can actually use",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/80 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-32 h-32 bg-primary rounded-full blur-2xl" />
              </div>

              <h4 className="text-2xl font-bold mb-6">Our Philosophy</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500 font-bold">✕</div>
                  <div>
                    <p className="font-semibold text-foreground/60 line-through decoration-red-500/50">Bloated Features</p>
                    <p className="text-xs text-foreground/40">Confusing for staff</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-primary/20 shadow-sm transform scale-105">
                  <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 font-bold">✓</div>
                  <div>
                    <p className="font-bold text-foreground">Airtight Workflows</p>
                    <p className="text-xs text-foreground/60">Processes that flow naturally</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">✓</div>
                  <div>
                    <p className="font-semibold text-foreground">Total Visibility</p>
                    <p className="text-xs text-foreground/60">Real-time data access</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
