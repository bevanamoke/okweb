export default function AiIndustries() {
  const industries = [
    "Restaurants & Bars",
    "Retail & Supermarkets",
    "Logistics & Transport",
    "E-commerce",
    "Hotels & Hospitality",
    "Clinics & Pharmacies",
    "Schools & Colleges",
    "Financial Services",
    "Real Estate",
    "Manufacturing",
    "Professional Services",
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Industries We Automate</h2>
          <p className="text-lg text-foreground/70">Every automation is tailor-made for your business</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-4 text-center hover:border-primary/50 transition"
            >
              <p className="text-foreground font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
