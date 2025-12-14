"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function IncubationProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Idéation",
      summary: "Transformez votre idée en concept viable avec validation du marché et définition de la proposition de valeur.",
      deliverables: ["Business Model Canvas", "Étude de marché", "Persona clients"],
    },
    {
      number: "02",
      title: "MVP",
      summary: "Construisez et testez votre produit minimum viable auprès de vrais utilisateurs pour valider votre concept.",
      deliverables: ["Prototype fonctionnel", "Tests utilisateurs", "Feedback analysis"],
    },
    {
      number: "03",
      title: "Business Plan",
      summary: "Structurez votre modèle économique, plan financier et stratégie de croissance pour votre startup.",
      deliverables: ["Plan financier 3 ans", "Stratégie Go-to-Market", "Roadmap produit"],
    },
    {
      number: "04",
      title: "Financement",
      summary: "Préparez vos dossiers de financement (ANSEJ/CNAC) et perfectionnez votre pitch pour les investisseurs.",
      deliverables: ["Dossier ANSEJ/CNAC", "Pitch deck", "Simulation financière"],
    },
    {
      number: "05",
      title: "Lancement",
      summary: "Lancez votre entreprise et bénéficiez d'un suivi continu post-incubation pour accélérer votre croissance.",
      deliverables: ["Création juridique", "Premiers clients", "Suivi 12 mois"],
    },
  ]

  return (
    <section id="programme" className="relative py-32 bg-gradient-to-b from-white via-[#F9FAF9] to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B1AFE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#CA9BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-[#1B1AFE]/10 text-[#1B1AFE] font-semibold text-sm mb-6">
            Notre Méthodologie
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] text-balance mb-6 tracking-tight">
            Le Parcours Startup Incubia
          </h2>
          <p className="text-lg md:text-xl text-[#47534E] leading-relaxed">
            Un programme structuré en 5 étapes pour transformer votre idée en entreprise rentable
          </p>
        </motion.div>

        {/* Timeline with cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B1AFE]/20 via-[#CA9BFA]/20 to-[#1B1AFE]/20 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Left side (or right for odd items) */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12 lg:col-start-2"}`}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] flex items-center justify-center shadow-lg shadow-[#1B1AFE]/20">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0D1F1A]">{step.title}</h3>
                  </div>
                  <p className="text-[#47534E] leading-relaxed mb-6">{step.summary}</p>

                  {/* Deliverables */}
                  <div className={`space-y-2 ${index % 2 === 0 ? "lg:flex lg:flex-col lg:items-end" : ""}`}>
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="inline-flex items-center gap-2 text-sm text-[#0C6158]">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] ring-4 ring-white shadow-lg" />

                {/* Right side card (or left for odd items) */}
                <div className={`${index % 2 === 0 ? "lg:pl-12" : "lg:pr-12 lg:col-start-1 lg:row-start-1"}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-[#E7EBE9] group-hover:shadow-xl transition-all">
                      <div className="aspect-video bg-gradient-to-br from-[#F9FAF9] to-[#E7EBE9] rounded-2xl flex items-center justify-center mb-4">
                        <div className="text-6xl font-bold text-[#1B1AFE]/10">{step.number}</div>
                      </div>
                      <div className="text-sm text-[#47534E] font-medium">
                        Durée estimée: {index === 0 ? "2 semaines" : index === 4 ? "En continu" : "3-4 semaines"}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="gap-2 h-14 px-8 bg-[#1B1AFE] text-white font-semibold rounded-full hover:bg-[#1B1AFE]/90 transition-all hover:scale-105 shadow-lg"
            asChild
          >
            <Link href="/programmes">
              Découvrir le programme complet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
