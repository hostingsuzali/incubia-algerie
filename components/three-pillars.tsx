"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, GraduationCap, Building2, CheckCircle2, Users, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ThreePillars() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const pillars = [
        {
            number: "01",
            icon: Rocket,
            title: "Programmes Structurés",
            subtitle: "Startup & Growth",
            description: "Nous transformons les idées prometteuses en entreprises rentables. Bénéficiez d'un parcours adapté pour valider votre marché (Incubation) ou pour scaler et lever des fonds (Accélération).",
            points: [
                "Méthodologie Lean Startup éprouvée",
                "Mentoring individuel intensif",
                "Préparation aux financements publics et privés",
            ],
            cta: "Postuler",
            href: "/programmes",
            color: "from-[#1B1AFE] to-[#4B4AFF]",
            bgColor: "bg-[#1B1AFE]",
        },
        {
            number: "02",
            icon: GraduationCap,
            title: "Formations ",
            subtitle: "& Ateliers Stratégiques",
            description: "Renforcez vos compétences avec des programmes conçus par des professionnels. Notre catalogue est ouvert aux entrepreneurs, à leurs équipes et aux professionnels souhaitant maîtriser les défis du marché algérien.",
            points: [
                "Catalogue en Marketing Digital, Finance, Leadership, Tech",
                "Formations incluses dans nos programmes d'Incubation",
                "Sessions intensives et Masterclasses thématiques",
            ],
            cta: "Découvrir le Catalogue de Formations",
            href: "/formations",
            color: "from-[#CA9BFA] to-[#E9D5FF]",
            bgColor: "bg-[#CA9BFA]",
            featured: true,
        },
        {
            number: "03",
            icon: Building2,
            title: "Services Complémentaires",
            subtitle: "Essentiels",
            description: "Concentrez-vous sur votre produit. Nous nous occupons de l'infrastructure essentielle : adresse légale, espace de travail stimulant et facilitation des démarches administratives.",
            points: [
                "Domiciliation d'entreprise (Adresse et Siège Social)",
                "Accès à l'Espace de Coworking",
                "Aide à la constitution de dossiers de Financement",
            ],
            cta: "Voir Tous les Services",
            href: "/services",
            color: "from-[#0284C7] to-[#0EA5E9]",
            bgColor: "bg-[#0284C7]",
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-gradient-to-b from-[#F9FAF9] to-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-[#1B1AFE]/10 to-[#CA9BFA]/10 text-[#1B1AFE] font-semibold text-sm mb-6">
                        Notre Approche 360°
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6 text-balance">
                        De l'Idée au Succès :{" "}
                        <span className="bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] bg-clip-text text-transparent">
                            Nos 3 Piliers
                        </span>{" "}
                        pour Votre Croissance
                    </h2>
                    <p className="text-lg md:text-xl text-[#47534E] leading-relaxed">
                        Que vous soyez en phase d'idéation, de croissance rapide ou que vous cherchiez à acquérir de nouvelles compétences,{" "}
                        <strong className="text-[#1B1AFE]">Incuba-DZ</strong> est votre partenaire stratégique.
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative group ${pillar.featured ? 'lg:-mt-8' : ''}`}
                        >
                            {/* Featured Badge */}
                            {pillar.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                                        <Award className="w-3.5 h-3.5" />
                                        NOUVEAU FOCUS
                                    </div>
                                </div>
                            )}

                            <div className={`relative h-full bg-white rounded-3xl p-8 md:p-10 border-2 ${pillar.featured ? 'border-[#CA9BFA] shadow-2xl shadow-[#CA9BFA]/20' : 'border-[#E7EBE9] hover:border-[#1B1AFE]/30'
                                } hover:shadow-2xl transition-all duration-300`}>
                                {/* Number Badge */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} text-white font-bold text-2xl mb-6 shadow-lg`}>
                                    {pillar.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0D1F1A] mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-[#1B1AFE] font-semibold mb-4">{pillar.subtitle}</p>

                                {/* Description */}
                                <p className="text-[#47534E] leading-relaxed mb-6">
                                    {pillar.description}
                                </p>

                                {/* Points */}
                                <div className="space-y-3 mb-8">
                                    {pillar.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#1B1AFE] shrink-0 mt-0.5" />
                                            <span className="text-sm text-[#47534E] leading-relaxed">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Button
                                    className={`w-full ${pillar.bgColor} hover:opacity-90 text-white rounded-xl font-semibold h-12 transition-all group-hover:scale-105`}
                                    asChild
                                >
                                    <Link href={pillar.href} className="flex items-center justify-center gap-2">
                                        {pillar.cta}
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>

                                {/* Decorative Gradient */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
