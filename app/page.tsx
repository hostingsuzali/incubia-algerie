import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NetworkSection } from "@/components/network-section"
import { ThreePillars } from "@/components/three-pillars"
import { SimpleProcess } from "@/components/simple-process"
import { WhyIncuba } from "@/components/why-incuba"
import { SuccessStories } from "@/components/success-stories"
import { CtaStrip } from "@/components/cta-strip"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <NetworkSection />
      <ThreePillars />
      <SimpleProcess />
      <WhyIncuba />
      <SuccessStories />
      <CtaStrip />
      <FaqSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
