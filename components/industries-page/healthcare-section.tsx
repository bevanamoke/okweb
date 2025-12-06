import { Heart } from "lucide-react"

export default function HealthcareSection() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-start gap-4 mb-6">
          <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Clinics, Pharmacies & Healthcare</h2>
            <p className="text-foreground/70 mt-2">Digital tools built to improve care and streamline operations.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Pain Points</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Paper records</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Slow patient processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Stock management for drugs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Lack of automated reminders</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">How OKS Helps</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Patient management portals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Pharmacy inventory automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Appointment scheduling bots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>AI medical record search & Automated follow-up SMS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Odoo for billing, accounting & insurance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-foreground font-semibold">Outcome:</p>
          <p className="text-foreground/80">Smoother workflows and better patient experience.</p>
        </div>
      </div>
    </section>
  )
}
