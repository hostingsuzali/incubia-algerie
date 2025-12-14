"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, X } from "lucide-react"

export function WhoIsItFor() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const adaptedFor = [
        "Vous êtes actif sur votre projet",
        "Vous cherchez des résultats concrets",
        "Vous acceptez le feedback direct",
        "Vous êtes prêt à exécuter rapidement",
        "Vous voulez apprendre de praticiens",
    ]

    const notAdaptedFor = [
        "Vous cherchez seulement un certificat",
        "Vous n'avez pas de temps à investir",
        "Vous attendez des solutions toutes faites",
        "Vous refusez d'être challengé",
        "Vous voulez de la théorie académique",
    ]

    return (
        <section ref={ref} className="py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        À Qui C'est Destiné ?
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Soyons clairs sur ce qui fonctionne et ce qui ne fonctionne pas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Adapted For */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-[#059669]/5 to-[#10B981]/5 rounded-3xl p-8 border-2 border-[#059669]/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#059669] flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0D1F1A]">Adapté si</h3>
                        </div>
                        <ul className="space-y-4">
                            {adaptedFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#059669] shrink-0 mt-0.5" />
                                    <span className="text-[#0D1F1A] font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not Adapted For */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-[#DC2626]/5 to-[#EF4444]/5 rounded-3xl p-8 border-2 border-[#DC2626]/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#DC2626] flex items-center justify-center">
                                <X className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0D1F1A]">Pas adapté si</h3>
                        </div>
                        <ul className="space-y-4">
                            {notAdaptedFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <X className="w-6 h-6 text-[#DC2626] shrink-0 mt-0.5" />
                                    <span className="text-[#0D1F1A] font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-[#47534E] max-w-2xl mx-auto leading-relaxed">
                        <strong className="text-[#0D1F1A]">Notre approche est directe et exigeante.</strong> Nous cherchons des fondateurs qui veulent progresser rapidement, pas ceux qui cherchent du confort.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
