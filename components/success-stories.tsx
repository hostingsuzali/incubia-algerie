"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Users, Banknote, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function SuccessStories() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = [
    {
      quote:
        "Incubia nous a permis de structurer notre projet et d'obtenir notre financement ANSEJ en seulement 3 mois. L'accompagnement personnalisé a fait toute la différence.",
      author: "Karim Benali",
      role: "Fondateur, TechDZ",
      image: "/professional-young-algerian-man-portrait.jpg",
      metrics: { ca: "150K€", levee: "50K€", impact: "+400% croissance" },
    },
    {
      quote:
        "Le réseau de mentors d'Incubia m'a ouvert des portes que je n'aurais jamais pu ouvrir seule. Aujourd'hui, ma startup emploie 15 personnes.",
      author: "Amira Hadj",
      role: "CEO, EduAlgérie",
      image: "/professional-algerian-woman-portrait.jpg",
      metrics: { ca: "300K€", levee: "200K€", impact: "15 employés" },
    },
    {
      quote:
        "De l'idée à la levée de fonds, chaque étape a été accompagnée par des experts qui comprennent vraiment le marché algérien.",
      author: "Youcef Mansouri",
      role: "Co-fondateur, AgroTech",
      image: "/professional-algerian-businessman-portrait.jpg",
      metrics: { ca: "500K€", levee: "300K€", impact: "2M DZD levés" },
    },
  ]

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="success" className="relative py-32 bg-gradient-to-b from-[#0D1F1A] to-[#1a1a2e] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#1B1AFE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CA9BFA]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-sm mb-6"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6 tracking-tight"
          >
            Ils ont réussi avec Incubia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Des entrepreneurs algériens qui ont transformé leurs idées en success stories
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-[32px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Quote */}
                    <div className="space-y-8">
                      <Quote className="w-16 h-16 text-[#CA9BFA]/40" />
                      <blockquote className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
                        "{testimonials[currentSlide].quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonials[currentSlide].image}
                          alt={testimonials[currentSlide].author}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-white/10"
                        />
                        <div>
                          <p className="font-bold text-white text-lg">{testimonials[currentSlide].author}</p>
                          <p className="text-white/60">{testimonials[currentSlide].role}</p>
                        </div>
                      </div>

                      {/* Metrics badges */}
                      <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 rounded-full bg-[#1B1AFE]/20 backdrop-blur-sm border border-[#1B1AFE]/30 text-white font-semibold text-sm">
                          CA: {testimonials[currentSlide].metrics.ca}
                        </div>
                        <div className="px-4 py-2 rounded-full bg-[#CA9BFA]/20 backdrop-blur-sm border border-[#CA9BFA]/30 text-white font-semibold text-sm">
                          Levée: {testimonials[currentSlide].metrics.levee}
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm">
                          {testimonials[currentSlide].metrics.impact}
                        </div>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <img
                        src="/successful-startup-team-celebrating-in-modern-alge.jpg"
                        alt="Success story"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F1A]/60 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1)
                    setCurrentSlide(index)
                  }}
                  className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/30 w-2"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: Users, value: "24+", label: "Startups accompagnées" },
            { icon: Banknote, value: "1.2M€", label: "Levées totales" },
            { icon: TrendingUp, value: "16", label: "Projets incubés" },
            { icon: Star, value: "4.8/5", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#CA9BFA] mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
