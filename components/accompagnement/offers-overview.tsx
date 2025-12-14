"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Target } from "lucide-react"

export function OffersOverview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const offers = [
        {
            emoji: "🟢",
            name: "Le Starter",
            target: "Pour les fondateurs en phase d'idée",
            objective: "Valider et structurer un projet",
            outcomes: ["Business model validé", "Direction MVP claire", "Pitch structuré"],
            color: "from-[#059669] to-[#10B981]",
            href: "/postuler",
        },
        {
            emoji: "🔵",
            name: "L'Accélérateur",
            target: "Pour les startups avec MVP",
            objective: "Acquérir des clients et préparer le financement",
            outcomes: ["Traction démontrée", "Pitch deck professionnel", "Stratégie de croissance"],
            color: "from-[#1B1AFE] to-[#4B4AFF]",
            href: "/postuler",
        },
        {
            emoji: "🟠",
            name: "L'Expert",
            target: "Pour startups en croissance & PME",
            objective: "Scaler et innover",
            outcomes: ["Roadmap de croissance", "Stratégie d'innovation", "Support leadership"],
            color: "from-[#EA580C] to-[#FB923C]",
            href: "/postuler",
        },
    ]

    return (
        <section ref={ref} className="py-24 bg-[#F9FAF9]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Nos Offres d'Accompagnement
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Trois parcours structurés selon votre stade de développement.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="relative h-full bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-2xl transition-all duration-300">
                                {/* Icon */}
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                                    {offer.emoji}
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl font-bold text-[#0D1F1A] mb-2">
                                    {offer.name}
                                </h3>

                                {/* Target */}
                                <p className="text-sm text-[#47534E] font-medium mb-6">
                                    {offer.target}
                                </p>

                                {/* Objective */}
                                <div className="mb-6">
                                    <div className="flex items-start gap-2 mb-3">
                                        <Target className="w-5 h-5 text-[#1B1AFE] mt-0.5 shrink-0" />
                                        <p className="text-sm font-bold text-[#0D1F1A]">
                                            Objectif
                                        </p>
                                    </div>
                                    <p className="text-sm text-[#47534E] leading-relaxed ml-7">
                                        {offer.objective}
                                    </p>
                                </div>

                                {/* Outcomes */}
                                <div className="mb-8">
                                    <p className="text-xs font-bold text-[#47534E] uppercase tracking-wide mb-3">
                                        Résultats clés
                                    </p>
                                    <ul className="space-y-2">
                                        {offer.outcomes.map((outcome, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offer.color} mt-2 shrink-0`} />
                                                <span className="text-sm text-[#47534E]">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <Button
                                    className={`w-full bg-gradient-to-r ${offer.color} hover:opacity-90 text-white font-semibold rounded-xl transition-all group-hover:scale-105`}
                                    asChild
                                >
                                    <Link href={offer.href} className="flex items-center justify-center gap-2">
                                        Voir le programme
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>

                                {/* Hover gradient overlay */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-all pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
