import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Rocket, CheckCircle2, ArrowRight, Layers, Database, Cloud } from "lucide-react"

const features = [
    {
        icon: Zap,
        title: "Développement Rapide",
        description: "De l'idée au produit fonctionnel en 4-8 semaines",
    },
    {
        icon: Layers,
        title: "Architecture Scalable",
        description: "Code propre et architecture prête pour la croissance",
    },
    {
        icon: Cloud,
        title: "Cloud-Native",
        description: "Déployé sur AWS, Google Cloud ou Azure",
    },
]

const techStack = [
    { category: "Frontend", techs: ["React", "Next.js", "Vue.js", "TypeScript"] },
    { category: "Backend", techs: ["Node.js", "Python", "Go", "PostgreSQL"] },
    { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "DevOps", techs: ["Docker", "Kubernetes", "CI/CD", "AWS"] },
]

const process = [
    {
        step: "01",
        title: "Discovery Workshop",
        duration: "1 semaine",
        description: "Analyse des besoins, définition des user stories, wireframes",
    },
    {
        step: "02",
        title: "Design & Prototyping",
        duration: "1-2 semaines",
        description: "UI/UX design, prototype interactif, validation utilisateur",
    },
    {
        step: "03",
        title: "Développement Sprint",
        duration: "3-5 semaines",
        description: "Développement agile, tests continus, démos hebdomadaires",
    },
    {
        step: "04",
        title: "Launch & Support",
        duration: "1 semaine",
        description: "Déploiement production, formation, support post-lancement",
    },
]

const packages = [
    {
        name: "MVP Starter",
        price: "À partir de 500 000 DA",
        duration: "4-6 semaines",
        ideal: "Validation d'idée",
        features: [
            "1-3 fonctionnalités core",
            "Design UI/UX basique",
            "Web responsive",
            "Backend API simple",
            "Base de données",
            "Déploiement cloud",
            "1 mois de support",
        ],
        color: "from-[#0284C7] to-[#0EA5E9]",
    },
    {
        name: "MVP Pro",
        price: "À partir de 1 200 000 DA",
        duration: "6-8 semaines",
        ideal: "Lancement marché",
        popular: true,
        features: [
            "5-8 fonctionnalités",
            "Design UI/UX premium",
            "Web + Mobile (PWA)",
            "Backend robuste",
            "Authentification",
            "Paiements intégrés",
            "Analytics",
            "3 mois de support",
        ],
        color: "from-[#1B1AFE] to-[#4B4AFF]",
    },
    {
        name: "Full Product",
        price: "Sur devis",
        duration: "8-12 semaines",
        ideal: "Produit complet",
        features: [
            "Fonctionnalités illimitées",
            "Design sur mesure",
            "Web + Apps natives",
            "Architecture complexe",
            "Intégrations tierces",
            "Admin dashboard",
            "CI/CD pipeline",
            "6 mois de support",
        ],
        color: "from-[#CA9BFA] to-[#E9D5FF]",
    },
]

const successStories = [
    {
        name: "HealthTech Startup",
        result: "MVP lancé en 6 semaines, 1000+ utilisateurs en 2 mois",
        tech: "React + Node.js + PostgreSQL",
    },
    {
        name: "E-commerce Platform",
        result: "Plateforme complète, 50K DA de CA le premier mois",
        tech: "Next.js + Stripe + AWS",
    },
    {
        name: "EdTech App",
        result: "App mobile + web, 5000 téléchargements en 1 mois",
        tech: "React Native + Firebase",
    },
]

export default function MVPBuildingPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero - Unique Design */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7]/5 via-[#1B1AFE]/5 to-[#CA9BFA]/5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B1AFE]/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-6 bg-gradient-to-r from-[#0284C7] to-[#1B1AFE] text-white">
                                <Code className="w-4 h-4 mr-2" />
                                Service Tech
                            </Badge>
                            <h1 className="text-5xl lg:text-6xl font-bold text-[#0D1F1A] mb-6 leading-tight">
                                Construisez Votre{" "}
                                <span className="bg-gradient-to-r from-[#0284C7] to-[#1B1AFE] bg-clip-text text-transparent">
                                    MVP
                                </span>{" "}
                                en Semaines
                            </h1>
                            <p className="text-xl text-[#47534E] mb-8 leading-relaxed">
                                De l'idée au produit fonctionnel. Nous développons votre MVP avec les meilleures technologies pour valider votre concept rapidement.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-gradient-to-r from-[#0284C7] to-[#1B1AFE] text-white shadow-xl shadow-[#0284C7]/30">
                                    <Rocket className="w-5 h-5 mr-2" />
                                    Démarrer Mon MVP
                                </Button>
                                <Button size="lg" variant="outline">
                                    Voir le Portfolio
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#E7EBE9]">
                                <div>
                                    <div className="text-3xl font-bold text-[#0284C7]">4-8</div>
                                    <div className="text-sm text-[#47534E]">Semaines</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#1B1AFE]">50+</div>
                                    <div className="text-sm text-[#47534E]">MVPs Lancés</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#CA9BFA]">95%</div>
                                    <div className="text-sm text-[#47534E]">Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="relative">
                            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0D1F1A] to-[#1B1AFE] shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                                        <Code className="w-8 h-8 text-[#0EA5E9]" />
                                        <div>
                                            <div className="text-white font-semibold">Frontend</div>
                                            <div className="text-white/70 text-sm">React, Next.js, TypeScript</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                                        <Database className="w-8 h-8 text-[#4B4AFF]" />
                                        <div>
                                            <div className="text-white font-semibold">Backend</div>
                                            <div className="text-white/70 text-sm">Node.js, Python, PostgreSQL</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                                        <Cloud className="w-8 h-8 text-[#CA9BFA]" />
                                        <div>
                                            <div className="text-white font-semibold">Cloud</div>
                                            <div className="text-white/70 text-sm">AWS, Vercel, Docker</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features - Card Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Pourquoi Choisir Notre Service MVP ?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-3xl border-2 border-[#E7EBE9] hover:border-[#0284C7] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3">{feature.title}</h3>
                                <p className="text-[#47534E] leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - Timeline */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Notre Processus en 4 Étapes
                        </h2>
                        <p className="text-lg text-[#47534E]">
                            Méthodologie agile pour un développement rapide et efficace
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="relative z-10 p-6 rounded-2xl bg-white border-2 border-[#E7EBE9] hover:border-[#0284C7] transition-all hover:shadow-xl">
                                    <div className="text-6xl font-bold text-[#0284C7]/10 mb-4">{item.step}</div>
                                    <Badge variant="outline" className="mb-3">{item.duration}</Badge>
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">{item.title}</h3>
                                    <p className="text-sm text-[#47534E] leading-relaxed">{item.description}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0284C7] to-transparent z-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Technologies de Pointe
                        </h2>
                        <p className="text-lg text-[#47534E]">
                            Nous utilisons les meilleures technologies pour votre MVP
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((stack, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                                <h3 className="text-lg font-bold text-[#0D1F1A] mb-4">{stack.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {stack.techs.map((tech, idx) => (
                                        <Badge key={idx} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing - Modern Cards */}
            <section className="py-20 bg-gradient-to-br from-[#0D1F1A] via-[#1B1AFE] to-[#0284C7] text-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Packages MVP
                        </h2>
                        <p className="text-lg text-white/80">
                            Choisissez le package adapté à vos besoins
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border-2 ${pkg.popular ? "border-white scale-105" : "border-white/20"
                                    } hover:bg-white/20 transition-all`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-white text-[#1B1AFE] font-bold px-4 py-1">
                                            POPULAIRE
                                        </Badge>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                                <div className="text-white/70 mb-4">{pkg.duration}</div>
                                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm mb-6">
                                    Idéal pour: {pkg.ideal}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full bg-gradient-to-r ${pkg.color} text-white border-0 hover:opacity-90`}
                                    size="lg"
                                    asChild
                                >
                                    <Link href="/contact">Choisir {pkg.name}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            MVPs Réussis
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index} className="p-6 rounded-2xl border-2 border-[#E7EBE9] hover:border-[#0284C7] hover:shadow-xl transition-all">
                                <h4 className="text-xl font-bold text-[#0D1F1A] mb-3">{story.name}</h4>
                                <p className="text-[#47534E] mb-4">{story.result}</p>
                                <Badge variant="outline">{story.tech}</Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <Rocket className="w-16 h-16 mx-auto mb-6 text-[#0284C7]" />
                        <h3 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Prêt à Lancer Votre MVP ?
                        </h3>
                        <p className="text-lg text-[#47534E] mb-8">
                            Discutons de votre projet et transformons votre idée en produit fonctionnel
                        </p>
                        <Button size="lg" className="bg-gradient-to-r from-[#0284C7] to-[#1B1AFE]" asChild>
                            <Link href="/contact">
                                Démarrer Mon Projet
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
