import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, DollarSign, FileText, Code2, Cloud, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

const services = [
    {
        title: "Domiciliation",
        description: "Adresse légale et siège social prestigieux pour votre entreprise à Alger",
        icon: MapPin,
        href: "/services/domiciliation",
        color: "from-[#0284C7] to-[#0EA5E9]",
        features: ["Adresse professionnelle", "Gestion courrier", "Prestige & Crédibilité"],
    },
    {
        title: "Espace Coworking",
        description: "Bureaux équipés et environnement de travail stimulant pour votre équipe",
        icon: Building2,
        href: "/services/coworking",
        color: "from-[#CA9BFA] to-[#E9D5FF]",
        features: ["Bureaux flexibles", "Salles de réunion", "Networking"],
    },
    {
        title: "Aide au Financement",
        description: "Constitution de dossiers ANSEJ, CNAC, ANDI pour obtenir vos financements",
        icon: DollarSign,
        href: "/services/financement",
        color: "from-[#059669] to-[#10B981]",
        features: ["Dossiers ANSEJ/CNAC", "Business Plan", "Accompagnement"],
    },
    {
        title: "Création d'Entreprise",
        description: "Accompagnement complet dans les démarches de création de votre société",
        icon: FileText,
        href: "/services/creation",
        color: "from-[#F59E0B] to-[#FBBF24]",
        features: ["Statuts juridiques", "Registre commerce", "Formalités"],
    },
    {
        title: "MVP Building",
        description: "Développement rapide de votre produit minimum viable avec notre équipe tech",
        icon: Code2,
        href: "/services/mvp-building",
        color: "from-[#1B1AFE] to-[#4B4AFF]",
        badge: "TECH",
        features: ["Web & Mobile", "Design UI/UX", "Délais rapides"],
    },
    {
        title: "SaaS Platform",
        description: "Solutions cloud et plateformes SaaS personnalisées pour votre business",
        icon: Cloud,
        href: "/services/saas-platform",
        color: "from-[#EC4899] to-[#F472B6]",
        badge: "TECH",
        features: ["Cloud native", "Scalabilité", "Support 24/7"],
    },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#1B1AFE]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#CA9BFA]/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Services Complémentaires
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Tout Ce Dont Vous Avez Besoin <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA]">
                                Pour Réussir
                            </span>
                        </h1>
                        <p className="text-xl text-[#47534E] leading-relaxed">
                            Infrastructure essentielle et services sur-mesure pour accompagner le développement 
                            de votre startup, de la création à la croissance
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative rounded-3xl border-2 border-[#E7EBE9] p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Hover Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                
                                {/* Badge */}
                                {service.badge && (
                                    <div className="absolute top-6 right-6">
                                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold`}>
                                            {service.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#47534E] mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-[#47534E]">
                                            <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="flex items-center text-[#1B1AFE] font-semibold group-hover:gap-3 gap-2 transition-all">
                                    En savoir plus
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] p-12 lg:p-16 text-white text-center">
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                Besoin d'un Service Personnalisé ?
                            </h2>
                            <p className="text-lg mb-8 opacity-90">
                                Notre équipe est à votre disposition pour discuter de vos besoins spécifiques 
                                et vous proposer une solution sur-mesure
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button 
                                    size="lg" 
                                    variant="secondary" 
                                    className="bg-white text-[#1B1AFE] hover:bg-white/90 font-bold px-8"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Parler à un Expert
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="border-2 border-white text-white hover:bg-white/10 font-bold px-8"
                                    asChild
                                >
                                    <Link href="/accompagnement">
                                        Découvrir l'Accompagnement
                                    </Link>
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
