import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Users, CreditCard, BarChart3, Shield, Zap, Check, ArrowRight, Sparkles } from "lucide-react"

const saasFeatures = [
    {
        icon: Users,
        title: "Multi-Tenancy",
        description: "Architecture multi-tenant sécurisée pour gérer plusieurs clients",
    },
    {
        icon: CreditCard,
        title: "Billing & Subscriptions",
        description: "Gestion complète des abonnements et paiements récurrents",
    },
    {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Tableaux de bord et analytics pour vos utilisateurs",
    },
    {
        icon: Shield,
        title: "Sécurité Enterprise",
        description: "Authentification, autorisation, et conformité GDPR",
    },
    {
        icon: Cloud,
        title: "Infrastructure Cloud",
        description: "Auto-scaling, haute disponibilité, backups automatiques",
    },
    {
        icon: Zap,
        title: "API & Intégrations",
        description: "API RESTful/GraphQL et intégrations tierces",
    },
]

const modules = [
    {
        name: "Core Platform",
        features: [
            "Authentification (OAuth, SSO)",
            "Gestion utilisateurs & rôles",
            "Dashboard admin",
            "Multi-langue (i18n)",
        ],
    },
    {
        name: "Billing Module",
        features: [
            "Plans & pricing",
            "Stripe/PayPal integration",
            "Invoicing automatique",
            "Usage tracking",
        ],
    },
    {
        name: "Analytics Module",
        features: [
            "User analytics",
            "Business metrics",
            "Custom reports",
            "Data export",
        ],
    },
    {
        name: "Communication",
        features: [
            "Email notifications",
            "In-app messaging",
            "Push notifications",
            "Webhooks",
        ],
    },
]

const pricingTiers = [
    {
        name: "SaaS Starter",
        price: "2 500 000 DA",
        duration: "10-12 semaines",
        features: [
            "Authentification & users",
            "1 plan de pricing",
            "Paiements Stripe",
            "Dashboard basique",
            "Email notifications",
            "Déploiement cloud",
            "3 mois support",
        ],
        color: "border-[#CA9BFA]",
        badge: "Lancement rapide",
    },
    {
        name: "SaaS Pro",
        price: "5 000 000 DA",
        duration: "12-16 semaines",
        popular: true,
        features: [
            "Tout du Starter",
            "Multi-plans & trials",
            "Analytics avancés",
            "Admin dashboard complet",
            "API documentation",
            "Intégrations tierces",
            "White-labeling",
            "6 mois support",
        ],
        color: "border-[#1B1AFE]",
        badge: "Plus populaire",
    },
    {
        name: "SaaS Enterprise",
        price: "Sur devis",
        duration: "16+ semaines",
        features: [
            "Tout du Pro",
            "Multi-tenancy avancé",
            "SSO & SAML",
            "Compliance (GDPR, SOC2)",
            "Custom intégrations",
            "Microservices",
            "DevOps complet",
            "12 mois support",
        ],
        color: "border-[#059669]",
        badge: "Sur mesure",
    },
]

const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "NestJS", "Python/Django", "GraphQL"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    infrastructure: ["AWS/GCP", "Docker", "Kubernetes", "Terraform"],
    payments: ["Stripe", "PayPal", "Paddle"],
    monitoring: ["Sentry", "DataDog", "LogRocket"],
}

export default function SaaSPlatformPage() {
    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero - Split Design */}
            <section className="relative pt-32 pb-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CA9BFA]/20 to-[#1B1AFE]/20 text-[#1B1AFE] text-sm font-semibold mb-6">
                                <Sparkles className="w-4 h-4" />
                                SaaS Development
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-[#0D1F1A]">Construisez Votre</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#CA9BFA] via-[#1B1AFE] to-[#0284C7] bg-clip-text text-transparent">
                                    Plateforme SaaS
                                </span>
                            </h1>

                            <p className="text-xl text-[#47534E] mb-8 leading-relaxed">
                                De la conception à la mise en production, nous développons votre plateforme SaaS complète avec toutes les fonctionnalités essentielles.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Button size="lg" className="bg-gradient-to-r from-[#CA9BFA] to-[#1B1AFE]">
                                    Démarrer Mon SaaS
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Voir Démo
                                </Button>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                                <div>
                                    <div className="text-2xl font-bold text-[#CA9BFA]">12-16</div>
                                    <div className="text-xs text-[#47534E]">Semaines</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#1B1AFE]">30+</div>
                                    <div className="text-xs text-[#47534E]">SaaS Lancés</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[#0284C7]">99.9%</div>
                                    <div className="text-xs text-[#47534E]">Uptime</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual - Feature Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {saasFeatures.slice(0, 4).map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#F9FAF9] border border-[#E7EBE9] hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${index === 0 ? "from-[#CA9BFA] to-[#E9D5FF]" :
                                            index === 1 ? "from-[#1B1AFE] to-[#4B4AFF]" :
                                                index === 2 ? "from-[#0284C7] to-[#0EA5E9]" :
                                                    "from-[#059669] to-[#10B981]"
                                        } flex items-center justify-center mb-4`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-[#0D1F1A] text-sm mb-2">{feature.title}</h3>
                                    <p className="text-xs text-[#47534E] leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Features - Bento Grid */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Tout Ce Dont Votre SaaS a Besoin
                        </h2>
                        <p className="text-lg text-[#47534E]">
                            Fonctionnalités enterprise-grade incluses
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {saasFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-3xl bg-white border-2 border-[#E7EBE9] hover:border-[#CA9BFA] transition-all hover:shadow-2xl"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">{feature.title}</h3>
                                <p className="text-[#47534E] leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules - Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Modules Inclus
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((module, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                                <h3 className="text-lg font-bold text-[#0D1F1A] mb-4">{module.name}</h3>
                                <ul className="space-y-2">
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-[#47534E]">
                                            <Check className="w-4 h-4 text-[#CA9BFA] shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack - Visual Grid */}
            <section className="py-20 bg-gradient-to-br from-[#0D1F1A] via-[#1B1AFE] to-[#CA9BFA] text-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            Stack Technologique Modern
                        </h2>
                        <p className="text-lg text-white/80">
                            Les meilleures technologies pour votre SaaS
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(techStack).map(([category, techs], index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                                <h3 className="text-lg font-bold mb-4 capitalize">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techs.map((tech, idx) => (
                                        <Badge key={idx} className="bg-white/20 text-white border-white/30">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing - Modern Layout */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#0D1F1A] mb-4">
                            Packages SaaS
                        </h2>
                        <p className="text-lg text-[#47534E]">
                            Solutions adaptées à chaque étape de croissance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-3xl border-2 ${tier.color} ${tier.popular ? "shadow-2xl scale-105 bg-gradient-to-br from-[#F9FAF9] to-white" : "bg-white"
                                    } transition-all hover:shadow-2xl`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF] text-white px-4 py-1">
                                            {tier.badge}
                                        </Badge>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">{tier.name}</h3>
                                    <div className="text-3xl font-bold text-[#1B1AFE] mb-1">{tier.price}</div>
                                    <div className="text-sm text-[#47534E]">{tier.duration}</div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-[#CA9BFA] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#47534E]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${tier.popular
                                            ? "bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]"
                                            : "bg-[#0D1F1A]"
                                        }`}
                                    size="lg"
                                    asChild
                                >
                                    <Link href="/contact">Choisir {tier.name}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Gradient */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#CA9BFA] via-[#1B1AFE] to-[#0284C7] p-12 lg:p-16 text-white text-center">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <Cloud className="w-16 h-16 mx-auto mb-6" />
                            <h3 className="text-4xl font-bold mb-4">
                                Lancez Votre SaaS en 2025
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                Discutons de votre vision et construisons ensemble la plateforme SaaS de vos rêves
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="bg-white text-[#1B1AFE] hover:bg-white/90">
                                    Réserver une Consultation
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    Voir le Portfolio
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
