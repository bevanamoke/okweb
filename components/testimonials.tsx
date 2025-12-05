const testimonials = [
  {
    quote: "OKS automated our law firm workflow and reduced our admin work by 70%. Incredible service.",
    author: "Rapando Odunga Advocates",
    location: "Nairobi",
  },
  {
    quote: "Our school is now fully digital with Odoo. Fees, admissions, reports — all in one place.",
    author: "School IT Director",
    location: "Light Academy Karen",
  },
  {
    quote: "They built our restaurant POS and inventory system in under a week. Highly recommended.",
    author: "Director Khwesa Resort",
    location: "Kitale",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-background border border-border rounded-lg p-8">
              <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
