"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function AccompagnementHero() {
    return (
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0D1F1A] via-[#1a1a2e] to-[#0D1F1A] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1B1AFE] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm"
                    >
                        <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                        Un accompagnement basé sur l'expérience terrain
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        L'Accompagnement Dont Votre Startup ou PME a Besoin pour{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA]">
                            Passer un Cap
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Incubation, accélération et montée en compétences au sein d'un écosystème structuré, orienté résultats.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="h-14 px-10 bg-white text-[#0D1F1A] hover:bg-white/90 font-bold rounded-full transition-all hover:scale-105 shadow-2xl"
                            asChild
                        >
                            <Link href="/postuler" className="flex items-center gap-2">
                                Découvrir les programmes
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-10 border-2 border-white text-white hover:bg-white hover:text-[#0D1F1A] rounded-full font-bold transition-all hover:scale-105"
                            asChild
                        >
                            <Link href="/formations">Voir les formations</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}
