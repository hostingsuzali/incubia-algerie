"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Users, Zap, TrendingUp, CheckCircle2 } from "lucide-react"

export function WhyIncuba() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const reasons = [
        {
            icon: MapPin,
            title: "Expertise Locale",
            description: "Des programmes spécifiquement adaptés aux réglementations et au marché algérien.",
            color: "from-[#1B1AFE] to-[#4B4AFF]",
        },
        {
            icon: Users,
            title: "Réseau Qualifié",
            description: "Des connexions privilégiées avec des investisseurs et des partenaires clés.",
            color: "from-[#CA9BFA] to-[#E9D5FF]",
        },
        {
            icon: Zap,
            title: "Flexibilité",
            description: "Offres adaptées (Formations B2B, Incubation, Accélération) à tous les stades de maturité.",
            color: "from-[#0284C7] to-[#0EA5E9]",
        },
        {
            icon: TrendingUp,
            title: "Résultats Prouvés",
            description: "Des histoires de succès dans divers secteurs (Tech, Agritech, Services...).",
            color: "from-[#059669] to-[#10B981]",
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-gradient-to-b from-white to-[#F9FAF9] overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-[#1B1AFE]/10 to-[#CA9BFA]/10 text-[#1B1AFE] font-semibold text-sm mb-6">
                        Nos Avantages
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6 text-balance">
                        Pourquoi Choisir{" "}
                        <span className="bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] bg-clip-text text-transparent">
                            Incuba-DZ
                        </span>{" "}
                        ?
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-2xl transition-all duration-300">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <reason.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-[#47534E] leading-relaxed text-sm">
                                    {reason.description}
                                </p>

                                {/* Check Icon */}
                                <div className="absolute top-6 right-6">
                                    <CheckCircle2 className="w-6 h-6 text-[#1B1AFE]/20 group-hover:text-[#1B1AFE] transition-colors" />
                                </div>

                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-all pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
