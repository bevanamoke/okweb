# Paystack Redirect URLs - Quick Reference

Use these redirect URLs when setting up your Paystack payment pages. Replace `yourdomain.com` with your actual domain.

## Format
```
https://yourdomain.com/thank-you?service={SERVICE_NAME}&amount={AMOUNT}&reference={reference}
```

**Note**: Paystack will automatically replace `{reference}` with the actual transaction reference.

---

## Odoo Services

### Odoo Community Edition
```
https://yourdomain.com/thank-you?service=Odoo%20Community%20Edition&amount=$800&reference={reference}
```

### Custom Odoo Modules
```
https://yourdomain.com/thank-you?service=Custom%20Odoo%20Modules&amount=$100-$400&reference={reference}
```

### MPesa Integration
```
https://yourdomain.com/thank-you?service=MPesa%20Integration&amount=$150-$300&reference={reference}
```

### Advanced Inventory & Manufacturing
```
https://yourdomain.com/thank-you?service=Advanced%20Inventory&amount=$150-$300&reference={reference}
```

### School Management Pack
```
https://yourdomain.com/thank-you?service=School%20Management%20Pack&amount=$300&reference={reference}
```

### Restaurant / POS Pack
```
https://yourdomain.com/thank-you?service=Restaurant%20POS%20Pack&amount=$250&reference={reference}
```

### Law Firm Pack
```
https://yourdomain.com/thank-you?service=Law%20Firm%20Pack&amount=$250&reference={reference}
```

---

## AI Automation Services

### AI Starter
```
https://yourdomain.com/thank-you?service=AI%20Starter&amount=$50&reference={reference}
```

### AI Business
```
https://yourdomain.com/thank-you?service=AI%20Business&amount=$200&reference={reference}
```

### AI Enterprise
```
https://yourdomain.com/thank-you?service=AI%20Enterprise&amount=$500+&reference={reference}
```

---

## Web & Mobile Development

### Business Website
```
https://yourdomain.com/thank-you?service=Business%20Website&amount=$150&reference={reference}
```

### E-Commerce Website
```
https://yourdomain.com/thank-you?service=E-Commerce%20Website&amount=$300&reference={reference}
```

### Custom Web App
```
https://yourdomain.com/thank-you?service=Custom%20Web%20App&amount=$800+&reference={reference}
```

### Basic Mobile App
```
https://yourdomain.com/thank-you?service=Basic%20Mobile%20App&amount=$400&reference={reference}
```

### Professional Mobile App
```
https://yourdomain.com/thank-you?service=Professional%20Mobile%20App&amount=$1000-$2000&reference={reference}
```

---

## Hosting Services

### Shared Hosting
```
https://yourdomain.com/thank-you?service=Shared%20Hosting&amount=$10/mo&reference={reference}
```

### VPS Hosting
```
https://yourdomain.com/thank-you?service=VPS%20Hosting&amount=$25/mo&reference={reference}
```

### Managed Cloud
```
https://yourdomain.com/thank-you?service=Managed%20Cloud&amount=$50/mo&reference={reference}
```

---

## Bundles

### SME Digital Transformation Pack
```
https://yourdomain.com/thank-you?service=SME%20Digital%20Pack&amount=$1200&reference={reference}
```

### School Digital System Pack
```
https://yourdomain.com/thank-you?service=School%20Digital%20Pack&amount=$1500&reference={reference}
```

### Restaurant Complete Automation
```
https://yourdomain.com/thank-you?service=Restaurant%20Automation&amount=$1100&reference={reference}
```

---

## Support Plans

### Starter Support
```
https://yourdomain.com/thank-you?service=Starter%20Support&amount=$25/mo&reference={reference}
```

### Business Support
```
https://yourdomain.com/thank-you?service=Business%20Support&amount=$75/mo&reference={reference}
```

### Enterprise Support
```
https://yourdomain.com/thank-you?service=Enterprise%20Support&amount=$150/mo&reference={reference}
```

---

## Testing Locally

For local testing, use:
```
http://localhost:3000/thank-you?service=Test%20Service&amount=$100&reference=TEST123
```

## Notes

- URL encode spaces as `%20` in service names
- The `{reference}` placeholder will be replaced by Paystack automatically
- You can customize the amount format (e.g., `$800`, `KES 80,000`, etc.)
- After payment, customers will see their order details on the thank you page
