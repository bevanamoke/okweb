"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
    ShoppingCart, Package, ChefHat, DollarSign, Users, BarChart3, Check
} from "lucide-react"

export default function HospitalityErpFeatures() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [activeTab, setActiveTab] = useState(0)

    const features = [
        {
            icon: ShoppingCart,
            title: "Point of Sale (POS)",
            color: "primary",
            items: [
                "Fast, touch-friendly POS for restaurants and bars",
                "Split bills, table management, happy hour pricing",
                "Works online and offline",
                "Supports multiple outlets",
            ],
        },
        {
            icon: Package,
            title: "Inventory & Stock Control",
            color: "accent",
            items: [
                "Real-time stock tracking per item, recipe, or bottle",
                "Automatic stock deductions from sales",
                "Low-stock alerts and wastage tracking",
                "Batch, expiry, and supplier tracking",
            ],
        },
        {
            icon: ChefHat,
            title: "Recipe & Costing Management",
            color: "secondary",
            items: [
                "Control portion sizes and food cost percentages",
                "Know exactly how much each menu item costs you",
                "Optimize pricing for profit—not guesswork",
            ],
        },
        {
            icon: DollarSign,
            title: "Accounting & Finance",
            color: "primary",
            items: [
                "Automated sales, expense, and tax entries",
                "Profit & loss per outlet or branch",
                "Supplier bills, payments, and reconciliations",
                "Multi-currency support for hotels and resorts",
            ],
        },
        {
            icon: Users,
            title: "Staff & Payroll Management",
            color: "accent",
            items: [
                "Shift scheduling and attendance",
                "Role-based access to prevent fraud",
                "Payroll, commissions, and overtime tracking",
            ],
        },
        {
            icon: BarChart3,
            title: "Reporting & Analytics",
            color: "secondary",
            items: [
                "Daily sales, profit margins, and expense breakdowns",
                "Best-selling items and slow movers",
                "Branch-by-branch performance comparison",
                "Real-time dashboards for owners and managers",
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
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Core Features Built for Hospitality
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Everything you need to run a profitable hospitality business
                    </p>
                </motion.div>

                {/* Tab navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {features.map((feature, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === index
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                                    : "bg-card border border-border text-foreground/70 hover:text-foreground hover:border-primary/50"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <feature.icon className="w-5 h-5" />
                                <span className="hidden md:inline">{feature.title}</span>
                                <span className="md:hidden">{feature.title.split(" ")[0]}</span>
                            </div>
                        </button>
                    ))}
                </motion.div>

                {/* Tab content */}
                <div className="max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                activeTab === index
                                    ? { opacity: 1, y: 0, display: "block" }
                                    : { opacity: 0, y: 20, transitionEnd: { display: "none" } }
                            }
                            transition={{ duration: 0.5 }}
                            className={activeTab === index ? "block" : "hidden"}
                        >
                            <div className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />

                                <div className="relative p-8 md:p-12 bg-card border border-border rounded-2xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/20 flex items-center justify-center`}>
                                            <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-foreground">{feature.title}</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {feature.items.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 group/item"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                                                    <Check className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">
                                                    {item}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
