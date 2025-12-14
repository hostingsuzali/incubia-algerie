import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function FormationsPreview() {
  const courses = [
    {
      title: "Création d'entreprise en Algérie",
      duration: "4 semaines",
      level: "Débutant",
      description: "Maîtrisez toutes les étapes de création d'entreprise en Algérie.",
    },
    {
      title: "Levée de fonds & financement",
      duration: "6 semaines",
      level: "Intermédiaire",
      description: "Apprenez à préparer vos dossiers et pitch pour lever des fonds.",
    },
    {
      title: "Business Model & Stratégie",
      duration: "5 semaines",
      level: "Intermédiaire",
      description: "Structurez votre modèle économique et votre stratégie de croissance.",
    },
    {
      title: "Marketing digital pour startups",
      duration: "3 semaines",
      level: "Débutant",
      description: "Développez votre présence digitale et acquérez vos premiers clients.",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1F1A] text-balance">
            Formations
          </h2>
          <p className="text-lg text-[#47534E] leading-relaxed mt-2">
            Des formations pratiques pour développer vos compétences entrepreneuriales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group border border-[#E7EBE9] bg-white overflow-hidden hover:shadow-[0_12px_36px_rgba(12,97,88,0.08)] transition-all rounded-[24px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-[#CDEDE4] text-[#0C6158] rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2 group-hover:text-[#97D2C7] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-[#47534E] leading-relaxed mb-6">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-[#47534E] mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-[#0C6158] hover:text-[#0C6158]/70 font-medium w-full justify-start"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
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

