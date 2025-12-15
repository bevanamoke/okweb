"use client"

export function WebMobilePricing() {
  const handleCheckout = (serviceTitle: string) => {
    // Map service titles to Paystack checkout URLs
    const checkoutUrls: { [key: string]: string } = {
      "Business Website": "https://paystack.com/pay/oks-business-website",
      "E-Commerce Website": "https://paystack.com/pay/oks-ecommerce-website",
      "Custom Web App": "https://paystack.com/pay/oks-custom-web-app",
      "Basic Mobile App": "https://paystack.com/pay/oks-basic-mobile-app",
      "Professional Mobile App": "https://paystack.com/pay/oks-professional-mobile-app",
    }
    window.location.href = checkoutUrls[serviceTitle] || "https://paystack.com/pay/oks-custom-service"
  }
  const webServices = [
    {
      title: "Business Website",
      price: "$150",
      description: "5–7 pages, responsive, modern design",
      icon: "🌐",
    },
    {
      title: "E-Commerce Website",
      price: "$300",
      description: "Product catalog, checkout, MPesa integration, admin dashboard",
      icon: "🛒",
    },
    {
      title: "Custom Web App",
      price: "from $800",
      description: "Internal tools, dashboards, management systems, client portals",
      icon: "⚙️",
    },
  ]

  const mobileServices = [
    {
      title: "Basic Mobile App",
      price: "$400",
      description: "Simple utility apps, booking apps, content apps",
      icon: "📱",
    },
    {
      title: "Professional Mobile App",
      price: "$1,000–$2,000",
      description: "Feature-rich apps with backend, user accounts, push notifications, dashboards",
      icon: "🚀",
    },
  ]

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Website & Web App Development</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {webServices.map((service) => (
            <div
              key={service.title}
              onClick={() => handleCheckout(service.title)}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <div className="text-primary font-semibold text-lg">{service.price}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Mobile App Development</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {mobileServices.map((service) => (
            <div
              key={service.title}
              onClick={() => handleCheckout(service.title)}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <div className="text-primary font-semibold text-lg">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
