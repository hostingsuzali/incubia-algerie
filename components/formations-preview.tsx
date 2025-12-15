import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function FormationsPreview() {
  const courses = [
    {
      title: "Créer une Entreprise en Algérie (sans blocages)",
      duration: "1 jour",
      level: "Création",
      description: "Choisir la bonne forme juridique et éviter les blocages administratifs.",
      pricing: "30 000 DZD",
    },
    {
      title: "Financer son Projet Localement",
      duration: "2 jours",
      level: "Financement",
      description: "Monter un dossier ANSEJ/CNAC complet et maximiser vos chances.",
      pricing: "55 000 DZD",
    },
    {
      title: "Vendre en B2B en Algérie",
      duration: "3 jours",
      level: "Commercial",
      description: "Prospecter efficacement et structurer votre approche commerciale B2B.",
      pricing: "65 000 DZD",
    },
    {
      title: "Structurer une Startup Early-Stage",
      duration: "2 jours",
      level: "Management",
      description: "Organiser votre équipe et mettre en place des process efficaces.",
      pricing: "55 000 DZD",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1F1A] text-balance">
            Formations Pratiques
          </h2>
          <p className="text-lg text-[#47534E] leading-relaxed mt-2">
            Résolvez les blocages réels de l'entrepreneuriat en Algérie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-[0_12px_36px_rgba(12,97,88,0.08)] transition-all rounded-[24px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-[#CDEDE4] text-[#0C6158] rounded-full">
                    {course.level}
                  </span>
                  <span className="text-xs font-bold text-[#1B1AFE]">{course.pricing}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2 group-hover:text-[#1B1AFE] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-[#47534E] leading-relaxed mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-[#47534E] mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-[#0C6158] hover:text-[#0C6158]/70 font-medium w-full justify-start"
                  asChild
                >
                  <Link href="/formations">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            asChild
          >
            <Link href="/formations">
              Voir le catalogue complet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

