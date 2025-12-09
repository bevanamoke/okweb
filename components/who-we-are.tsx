export default function WhoWeAre() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h2>
            <h3 className="text-xl text-primary font-semibold mb-4">OmniTech Kernel Solutions (OKS)</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              A Kenyan technology company delivering business automation, digital transformation, and custom software.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Automate operations",
                "Reduce manual work",
                "Improve decision-making",
                "Go paperless",
                "Scale using modern technology",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-foreground/70 italic">
              Our mission is to make powerful digital tools accessible and affordable for Kenyan SMEs, startups, and
              enterprises.
            </p>
          </div>

          {/* Right Visual */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-12 h-full min-h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">🚀</div>
              <p className="text-foreground/60">Digital Transformation Made Simple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
