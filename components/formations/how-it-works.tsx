"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Target, Users, TrendingUp, ArrowRight } from "lucide-react"

export function HowItWorks() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const steps = [
        {
            icon: GraduationCap,
            title: "Formation",
            description: "Acquisition de compétences concrètes",
            color: "from-[#CA9BFA] to-[#E9D5FF]",
        },
        {
            icon: Target,
            title: "Mise en Pratique",
            description: "Application immédiate sur votre projet",
            color: "from-[#1B1AFE] to-[#4B4AFF]",
        },
        {
            icon: Users,
            title: "Mentorat",
            description: "Challenge et validation par un expert",
            color: "from-[#059669] to-[#10B981]",
        },
        {
            icon: TrendingUp,
            title: "Résultat Mesurable",
            description: "Impact concret sur votre croissance",
            color: "from-[#EA580C] to-[#FB923C]",
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-[#F9FAF9]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Formation + Mentorat : <br />
                        <span className="text-[#1B1AFE]">Comment Ça Marche</span>
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Un système cohérent où chaque élément renforce l'autre pour maximiser votre progression.
                    </p>
                </motion.div>

                {/* Flow */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#CA9BFA] via-[#1B1AFE] to-[#EA580C]" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-6 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-xl transition-all h-full">
                                    {/* Step Number */}
                                    <div className={`absolute -top-4 left-6 w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mt-4 shadow-lg`}>
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-bold text-[#0D1F1A] mb-2 text-lg">{step.title}</h3>
                                    <p className="text-sm text-[#47534E] leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 -right-3 z-10">
                                        <ArrowRight className="w-6 h-6 text-[#1B1AFE]" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-white rounded-2xl p-6 border-2 border-[#E7EBE9]">
                        <h4 className="font-bold text-[#0D1F1A] mb-3">Quand le mentor intervient</h4>
                        <p className="text-sm text-[#47534E] leading-relaxed">
                            Après chaque formation ou module, pour challenger vos décisions et valider votre exécution.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border-2 border-[#E7EBE9]">
                        <h4 className="font-bold text-[#0D1F1A] mb-3">Comment les progrès sont suivis</h4>
                        <p className="text-sm text-[#47534E] leading-relaxed">
                            Objectifs mesurables définis en amont. Revues régulières sur les KPIs et ajustements si nécessaire.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border-2 border-[#E7EBE9]">
                        <h4 className="font-bold text-[#0D1F1A] mb-3">Comment les décisions sont challengées</h4>
                        <p className="text-sm text-[#47534E] leading-relaxed">
                            Feedback direct, questions difficiles, alternatives proposées. Pas de validation automatique.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
