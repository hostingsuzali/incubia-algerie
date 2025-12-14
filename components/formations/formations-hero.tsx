"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, Users, Award } from "lucide-react"

export function FormationsHero() {
    return (
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-white via-[#F9FAF9] to-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#CA9BFA]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1B1AFE]/20 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#CA9BFA]/10 to-[#E9D5FF]/10 border border-[#CA9BFA]/20 text-[#1B1AFE] font-semibold text-sm mb-8">
                        <Award className="w-4 h-4" />
                        Formations animées par des praticiens de l'écosystème entrepreneurial
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1F1A] tracking-tight mb-8 text-balance">
                        Développez les Compétences Clés pour{" "}
                        <span className="bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] bg-clip-text text-transparent">
                            Lancer, Structurer
                        </span>{" "}
                        et Développer Votre Startup
                    </h1>

                    <p className="text-xl md:text-2xl text-[#47534E] leading-relaxed max-w-4xl mx-auto mb-12">
                        Des formations pratiques et un mentorat ciblé en business, management et exécution terrain, adaptés à chaque stade de votre projet.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button
                            size="lg"
                            className="h-14 px-10 bg-gradient-to-r from-[#CA9BFA] to-[#E9D5FF] hover:opacity-90 text-[#0D1F1A] font-bold rounded-full transition-all hover:scale-105 shadow-xl text-lg"
                            asChild
                        >
                            <Link href="#formations" className="flex items-center gap-2">
                                <GraduationCap className="w-5 h-5" />
                                Voir les Formations
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-10 border-2 border-[#1B1AFE] text-[#1B1AFE] hover:bg-[#1B1AFE]/5 rounded-full font-bold text-lg"
                            asChild
                        >
                            <Link href="#mentorat" className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Découvrir le Mentorat
                            </Link>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {[
                            { value: "30+", label: "Formations disponibles" },
                            { value: "50+", label: "Mentors experts" },
                            { value: "500+", label: "Entrepreneurs formés" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[#47534E]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
