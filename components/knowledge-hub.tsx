import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, BookOpen, Scale, Megaphone, Calculator, FolderOpen } from "lucide-react"

export function KnowledgeHub() {
  const categories = [
    { icon: FileText, title: "Démarches entrepreneuriales", count: 12 },
    { icon: BookOpen, title: "Construction Produit", count: 8 },
    { icon: Calculator, title: "Finance & levée", count: 15 },
    { icon: Scale, title: "Légal", count: 10 },
    { icon: Megaphone, title: "Marketing & acquisition", count: 14 },
    { icon: FolderOpen, title: "Modèles & templates", count: 20 },
  ]

  const articles = [
    {
      category: "Guide",
      title: "Comment créer une SPA en Algérie en 2024",
      excerpt: "Les étapes clés pour créer votre société par actions en Algérie.",
      image: "/business-documents-office.jpg",
    },
    {
      category: "Finance",
      title: "Comprendre le dispositif ANSEJ",
      excerpt: "Tout ce que vous devez savoir sur le financement ANSEJ.",
      image: "/financial-planning-meeting.png",
    },
    {
      category: "Produit",
      title: "Valider son MVP en 30 jours",
      excerpt: "Méthodologie pour tester rapidement votre produit minimum viable.",
      image: "/product-development-team.png",
    },
  ]

  return (
    <section id="ressources" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/20 text-foreground text-sm font-medium mb-6">
            Hub Ressources
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Apprenez, grandissez, réussissez
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Guides, articles et templates pour vous accompagner à chaque étape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group border-0 bg-muted hover:bg-secondary/10 transition-all cursor-pointer rounded-3xl shadow-sm"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <category.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{category.title}</h3>
                  <p className="text-sm text-foreground/60">{category.count} ressources</p>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8">Articles populaires</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group border-0 bg-card overflow-hidden hover:shadow-lg transition-all rounded-3xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary/20 text-foreground rounded-full mb-4">
                  {article.category}
                </span>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-secondary transition-colors leading-snug">
                  {article.title}
                </h4>
                <p className="text-sm text-foreground/60 leading-relaxed">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent border-2 border-foreground/20 hover:bg-foreground/5 rounded-full font-semibold"
          >
            Voir toutes les ressources
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
