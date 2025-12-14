"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, BookOpen, Sparkles, ArrowRight } from "lucide-react"

// Mock data
const guides = [
    {
        id: 1,
        title: "Guide Complet de la Validation d'Idée",
        description: "Méthodologie étape par étape pour valider votre idée de startup avant d'investir",
        downloads: 1250,
        category: "Stratégie",
    },
    {
        id: 2,
        title: "Levée de Fonds pour Startups Algériennes",
        description: "Tout ce qu'il faut savoir sur le financement en Algérie: ANSEJ, CNAC, business angels",
        downloads: 980,
        category: "Finance",
    },
    {
        id: 3,
        title: "Checklist Juridique pour Entrepreneurs",
        description: "Les démarches légales essentielles pour créer et développer votre entreprise",
        downloads: 750,
        category: "Legal",
    },
]

const templates = [
    {
        id: 1,
        title: "Business Model Canvas",
        description: "Template Canva éditable pour modéliser votre business model",
        downloads: 2100,
        category: "Stratégie",
    },
    {
        id: 2,
        title: "Pitch Deck Template",
        description: "Présentation PowerPoint professionnelle pour convaincre investisseurs et partenaires",
        downloads: 1850,
        category: "Marketing",
    },
    {
        id: 3,
        title: "Prévisions Financières (Excel)",
        description: "Tableur Excel avec formules automatiques pour vos projections financières 3 ans",
        downloads: 1620,
        category: "Finance",
    },
]

export default function RessourcesPage() {
    const [email, setEmail] = useState("")
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        setSubscribed(true)
        setTimeout(() => {
            setSubscribed(false)
            setEmail("")
        }, 3000)
    }

    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <BookOpen className="w-4 h-4" />
                            Ressources
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Hub Ressources
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Guides pratiques, templates gratuits et outils pour accélérer votre croissance
                        </p>
                    </div>
                </div>
            </section>

            {/* Guides Section */}
            <section id="guides" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Guides Pratiques
                        </h2>
                        <p className="text-lg text-[#47534E]">
                            Des guides détaillés pour vous accompagner à chaque étape
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {guides.map(guide => (
                            <div
                                key={guide.id}
                                className="group rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-video bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center">
                                    <FileText className="w-16 h-16 text-[#1B1AFE] group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Badge variant="default">{guide.category}</Badge>
                                        <span className="text-xs text-[#47534E]">
                                            {guide.downloads} téléchargements
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-sm text-[#47534E] mb-4 leading-relaxed">
                                        {guide.description}
                                    </p>
                                    <Button className="w-full bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                                        <Download className="w-4 h-4 mr-2" />
                                        Télécharger Gratuitement
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Section */}
            <section id="templates" className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white scroll-mt-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Templates Gratuits
                        </h2>
                        <p className="text-lg text-[#47534E]">
                            Des modèles prêts à l'emploi pour gagner du temps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {templates.map(template => (
                            <div
                                key={template.id}
                                className="group rounded-2xl border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-video bg-gradient-to-br from-[#CA9BFA]/10 to-[#E9D5FF]/10 flex items-center justify-center">
                                    <FileText className="w-16 h-16 text-[#CA9BFA] group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Badge variant="secondary">{template.category}</Badge>
                                        <span className="text-xs text-[#47534E]">
                                            {template.downloads} téléchargements
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#CA9BFA] transition-colors">
                                        {template.title}
                                    </h3>
                                    <p className="text-sm text-[#47534E] mb-4 leading-relaxed">
                                        {template.description}
                                    </p>
                                    <Button className="w-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF]">
                                        <Download className="w-4 h-4 mr-2" />
                                        Télécharger Gratuitement
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#CA9BFA] via-[#E9D5FF] to-[#1B1AFE] p-12 lg:p-16 text-white">
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                                Recevez Plus de Ressources
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                Abonnez-vous à notre newsletter pour recevoir nos derniers guides, templates et conseils exclusifs chaque semaine
                            </p>

                            {subscribed ? (
                                <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm">
                                    <p className="text-lg font-semibold">
                                        ✓ Merci ! Vous êtes inscrit à notre newsletter.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="Votre email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-white/20 border-white/40 text-white placeholder:text-white/70 focus:bg-white/30"
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        variant="secondary"
                                        className="bg-white text-[#CA9BFA] hover:bg-white/90 shrink-0"
                                    >
                                        S'Abonner
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog CTA */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Envie de Plus de Contenu ?
                        </h3>
                        <p className="text-lg text-[#47534E] mb-8">
                            Découvrez nos articles de blog avec des insights, études de cas et actualités de l'écosystème startup
                        </p>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/blog">
                                Découvrir le Blog
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
