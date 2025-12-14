"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, MessageSquare, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function SimpleProcess() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const steps = [
        {
            number: "01",
            icon: FileText,
            title: "Candidature",
            description: "Soumettez votre idée ou votre projet via notre formulaire en ligne.",
            duration: "5 min",
        },
        {
            number: "02",
            icon: MessageSquare,
            title: "Évaluation & Entretien",
            description: "Notre comité d'experts examine votre potentiel et vous invite à un entretien.",
            duration: "1 semaine",
        },
        {
            number: "03",
            icon: CheckCircle2,
            title: "Intégration",
            description: "Rejoignez nos locaux, accédez aux mentors, aux formations et au réseau !",
            duration: "Immédiat",
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] font-semibold text-sm mb-6">
                        Processus Simplifié
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6 text-balance">
                        Démarrer Votre Aventure Startup{" "}
                        <span className="text-[#1B1AFE]">en 3 Étapes Simples</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B1AFE]/20 via-[#CA9BFA]/20 to-[#1B1AFE]/20" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Card */}
                                <div className="relative bg-gradient-to-br from-[#F9FAF9] to-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-xl transition-all duration-300 group">
                                    {/* Icon Circle */}
                                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center shadow-lg shadow-[#1B1AFE]/20 group-hover:scale-110 transition-transform">
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#1B1AFE]/5 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#1B1AFE]/30">{step.number}</span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-[#0D1F1A] mb-3 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#47534E] leading-relaxed text-center mb-4">
                                        {step.description}
                                    </p>

                                    {/* Duration Badge */}
                                    <div className="text-center">
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#CA9BFA]/10 text-[#1B1AFE] text-xs font-semibold">
                                            ⏱️ {step.duration}
                                        </span>
                                    </div>

                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1B1AFE]/0 to-[#CA9BFA]/0 group-hover:from-[#1B1AFE]/5 group-hover:to-[#CA9BFA]/5 transition-all pointer-events-none" />
                                </div>

                                {/* Arrow (except last) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-24 -right-4 z-20">
                                        <ArrowRight className="w-8 h-8 text-[#CA9BFA]" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <Button
                        size="lg"
                        className="gap-2 h-16 px-10 bg-[#1B1AFE] text-white font-bold rounded-full hover:bg-[#4B4AFF] transition-all hover:scale-105 shadow-xl text-lg"
                        asChild
                    >
                        <Link href="/postuler">
                            Commencer Maintenant
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
