import SchoolErpHero from "@/components/school-erp/school-erp-hero"
import SchoolErpTruth from "@/components/school-erp/school-erp-truth"
import SchoolErpHow from "@/components/school-erp/school-erp-how"
import SchoolErpCapabilities from "@/components/school-erp/school-erp-capabilities"
import SchoolErpDemo from "@/components/school-erp/school-erp-demo"
import SchoolErpFaq from "@/components/school-erp/school-erp-faq"
import SchoolErpCaseStudy from "@/components/school-erp/school-erp-case-study"
import SchoolErpCta from "@/components/school-erp/school-erp-cta"

export const metadata = {
    title: "School ERP - Built for Serious International Schools | OKS",
    description:
        "Enterprise-grade school management platform designed for international and high-performing private schools. Total control, zero operational guesswork.",
}

export default function SchoolErpPage() {
    return (
        <>
            <main className="overflow-hidden">
                <SchoolErpHero />
                <SchoolErpTruth />
                <SchoolErpHow />
                <SchoolErpCapabilities />
                <SchoolErpDemo />
                <SchoolErpFaq />
                <SchoolErpCaseStudy />
                <SchoolErpCta />
            </main>
        </>
    )
}
