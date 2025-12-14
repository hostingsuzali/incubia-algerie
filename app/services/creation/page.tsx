import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Briefcase, Check, FileCheck, Clock, Shield, Users } from "lucide-react"

const features = [
    {
        icon: FileCheck,
        title: "Démarches Simplifiées",
        description: "Nous gérons toutes les formalités administratives et légales",
    },
    {
        icon: Clock,
        title: "Création Rapide",
        description: "Votre entreprise créée en 15 jours ouvrés",
    },
    {
        icon: Shield,
        title: "Conformité Garantie",
        description: "Respect total de la législation algérienne",
    },
]

const steps = [
    {
        title: "Consultation",
        description: "Analyse de votre projet et choix de la forme juridique",
    },
    {
        title: "Préparation",
        description: "Constitution du dossier et rédaction des statuts",
    },
    {
        title: "Dépôt",
        description: "Enregistrement auprès des autorités compétentes",
    },
    {
        title: "Finalisation",
        description: "Obtention du registre de commerce et documents officiels",
    },
]

const pricingTiers = [
    {
        name: "EURL/SARL",
        price: "Sur devis",
        features: [
            "Rédaction des statuts",
            "Enregistrement CNRC",
            "Obtention NIF",
            "Assistance post-création (3 mois)",
        ],
    },
    {
        name: "SPA",
        price: "Sur devis",
        popular: true,
        features: [
            "Tout de l'EURL/SARL",
            "Publication au BOAL",
            "Assistance levée de fonds",
            "Assistance post-création (6 mois)",
        ],
    },
    {
        name: "Auto-Entrepreneur",
        price: "Sur devis",
        features: [
            "Inscription simplifiée",
            "Obtention registre",
            "Formation fiscale",
            "Support 1 mois",
        ],
    },
]

const faqs = [
    {
        question: "Quelle forme juridique choisir ?",
        answer: "Cela dépend de votre activité, du nombre d'associés, et de vos objectifs. L'EURL convient aux entrepreneurs solo, la SARL pour 2+ associés, la SPA pour les projets avec levée de fonds, et le statut auto-entrepreneur pour tester une activité.",
    },
    {
        question: "Combien de temps prend la création ?",
        answer: "En moyenne 15 jours ouvrés une fois tous les documents fournis. Le délai peut varier selon la forme juridique et la charge administrative.",
    },
    {
        question: "Quel est le capital minimum requis ?",
        answer: "Pour une EURL/SARL: 100 000 DA minimum. Pour une SPA: 1 000 000 DA minimum. Pas de capital minimum pour auto-entrepreneur.",
    },
    {
        question: "Quels documents dois-je fournir ?",
        answer: "Pièce d'identité, justificatif de domicile, extrait de naissance, casier judiciaire, et selon le cas: bail commercial, diplômes, agrément professionnel.",
    },
]

export default function CreationPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Briefcase className="w-4 h-4" />
                            Service
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Création d'Entreprise
                        </h1>
                        <p className="text-xl text-[#47534E] mb-8">
                            Nous vous accompagnons dans toutes les démarches de création de votre entreprise en Algérie
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                                <Link href="/contact">Créer Mon Entreprise</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#pricing">Voir les Formules</Link>
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
                            Pourquoi Nous Choisir ?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                            Le Processus en 4 Étapes
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">{step.title}</h3>
                                    <p className="text-sm text-[#47534E]">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#1B1AFE] to-transparent" />
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
                            Nos Formules
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border-2 transition-all ${tier.popular ? "border-[#1B1AFE] shadow-xl scale-105" : "border-[#E7EBE9] hover:border-[#1B1AFE]"
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF] text-white text-sm font-bold">
                                            Populaire
                                        </div>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">{tier.name}</h3>
                                <div className="mb-6">
                                    <span className="text-2xl font-bold text-[#0D1F1A]">{tier.price}</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-[#1B1AFE] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#47534E]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full ${tier.popular ? "bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]" : "bg-[#0D1F1A]"}`} asChild>
                                    <Link href="/contact">Demander un Devis</Link>
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
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] p-12 text-white text-center">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h3 className="text-3xl font-bold mb-4">Lancez Votre Entreprise Aujourd'hui</h3>
                            <p className="text-lg mb-8 opacity-90">
                                Contactez-nous pour une consultation gratuite
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-[#1B1AFE] hover:bg-white/90" asChild>
                                <Link href="/contact">Consultation Gratuite</Link>
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
