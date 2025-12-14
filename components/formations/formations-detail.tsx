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

    const formations = [
        {
            id: "fondamentaux",
            title: "Business Model Canvas en Action",
            category: "Fondamentaux Startup",
            forWho: "Porteurs de projet en phase d'idéation ou pré-MVP",
            prerequisites: "Aucun",
            results: [
                "Construire un business model validé",
                "Identifier vos segments clients prioritaires",
                "Définir une proposition de valeur claire",
                "Structurer votre plan d'action MVP",
            ],
            format: "Présentiel",
            duration: "2 jours (14h)",
            rhythm: "Weekend intensif",
            instructor: {
                name: "Karim Benali",
                role: "Ex-CEO TechCorp, 3 exits réussies",
                experience: "15 ans en tech, accompagné 50+ startups",
            },
            color: "from-[#059669] to-[#10B981]",
        },
        {
            id: "produit",
            title: "MVP: De l'Idée au Test Utilisateur",
            category: "Produit & MVP",
            forWho: "Fondateurs avec une idée validée, prêts à construire",
            prerequisites: "Business model défini",
            results: [
                "Définir votre MVP minimum viable",
                "Conduire des tests utilisateurs efficaces",
                "Itérer rapidement sur les retours",
                "Prioriser les fonctionnalités critiques",
            ],
            format: "Hybride",
            duration: "3 semaines (12h)",
            rhythm: "2h/semaine + travail autonome",
            instructor: {
                name: "Amira Hadj",
                role: "Founder EduTech DZ, 50k+ utilisateurs",
                experience: "Product Manager chez 3 scale-ups",
            },
            color: "from-[#1B1AFE] to-[#4B4AFF]",
        },
        {
            id: "commercial",
            title: "Stratégie Commerciale & Pipeline de Vente",
            category: "Développement Commercial",
            forWho: "Startups avec MVP lancé, cherchant à acquérir clients",
            prerequisites: "Produit fonctionnel",
            results: [
                "Structurer un pipeline de vente B2B/B2C",
                "Définir votre stratégie d'acquisition",
                "Maîtriser les techniques de closing",
                "Optimiser votre pricing et go-to-market",
            ],
            format: "Présentiel",
            duration: "3 jours (21h)",
            rhythm: "Intensif sur 1 semaine",
            instructor: {
                name: "Youcef Mansouri",
                role: "VP Sales, 10M€ de deals signés",
                experience: "20 ans en vente B2B et développement commercial",
            },
            color: "from-[#CA9BFA] to-[#E9D5FF]",
        },
        {
            id: "management",
            title: "Leadership Fondateur & Management d'Équipe",
            category: "Management & Organisation",
            forWho: "Fondateurs gérant une équipe de 3+ personnes",
            prerequisites: "Équipe constituée",
            results: [
                "Manager une équipe startup efficacement",
                "Déléguer et prioriser stratégiquement",
                "Structurer des process internes",
                "Gérer les conflits et la croissance",
            ],
            format: "En ligne",
            duration: "4 semaines (16h)",
            rhythm: "1 session/semaine + coaching",
            instructor: {
                name: "Sarah Khelifi",
                role: "COO, scalé 3 startups de 5 à 50 personnes",
                experience: "Ex-McKinsey, spécialiste organisation",
            },
            color: "from-[#0284C7] to-[#0EA5E9]",
        },
        {
            id: "juridique",
            title: "Création d'Entreprise en Algérie: Guide Complet",
            category: "Juridique & Administratif",
            forWho: "Porteurs de projet prêts à créer leur structure",
            prerequisites: "Projet défini",
            results: [
                "Choisir la bonne forme juridique (SPA, SARL, EURL)",
                "Monter un dossier Label Startup complet",
                "Comprendre le cadre réglementaire algérien",
                "Éviter les erreurs juridiques coûteuses",
            ],
            format: "Présentiel",
            duration: "1 jour (7h)",
            rhythm: "Journée intensive",
            instructor: {
                name: "Maître Farid Bouazza",
                role: "Avocat d'affaires, spécialiste startups",
                experience: "100+ créations accompagnées",
            },
            color: "from-[#7C3AED] to-[#A78BFA]",
        },
        {
            id: "financement",
            title: "Pitch Deck & Préparation Investisseurs",
            category: "Financement & Levée",
            forWho: "Startups avec traction, préparant une levée",
            prerequisites: "Métriques clés suivies, clients existants",
            results: [
                "Construire un pitch deck qui convertit",
                "Maîtriser la lecture financière investisseur",
                "Préparer votre due diligence",
                "Négocier les termes d'investissement",
            ],
            format: "Hybride",
            duration: "2 semaines (10h)",
            rhythm: "Sessions + simulations pitch",
            instructor: {
                name: "Mehdi Larbi",
                role: "Angel Investor, 15+ deals",
                experience: "Ex-VC, levé 50M€ pour ses startups",
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
                    {formations.map((formation, index) => (
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
                                    <div>
                                        <h4 className="font-bold text-[#0D1F1A] mb-3">Intervenant</h4>
                                        <div className="p-4 rounded-xl bg-[#F9FAF9] border border-[#E7EBE9]">
                                            <p className="font-bold text-[#0D1F1A] mb-1">{formation.instructor.name}</p>
                                            <p className="text-sm text-[#1B1AFE] font-semibold mb-2">{formation.instructor.role}</p>
                                            <p className="text-xs text-[#47534E]">{formation.instructor.experience}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Results */}
                                <div>
                                    <h4 className="font-bold text-[#0D1F1A] mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                                        À la fin, vous saurez
                                    </h4>
                                    <div className="space-y-3">
                                        {formation.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F9FAF9]">
                                                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                                                <span className="text-sm text-[#0D1F1A] font-medium leading-relaxed">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#E7EBE9]">
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
            </div>
        </section>
    )
}
