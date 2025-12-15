import HospitalityErpHero from "@/components/hospitality-erp/hospitality-erp-hero"
import HospitalityErpProblems from "@/components/hospitality-erp/hospitality-erp-problems"
import HospitalityErpHow from "@/components/hospitality-erp/hospitality-erp-how"
import HospitalityErpFeatures from "@/components/hospitality-erp/hospitality-erp-features"
import HospitalityErpWhoFor from "@/components/hospitality-erp/hospitality-erp-who-for"
import HospitalityErpWhy from "@/components/hospitality-erp/hospitality-erp-why"
import HospitalityErpDemo from "@/components/hospitality-erp/hospitality-erp-demo"
import HospitalityErpCaseStudy from "@/components/hospitality-erp/hospitality-erp-case-study"
import HospitalityErpFaq from "@/components/hospitality-erp/hospitality-erp-faq"
import HospitalityErpCta from "@/components/hospitality-erp/hospitality-erp-cta"

export const metadata = {
    title: "Hospitality ERP - Complete Restaurant & Bar Management | OKS",
    description:
        "Run your entire hospitality operation from one screen. Cut losses, increase margins, scale with control. Built for restaurants, bars, hotels & hospitality chains.",
}

export default function HospitalityErpPage() {
    return (
        <>
            <main className="overflow-hidden">
                <HospitalityErpHero />
                <HospitalityErpProblems />
                <HospitalityErpHow />
                <HospitalityErpFeatures />
                <HospitalityErpWhoFor />
                <HospitalityErpWhy />
                <HospitalityErpDemo />
                <HospitalityErpCaseStudy />
                <HospitalityErpFaq />
                <HospitalityErpCta />
            </main>
        </>
    )
}
