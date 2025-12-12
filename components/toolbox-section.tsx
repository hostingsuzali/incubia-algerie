import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  MapPin,
  Users,
  ClipboardList,
  GraduationCap,
  FileCheck,
  TrendingUp,
  FileDown,
  ArrowRight,
} from "lucide-react"

export function ToolboxSection() {
  const services = [
    {
      icon: Building2,
      title: "Création d'entreprise",
      description: "Accompagnement complet pour créer votre structure juridique en Algérie.",
    },
    {
      icon: MapPin,
      title: "Domiciliation",
      description: "Adresse commerciale et services de domiciliation pour votre startup.",
    },
    {
      icon: Users,
      title: "Mentorat",
      description: "Sessions régulières avec des mentors expérimentés de votre secteur.",
    },
    {
      icon: ClipboardList,
      title: "Préparation administrative",
      description: "Aide à la constitution de vos dossiers et formalités administratives.",
    },
    {
      icon: GraduationCap,
      title: "Formation & workshops",
      description: "Formations pratiques sur tous les aspects de l'entrepreneuriat.",
    },
    {
      icon: FileCheck,
      title: "Support dossiers financement",
      description: "Préparation des dossiers ANSEJ, CNAC, ANDI et autres dispositifs.",
    },
    {
      icon: TrendingUp,
      title: "Accompagnement croissance",
      description: "Suivi post-création pour accélérer votre développement.",
    },
    {
      icon: FileDown,
      title: "Documentation téléchargeable",
      description: "Templates, guides et ressources à télécharger gratuitement.",
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32" style={{ backgroundColor: "oklch(0.96 0.03 200)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 text-foreground text-sm font-medium mb-6">
            Boîte à outils
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Tous les services pour réussir
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Des outils et services concrets pour chaque étape de votre parcours entrepreneurial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-3xl"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-secondary/30 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-foreground hover:text-foreground/70 font-medium"
                >
                  Voir le service
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
