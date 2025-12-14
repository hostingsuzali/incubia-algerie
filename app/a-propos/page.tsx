import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Target, Users, TrendingUp, Award, Rocket, Heart } from "lucide-react"

const values = [
    {
        icon: Target,
        title: "Excellence",
        description: "Nous visons l'excellence dans tout ce que nous faisons pour garantir le succès de nos startups",
    },
    {
        icon: Heart,
        title: "Passion",
        description: "Nous sommes passionnés par l'entrepreneuriat et l'innovation en Algérie",
    },
    {
        icon: Users,
        title: "Communauté",
        description: "Nous croyons en la force du collectif et du partage d'expériences",
    },
    {
        icon: Rocket,
        title: "Innovation",
        description: "Nous encourageons la créativité et les solutions disruptives",
    },
]

const milestones = [
    { year: "2020", title: "Création d'Incubia", description: "Lancement de l'incubateur" },
    { year: "2021", title: "Première Cohorte", description: "10 startups accompagnées" },
    { year: "2022", title: "Expansion", description: "Nouveaux espaces et 50+ mentors" },
    { year: "2023", title: "100 Startups", description: "Milestone de 100 startups accompagnées" },
    { year: "2024", title: "Programmes Formations", description: "Lancement des formations certifiantes" },
    { year: "2025", title: "Leader Algérien", description: "N°1 de l'accompagnement startup en Algérie" },
]

export default function AProposPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            À Propos d'Incubia
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            L'écosystème de référence pour transformer votre vision entrepreneuriale en réalité
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-6 text-center">
                            Notre Mission
                        </h2>
                        <p className="text-lg text-[#47534E] leading-relaxed text-center mb-8">
                            Incubia a pour mission d'accélérer le développement de l'écosystème startup algérien en offrant un accompagnement de classe mondiale aux entrepreneurs. Nous croyons que l'Algérie regorge de talents et d'idées innovantes qui méritent d'être soutenus et propulsés vers le succès.
                        </p>
                        <p className="text-lg text-[#47534E] leading-relaxed text-center">
                            À travers nos programmes d'incubation, d'accélération, nos formations et notre réseau de mentors experts, nous aidons les startups à passer de l'idée au produit, du prototype au marché, et de la startup à l'entreprise rentable et scalable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Nos Valeurs
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-8 rounded-2xl border border-[#E7EBE9] hover:shadow-lg transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">{value.title}</h3>
                                <p className="text-sm text-[#47534E] leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Notre Parcours
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-8 mb-8 last:mb-0">
                                <div className="shrink-0 w-24 text-right">
                                    <div className="inline-block px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] font-bold">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="relative flex-1 pb-8 border-l-2 border-[#E7EBE9] pl-8">
                                    <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-[#1B1AFE]" />
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">{milestone.title}</h3>
                                    <p className="text-[#47534E]">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#1B1AFE] mb-2">200+</div>
                            <div className="text-sm text-[#47534E]">Startups Accompagnées</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#CA9BFA] mb-2">100+</div>
                            <div className="text-sm text-[#47534E]">Mentors Experts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#0284C7] mb-2">30+</div>
                            <div className="text-sm text-[#47534E]">Formations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#059669] mb-2">85%</div>
                            <div className="text-sm text-[#47534E]">Taux de Réussite</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Rejoignez Notre Écosystème
                        </h3>
                        <p className="text-lg text-[#47534E] mb-8">
                            Que vous soyez entrepreneur, mentor ou partenaire, il y a une place pour vous chez Incubia
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                                <Link href="/postuler">Postuler Maintenant</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/equipe">Rencontrer l'Équipe</Link>
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
