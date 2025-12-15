"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, TrendingUp, Rocket, DollarSign, Megaphone, Users } from "lucide-react"

export function MentoratSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const mentors = [
        {
            name: "Hichem Hammouche",
            role: "Développement Commercial B2B",
            image: "/professional-young-algerian-man-portrait.jpg",
            domains: ["Prospection B2B", "Stratégie commerciale", "Closing"],
            availability: "Mentorat individuel",
            icon: TrendingUp,
            helps: "Structurer votre approche commerciale et acquérir vos premiers clients B2B",
            forWho: "Startups B2B en phase de commercialisation",
        },
        {
            name: "Radia Diffalah",
            role: "Incubation & Transformation Numérique",
            image: "/professional-algerian-woman-portrait.jpg",
            domains: ["Financement ANSEJ/CNAC", "Business Model", "Structuration"],
            availability: "Programmes & mentorat",
            icon: Rocket,
            helps: "Valider votre modèle et monter des dossiers de financement solides",
            forWho: "Porteurs de projet en phase de validation",
        },
        {
            name: "Alexandre Mellal",
            role: "Événementiel & Pitching",
            image: "/professional-algerian-businessman-portrait.jpg",
            domains: ["Pitch", "Présentation", "Communication"],
            availability: "Formations & coaching",
            icon: Megaphone,
            helps: "Pitcher efficacement devant investisseurs, jury, ou partenaires",
            forWho: "Fondateurs préparant concours ou levée",
        },
        {
            name: "Amine Hallab",
            role: "Management & Structuration",
            image: "/professional-young-algerian-man-portrait.jpg",
            domains: ["Organisation", "Process", "Management équipe"],
            availability: "Mentorat individuel",
            icon: Users,
            helps: "Organiser votre équipe et mettre en place des process efficaces",
            forWho: "Fondateurs gérant une équipe de 2-10 personnes",
        },
        {
            name: "Mohamed Ben",
            role: "Juridique & Comptabilité (Algérie)",
            image: "/professional-algerian-businessman-portrait.jpg",
            domains: ["Création entreprise", "Label Startup", "Conformité"],
            availability: "Formations & conseil",
            icon: DollarSign,
            helps: "Créer votre structure juridique sans erreurs et obtenir le Label Startup",
            forWho: "Porteurs de projet prêts à créer leur entreprise",
        },
    ]

    return (
        <section id="mentorat" ref={ref} className="py-32 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

                {/* Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-8 text-center">
                        Mentorat Basé sur l'Expérience Réelle
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#F9FAF9] rounded-2xl p-6 border-2 border-[#E7EBE9]">
                            <h3 className="font-bold text-[#0D1F1A] mb-3">Notre approche</h3>
                            <ul className="space-y-2 text-sm text-[#47534E]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1B1AFE] mt-1">•</span>
                                    Mentorat basé sur l'expérience réelle, pas la théorie
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1B1AFE] mt-1">•</span>
                                    Orienté décisions, priorités et résultats
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1B1AFE] mt-1">•</span>
                                    Disponible dans les programmes ou à la demande
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1B1AFE] mt-1">•</span>
                                    Complémentaire aux formations
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] rounded-2xl p-6 text-white">
                            <h3 className="font-bold mb-3">Ce que le mentorat n'est pas</h3>
                            <ul className="space-y-2 text-sm text-white/90">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✗</span>
                                    Du consulting payé à l'heure
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✗</span>
                                    Des solutions toutes faites
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✗</span>
                                    Un accompagnement passif
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1">✗</span>
                                    Une validation systématique
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Mentors Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-8 text-center">Nos Mentors</h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mentors.map((mentor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="group bg-white rounded-2xl p-6 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-xl transition-all cursor-pointer"
                            >
                                {/* Photo & Icon */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-2 ring-[#E7EBE9] group-hover:ring-[#1B1AFE] transition-all shrink-0">
                                        <Image
                                            src={mentor.image}
                                            alt={mentor.name}
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#0D1F1A] mb-1">{mentor.name}</h4>
                                        <p className="text-sm text-[#1B1AFE] font-semibold">{mentor.role}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-lg bg-[#F9FAF9] flex items-center justify-center group-hover:bg-[#1B1AFE] transition-colors">
                                        <mentor.icon className="w-5 h-5 text-[#47534E] group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                {/* Domains */}
                                <div className="mb-4">
                                    <p className="text-xs font-semibold text-[#47534E] mb-2">Domaines clés</p>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.domains.map((domain, idx) => (
                                            <span key={idx} className="px-2 py-1 rounded-full bg-[#F9FAF9] border border-[#E7EBE9] text-xs font-medium text-[#0D1F1A]">
                                                {domain}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* What they help with */}
                                {mentor.helps && (
                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-[#47534E] mb-1">Ce qu'il vous aide à faire</p>
                                        <p className="text-sm text-[#0D1F1A] leading-relaxed">{mentor.helps}</p>
                                    </div>
                                )}

                                {/* For who */}
                                <div className="pt-4 border-t border-[#E7EBE9]">
                                    <p className="text-xs text-[#47534E]">
                                        <strong>Pour qui:</strong> {mentor.forWho || mentor.availability}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mentorat Pricing */}
                    <div className="mt-16 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#0D1F1A] mb-6 text-center">Tarifs Mentorat</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE] transition-all">
                                <p className="text-sm font-semibold text-[#47534E] mb-2">Session individuelle</p>
                                <p className="text-3xl font-bold text-[#1B1AFE] mb-2">18 000 - 22 000 DZD</p>
                                <p className="text-xs text-[#47534E]">1h30 avec un mentor</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1B1AFE]/5 to-[#CA9BFA]/5 border-2 border-[#1B1AFE] scale-105">
                                <p className="text-sm font-semibold text-[#1B1AFE] mb-2">Pack 4 sessions</p>
                                <p className="text-3xl font-bold text-[#1B1AFE] mb-2">~65 000 DZD</p>
                                <p className="text-xs text-[#47534E]">Suivi sur 1 mois</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE] transition-all">
                                <p className="text-sm font-semibold text-[#47534E] mb-2">Suivi mensuel</p>
                                <p className="text-3xl font-bold text-[#1B1AFE] mb-2">50 000 - 60 000 DZD</p>
                                <p className="text-xs text-[#47534E]">Accompagnement continu</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
