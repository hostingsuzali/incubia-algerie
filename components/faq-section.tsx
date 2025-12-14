"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { HelpCircle } from "lucide-react"

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "Qui peut postuler au programme d'incubation ?",
      answer:
        "Tout entrepreneur algérien ou résident en Algérie avec une idée de startup innovante peut postuler. Nous accueillons les projets à tous les stades, de l'idéation à la post-création.",
    },
    {
      question: "Combien de temps dure le programme ?",
      answer:
        "Notre programme d'incubation dure en moyenne 12 semaines intensives, avec un suivi post-incubation de 12 mois supplémentaires pour accompagner votre croissance et votre développement.",
    },
    {
      question: "Le programme est-il payant ?",
      answer:
        "Nous proposons plusieurs formules adaptées à votre situation. Certains programmes sont gratuits grâce à nos partenaires institutionnels, d'autres sont payants avec des facilités de paiement. Contactez-nous pour en savoir plus.",
    },
    {
      question: "Comment puis-je financer ma startup ?",
      answer:
        "Nous vous accompagnons dans la préparation de vos dossiers pour les dispositifs ANSEJ, CNAC, ANDI, ainsi que pour les levées de fonds auprès d'investisseurs privés. Notre taux de réussite est de 85% pour les dossiers ANSEJ/CNAC.",
    },
    {
      question: "Proposez-vous un espace de travail ?",
      answer:
        "Oui, nous proposons des espaces de coworking modernes, des bureaux dédiés et des services de domiciliation pour nos startups incubées. Nos espaces sont équipés de tout le nécessaire pour travailler efficacement.",
    },
    {
      question: "Quels secteurs d'activité sont acceptés ?",
      answer:
        "Nous accompagnons des startups dans tous les secteurs : tech, agrotech, fintech, e-commerce, santé, éducation, énergie, et bien d'autres. L'innovation et le potentiel de croissance sont nos principaux critères.",
    },
  ]

  return (
    <section id="faq" className="relative py-32 bg-gradient-to-b from-white to-[#F9FAF9] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#1B1AFE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CA9BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#1B1AFE] to-[#CA9BFA] mb-6"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1F1A] mb-6 tracking-tight">
            Questions Fréquentes
          </h2>
          <p className="text-lg md:text-xl text-[#47534E] max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour démarrer avec Incubia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group bg-white border-2 border-[#E7EBE9] hover:border-[#1B1AFE]/30 rounded-2xl px-8 shadow-sm hover:shadow-lg data-[state=open]:shadow-xl data-[state=open]:border-[#1B1AFE]/50 transition-all overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#1B1AFE] hover:no-underline py-6 text-lg transition-colors">
                    <span className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1B1AFE]/10 to-[#CA9BFA]/10 flex items-center justify-center text-[#1B1AFE] font-bold text-sm mt-1">
                        {index + 1}
                      </span>
                      <span className="flex-1">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#47534E] pb-6 pt-2 pl-12 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-[#F9FAF9] to-white border-2 border-[#E7EBE9]">
            <p className="text-[#47534E] text-lg">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1B1AFE] to-[#CA9BFA] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contactez notre équipe
              <HelpCircle className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
