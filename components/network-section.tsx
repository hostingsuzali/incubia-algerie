"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Star, Award, Users } from "lucide-react"

export function NetworkSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const mentors = [
        {
            name: "Karim Benali",
            role: "Ex-CEO TechCorp",
            expertise: "SaaS & Scaling",
            image: "/professional-young-algerian-man-portrait.jpg",
            sessions: 45,
            rating: 4.9,
        },
        {
            name: "Amira Hadj",
            role: "Founder EduTech DZ",
            expertise: "EdTech & Product",
            image: "/professional-algerian-woman-portrait.jpg",
            sessions: 38,
            rating: 4.8,
        },
        {
            name: "Youcef Mansouri",
            role: "Co-founder AgroTech",
            expertise: "Agritech & Innovation",
            image: "/professional-algerian-businessman-portrait.jpg",
            sessions: 52,
            rating: 4.9,
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
                        Notre Réseau d'Excellence
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] tracking-tight mb-6 text-balance">
                        Le Réseau le Plus Puissant{" "}
                        <span className="text-[#1B1AFE]">à Votre Service</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#47534E] leading-relaxed max-w-3xl mx-auto">
                        La réussite de votre startup dépend de l'expertise qui vous entoure. Accédez à un réseau exclusif de{" "}
                        <strong className="text-[#1B1AFE]">plus de 100 mentors certifiés</strong> et d'experts métier, prêts à partager leur expérience et vous guider à chaque étape critique.
                    </p>
                </motion.div>

                {/* Mentor Showcase */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="relative bg-white rounded-3xl p-8 border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-2xl transition-all duration-300">
                                {/* Photo */}
                                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-[#1B1AFE]/10 group-hover:ring-[#1B1AFE]/30 transition-all">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        width={128}
                                        height={128}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A]/40 to-transparent" />
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="font-bold text-[#0D1F1A] text-xl mb-2">{mentor.name}</h3>
                                    <p className="text-[#47534E] text-sm mb-4">{mentor.role}</p>

                                    {/* Expertise Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] text-[#1B1AFE] text-xs font-semibold mb-4">
                                        <Award className="w-3.5 h-3.5" />
                                        {mentor.expertise}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#E7EBE9]">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-[#CA9BFA] fill-[#CA9BFA]" />
                                            <span className="text-sm font-semibold text-[#0D1F1A]">{mentor.rating}</span>
                                        </div>
                                        <span className="text-[#47534E] text-xs">•</span>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4 text-[#1B1AFE]" />
                                            <span className="text-sm text-[#47534E]">{mentor.sessions} sessions</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1B1AFE]/0 to-[#CA9BFA]/0 group-hover:from-[#1B1AFE]/5 group-hover:to-[#CA9BFA]/5 transition-all pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                >
                    {[
                        { value: "100+", label: "Mentors Certifiés" },
                        { value: "500+", label: "Sessions Réalisées" },
                        { value: "4.9/5", label: "Satisfaction Moyenne" },
                        { value: "15+", label: "Secteurs Couverts" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                            <div className="text-3xl md:text-4xl font-bold text-[#1B1AFE] mb-2">{stat.value}</div>
                            <div className="text-sm text-[#47534E]">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
