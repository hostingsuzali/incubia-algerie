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
    {
      icon: Building2,
      title: "Accès partenaires financiers",
      description: "Mise en relation avec investisseurs et institutions financières.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#CDEDE4]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 text-[#0C6158] text-sm font-medium mb-6">
            Boîte à outils
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1F1A] text-balance">
            La boîte à outils des entrepreneurs
          </h2>
          <p className="text-lg text-[#47534E] leading-relaxed mt-2">
            Des outils et services concrets pour chaque étape de votre parcours entrepreneurial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-[#E7EBE9] bg-white shadow-[0_6px_18px_rgba(12,97,88,0.06)] hover:shadow-[0_12px_36px_rgba(12,97,88,0.08)] hover:-translate-y-1 transition-all duration-320 rounded-[24px]"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#CDEDE4] flex items-center justify-center mb-6 group-hover:bg-[#CDEDE4]/80 transition-colors">
                  <service.icon className="w-7 h-7 text-[#0C6158]" />
                </div>
                <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">{service.title}</h3>
                <p className="text-sm text-[#47534E] leading-relaxed mb-6">{service.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-[#0C6158] hover:text-[#0C6158]/70 font-medium"
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
