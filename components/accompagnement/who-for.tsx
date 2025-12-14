"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, X } from "lucide-react"

export function WhoFor() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const adaptedFor = [
        "Vous êtes engagé sur votre projet",
        "Vous cherchez des résultats concrets",
        "Vous acceptez le feedback et le challenge",
        "Vous êtes prêt à exécuter rapidement",
    ]

    const notFor = [
        "Vous cherchez uniquement de la théorie",
        "Vous n'avez pas de temps à consacrer",
        "Vous attendez des solutions toutes faites",
        "Vous n'êtes pas ouvert au changement",
    ]

    return (
        <section ref={ref} className="py-24 bg-[#F9FAF9]">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Pour Qui ?
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Incubia est sélectif. Nous travaillons avec des fondateurs et équipes prêts à s'engager.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Adapted For */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-3xl p-8 border-2 border-[#059669]/20 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-[#059669]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0D1F1A]">
                                    Adapté si
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {adaptedFor.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                        <span className="text-[#47534E] leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Not For */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-3xl p-8 border-2 border-[#DC2626]/20 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 flex items-center justify-center">
                                    <X className="w-6 h-6 text-[#DC2626]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#0D1F1A]">
                                    Pas adapté si
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {notFor.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <X className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                                        <span className="text-[#47534E] leading-relaxed">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
