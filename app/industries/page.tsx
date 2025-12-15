import IndustriesHero from "@/components/industries-page/industries-hero"
import RestaurantsSection from "@/components/industries-page/restaurants-section"
import RetailSection from "@/components/industries-page/retail-section"
import LogisticsSection from "@/components/industries-page/logistics-section"
import HealthcareSection from "@/components/industries-page/healthcare-section"
import EducationSection from "@/components/industries-page/education-section"
import ManufacturingSection from "@/components/industries-page/manufacturing-section"
import ProfessionalServicesSection from "@/components/industries-page/professional-services-section"
import FinancialServicesSection from "@/components/industries-page/financial-services-section"
import RealEstateSection from "@/components/industries-page/real-estate-section"
import IndustriesCTA from "@/components/industries-page/industries-cta"

export const metadata = {
  title: "Industries We Serve - OKS",
  description:
    "OKS digital solutions for restaurants, retail, logistics, healthcare, education, manufacturing, and more.",
}

export default function IndustriesPage() {
  return (
    <>
      <main>
        <IndustriesHero />
        <RestaurantsSection />
        <RetailSection />
        <LogisticsSection />
        <HealthcareSection />
        <EducationSection />
        <ManufacturingSection />
        <ProfessionalServicesSection />
        <FinancialServicesSection />
        <RealEstateSection />
        <IndustriesCTA />
      </main>
    </>
  )
}
