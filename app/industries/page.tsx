import IndustriesHero from "@/components/industries-page/industries-hero"
import RestaurantsSection from "@/components/industries-page/restaurants-section"
import EducationSection from "@/components/industries-page/education-section"

export const metadata = {
  title: "Industries We Serve - OKS",
  description:
    "OKS digital solutions for hospitality and education sectors.",
}

export default function IndustriesPage() {
  return (
    <>
      <main>
        <IndustriesHero />
        <RestaurantsSection />
        <EducationSection />
      </main>
    </>
  )
}
