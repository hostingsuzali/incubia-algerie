"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Clock, Monitor, Users as UsersIcon, ArrowRight } from "lucide-react"

export function FormationsDetail() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const defaultFormations: any[] = [
        {
            id: "creation-algerie",
            title: "Créer une Entreprise en Algérie (sans blocages)",
            category: "Création & Structuration",
            forWho: "Porteurs de projet prêts à créer leur structure juridique",
            prerequisites: "Projet défini",
            pricing: "30 000 DZD",
            results: [
                "Choisir la bonne forme juridique (EURL, SARL, SPA)",
                "Monter un dossier complet sans erreurs",
                "Comprendre le Label Startup et ses avantages",
                "Éviter les blocages administratifs coûteux",
            ],
            format: "Présentiel",
            duration: "1 jour (7h)",
            rhythm: "Journée intensive",
            instructor: {
                name: "Mohamed Ben",
                role: "Expert juridique & comptable",
                experience: "Spécialiste droit des affaires en Algérie",
            },
            color: "from-[#059669] to-[#10B981]",
        },
        {
            id: "financement-local",
            title: "Financer son Projet Localement",
            category: "Financement & Dispositifs",
            forWho: "Entrepreneurs cherchant un financement ANSEJ, CNAC, ou ANDI",
            prerequisites: "Projet structuré",
            pricing: "55 000 DZD",
            results: [
                "Monter un dossier ANSEJ/CNAC complet et conforme",
                "Maximiser vos chances d'acceptation",
                "Comprendre les critères d'éligibilité réels",
                "Éviter les erreurs qui font rejeter 60% des dossiers",
            ],
            format: "Présentiel",
            duration: "2 jours (14h)",
            rhythm: "Weekend intensif",
            instructor: {
                name: "Radia Diffalah",
                role: "Experte incubation & financement",
                experience: "Accompagné 100+ dossiers de financement",
            },
            color: "from-[#1B1AFE] to-[#4B4AFF]",
        },
        {
            id: "vente-b2b-algerie",
            title: "Vendre en B2B en Algérie",
            category: "Développement Commercial",
            forWho: "Startups B2B cherchant à acquérir leurs premiers clients",
            prerequisites: "Offre définie",
            pricing: "65 000 DZD",
            results: [
                "Prospecter efficacement en contexte algérien",
                "Structurer votre approche commerciale B2B",
                "Gérer les cycles de vente longs et les décideurs",
                "Éviter les erreurs de pricing et de positionnement",
            ],
            format: "Présentiel",
            duration: "3 jours (21h)",
            rhythm: "Intensif sur 1 semaine",
            instructor: {
                name: "Hichem Hammouche",
                role: "Expert développement commercial B2B",
                experience: "15+ ans en vente B2B, secteurs variés",
            },
            color: "from-[#CA9BFA] to-[#E9D5FF]",
        },
        {
            id: "structurer-startup",
            title: "Structurer une Startup Early-Stage",
            category: "Management & Organisation",
            forWho: "Fondateurs gérant une équipe de 2-10 personnes",
            prerequisites: "Équipe constituée",
            pricing: "55 000 DZD",
            results: [
                "Organiser votre équipe et définir les rôles",
                "Mettre en place des process simples et efficaces",
                "Gérer les priorités et éviter la dispersion",
                "Éviter les erreurs d'organisation qui ralentissent",
            ],
            format: "Hybride",
            duration: "2 jours (14h)",
            rhythm: "2 sessions + suivi",
            instructor: {
                name: "Amine Hallab",
                role: "Expert management & structuration",
                experience: "Accompagné 30+ startups en phase early-stage",
            },
            color: "from-[#0284C7] to-[#0EA5E9]",
        },
        {
            id: "pitch-evenementiel",
            title: "Pitcher et Présenter son Projet",
            category: "Communication & Événementiel",
            forWho: "Fondateurs préparant un pitch, concours, ou événement",
            prerequisites: "Projet lancé",
            pricing: "40 000 DZD",
            results: [
                "Construire un pitch clair et impactant",
                "Présenter devant investisseurs ou jury",
                "Gérer le stress et les questions difficiles",
                "Éviter les erreurs qui font perdre l'attention",
            ],
            format: "Présentiel",
            duration: "1 jour (7h)",
            rhythm: "Journée intensive + simulations",
            instructor: {
                name: "Alexandre Mellal",
                role: "Expert événementiel & pitching",
                experience: "Organisé 50+ événements startup",
            },
            color: "from-[#7C3AED] to-[#A78BFA]",
        },
        {
            id: "business-model",
            title: "Valider son Business Model",
            category: "Stratégie & Modèle",
            forWho: "Porteurs de projet en phase de validation",
            prerequisites: "Idée définie",
            pricing: "45 000 DZD",
            results: [
                "Tester votre modèle économique avant de lancer",
                "Identifier vos segments clients prioritaires",
                "Définir une proposition de valeur claire",
                "Éviter de lancer un produit que personne ne veut",
            ],
            format: "Hybride",
            duration: "2 jours (14h)",
            rhythm: "Weekend + suivi en ligne",
            instructor: {
                name: "Radia Diffalah",
                role: "Experte incubation & transformation",
                experience: "Accompagné 80+ projets en validation",
            },
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
                        Formations Détaillées
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Orientées action, pas théorie. Résultats concrets, pas discours.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {defaultFormations.map((formation, index) => (
                        <motion.div
                            key={formation.id}
                            id={formation.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border-2 border-[#E7EBE9] hover:border-[#1B1AFE] hover:shadow-xl transition-all"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex-1">
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#F9FAF9] border border-[#E7EBE9] text-xs font-bold text-[#47534E] mb-4">
                                        {formation.category}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#0D1F1A] mb-2">
                                        {formation.title}
                                    </h3>
                                </div>
                                <div className={`hidden md:block w-16 h-16 rounded-xl bg-gradient-to-br ${formation.color} shadow-lg`} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    {/* For Who */}
                                    <div>
                                        <h4 className="font-bold text-[#0D1F1A] mb-3 flex items-center gap-2">
                                            <UsersIcon className="w-5 h-5 text-[#1B1AFE]" />
                                            Pour qui
                                        </h4>
                                        <p className="text-sm text-[#47534E] leading-relaxed">{formation.forWho}</p>
                                        {formation.prerequisites && (
                                            <p className="text-xs text-[#47534E] mt-2">
                                                <strong>Pré-requis:</strong> {formation.prerequisites}
                                            </p>
                                        )}
                                    </div>

                                    {/* Format */}
                                    <div>
                                        <h4 className="font-bold text-[#0D1F1A] mb-3 flex items-center gap-2">
                                            <Monitor className="w-5 h-5 text-[#1B1AFE]" />
                                            Format
                                        </h4>
                                        <div className="space-y-2 text-sm text-[#47534E]">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${formation.format === "Présentiel" ? "bg-[#059669]" : formation.format === "En ligne" ? "bg-[#1B1AFE]" : "bg-[#CA9BFA]"}`} />
                                                {formation.format}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-[#47534E]" />
                                                {formation.duration}
                                            </div>
                                            <div className="text-xs text-[#47534E]">{formation.rhythm}</div>
                                        </div>
                                    </div>

                                    {/* Instructor */}
                                    {formation.instructor && (
                                        <div>
                                            <h4 className="font-bold text-[#0D1F1A] mb-3">Intervenant</h4>
                                            <div className="p-4 rounded-xl bg-[#F9FAF9] border border-[#E7EBE9]">
                                                <p className="font-bold text-[#0D1F1A] mb-1">{formation.instructor.name}</p>
                                                <p className="text-sm text-[#1B1AFE] font-semibold mb-2">{formation.instructor.role}</p>
                                                <p className="text-xs text-[#47534E]">{formation.instructor.experience}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Pricing */}
                                    {formation.pricing && (
                                        <div>
                                            <h4 className="font-bold text-[#0D1F1A] mb-3">Tarif</h4>
                                            <div className="p-4 rounded-xl bg-gradient-to-br from-[#059669]/10 to-[#10B981]/10 border-2 border-[#059669]/20">
                                                <p className="text-2xl font-bold text-[#059669]">{formation.pricing}</p>
                                                <p className="text-xs text-[#47534E] mt-1">Formation complète</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column - Results */}
                                <div>
                                    <h4 className="font-bold text-[#0D1F1A] mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                                        À la fin, vous saurez
                                    </h4>
                                    <div className="space-y-3">
                                        {formation.results.map((result: string, idx: number) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F9FAF9]">
                                                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                                <span className="text-sm text-[#0D1F1A] font-medium leading-relaxed">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            < div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#E7EBE9]" >
                                <Button
                                    className={`flex-1 h-12 bg-gradient-to-r ${formation.color} hover:opacity-90 text-white font-semibold rounded-xl`}
                                    asChild
                                >
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        S'inscrire
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 h-12 border-2 border-[#1B1AFE] text-[#1B1AFE] hover:bg-[#1B1AFE]/5 rounded-xl font-semibold"
                                    asChild
                                >
                                    <Link href="/contact">Demander des informations</Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    )
}
