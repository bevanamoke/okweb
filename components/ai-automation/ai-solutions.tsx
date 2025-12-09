export default function AiSolutions() {
  const solutions = [
    {
      title: "WhatsApp Business Automation",
      description: "AI-powered WhatsApp bots that handle customer interactions 24/7",
      features: [
        "Customer inquiries",
        "Table reservations",
        "Order taking",
        "Product recommendations",
        "Follow-up reminders",
        "Support tickets",
      ],
      benefit: "24/7 customer service without paying a full-time employee",
    },
    {
      title: "Business Process Automation",
      description: "Convert everyday operations into automated workflows",
      features: [
        "Automated invoices & receipts",
        "Stock level alerts",
        "Automatic purchase orders",
        "Employee onboarding",
        "Automated task routing",
        "Daily/weekly AI reports",
      ],
      benefit: "Streamline operations and free up your team for strategic work",
    },
    {
      title: "AI-Powered Data Analysis & Reporting",
      description: "Automatically analyze and report on your business data",
      features: [
        "Analyze sales trends",
        "Predict inventory shortages",
        "Identify top-selling items",
        "Detect business trends",
        "Recommend actions",
        "Generate daily reports",
      ],
      benefit: "See what humans miss before it becomes a problem",
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Custom chatbots for websites, apps, WhatsApp, and more",
      features: [
        "Intelligent Q&A",
        "Customer support",
        "Lead qualification",
        "Product catalog guidance",
        "Appointment booking",
        "Multi-channel deployment",
      ],
      benefit: "Reduce response time and improve customer satisfaction instantly",
    },
    {
      title: "Marketing & Customer Engagement",
      description: "Automate your entire marketing system with AI",
      features: [
        "AI-generated content",
        "Automated email campaigns",
        "Personalized SMS offers",
        "Cart abandonment recovery",
        "Customer segmentation",
        "Loyalty program triggers",
      ],
      benefit: "Increase conversions without increasing marketing staff",
    },
    {
      title: "AI + Odoo ERP Integration",
      description: "Turn Odoo into an intelligent business brain",
      features: [
        "AI assistants inside Odoo",
        "Automated POS reporting",
        "Stock forecasting",
        "Expense categorization",
        "Smart sales recommendations",
        "AI document processing",
      ],
      benefit: "Combine the power of Odoo with next-generation AI capabilities",
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Automate</h2>
          <p className="text-lg text-foreground/70">AI solutions tailored to your business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border border-border p-8 hover:border-primary/50 transition"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{solution.title}</h3>
              <p className="text-foreground/70 mb-4">{solution.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Includes:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-primary/5 rounded border border-primary/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Result:</span> {solution.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
