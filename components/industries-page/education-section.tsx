import { BookOpen } from "lucide-react"

export default function EducationSection() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-start gap-4 mb-6">
          <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-3xl font-bold text-foreground">Schools, Colleges & Training Centers</h2>
            <p className="text-foreground/70 mt-2">Education management made simple and efficient.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Pain Points</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Manual admission processes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Fee tracking issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Poor communication with parents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Unorganized academic records</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">How OKS Helps</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Student information systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Timetable & exam management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Online parent portal + mobile app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>AI attendance & performance reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>Automated fee reminders & receipts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-foreground font-semibold">Outcome:</p>
          <p className="text-foreground/80">More organization, transparency, and better administration.</p>
        </div>
      </div>
    </section>
  )
}
