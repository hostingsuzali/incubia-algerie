"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Rocket, Users, Lightbulb } from "lucide-react"

export function ApproachPillars() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const pillars = [
        {
            icon: Search,
            emoji: "🔍",
            title: "Expertise Pratique",
            description: "Mentors entrepreneurs et experts opérationnels",
            color: "from-[#059669] to-[#10B981]",
        },
        {
            icon: Rocket,
            emoji: "🚀",
            title: "Accélération sur Mesure",
            description: "Programmes adaptés au stade et aux objectifs",
            color: "from-[#1B1AFE] to-[#4B4AFF]",
        },
        {
            icon: Users,
            emoji: "🤝",
            title: "Réseau & Opportunités",
            description: "Investisseurs, partenaires, décideurs",
            color: "from-[#CA9BFA] to-[#E9D5FF]",
        },
        {
            icon: Lightbulb,
            emoji: "💡",
            title: "Formation par l'Action",
            description: "Compétences concrètes, applicables immédiatement",
            color: "from-[#EA580C] to-[#FB923C]",
        },
    ]

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Notre Approche
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Un accompagnement structuré autour de 4 piliers fondamentaux.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-2xl transition-all duration-300">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {pillar.emoji}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-[#47534E] leading-relaxed">
                                    {pillar.description}
                                </p>

                                {/* Hover gradient overlay */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-all pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
