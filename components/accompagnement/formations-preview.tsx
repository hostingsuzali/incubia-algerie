"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, TrendingUp, Users, Package, Scale, DollarSign, Calendar } from "lucide-react"

export function FormationsPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const categories = [
        {
            icon: TrendingUp,
            title: "Développement commercial & growth",
            color: "text-[#059669]",
            bg: "bg-[#059669]/10",
        },
        {
            icon: Users,
            title: "Management & organisation",
            color: "text-[#1B1AFE]",
            bg: "bg-[#1B1AFE]/10",
        },
        {
            icon: Package,
            title: "Produit & MVP",
            color: "text-[#CA9BFA]",
            bg: "bg-[#CA9BFA]/10",
        },
        {
            icon: Scale,
            title: "Juridique & administratif",
            color: "text-[#EA580C]",
            bg: "bg-[#EA580C]/10",
        },
        {
            icon: DollarSign,
            title: "Financement & levée de fonds",
            color: "text-[#0284C7]",
            bg: "bg-[#0284C7]/10",
        },
        {
            icon: Calendar,
            title: "Événementiel & visibilité",
            color: "text-[#DC2626]",
            bg: "bg-[#DC2626]/10",
        },
    ]

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Formations & Mentorat
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed mb-4">
                        Formations courtes et mentorat ciblé, accessibles aux incubés et non-incubés.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <h3 className="font-bold text-[#0D1F1A] text-sm leading-tight">
                                        {category.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        size="lg"
                        className="h-14 px-10 bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] hover:opacity-90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl"
                        asChild
                    >
                        <Link href="/formations" className="flex items-center gap-2">
                            Voir toutes les formations
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-10 border-2 border-[#1B1AFE] text-[#1B1AFE] hover:bg-[#1B1AFE]/5 rounded-full font-semibold"
                        asChild
                    >
                        <Link href="/formations#mentorat">Découvrir le mentorat</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
