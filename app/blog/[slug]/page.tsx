"use client"

import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, BookOpen } from "lucide-react"

// Mock blog posts data (in production, this would come from Sanity CMS)
const blogPosts: Record<string, {
    title: string
    excerpt: string
    content: string[]
    author: string
    date: string
    readTime: number
    category: string
    image?: string
}> = {
    "ecosysteme-startup-algerien-2025": {
        title: "L'Écosystème Startup Algérien en 2025: État des Lieux et Perspectives",
        excerpt: "Une analyse approfondie des tendances, défis et opportunités pour les startups en Algérie cette année.",
        content: [
            "L'écosystème startup algérien a connu une transformation remarquable ces dernières années. Avec l'émergence de nouveaux incubateurs, l'augmentation des investissements et un cadre réglementaire plus favorable, 2025 s'annonce comme une année charnière pour les entrepreneurs algériens.",
            "Les principaux secteurs qui attirent les investisseurs incluent la fintech, l'edtech, l'agritech et les solutions e-commerce. Ces domaines répondent à des besoins réels de la population algérienne et offrent un potentiel de croissance significatif.",
            "Les défis persistent cependant : l'accès au financement reste difficile pour les premiers stades, la bureaucratie administrative peut ralentir les démarches, et le manque de talents techniques qualifiés constitue un frein pour certaines startups.",
            "Malgré ces obstacles, les perspectives sont encourageantes. Le gouvernement a lancé plusieurs initiatives pour soutenir l'entrepreneuriat, et de plus en plus d'Algériens de la diaspora reviennent pour créer leurs entreprises.",
        ],
        author: "Ahmed Benali",
        date: "2025-12-10",
        readTime: 8,
        category: "Écosystème",
    },
    "erreurs-levee-de-fonds": {
        title: "5 Erreurs à Éviter Lors de Votre Levée de Fonds",
        excerpt: "Les pièges courants que font les entrepreneurs et comment les éviter pour maximiser vos chances.",
        content: [
            "La levée de fonds est une étape cruciale pour toute startup en croissance. Pourtant, de nombreux entrepreneurs commettent des erreurs qui peuvent compromettre leurs chances de succès.",
            "Erreur #1 : Ne pas connaître ses chiffres. Les investisseurs veulent des données concrètes : CAC, LTV, MRR, churn rate... Préparez-vous à répondre à toutes les questions financières.",
            "Erreur #2 : Sous-estimer le temps nécessaire. Une levée de fonds prend généralement 6 à 12 mois. Commencez le processus bien avant d'avoir besoin des fonds.",
            "Erreur #3 : Cibler les mauvais investisseurs. Tous les VCs ne sont pas adaptés à votre startup. Recherchez ceux qui investissent dans votre secteur et votre stade de développement.",
            "Erreur #4 : Négliger le storytelling. Les chiffres sont importants, mais votre capacité à raconter une histoire convaincante l'est tout autant.",
            "Erreur #5 : Oublier la due diligence. Avant de signer, vérifiez la réputation de l'investisseur et parlez à d'autres fondateurs de leur portfolio.",
        ],
        author: "Samia Khelifi",
        date: "2025-12-08",
        readTime: 6,
        category: "Finance",
    },
    "valider-idee-startup-30-jours": {
        title: "Comment Valider Votre Idée de Startup en 30 Jours",
        excerpt: "Méthodologie étape par étape pour tester votre concept avant d'investir temps et argent.",
        content: [
            "Avant de quitter votre emploi ou d'investir vos économies, il est crucial de valider votre idée de startup. Voici une méthodologie éprouvée pour le faire en 30 jours.",
            "Semaine 1 : Définissez clairement le problème que vous résolvez. Interviewez au moins 20 personnes de votre cible pour comprendre leurs douleurs réelles.",
            "Semaine 2 : Créez un MVP (Produit Minimum Viable). Ce peut être aussi simple qu'une landing page avec un formulaire d'inscription.",
            "Semaine 3 : Testez votre MVP avec de vrais utilisateurs. Mesurez l'engagement, collectez les feedbacks, identifiez les frictions.",
            "Semaine 4 : Analysez les données et prenez une décision. Avez-vous suffisamment de signaux positifs pour continuer ? Pivot ou persévérance ?",
        ],
        author: "Karim Meziane",
        date: "2025-12-05",
        readTime: 10,
        category: "Stratégie",
    },
    "marketing-digital-startups-2025": {
        title: "Marketing Digital pour Startups: Guide Complet 2025",
        excerpt: "Les stratégies marketing les plus efficaces pour acquérir vos premiers clients.",
        content: [
            "Le marketing digital évolue rapidement. En 2025, les startups doivent adopter de nouvelles stratégies pour se démarquer dans un marché de plus en plus saturé.",
            "Content Marketing : Créez du contenu de valeur qui répond aux questions de votre audience. Blog, vidéos, podcasts - choisissez le format adapté à votre cible.",
            "SEO Local : Pour les startups ciblant le marché algérien, optimisez votre présence locale. Google My Business, mots-clés en arabe et français...",
            "Social Media : LinkedIn pour le B2B, Instagram et TikTok pour le B2C. Soyez présent là où se trouve votre audience.",
            "Paid Acquisition : Commencez petit, testez différentes audiences et créatives, puis scalez ce qui fonctionne.",
            "Email Marketing : Construisez votre liste email dès le premier jour. C'est l'actif marketing le plus précieux que vous pouvez posséder.",
        ],
        author: "Yasmine Larbi",
        date: "2025-12-03",
        readTime: 12,
        category: "Marketing",
    },
    "lean-startup-algerie": {
        title: "Lean Startup: Appliquer la Méthodologie en Algérie",
        excerpt: "Comment adapter les principes du Lean Startup au contexte algérien.",
        content: [
            "La méthodologie Lean Startup, popularisée par Eric Ries, a révolutionné la façon de créer des entreprises. Mais comment l'appliquer dans le contexte algérien ?",
            "Build-Measure-Learn : Ce cycle reste fondamental. Construisez rapidement, mesurez les résultats, apprenez et itérez.",
            "Adaptation locale : Le marché algérien a ses spécificités. Les cycles de décision peuvent être plus longs, la confiance se construit différemment.",
            "MVP en Algérie : Parfois un MVP peut être une version manuelle de votre service. L'important est de valider la demande avant d'automatiser.",
            "Pivots réussis : Plusieurs startups algériennes ont réussi après avoir pivoté. N'ayez pas peur de changer de direction si les données vous y poussent.",
        ],
        author: "Mehdi Bouazza",
        date: "2025-12-01",
        readTime: 7,
        category: "Méthodologie",
    },
    "success-story-1m-da-6-mois": {
        title: "Success Story: De l'Idée à 1M DA de CA en 6 Mois",
        excerpt: "Le parcours inspirant d'une startup algérienne qui a réussi son lancement.",
        content: [
            "Cette success story illustre comment une bonne exécution peut transformer une idée simple en une entreprise rentable en moins de 6 mois.",
            "Le Début : Fatima et son équipe ont identifié un problème simple - les petits commerces avaient du mal à gérer leur inventaire.",
            "La Solution : Une application mobile simple permettant de scanner les produits et de suivre les stocks en temps réel.",
            "L'Exécution : Au lieu de développer une app complète, ils ont commencé avec un prototype no-code et l'ont testé avec 10 commerces.",
            "La Croissance : Le bouche-à-oreille a fait le reste. En 6 mois, plus de 200 commerces utilisaient leur solution, générant 1M DA de revenus mensuels.",
            "Les Leçons : Proximité client, itération rapide, et focus sur la valeur ajoutée réelle plutôt que sur les fonctionnalités.",
        ],
        author: "Nadia Amrani",
        date: "2025-11-28",
        readTime: 9,
        category: "Success Story",
    },
}

// Related posts (simple implementation)
const getRelatedPosts = (currentSlug: string, category: string) => {
    return Object.entries(blogPosts)
        .filter(([slug, post]) => slug !== currentSlug && post.category === category)
        .slice(0, 2)
        .map(([slug, post]) => ({ slug, ...post }))
}

export default function BlogPostPage() {
    const params = useParams()
    const slug = params.slug as string

    const post = blogPosts[slug]

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(slug, post.category)

    return (
        <main className="min-h-screen bg-white">
            <ScrollProgress />
            <Header />

            {/* Article Header */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-[#F9FAF9] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[#47534E] hover:text-[#1B1AFE] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour au Blog
                    </Link>

                    {/* Category Badge */}
                    <Badge variant="default" className="mb-4">
                        {post.category}
                    </Badge>

                    {/* Title */}
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0D1F1A] mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#47534E] mb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </div>
                        <span className="text-[#E7EBE9]">•</span>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </div>
                        <span className="text-[#E7EBE9]">•</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min de lecture
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-[#47534E] font-medium">Partager :</span>
                        <div className="flex items-center gap-2">
                            <button className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="w-9 h-9 rounded-xl bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                                <Linkedin className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Feature Image Placeholder */}
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center mb-12">
                        <BookOpen className="w-24 h-24 text-[#1B1AFE]/30" />
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none">
                        {post.content.map((paragraph, index) => (
                            <p key={index} className="text-[#47534E] leading-relaxed mb-6 text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </article>

                    {/* Author Card */}
                    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[#F9FAF9] to-white border border-[#E7EBE9]">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center text-white text-xl font-bold shrink-0">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0D1F1A] mb-1">{post.author}</h4>
                                <p className="text-sm text-[#47534E]">
                                    Expert en entrepreneuriat et développement startup chez Incubia Algérie
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-gradient-to-br from-[#F9FAF9] to-white">
                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
                        <h3 className="text-2xl font-bold text-[#0D1F1A] mb-8">
                            Articles Similaires
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group rounded-2xl border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-[#E7EBE9] to-[#F9FAF9] flex items-center justify-center">
                                        <BookOpen className="w-16 h-16 text-[#47534E]/30 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="p-6">
                                        <Badge variant="default" className="mb-3">{post.category}</Badge>
                                        <h4 className="text-xl font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-[#47534E] line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
                    <h3 className="text-3xl font-bold text-[#0D1F1A] mb-4">
                        Prêt à Lancer Votre Startup ?
                    </h3>
                    <p className="text-lg text-[#47534E] mb-8">
                        Rejoignez notre programme d'accompagnement et bénéficiez de l'expertise de nos mentors
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-gradient-to-r from-[#1B1AFE] to-[#4B4AFF]">
                            <Link href="/postuler">Je Lance Mon Projet</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/formations">Découvrir les Formations</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </main>
    )
}
