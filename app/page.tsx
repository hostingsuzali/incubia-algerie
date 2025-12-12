import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartnersSection } from "@/components/partners-section"
import { ValuePillars } from "@/components/value-pillars"
import { IncubationProgram } from "@/components/incubation-program"
import { SuccessStories } from "@/components/success-stories"
import { ToolboxSection } from "@/components/toolbox-section"
import { KnowledgeHub } from "@/components/knowledge-hub"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <ValuePillars />
      <IncubationProgram />
      <SuccessStories />
      <ToolboxSection />
      <KnowledgeHub />
      <FaqSection />
      <Footer />
    </main>
  )
}
