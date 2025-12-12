import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, FileText, Presentation, TrendingUp, ArrowRight, Check } from "lucide-react"

export function IncubationProgram() {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Idéation",
      description: "Transformez votre idée en concept viable avec notre accompagnement.",
      outcomes: ["Validation du concept", "Étude de marché", "Définition de la proposition de valeur"],
      deliverables: "Business Model Canvas",
      bgColor: "oklch(0.98 0.01 280)",
    },
    {
      number: "02",
      icon: Rocket,
      title: "MVP & Validation",
      description: "Construisez et testez votre produit minimum viable auprès de vrais utilisateurs.",
      outcomes: ["Prototype fonctionnel", "Tests utilisateurs", "Itérations produit"],
      deliverables: "MVP validé",
      bgColor: "oklch(0.98 0.02 150)",
    },
    {
      number: "03",
      icon: FileText,
      title: "Business Plan & Stratégie",
      description: "Structurez votre modèle économique et définissez votre stratégie de croissance.",
      outcomes: ["Plan financier", "Stratégie commerciale", "Roadmap produit"],
      deliverables: "Business Plan complet",
      bgColor: "oklch(0.98 0.02 200)",
    },
    {
      number: "04",
      icon: Presentation,
      title: "Préparation Dossier & Pitch",
      description: "Préparez vos dossiers de financement et perfectionnez votre pitch.",
      outcomes: ["Dossier ANSEJ/CNAC", "Pitch deck", "Coaching présentation"],
      deliverables: "Dossier financement prêt",
      bgColor: "oklch(0.98 0.02 60)",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Lancement & Suivi",
      description: "Lancez votre entreprise et bénéficiez d'un suivi continu post-incubation.",
      outcomes: ["Création d'entreprise", "Premiers clients", "Suivi de croissance"],
      deliverables: "Entreprise opérationnelle",
      bgColor: "oklch(0.98 0.01 80)",
    },
  ]

  return (
    <section id="programme" className="py-24 lg:py-32" style={{ backgroundColor: "oklch(0.96 0.04 150)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 text-foreground text-sm font-medium mb-6">
            Programme d'incubation
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Un parcours structuré vers le succès
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            5 étapes clés pour passer de l'idée à une startup financée et opérationnelle en Algérie.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl"
              style={{ backgroundColor: step.bgColor }}
            >
              <CardContent className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1 flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="text-5xl font-bold text-foreground/20">{step.number}</span>
                  </div>

                  <div className="lg:col-span-2 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center shrink-0">
                      <step.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground lg:hidden">{step.title}</h3>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <h3 className="text-xl font-bold text-foreground hidden lg:block">{step.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-sm font-semibold text-foreground mb-3">Résultats clés :</p>
                    <ul className="space-y-2">
                      {step.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                          <Check className="w-4 h-4 text-secondary shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-2 flex items-center justify-between lg:flex-col lg:items-end lg:justify-start gap-4">
                    <div className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium text-foreground">
                      {step.deliverables}
                    </div>
                    <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground/70 font-medium">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background gap-2 rounded-full">
            Postuler au programme
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
