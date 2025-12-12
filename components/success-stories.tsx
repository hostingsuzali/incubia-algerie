"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Users, Banknote } from "lucide-react"

export function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const metrics = [
    { icon: TrendingUp, value: "85+", label: "Projets lancés" },
    { icon: Users, value: "200+", label: "Fondateurs accompagnés" },
    { icon: Banknote, value: "5M DZD", label: "Levés en moyenne" },
  ]

  const testimonials = [
    {
      quote:
        "Incubia nous a permis de structurer notre projet et d'obtenir notre financement ANSEJ en seulement 3 mois. L'accompagnement personnalisé a fait toute la différence.",
      author: "Karim Benali",
      role: "Fondateur, TechDZ",
      image: "/professional-young-algerian-man-portrait.jpg",
      result: "+400% de croissance en 1 an",
    },
    {
      quote:
        "Le réseau de mentors d'Incubia m'a ouvert des portes que je n'aurais jamais pu ouvrir seule. Aujourd'hui, ma startup emploie 15 personnes.",
      author: "Amira Hadj",
      role: "CEO, EduAlgérie",
      image: "/professional-algerian-woman-portrait.jpg",
      result: "15 employés en 18 mois",
    },
    {
      quote:
        "De l'idée à la levée de fonds, chaque étape a été accompagnée par des experts qui comprennent vraiment le marché algérien.",
      author: "Youcef Mansouri",
      role: "Co-fondateur, AgroTech",
      image: "/professional-algerian-businessman-portrait.jpg",
      result: "2 millions DZD levés",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="success" className="py-24 lg:py-32" style={{ backgroundColor: "oklch(0.98 0.01 80)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ils ont réussi avec Incubia
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Des entrepreneurs algériens qui ont transformé leurs idées en success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm rounded-3xl"
              style={{ backgroundColor: "oklch(0.96 0.03 280)" }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-2">{metric.value}</p>
                <p className="text-sm text-foreground/60">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <Card className="border-0 bg-white shadow-lg rounded-[32px] overflow-hidden">
            <CardContent className="p-10 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <Quote className="w-14 h-14 text-secondary/30" />
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                    {testimonials[currentSlide].quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentSlide].image || "/placeholder.svg"}
                      alt={testimonials[currentSlide].author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-foreground">{testimonials[currentSlide].author}</p>
                      <p className="text-sm text-foreground/60">{testimonials[currentSlide].role}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/20 text-sm font-semibold text-foreground">
                    {testimonials[currentSlide].result}
                  </div>
                </div>

                <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
                  <img
                    src="/successful-startup-team-celebrating-in-modern-alge.jpg"
                    alt="Success story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-white border-foreground/20 hover:bg-foreground/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? "bg-secondary w-8" : "bg-foreground/20"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-white border-foreground/20 hover:bg-foreground/5"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
