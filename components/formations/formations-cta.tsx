"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, Rocket, MessageSquare } from "lucide-react"

export function FormationsCta() {
    return (
        <section className="relative py-32 bg-gradient-to-br from-[#0D1F1A] via-[#1a1a2e] to-[#0D1F1A] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CA9BFA] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1B1AFE] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance tracking-tight">
                        Les compétences seules <br />
                        ne suffisent pas.
                    </h2>
                    <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Ce qui compte, c'est <strong className="text-[#CA9BFA]">ce que vous en faites</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            size="lg"
                            className="h-16 px-12 bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] hover:opacity-90 text-[#0D1F1A] font-bold rounded-full transition-all hover:scale-105 shadow-2xl text-lg"
                            asChild
                        >
                            <Link href="#formations" className="flex items-center gap-2">
                                <GraduationCap className="w-5 h-5" />
                                Voir les Formations
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            className="h-16 px-12 bg-[#1B1AFE] hover:bg-[#4B4AFF] text-white font-bold rounded-full transition-all hover:scale-105 shadow-2xl text-lg"
                            asChild
                        >
                            <Link href="/programmes" className="flex items-center gap-2">
                                <Rocket className="w-5 h-5" />
                                Rejoindre un Programme
                            </Link>
                        </Button>
                    </div>

                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-10 border-2 border-white text-white hover:bg-white hover:text-[#0D1F1A] rounded-full font-bold transition-all hover:scale-105 text-lg"
                        asChild
                    >
                        <Link href="/contact" className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            Contacter l'Équipe
                        </Link>
                    </Button>

                    {/* Trust indicators */}
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#CA9BFA]" />
                            <span>Praticiens expérimentés</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1B1AFE]" />
                            <span>Résultats mesurables</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#059669]" />
                            <span>Contexte algérien</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
