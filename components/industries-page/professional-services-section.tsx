import { Briefcase } from "lucide-react"

export default function ProfessionalServicesSection() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-start gap-4 mb-6">
          <Briefcase className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Professional Services</h2>
            <p className="text-foreground/70 mt-2">
              Agencies, Law Firms & Consultants—Digital systems that enhance client management and internal efficiency.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Pain Points</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Manual task management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Time-consuming reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Poor document organization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Billing inconsistencies</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">How OKS Helps</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Client project portals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Automated billing & time tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Proposal generators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>AI document search & classification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Workflow automation & CRM + invoicing through Odoo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-foreground font-semibold">Outcome:</p>
          <p className="text-foreground/80">More productivity, better client experience, and predictable revenue.</p>
        </div>
      </div>
    </section>
  )
}
