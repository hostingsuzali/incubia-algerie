import { Target, Users, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ValuePillars() {
  const pillars = [
    {
      icon: Target,
      title: "Accompagnement Stratégique",
      description:
        "Un suivi personnalisé de votre projet avec des experts qui comprennent les enjeux du marché algérien et vous guident vers le succès.",
      bgColor: "oklch(0.96 0.04 150)",
    },
    {
      icon: Users,
      title: "Réseau d'Experts & Mentors",
      description:
        "Accédez à un écosystème de mentors expérimentés, d'investisseurs et de partenaires prêts à soutenir votre croissance.",
      bgColor: "oklch(0.96 0.03 200)",
    },
    {
      icon: Briefcase,
      title: "Outils et Services Entrepreneuriaux",
      description:
        "Des ressources concrètes, formations et outils pour structurer votre entreprise et préparer vos levées de fonds.",
      bgColor: "oklch(0.96 0.03 60)",
    },
  ]

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "oklch(0.98 0.01 80)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pourquoi choisir Incubia ?
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Nous combinons expertise locale et méthodologies internationales pour accompagner les entrepreneurs
            algériens vers le succès.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-3xl"
              style={{ backgroundColor: pillar.bgColor }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{pillar.description}</p>
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-foreground hover:text-foreground/70 font-medium"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
