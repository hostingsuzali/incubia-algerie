"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, MapPin, MessageSquare } from "lucide-react"

export function AccompagnementFinalCta() {
    return (
        <section className="relative py-32 bg-gradient-to-br from-[#0D1F1A] via-[#1a1a2e] to-[#0D1F1A] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1B1AFE] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Chaque projet n'a pas besoin du même accompagnement.
                    </h2>
                    <p className="text-2xl text-white/90 font-medium">
                        Parlons du vôtre.
                    </p>
                </motion.div>

                {/* CTA Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href="/contact?type=analyse" className="block group">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all h-full">
                                <div className="w-14 h-14 rounded-xl bg-[#1B1AFE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <FileText className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Analyse gratuite du projet
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Évaluez votre éligibilité et recevez des recommandations personnalisées
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="/contact?type=visite" className="block group">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all h-full">
                                <div className="w-14 h-14 rounded-xl bg-[#059669] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Réserver une visite
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Découvrez nos espaces et rencontrez l'équipe Incubia
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/contact" className="block group">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all h-full">
                                <div className="w-14 h-14 rounded-xl bg-[#CA9BFA] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Contacter l'équipe
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Posez vos questions et obtenez des réponses rapides
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Primary CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        className="h-16 px-12 bg-white text-[#0D1F1A] hover:bg-white/90 font-bold rounded-full transition-all hover:scale-105 shadow-2xl text-lg"
                        asChild
                    >
                        <Link href="/postuler">
                            Postuler Maintenant
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
