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
            name: "Karim Benali",
            role: "Ex-CEO TechCorp",
            image: "/professional-young-algerian-man-portrait.jpg",
            domains: ["Développement commercial", "Product-Market Fit", "Scaling"],
            availability: "Programme Accélération",
            icon: TrendingUp,
        },
        {
            name: "Amira Hadj",
            role: "Founder EduTech DZ",
            image: "/professional-algerian-woman-portrait.jpg",
            domains: ["Produit", "User Growth", "Go-to-Market"],
            availability: "Programme Incubation",
            icon: Rocket,
        },
        {
            name: "Youcef Mansouri",
            role: "VP Sales AgroTech",
            image: "/professional-algerian-businessman-portrait.jpg",
            domains: ["Vente B2B", "Stratégie commerciale", "Partenariats"],
            availability: "À la demande",
            icon: Target,
        },
        {
            name: "Mehdi Larbi",
            role: "Angel Investor",
            image: "/professional-young-algerian-man-portrait.jpg",
            domains: ["Financement", "Pitch", "Due Diligence"],
            availability: "Programme Growth",
            icon: DollarSign,
        },
        {
            name: "Sarah Khelifi",
            role: "COO Scale-up",
            image: "/professional-algerian-woman-portrait.jpg",
            domains: ["Management", "Organisation", "Process"],
            availability: "Tous programmes",
            icon: Users,
        },
        {
            name: "Farid Bouazza",
            role: "Avocat d'Affaires",
            image: "/professional-algerian-businessman-portrait.jpg",
            domains: ["Juridique", "Label Startup", "Compliance"],
            availability: "À la demande",
            icon: Megaphone,
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

                                {/* Availability */}
                                <div className="pt-4 border-t border-[#E7EBE9]">
                                    <p className="text-xs text-[#47534E]">
                                        <strong>Disponibilité:</strong> {mentor.availability}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
