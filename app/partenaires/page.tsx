import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Handshake, Building2, Award, Users } from "lucide-react"

const partnerTiers = [
    {
        title: "Partenaires Stratégiques",
        description: "Organisations qui soutiennent activement notre mission",
        partners: [
            "Ministère de l'Économie de la Connaissance",
            "ANDI - Agence Nationale de Développement de l'Investissement",
            "Université d'Alger",
            "Chambre de Commerce d'Alger",
        ],
    },
    {
        title: "Partenaires Technologiques",
        description: "Entreprises tech qui fournissent outils et ressources",
        partners: [
            "Google for Startups",
            "Microsoft for Startups",
            "AWS Activate",
            "GitHub Education",
        ],
    },
    {
        title: "Partenaires Financiers",
        description: "Institutions financières et fonds d'investissement",
        partners: [
            "Algerian Venture Capital Fund",
            "BNP Paribas Algérie",
            "Société Générale Algérie",
            "ANSEJ",
        ],
    },
]

export default function PartenairesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Handshake className="w-4 h-4" />
                            Partenaires
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Nos Partenaires
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Ensemble, nous construisons l'écosystème startup de demain en Algérie
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="space-y-16">
                        {partnerTiers.map((tier, index) => (
                            <div key={index}>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                                        {tier.title}
                                    </h2>
                                    <p className="text-lg text-[#47534E]">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {tier.partners.map((partner, idx) => (
                                        <div
                                            key={idx}
                                            className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all flex items-center justify-center text-center min-h-[150px]"
                                        >
                                            <div>
                                                <Building2 className="w-12 h-12 text-[#1B1AFE] mx-auto mb-4" />
                                                <p className="font-semibold text-[#0D1F1A]">{partner}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become Partner CTA */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] p-12 text-white text-center">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">Devenez Partenaire</h3>
                            <p className="text-lg mb-8 opacity-90">
                                Rejoignez notre réseau de partenaires et contribuez au développement de l'écosystème startup algérien
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-[#1B1AFE] hover:bg-white/90" asChild>
                                <Link href="/contact">Nous Contacter</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
