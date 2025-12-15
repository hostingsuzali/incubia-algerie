"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Linkedin, Award, Sparkles, TrendingUp, Target } from "lucide-react"

// Mock data - replace with real data
// Real leadership data
const leaders = [
    {
        id: 1,
        name: "Hichem Hammouche",
        role: "CEO & Co-founder",
        bio: "Expert en vente B2B et stratégie commerciale. Il dirige la vision d'Incubia pour transformer l'écosystème entrepreneurial algérien.",
        photo: "/hichem-hammouche.png",
        linkedin: "https://linkedin.com/in/hichemhammouche",
    },
    {
        id: 2,
        name: "Alexandre Mellal",
        role: "Head of Events & Community",
        bio: "Expert en communication et événementiel. Il anime la communauté et connecte les entrepreneurs aux meilleures opportunités.",
        photo: "/alexandre-mellal.png",
        linkedin: "#",
    },
]

// Real mentors data matching homepage & mentors page
const mentors = [
    {
        id: 1,
        name: "Hichem Hammouche",
        expertise: ["Vente B2B", "Négociation", "Closing"],
        category: "Sales",
        companies: ["Incubia", "SuzaLink"],
        photo: "/hichem-hammouche.png",
        linkedin: "https://linkedin.com/in/hichemhammouche",
    },
    {
        id: 2,
        name: "Radia Diffalah",
        expertise: ["Incubation", "Business Plan", "Financement"],
        category: "Finance",
        companies: ["ANSEJ", "CNAC Support"],
        photo: "/radia-difallah.png",
        linkedin: "#",
    },
    {
        id: 3,
        name: "Alexandre Mellal",
        expertise: ["Pitch", "Communication", "Event"],
        category: "Marketing",
        companies: ["EventPro", "TedX"],
        photo: "/alexandre-mellal.png",
        linkedin: "#",
    },
    {
        id: 4,
        name: "Amine Hallab",
        expertise: ["Management", "Stratégie", "Leadership"],
        category: "Leadership",
        companies: ["Consulting Group", "MNCs"],
        photo: "/placeholder-mentor.jpg",
        linkedin: "#",
    },
    {
        id: 5,
        name: "Mohamed Ben",
        expertise: ["Juridique", "Création Entreprise", "Contrats"],
        category: "Legal",
        companies: ["Cabinet Ben", "LegalTech"],
        photo: "/placeholder-mentor.jpg",
        linkedin: "#",
    },
]

const categories = ["Tous", "Marketing", "Finance", "Tech", "Leadership", "Sales", "Legal", "Design"]

export default function EquipePage() {
    const [filter, setFilter] = useState("Tous")

    const filteredMentors = filter === "Tous"
        ? mentors
        : mentors.filter(m => m.category === filter)

    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <Users className="w-4 h-4" />
                            Notre Équipe
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            L'Équipe Incubia
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Des experts passionnés au service de votre réussite entrepreneuriale
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-y border-[#E7EBE9]">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#4B4AFF] flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-[#0D1F1A] mb-2">100+</div>
                            <div className="text-sm text-[#47534E]">Mentors Certifiés</div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#CA9BFA] to-[#E9D5FF] flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-[#0D1F1A] mb-2">15+</div>
                            <div className="text-sm text-[#47534E]">Années d'Expérience</div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl font-bold text-[#0D1F1A] mb-2">200+</div>
                            <div className="text-sm text-[#47534E]">Startups Accompagnées</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4">
                            Direction
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto">
                            Une équipe de leaders expérimentés dédiée à votre succès
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leaders.map(person => (
                            <div
                                key={person.id}
                                className="group relative overflow-hidden rounded-2xl border border-[#E7EBE9] hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Users className="w-24 h-24 text-[#47534E]/30" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-1">{person.name}</h3>
                                    <p className="text-sm text-[#1B1AFE] font-semibold mb-3">{person.role}</p>
                                    <p className="text-sm text-[#47534E] mb-4 leading-relaxed">{person.bio}</p>
                                    <a
                                        href={person.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-[#1B1AFE] hover:underline font-semibold"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentors Section */}
            <section id="mentors" className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white scroll-mt-20">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CA9BFA]/10 text-[#CA9BFA] text-sm font-semibold mb-6">
                            <Sparkles className="w-4 h-4" />
                            Réseau de Mentors
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4">
                            Nos Mentors Experts
                        </h2>
                        <p className="text-lg text-[#47534E] max-w-2xl mx-auto mb-8">
                            100+ experts certifiés dans tous les domaines de l'entrepreneuriat pour vous guider vers le succès
                        </p>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map(cat => (
                                <Button
                                    key={cat}
                                    variant={filter === cat ? "default" : "outline"}
                                    onClick={() => setFilter(cat)}
                                    className={filter === cat ? "bg-[#1B1AFE]" : ""}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredMentors.map(mentor => (
                            <div
                                key={mentor.id}
                                className="p-6 rounded-2xl border border-[#E7EBE9] bg-white hover:border-[#1B1AFE] hover:shadow-lg transition-all group"
                            >
                                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#E7EBE9] group-hover:border-[#1B1AFE] transition-colors bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Users className="w-10 h-10 text-[#47534E]/30" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-[#0D1F1A] text-center mb-3">
                                    {mentor.name}
                                </h4>
                                <div className="flex flex-wrap gap-2 justify-center mb-4">
                                    {mentor.expertise.map(exp => (
                                        <Badge key={exp} variant="default" className="text-xs">
                                            {exp}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-xs text-[#47534E] text-center mb-4">
                                    Ex: {mentor.companies.join(", ")}
                                </p>
                                <a
                                    href={mentor.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-sm text-[#47534E] hover:text-[#1B1AFE] transition-colors font-semibold"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    Profil
                                </a>
                            </div>
                        ))}
                    </div>

                    {filteredMentors.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-[#47534E]">Aucun mentor trouvé dans cette catégorie.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Become a Mentor CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B1AFE] via-[#4B4AFF] to-[#CA9BFA] p-12 lg:p-16 text-white text-center">
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                                Devenez Mentor Incubia
                            </h3>
                            <p className="text-lg mb-8 opacity-90">
                                Partagez votre expertise et accompagnez la prochaine génération d'entrepreneurs algériens. Rejoignez notre réseau de mentors certifiés.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-[#1B1AFE] hover:bg-white/90"
                                    asChild
                                >
                                    <Link href="/contact">Rejoindre le Réseau</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10"
                                    asChild
                                >
                                    <Link href="/formations">En Savoir Plus</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
