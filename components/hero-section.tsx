import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Handshake, FileCheck, Star } from "lucide-react"

export function HeroSection() {
  const stats = [
    { icon: Users, value: "150+", label: "Startups accompagnées" },
    { icon: Handshake, value: "50+", label: "Partenaires clés" },
    { icon: FileCheck, value: "80+", label: "Dossiers financés" },
    { icon: Star, value: "98%", label: "Satisfaction founders" },
  ]

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "oklch(0.96 0.03 280)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Incubateur #1 en Algérie
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Lancez, financez et développez votre <span className="text-secondary">startup</span> en Algérie
            </h1>

            <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
              De l'idée au lancement, bénéficiez d'un accompagnement expert, d'un réseau de mentors et d'outils concrets
              pour transformer votre vision en succès.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background gap-2 rounded-full">
                Rejoindre le programme
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:bg-foreground/5 bg-transparent rounded-full"
              >
                Parler à un expert
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl">
              <img
                src="/diverse-startup-founders-collaborating-in-modern-o.jpg"
                alt="Équipe de fondateurs collaborant"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-3xl p-5 shadow-lg border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">+320%</p>
                  <p className="text-sm text-muted-foreground">Croissance moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-foreground/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
