"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Rocket, TrendingUp, Users, Scale, DollarSign, Megaphone, ArrowRight } from "lucide-react"

export function FormationsOverview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const categories = [
        {
            icon: Lightbulb,
            title: "Fondamentaux Startup",
            description: "Idéation, business model, validation marché",
            level: "Débutant",
            color: "from-[#059669] to-[#10B981]",
            href: "#fondamentaux",
        },
        {
            icon: Rocket,
            title: "Produit & MVP",
            description: "Définition MVP, tests utilisateurs, itération produit",
            level: "Débutant",
            color: "from-[#1B1AFE] to-[#4B4AFF]",
            href: "#produit",
        },
        {
            icon: TrendingUp,
            title: "Développement Commercial & Growth",
            description: "Acquisition clients, vente B2B/B2C, stratégie commerciale, pricing",
            level: "Intermédiaire",
            color: "from-[#CA9BFA] to-[#E9D5FF]",
            href: "#commercial",
        },
        {
            icon: Users,
            title: "Management & Organisation",
            description: "Structuration équipe, leadership, gestion du temps, process internes",
            level: "Intermédiaire",
            color: "from-[#0284C7] to-[#0EA5E9]",
            href: "#management",
        },
        {
            icon: Scale,
            title: "Juridique & Administratif",
            description: "Création d'entreprise, Label Startup, cadre réglementaire algérien",
            level: "Débutant",
            color: "from-[#7C3AED] to-[#A78BFA]",
            href: "#juridique",
        },
        {
            icon: DollarSign,
            title: "Financement & Levée de Fonds",
            description: "Préparation investisseurs, pitch deck, lecture financière",
            level: "Avancé",
            color: "from-[#EA580C] to-[#FB923C]",
            href: "#financement",
        },
        {
            icon: Megaphone,
            title: "Événementiel & Visibilité",
            description: "Organisation événements, salons, networking, prise de parole",
            level: "Intermédiaire",
            color: "from-[#EC4899] to-[#F472B6]",
            href: "#evenementiel",
        },
    ]

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Débutant":
                return "bg-[#059669]/10 text-[#059669]"
            case "Intermédiaire":
                return "bg-[#1B1AFE]/10 text-[#1B1AFE]"
            case "Avancé":
                return "bg-[#EA580C]/10 text-[#EA580C]"
            default:
                return "bg-[#47534E]/10 text-[#47534E]"
        }
    }

    return (
        <section id="formations" ref={ref} className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Formations par Enjeux Réels
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Pas de disciplines scolaires. Des compétences organisées par problématiques concrètes que vous rencontrez.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={category.href}>
                                <div className="group h-full bg-white rounded-2xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-2xl transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <category.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-3 group-hover:text-[#1B1AFE] transition-colors">
                                        {category.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-[#47534E] leading-relaxed mb-4">
                                        {category.description}
                                    </p>

                                    {/* Level Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(category.level)}`}>
                                            {category.level}
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-[#47534E] group-hover:text-[#1B1AFE] group-hover:translate-x-1 transition-all" />
                                    </div>

                                    {/* Hover Gradient */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-all pointer-events-none`} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
