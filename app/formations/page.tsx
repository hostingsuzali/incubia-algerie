import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FormationsHero } from "@/components/formations/formations-hero"
import { FormationsOverview } from "@/components/formations/formations-overview"
import { FormationsList } from "@/components/formations/formations-list"
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
            <div id="masterclass" className="scroll-mt-20">
                <FormationsOverview />
            </div>
            <div id="b2b" className="scroll-mt-20">
                <FormationsList />
            </div>
            <MentoratSection />
            <HowItWorks />
            <div id="certifications" className="scroll-mt-20">
                <WhoIsItFor />
            </div>
            <FormationsFaq />
            <FormationsCta />
            <Footer />
            <BackToTop />
        </main>
    )
}
