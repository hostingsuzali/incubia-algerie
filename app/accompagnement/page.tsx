import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { AccompagnementHero } from "@/components/accompagnement/accompagnement-hero"
import { ApproachPillars } from "@/components/accompagnement/approach-pillars"
import { OffersOverview } from "@/components/accompagnement/offers-overview"
import { FormationsPreview } from "@/components/accompagnement/formations-preview"
import { WhoFor } from "@/components/accompagnement/who-for"
import { AccompagnementFinalCta } from "@/components/accompagnement/final-cta"

export const metadata = {
    title: "Accompagnement | Incubia Algérie",
    description: "Incubation, accélération et montée en compétences au sein d'un écosystème structuré, orienté résultats. Découvrez nos programmes d'accompagnement pour startups et PME.",
}

export default function AccompagnementPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />
            <AccompagnementHero />
            <ApproachPillars />
            <OffersOverview />
            <FormationsPreview />
            <WhoFor />
            <AccompagnementFinalCta />
            <Footer />
            <BackToTop />
        </main>
    )
}
