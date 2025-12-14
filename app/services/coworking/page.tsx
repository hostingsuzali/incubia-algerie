import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Check, Wifi, Coffee, Users, Zap, Clock } from "lucide-react"

const features = [
    {
        icon: Wifi,
        title: "Internet Haut Débit",
        description: "Connexion fibre optique ultra-rapide pour une productivité maximale",
    },
    {
        icon: Coffee,
        title: "Espaces Confortables",
        description: "Bureaux ergonomiques, salles de réunion équipées, et espaces détente",
    },
    {
        icon: Users,
        title: "Communauté Active",
        description: "Networking avec d'autres entrepreneurs et startups",
    },
]

const pricingTiers = [
    {
        name: "Flex",
        price: "5 000 DA",
        period: "/jour",
        features: [
            "Accès journalier",
            "WiFi haut débit",
            "Café & thé illimités",
            "Espaces communs",
        ],
    },
    {
        name: "Part-Time",
        price: "30 000 DA",
        period: "/mois",
        popular: true,
        features: [
            "10 jours/mois",
            "Tout du Flex",
            "Casier personnel",
            "Salle de réunion (2h/mois)",
        ],
    },
    {
        name: "Full-Time",
        price: "50 000 DA",
        period: "/mois",
        features: [
            "Accès illimité 24/7",
            "Bureau dédié",
            "Salle de réunion (5h/mois)",
            "Adresse de domiciliation",
        ],
    },
]

const faqs = [
    {
        question: "Quels sont les horaires d'ouverture ?",
        answer: "Nos espaces sont ouverts du lundi au jeudi de 9h à 17h, et le vendredi de 9h à 12h. Les membres Full-Time ont un accès 24/7.",
    },
    {
        question: "Puis-je essayer avant de m'engager ?",
        answer: "Absolument ! Nous proposons une journée d'essai gratuite pour découvrir nos espaces et notre communauté.",
    },
    {
        question: "Y a-t-il un parking disponible ?",
        answer: "Oui, nous disposons d'un parking sécurisé pour nos membres.",
    },
    {
        question: "Puis-je réserver une salle de réunion ?",
        answer: "Oui, nos membres peuvent réserver des salles de réunion selon leur forfait. Des heures supplémentaires sont disponibles à l'achat.",
    },
]

export default function CoworkingPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CA9BFA]/10 text-[#CA9BFA] text-sm font-semibold mb-6">
                            <Building2 className="w-4 h-4" />
                            Service
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Espace Coworking
                        </h1>
                        <p className="text-xl text-[#47534E] mb-8">
                            Travaillez dans un environnement stimulant au cœur de l'écosystème startup algérien
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]">
                                <Link href="/contact">Réserver une Visite</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#pricing">Voir les Tarifs</Link>
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
                            Un Espace Pensé pour Vous
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#CA9BFA] hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">{feature.title}</h3>
                                <p className="text-[#47534E] leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white scroll-mt-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Tarifs Flexibles
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border-2 transition-all ${tier.popular ? "border-[#CA9BFA] shadow-xl scale-105" : "border-[#E7EBE9] hover:border-[#CA9BFA]"
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-sm font-bold">
                                            Populaire
                                        </div>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">{tier.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-[#0D1F1A]">{tier.price}</span>
                                    <span className="text-[#47534E]">{tier.period}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-[#CA9BFA] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#47534E]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full ${tier.popular ? "bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]" : "bg-[#0D1F1A]"}`} asChild>
                                    <Link href="/contact">Choisir {tier.name}</Link>
                                </Button>
                            </div>
                        ))}
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
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] p-12 text-white text-center">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">Rejoignez Notre Communauté</h3>
                            <p className="text-lg mb-8 opacity-90">
                                Réservez votre visite gratuite et découvrez nos espaces
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="bg-white text-[#CA9BFA] hover:bg-white/90" asChild>
                                    <Link href="/contact">Réserver une Visite</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
