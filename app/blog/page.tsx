"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, User, ChevronRight } from "lucide-react"

// Mock data
const featuredPost = {
    id: 1,
    title: "L'Écosystème Startup Algérien en 2025: État des Lieux et Perspectives",
    excerpt: "Une analyse approfondie des tendances, défis et opportunités pour les startups en Algérie cette année.",
    author: "Ahmed Benali",
    date: "2025-12-10",
    readTime: 8,
    category: "Écosystème",
    image: "/placeholder-blog.jpg",
    slug: "ecosysteme-startup-algerien-2025",
}

const posts = [
    {
        id: 2,
        title: "5 Erreurs à Éviter Lors de Votre Levée de Fonds",
        excerpt: "Les pièges courants que font les entrepreneurs et comment les éviter pour maximiser vos chances.",
        author: "Samia Khelifi",
        date: "2025-12-08",
        readTime: 6,
        category: "Finance",
        image: "/placeholder-blog.jpg",
        slug: "erreurs-levee-de-fonds",
    },
    {
        id: 3,
        title: "Comment Valider Votre Idée de Startup en 30 Jours",
        excerpt: "Méthodologie étape par étape pour tester votre concept avant d'investir temps et argent.",
        author: "Karim Meziane",
        date: "2025-12-05",
        readTime: 10,
        category: "Stratégie",
        image: "/placeholder-blog.jpg",
        slug: "valider-idee-startup-30-jours",
    },
    {
        id: 4,
        title: "Marketing Digital pour Startups: Guide Complet 2025",
        excerpt: "Les stratégies marketing les plus efficaces pour acquérir vos premiers clients.",
        author: "Yasmine Larbi",
        date: "2025-12-03",
        readTime: 12,
        category: "Marketing",
        image: "/placeholder-blog.jpg",
        slug: "marketing-digital-startups-2025",
    },
    {
        id: 5,
        title: "Lean Startup: Appliquer la Méthodologie en Algérie",
        excerpt: "Comment adapter les principes du Lean Startup au contexte algérien.",
        author: "Mehdi Bouazza",
        date: "2025-12-01",
        readTime: 7,
        category: "Méthodologie",
        image: "/placeholder-blog.jpg",
        slug: "lean-startup-algerie",
    },
    {
        id: 6,
        title: "Success Story: De l'Idée à 1M DA de CA en 6 Mois",
        excerpt: "Le parcours inspirant d'une startup algérienne qui a réussi son lancement.",
        author: "Nadia Amrani",
        date: "2025-11-28",
        readTime: 9,
        category: "Success Story",
        image: "/placeholder-blog.jpg",
        slug: "success-story-1m-da-6-mois",
    },
]

const categories = ["Tous", "Écosystème", "Finance", "Stratégie", "Marketing", "Méthodologie", "Success Story"]

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("Tous")
    const [currentPage, setCurrentPage] = useState(1)

    const filteredPosts = selectedCategory === "Tous"
        ? posts
        : posts.filter(p => p.category === selectedCategory)

    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] text-sm font-semibold mb-6">
                            <BookOpen className="w-4 h-4" />
                            Blog
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#0D1F1A] mb-6">
                            Blog Incubia
                        </h1>
                        <p className="text-xl text-[#47534E]">
                            Conseils, insights et actualités de l'écosystème startup algérien
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="group block rounded-3xl overflow-hidden border border-[#E7EBE9] hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center">
                                <BookOpen className="w-24 h-24 text-[#1B1AFE]/30" />
                            </div>
                            <div className="p-8 lg:py-12 flex flex-col justify-center">
                                <Badge variant="default" className="w-fit mb-4">
                                    {featuredPost.category}
                                </Badge>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1F1A] mb-4 group-hover:text-[#1B1AFE] transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-[#47534E] mb-6 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-[#47534E]">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        {featuredPost.author}
                                    </div>
                                    <span>•</span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {featuredPost.readTime} min
                                    </div>
                                    <span>•</span>
                                    <span>{new Date(featuredPost.date).toLocaleDateString('fr-FR')}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white border-y border-[#E7EBE9]">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <Button
                                key={cat}
                                variant={selectedCategory === cat ? "default" : "outline"}
                                onClick={() => setSelectedCategory(cat)}
                                className={selectedCategory === cat ? "bg-[#1B1AFE]" : ""}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map(post => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group block rounded-2xl border border-[#E7EBE9] overflow-hidden hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                                    <BookOpen className="w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Badge variant="default">{post.category}</Badge>
                                        <span className="text-xs text-[#47534E]">{post.readTime} min</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-[#47534E] mb-4 line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3 text-xs text-[#47534E]">
                                        <span>{post.author}</span>
                                        <span>•</span>
                                        <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center gap-2 mt-12">
                        <Button variant="outline" disabled={currentPage === 1}>
                            Précédent
                        </Button>
                        {[1, 2, 3, 4].map(page => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                onClick={() => setCurrentPage(page)}
                                className={currentPage === page ? "bg-[#1B1AFE]" : ""}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button variant="outline">
                            Suivant
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                            Ne Manquez Aucun Article
                        </h3>
                        <p className="text-lg text-[#47534E] mb-8">
                            Recevez nos derniers articles directement dans votre boîte mail
                        </p>
                        <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                            <Link href="/ressources#newsletter">
                                S'Abonner à la Newsletter
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
