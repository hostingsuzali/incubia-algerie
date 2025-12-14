"use client"

import Link from "next/link"
import { Compass, Users, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function ValuePillars() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      icon: Compass,
      title: "Accompagnement stratégique",
      description: "Conseils opérationnels & roadmap business",
      benefit: "Validez votre modèle économique et structurez votre croissance avec un plan d'action concret.",
      cta: "Explorer",
      href: "/services/accompagnement",
      bgColor: "#F2E8FF",
    },
    {
      icon: Users,
      title: "Réseau d'experts & mentors",
      description: "50+ mentors sélectionnés",
      benefit: "Bénéficiez de l'expertise de dirigeants et entrepreneurs qui ont réussi en Algérie.",
      cta: "Découvrir les mentors",
      href: "/equipe#mentors",
      bgColor: "#EEF1FF",
    },
    {
      icon: Briefcase,
      title: "Outils & services",
      description: "modèles, accès à partenaires financiers",
      benefit: "Accédez à des templates prêts à l'emploi et à notre réseau de financeurs et partenaires.",
      cta: "Voir la toolbox",
      href: "/services",
      bgColor: "#E6F3E9",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div 
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0D1F1A] text-balance">
            Pourquoi Incubia ?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border border-[rgba(151,210,199,0.06)] shadow-[0_6px_18px_rgba(12,97,88,0.06)] hover:shadow-[0_12px_36px_rgba(12,97,88,0.08)] transition-all duration-320 hover:-translate-y-1 rounded-[24px] flex flex-col ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-[0.98]"
              }`}
              style={{
                backgroundColor: pillar.bgColor,
                transition: 'all 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-6">
                  <pillar.icon className="w-10 h-10 text-[#0C6158]" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1F1A] mb-2">{pillar.title}</h3>
                <p className="text-[#47534E] leading-relaxed mb-2 text-sm">{pillar.description}</p>
                <p className="text-[#47534E] leading-relaxed mb-6 text-sm flex-1">{pillar.benefit}</p>
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-[#0C6158] hover:text-[#0C6158]/70 font-medium mt-auto"
                  asChild
                >
                  <Link href={pillar.href}>
                    {pillar.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
