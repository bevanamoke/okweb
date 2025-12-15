"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function QuotePage() {
  const [service, setService] = useState<string>("odoo")
  const [selections, setSelections] = useState({
    // Odoo
    odooComplexity: 1.0,
    odooCustomizations: 0,
    odooIntegrations: 0,
    odooRush: false,
    // AI
    aiType: "basic",
    aiAgents: 0,
    aiIntegrations: 0,
    aiRush: false,
    // Web
    webType: "website",
    webFeatures: 0,
    webIntegrations: 0,
    webRush: false,
    // School ERP
    schoolTier: "foundation", // foundation, professional, executive
    schoolStudents: "0-500", // 0-500, 501-1000, 1000+
    // Hospitality ERP
    hospitalityTier: "starter", // starter, growth, enterprise
    hospitalityOutlets: 1,
  })
  const [estimatedPrice, setEstimatedPrice] = useState(0)
  const [recurringPrice, setRecurringPrice] = useState(0)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  })
  const [submitted, setSubmitted] = useState(false)

  // Calculation Logic
  useEffect(() => {
    // Base Rates (KES)
    const ODOO_BASE = 30000
    const ODOO_CUSTOMIZATION = 5000
    const ODOO_INTEGRATION = 8000
    const ODOO_RUSH = 0.1

    const AI_BASE_WORKFLOWS = 25000
    const AI_BASE_AGENTS = 75000
    const AI_CUSTOM_BASE = 50000
    const AI_INTEGRATION = 15000
    const AI_RUSH = 0.15

    const WEB_BASE_WEBSITE = 40000
    const WEB_BASE_APP = 120000
    const WEB_BASE_MOBILE = 150000
    const WEB_FEATURE = 5000
    const WEB_INTEGRATION = 10000
    const WEB_RUSH = 0.15

    // School ERP Rates
    const SCHOOL_TIERS = {
      foundation: { setup: 180000, monthly: 12000 },
      professional: { setup: 350000, monthly: 20000 },
      executive: { setup: 600000, monthly: 35000 },
    }

    // Hospitality ERP Rates (Estimated)
    const HOSPITALITY_TIERS = {
      starter: { setup: 80000, monthly: 5000 },
      growth: { setup: 150000, monthly: 10000 },
      enterprise: { setup: 300000, monthly: 25000 },
    }

    let price = 0
    let recurring = 0

    if (service === "odoo") {
      price = ODOO_BASE * selections.odooComplexity
      price += selections.odooCustomizations * ODOO_CUSTOMIZATION
      price += selections.odooIntegrations * ODOO_INTEGRATION
      if (selections.odooRush) price *= 1 + ODOO_RUSH
    } else if (service === "ai") {
      if (selections.aiType === "workflows") {
        price = AI_BASE_WORKFLOWS
      } else if (selections.aiType === "agents") {
        price = AI_BASE_AGENTS * (1 + selections.aiAgents * 0.3)
      } else {
        price = AI_CUSTOM_BASE
      }
      price += selections.aiIntegrations * AI_INTEGRATION
      if (selections.aiRush) price *= 1 + AI_RUSH
    } else if (service === "web") {
      if (selections.webType === "website") {
        price = WEB_BASE_WEBSITE
      } else if (selections.webType === "app") {
        price = WEB_BASE_APP
      } else {
        price = WEB_BASE_MOBILE
      }
      price += selections.webFeatures * WEB_FEATURE
      price += selections.webIntegrations * WEB_INTEGRATION
      if (selections.webRush) price *= 1 + WEB_RUSH
    } else if (service === "school_erp") {
      const tier = SCHOOL_TIERS[selections.schoolTier as keyof typeof SCHOOL_TIERS]
      price = tier.setup
      recurring = tier.monthly

      // Add student count scaling logic if needed, for now just base tier price
      if (selections.schoolStudents === "501-1000") recurring *= 1.5
      if (selections.schoolStudents === "1000+") recurring *= 2.0
    } else if (service === "hospitality_erp") {
      const tier = HOSPITALITY_TIERS[selections.hospitalityTier as keyof typeof HOSPITALITY_TIERS]
      price = tier.setup * selections.hospitalityOutlets // Setup per outlet roughly
      recurring = tier.monthly * selections.hospitalityOutlets

      // Discount for multiple outlets
      if (selections.hospitalityOutlets > 1) {
        price *= 0.9 // 10% discount on setup for multiple
      }
    }

    setEstimatedPrice(Math.round(price / 100) * 100)
    setRecurringPrice(Math.round(recurring / 100) * 100)
  }, [service, selections])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          selections,
          estimatedPrice,
          recurringPrice,
          contactInfo,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Error submitting quote:", error)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Thank You!</h1>
            <p className="text-lg text-foreground/80 mb-6">
              We've received your quote request. Our team will contact you within 24 hours.
            </p>
            <div className="text-muted-foreground mb-8 text-left inline-block bg-muted/30 p-6 rounded-lg">
              <p className="mb-2">Estimated One-Time Cost:</p>
              <p className="text-2xl font-bold text-primary mb-4">KES {estimatedPrice.toLocaleString()}</p>
              {recurringPrice > 0 && (
                <>
                  <p className="mb-2">Estimated Recurring Cost:</p>
                  <p className="text-2xl font-bold text-secondary">KES {recurringPrice.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                </>
              )}
            </div>
            <br />
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h1 className="text-3xl font-bold text-foreground mb-8">Get Your Quote</h1>

            <div className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Select Service</label>
                <div className="space-y-2">
                  {[
                    { id: "odoo", label: "Odoo ERP Implementation" },
                    { id: "school_erp", label: "School ERP" },
                    { id: "hospitality_erp", label: "Hospitality ERP" },
                    { id: "ai", label: "AI Automation" },
                    { id: "web", label: "Web & App Development" },
                  ].map((svc) => (
                    <label key={svc.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={svc.id}
                        checked={service === svc.id}
                        onChange={(e) => setService(e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-foreground">{svc.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Odoo Options */}
              {service === "odoo" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Complexity Level</label>
                    <select
                      value={selections.odooComplexity}
                      onChange={(e) =>
                        setSelections({ ...selections, odooComplexity: Number.parseFloat(e.target.value) })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    >
                      <option value="1">Simple (x1.0)</option>
                      <option value="1.5">Medium (x1.5)</option>
                      <option value="2">Complex (x2.0)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Custom Modules (KES 5,000 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={selections.odooCustomizations}
                      onChange={(e) =>
                        setSelections({ ...selections, odooCustomizations: Number.parseInt(e.target.value) })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Integrations (KES 8,000 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={selections.odooIntegrations}
                      onChange={(e) =>
                        setSelections({ ...selections, odooIntegrations: Number.parseInt(e.target.value) })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    />
                  </div>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selections.odooRush}
                      onChange={(e) => setSelections({ ...selections, odooRush: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">Rush deployment (+10% fee)</span>
                  </label>
                </>
              )}

              {/* School ERP Options */}
              {service === "school_erp" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Institution Tier</label>
                    <select
                      value={selections.schoolTier}
                      onChange={(e) => setSelections({ ...selections, schoolTier: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    >
                      <option value="foundation">Foundation (Startups/Transitioning)</option>
                      <option value="professional">Professional (Established)</option>
                      <option value="executive">Executive (Board-level oversight)</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selections.schoolTier === "foundation" && "Includes core mgmt, invoicing, reporting."}
                      {selections.schoolTier === "professional" && "Adds grading, portals, auto-alerts."}
                      {selections.schoolTier === "executive" && "Adds advanced analytics, dashboards, branded portals."}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Number of Students</label>
                    <select
                      value={selections.schoolStudents}
                      onChange={(e) => setSelections({ ...selections, schoolStudents: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    >
                      <option value="0-500">0 - 500 Students</option>
                      <option value="501-1000">501 - 1,000 Students</option>
                      <option value="1000+">1,000+ Students</option>
                    </select>
                  </div>
                </>
              )}

              {/* Hospitality ERP Options */}
              {service === "hospitality_erp" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Package Tier</label>
                    <select
                      value={selections.hospitalityTier}
                      onChange={(e) => setSelections({ ...selections, hospitalityTier: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    >
                      <option value="starter">Starter (Single Outlet)</option>
                      <option value="growth">Growth (Scaling)</option>
                      <option value="enterprise">Enterprise (Chains/Hotels)</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selections.hospitalityTier === "starter" && "POS, Inventory, Basic Accounting."}
                      {selections.hospitalityTier === "growth" && "Adds Recipe Costing, Multi-user, Advanced Reports."}
                      {selections.hospitalityTier === "enterprise" && "Multi-branch, Custom Workflows, Full Finance."}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Outlets/Branches
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={selections.hospitalityOutlets}
                      onChange={(e) =>
                        setSelections({ ...selections, hospitalityOutlets: Math.max(1, Number.parseInt(e.target.value)) })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    />
                  </div>
                </>
              )}


              {/* AI Options */}
              {service === "ai" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">AI Solution Type</label>
                    <select
                      value={selections.aiType}
                      onChange={(e) => setSelections({ ...selections, aiType: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    >
                      <option value="workflows">Basic Workflows</option>
                      <option value="agents">AI Agents</option>
                      <option value="custom">Custom AI System</option>
                    </select>
                  </div>

                  {selections.aiType === "agents" && (
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Number of AI Agents</label>
                      <input
                        type="number"
                        min="0"
                        max="5"
                        value={selections.aiAgents}
                        onChange={(e) => setSelections({ ...selections, aiAgents: Number.parseInt(e.target.value) })}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Integrations (KES 15,000 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={selections.aiIntegrations}
                      onChange={(e) =>
                        setSelections({ ...selections, aiIntegrations: Number.parseInt(e.target.value) })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    />
                  </div>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selections.aiRush}
                      onChange={(e) => setSelections({ ...selections, aiRush: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">Rush delivery (+15% fee)</span>
                  </label>
                </>
              )}

              {/* Web & App Options */}
              {service === "web" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Project Type</label>
                    <select
                      value={selections.webType}
                      onChange={(e) => setSelections({ ...selections, webType: e.target.value })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    >
                      <option value="website">Website</option>
                      <option value="app">Web Application</option>
                      <option value="mobile">Mobile Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Additional Features (KES 5,000 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      value={selections.webFeatures}
                      onChange={(e) => setSelections({ ...selections, webFeatures: Number.parseInt(e.target.value) })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Number of Integrations (KES 10,000 each)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={selections.webIntegrations}
                      onChange={(e) =>
                        setSelections({ ...selections, webIntegrations: Number.parseInt(e.target.value) })
                      }
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                    />
                  </div>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selections.webRush}
                      onChange={(e) => setSelections({ ...selections, webRush: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">Expedited delivery (+15% fee)</span>
                  </label>
                </>
              )}
            </div>
          </div>

          {/* Price and Contact Section */}
          <div className="space-y-6">
            {/* Price Display */}
            <div className="bg-primary/10 border border-primary rounded-lg p-8">
              <p className="text-muted-foreground text-sm mb-2">Estimated One-Time Cost</p>
              <p className="text-4xl font-bold text-primary mb-4">KES {estimatedPrice.toLocaleString()}</p>

              {recurringPrice > 0 && (
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <p className="text-muted-foreground text-sm mb-2">Estimated Recurring Cost</p>
                  <p className="text-3xl font-bold text-secondary">KES {recurringPrice.toLocaleString()}<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
                </div>
              )}

              <p className="text-xs text-muted-foreground mt-4">
                *This is a preliminary estimate. Final pricing provided after consultation.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                <input
                  type="text"
                  value={contactInfo.company}
                  onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
