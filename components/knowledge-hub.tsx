"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, BookOpen, Scale, Megaphone, Calculator, Download, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function KnowledgeHub() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = [
    { icon: FileText, title: "Démarches entrepreneuriales", count: 12, color: "from-blue-500 to-cyan-500" },
    { icon: BookOpen, title: "Construction Produit", count: 8, color: "from-purple-500 to-pink-500" },
    { icon: Calculator, title: "Finance & levée", count: 15, color: "from-green-500 to-emerald-500" },
    { icon: Scale, title: "Légal", count: 10, color: "from-orange-500 to-red-500" },
    { icon: Megaphone, title: "Marketing & acquisition", count: 14, color: "from-indigo-500 to-purple-500" },
    { icon: Download, title: "Modèles & templates", count: 20, color: "from-pink-500 to-rose-500" },
  ]

  const featuredResources = [
    {
      type: "Guide Premium",
      title: "Le Guide Complet de la Création d'Entreprise en Algérie 2024",
      description: "Tout ce que vous devez savoir pour créer votre SPA, SARL ou EURL",
      image: "/business-documents-office.jpg",
      downloads: "1.2k",
      badge: "Gratuit",
    },
    {
      type: "Template",
      title: "Business Plan Prêt à l'Emploi",
      description: "Template Excel avec projections financières automatiques",
      image: "/financial-planning-meeting.png",
      downloads: "856",
      badge: "Premium",
    },
    {
      type: "Checklist",
      title: "Checklist MVP en 30 Jours",
      description: "Méthodologie step-by-step pour lancer votre produit rapidement",
      image: "/product-development-team.png",
      downloads: "2.1k",
      badge: "Gratuit",
    },
  ]

  return (
    <section id="ressources" className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#1B1AFE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#CA9BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-[#1B1AFE]/10 to-[#CA9BFA]/10 text-[#1B1AFE] font-semibold text-sm mb-6">
            Hub Ressources
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] text-balance mb-6 tracking-tight">
            Apprenez, Grandissez, <br />
            <span className="bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] bg-clip-text text-transparent">
              Réussissez
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#47534E] leading-relaxed">
            Guides, templates et ressources pour accélérer votre parcours entrepreneurial
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/ressources/${category.title.toLowerCase().replace(/ /g, '-')}`}>
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-[#1B1AFE]/20 bg-gradient-to-br from-[#F9FAF9] to-white transition-all duration-300 hover:shadow-xl rounded-3xl h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0D1F1A] text-xl mb-2 group-hover:text-[#1B1AFE] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[#47534E] text-sm mb-4">{category.count} ressources disponibles</p>
                    <div className="flex items-center text-[#1B1AFE] font-semibold text-sm group-hover:gap-3 transition-all">
                      Explorer
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B1AFE]/0 to-[#CA9BFA]/0 group-hover:from-[#1B1AFE]/5 group-hover:to-[#CA9BFA]/5 transition-all rounded-3xl pointer-events-none" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-3xl font-bold text-[#0D1F1A]">Ressources Populaires</h3>
            <Button variant="ghost" className="text-[#1B1AFE] font-semibold" asChild>
              <Link href="/ressources">
                Tout voir
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Card className="group overflow-hidden border border-[#E7EBE9] hover:border-[#1B1AFE]/30 hover:shadow-2xl transition-all duration-300 rounded-3xl h-full">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F9FAF9] to-[#E7EBE9]">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${resource.badge === "Gratuit"
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] text-white"
                        }`}>
                        {resource.badge}
                      </span>
                    </div>

                    {/* Downloads */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {resource.downloads} téléchargements
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#1B1AFE]/10 text-[#1B1AFE] rounded-full mb-3">
                      {resource.type}
                    </span>
                    <h4 className="font-bold text-[#0D1F1A] text-lg mb-3 leading-snug group-hover:text-[#1B1AFE] transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-[#47534E] leading-relaxed mb-6">
                      {resource.description}
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] hover:opacity-90 text-white rounded-full font-semibold"
                      size="lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 h-14 px-8 bg-[#1B1AFE] text-white font-semibold rounded-full hover:bg-[#1B1AFE]/90 transition-all hover:scale-105"
              asChild
            >
              <Link href="/ressources">
                Explorer toutes les ressources
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 border-2 border-[#1B1AFE] text-[#1B1AFE] hover:bg-[#1B1AFE]/5 rounded-full font-semibold"
              asChild
            >
              <Link href="/blog">Lire le blog</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
