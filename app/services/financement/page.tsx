import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DollarSign, Check, FileText, TrendingUp, Shield, Users } from "lucide-react"

const features = [
    {
        icon: FileText,
        title: "Constitution de Dossiers",
        description: "Aide complète pour monter vos dossiers ANSEJ, CNAC, ANDI",
    },
    {
        icon: TrendingUp,
        title: "Optimisation Financière",
        description: "Conseils pour maximiser vos chances d'obtenir un financement",
    },
    {
        icon: Shield,
        title: "Accompagnement Personnalisé",
        description: "Suivi de votre dossier jusqu'à l'obtention du financement",
    },
]

const programs = [
    {
        name: "ANSEJ",
        description: "Agence Nationale de Soutien à l'Emploi des Jeunes",
        ageRange: "19-40 ans",
        maxAmount: "10 000 000 DA",
        features: [
            "Prêt sans intérêt",
            "Exonération fiscale 3 ans",
            "Accompagnement post-création",
        ],
    },
    {
        name: "CNAC",
        description: "Caisse Nationale d'Assurance Chômage",
        ageRange: "30-50 ans",
        maxAmount: "10 000 000 DA",
        features: [
            "Pour chômeurs inscrits",
            "Taux d'intérêt réduit",
            "Différé de remboursement",
        ],
    },
    {
        name: "ANDI",
        description: "Agence Nationale de Développement de l'Investissement",
        ageRange: "Tous âges",
        maxAmount: "Selon projet",
        features: [
            "Grands projets",
            "Avantages fiscaux",
            "Facilités douanières",
        ],
    },
]

const faqs = [
    {
        question: "Quels sont les critères d'éligibilité ?",
        answer: "Les critères varient selon le dispositif (ANSEJ, CNAC, ANDI). Généralement, il faut être de nationalité algérienne, avoir un projet viable, et respecter les conditions d'âge et de qualification.",
    },
    {
        question: "Combien de temps prend la constitution du dossier ?",
        answer: "En moyenne, 2 à 4 semaines selon la complexité de votre projet et la disponibilité des documents nécessaires.",
    },
    {
        question: "Quel est le taux de réussite ?",
        answer: "Avec notre accompagnement, le taux d'acceptation des dossiers est de 75%, contre 40% en moyenne pour les dossiers montés sans aide.",
    },
    {
        question: "Quels documents sont nécessaires ?",
        answer: "Pièce d'identité, diplômes, étude de marché, business plan, devis d'équipement, et autres documents spécifiques selon le dispositif choisi.",
    },
]

export default function FinancementPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#059669]/10 text-[#059669] text-sm font-semibold mb-6">
                            <DollarSign className="w-4 h-4" />
                            Service
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Aide au Financement
                        </h1>
                        <p className="text-xl text-[#47534E] mb-8">
                            Nous vous accompagnons dans la constitution de vos dossiers ANSEJ, CNAC, et ANDI pour maximiser vos chances d'obtenir un financement
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-gradient-to-r from-[#059669] to-[#10B981]">
                                <Link href="/contact">Demander un Accompagnement</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#programs">Voir les Dispositifs</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Notre Accompagnement
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#059669] hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">{feature.title}</h3>
                                <p className="text-[#47534E] leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section id="programs" className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white scroll-mt-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Dispositifs de Financement
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                            Nous vous aidons à choisir et constituer le dossier adapté à votre profil
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#059669] hover:shadow-xl transition-all">
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">{program.name}</h3>
                                <p className="text-sm text-[#47534E] mb-6">{program.description}</p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center pb-3 border-b border-[#E7EBE9]">
                                        <span className="text-sm text-[#47534E]">Âge</span>
                                        <span className="font-semibold text-[#0D1F1A]">{program.ageRange}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-[#E7EBE9]">
                                        <span className="text-sm text-[#47534E]">Montant max</span>
                                        <span className="font-semibold text-[#0D1F1A]">{program.maxAmount}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#47534E]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full bg-gradient-to-r from-[#059669] to-[#10B981]" asChild>
                                    <Link href="/contact">En Savoir Plus</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Nos Tarifs d'Accompagnement
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                            Investissement pour maximiser vos chances d'obtenir un financement
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#059669] hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">Accompagnement Premium</h3>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-[#059669]">200 000 - 350 000 DZD</span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#47534E]">Montage dossier & Business Plan expert</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#47534E]">Coaching soutenance commission</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#47534E]">Suivi bancaire VIP jusqu'au déblocage</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-gradient-to-r from-[#059669] to-[#10B981]" asChild>
                                <Link href="/contact">Démarrer l'Accompagnement</Link>
                            </Button>
                        </div>

                        <div className="p-8 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#059669] hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">Diagnostic Éligibilité</h3>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-[#059669]">30 000 DZD</span>
                            </div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#47534E]">Évaluation de l'éligibilité</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#47534E]">Recommandations personnalisées</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#47534E]">Plan d'action détaillé</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-gradient-to-r from-[#059669] to-[#10B981]" asChild>
                                <Link href="/contact">Demander un Diagnostic</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">Questions Fréquentes</h2>
                    </div>
                    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-[#0D1F1A]">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-[#47534E] leading-relaxed">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#059669] to-[#10B981] p-12 text-white text-center">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">Prêt à Financer Votre Projet ?</h3>
                            <p className="text-lg mb-8 opacity-90">
                                Contactez-nous pour un diagnostic gratuit de votre éligibilité
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-[#059669] hover:bg-white/90" asChild>
                                <Link href="/contact">Demander un Diagnostic</Link>
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
