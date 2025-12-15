import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Check, Sparkles, Building2, FileText, Shield, Clock } from "lucide-react"

const features = [
    {
        icon: Building2,
        title: "Adresse Prestigieuse",
        description: "Domiciliez votre entreprise dans un quartier d'affaires reconnu à Alger",
    },
    {
        icon: FileText,
        title: "Gestion Administrative",
        description: "Réception et gestion de votre courrier professionnel",
    },
    {
        icon: Shield,
        title: "Conformité Légale",
        description: "Respect total de la réglementation algérienne",
    },
]

const steps = [
    {
        title: "Consultation",
        description: "Échange sur vos besoins et votre activité",
    },
    {
        title: "Choix de l'Offre",
        description: "Sélection du forfait adapté à votre entreprise",
    },
    {
        title: "Signature",
        description: "Contrat de domiciliation et documents légaux",
    },
    {
        title: "Activation",
        description: "Votre adresse est active sous 48h",
    },
]

const pricingTiers = [
    {
        name: "Adresse Prestige",
        price: "35 000 DA",
        period: "/an",
        features: [
            "Adresse commerciale premium (Alger Centre)",
            "Réception & notification courrier",
            "Contrat de domiciliation notarié",
            "Conformité fiscale garantie",
        ],
    },
    {
        name: "Business Office",
        price: "60 000 DA",
        period: "/an",
        popular: true,
        features: [
            "Tout du Pack Prestige",
            "Scan & envoi email du courrier",
            "Salle de réunion (4h/mois)",
            "Ligne fixe dédiée & répondeur",
        ],
    },
    {
        name: "Virtual HQ",
        price: "90 000 DA",
        period: "/an",
        features: [
            "Tout du Pack Business",
            "Gestion administrative complète",
            "Salle de réunion illimitée (selon dispo)",
            "Accès coworking (5 jours/mois)",
        ],
    },
]

const faqs = [
    {
        question: "Qu'est-ce que la domiciliation d'entreprise ?",
        answer: "La domiciliation d'entreprise consiste à établir l'adresse administrative et fiscale de votre société dans nos locaux. C'est une obligation légale pour toute entreprise en Algérie.",
    },
    {
        question: "Quels documents sont nécessaires ?",
        answer: "Vous aurez besoin de votre registre de commerce, statuts de la société, pièce d'identité du gérant, et justificatif de domicile personnel.",
    },
    {
        question: "Puis-je changer mon adresse de domiciliation ?",
        answer: "Oui, vous pouvez transférer votre domiciliation à tout moment moyennant un préavis d'un mois.",
    },
    {
        question: "Le service inclut-il la réception de colis ?",
        answer: "Oui, nous réceptionnons tous vos courriers et colis professionnels. Vous serez notifié par email à chaque réception.",
    },
]

export default function DomiciliationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-semibold mb-6">
                            <MapPin className="w-4 h-4" />
                            Service
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Domiciliation d'Entreprise
                        </h1>
                        <p className="text-xl text-[#47534E] mb-8">
                            Une adresse professionnelle prestigieuse pour votre entreprise à Alger, avec gestion complète de votre courrier
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-gradient-to-r from-[#0284C7] to-[#0EA5E9]">
                                <Link href="/contact">Demander un Devis</Link>
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
                            Pourquoi Choisir Notre Service ?
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                            Une solution complète pour établir votre présence professionnelle
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#0284C7] hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">{feature.title}</h3>
                                <p className="text-[#47534E] leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Comment Ça Marche ?
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                            Un processus simple et rapide en 4 étapes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">{step.title}</h3>
                                    <p className="text-sm text-[#47534E]">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#0284C7] to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Tarifs Transparents
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                            Choisissez l'offre adaptée à vos besoins
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border-2 transition-all ${tier.popular
                                    ? "border-[#0284C7] shadow-xl scale-105"
                                    : "border-[#E7EBE9] hover:border-[#0284C7]"
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white text-sm font-bold">
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
                                            <Check className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#47534E]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full ${tier.popular
                                        ? "bg-gradient-to-r from-[#0284C7] to-[#0EA5E9]"
                                        : "bg-[#0D1F1A]"
                                        }`}
                                    asChild
                                >
                                    <Link href="/contact">Choisir {tier.name}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Questions Fréquentes
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-[#0D1F1A]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#47534E] leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] p-12 text-white text-center">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">
                                Prêt à Domicilier Votre Entreprise ?
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                Contactez-nous pour obtenir votre adresse professionnelle dès aujourd'hui
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="bg-white text-[#0284C7] hover:bg-white/90" asChild>
                                    <Link href="/contact">Nous Contacter</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                                    <Link href="/postuler">Postuler Maintenant</Link>
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
