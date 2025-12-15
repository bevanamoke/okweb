"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Mail, Phone, Calendar, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
    const searchParams = useSearchParams()
    const [orderDetails, setOrderDetails] = useState({
        reference: "",
        amount: "",
        service: "",
    })

    useEffect(() => {
        // Get payment details from URL parameters
        const reference = searchParams.get("reference") || "N/A"
        const amount = searchParams.get("amount") || "N/A"
        const service = searchParams.get("service") || "Your Purchase"

        setOrderDetails({ reference, amount, service })
    }, [searchParams])

    return (
        <main className="min-h-screen bg-gradient-to-b from-background via-background to-card/30">
            {/* Success Animation Section */}
            <section className="py-20 px-4">
                <div className="container max-w-4xl mx-auto">
                    {/* Success Icon with Animation */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-4 border-primary/20 mb-6 animate-bounce">
                            <CheckCircle2 className="w-12 h-12 text-primary" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Payment Successful! 🎉
                        </h1>

                        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                            Thank you for choosing OKS! Your payment has been processed successfully.
                        </p>
                    </div>

                    {/* Order Details Card */}
                    <div className="bg-card border border-border rounded-lg p-8 mb-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            Order Confirmation
                        </h2>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-border">
                                <span className="text-foreground/70">Transaction Reference:</span>
                                <span className="font-semibold text-foreground">{orderDetails.reference}</span>
                            </div>

                            {orderDetails.amount !== "N/A" && (
                                <div className="flex justify-between items-center py-3 border-b border-border">
                                    <span className="text-foreground/70">Amount Paid:</span>
                                    <span className="font-semibold text-primary text-xl">{orderDetails.amount}</span>
                                </div>
                            )}

                            <div className="flex justify-between items-center py-3">
                                <span className="text-foreground/70">Service:</span>
                                <span className="font-semibold text-foreground">{orderDetails.service}</span>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                            <p className="text-sm text-foreground/80">
                                <strong>📧 Confirmation Email:</strong> A detailed receipt has been sent to your email address.
                            </p>
                        </div>
                    </div>

                    {/* What Happens Next Section */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">What Happens Next?</h2>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Confirmation Email</h3>
                                    <p className="text-foreground/70 text-sm">
                                        You'll receive a detailed confirmation email within the next few minutes with your order details and next steps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Team Contact</h3>
                                    <p className="text-foreground/70 text-sm">
                                        Our team will reach out to you within 24 hours to discuss project details and schedule a kickoff meeting.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Project Kickoff</h3>
                                    <p className="text-foreground/70 text-sm">
                                        We'll schedule a discovery call to understand your requirements and create a detailed project plan.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">Development Begins</h3>
                                    <p className="text-foreground/70 text-sm">
                                        Once we've aligned on requirements, our team will start working on your project with regular updates.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-card border border-border rounded-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Need Immediate Assistance?</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <a
                                href="mailto:info@oks.co.ke"
                                className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Email Us</p>
                                    <p className="text-sm text-foreground/70">info@oks.co.ke</p>
                                </div>
                            </a>

                            <a
                                href="tel:+254703133390"
                                className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Call Us</p>
                                    <p className="text-sm text-foreground/70">+254 703 133 390</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6 p-4 bg-background border border-border rounded-lg">
                            <p className="text-sm text-foreground/70 text-center">
                                <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EAT
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                            <Link href="/" className="flex items-center gap-2">
                                Return to Home
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>

                        <Button asChild size="lg" variant="outline">
                            <Link href="/pricing">
                                View Other Services
                            </Link>
                        </Button>
                    </div>

                    {/* Additional Resources */}
                    <div className="mt-12 text-center">
                        <p className="text-foreground/60 text-sm mb-4">
                            While you wait, explore our resources:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/odoo"
                                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                            >
                                Learn About Odoo
                            </Link>
                            <span className="text-foreground/30">•</span>
                            <Link
                                href="/ai-automation"
                                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                            >
                                AI Automation
                            </Link>
                            <span className="text-foreground/30">•</span>
                            <Link
                                href="/web-app-development"
                                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                            >
                                Web Development
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 px-4 bg-card/50 border-t border-border">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                            <p className="text-foreground/70 text-sm">Support Available</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">100%</div>
                            <p className="text-foreground/70 text-sm">Secure Payments</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">50+</div>
                            <p className="text-foreground/70 text-sm">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
