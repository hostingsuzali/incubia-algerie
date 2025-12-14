import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FormationsHero } from "@/components/formations/formations-hero"
import { FormationsOverview } from "@/components/formations/formations-overview"
import { FormationsDetail } from "@/components/formations/formations-detail"
import { MentoratSection } from "@/components/formations/mentorat-section"
import { HowItWorks } from "@/components/formations/how-it-works"
import { WhoIsItFor } from "@/components/formations/who-is-it-for"
import { FormationsFaq } from "@/components/formations/formations-faq"
import { FormationsCta } from "@/components/formations/formations-cta"

export default function FormationsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />
            <FormationsHero />
            <FormationsOverview />
            <FormationsDetail />
            <MentoratSection />
            <HowItWorks />
            <WhoIsItFor />
            <FormationsFaq />
            <FormationsCta />
            <Footer />
            <BackToTop />
        </main>
    )
}
