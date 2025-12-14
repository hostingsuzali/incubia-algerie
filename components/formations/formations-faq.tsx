"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function FormationsFaq() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const faqs = [
        {
            question: "Les formations sont-elles payantes ?",
            answer: "Certaines formations sont gratuites pour les startups incubées. Les autres sont payantes avec des tarifs adaptés aux early-stage. Nous proposons des facilités de paiement et des bourses selon votre situation.",
        },
        {
            question: "Peut-on suivre une formation sans être incubé ?",
            answer: "Oui, nos formations sont ouvertes à tous les entrepreneurs, incubés ou non. Cependant, les startups dans nos programmes bénéficient de tarifs préférentiels et d'un accès prioritaire.",
        },
        {
            question: "Le mentorat est-il individuel ?",
            answer: "Oui, le mentorat est toujours individuel ou par équipe startup. Nous ne faisons pas de mentorat de groupe. Chaque session est adaptée à votre contexte et vos enjeux spécifiques.",
        },
        {
            question: "Peut-on choisir son mentor ?",
            answer: "Dans les programmes, nous matchons les mentors selon votre stade et vos besoins. Pour le mentorat à la demande, vous pouvez exprimer vos préférences et nous vous proposons les profils les plus adaptés.",
        },
        {
            question: "Y a-t-il un suivi après les formations ?",
            answer: "Oui, chaque formation inclut un suivi post-session (office hours, groupe WhatsApp, ressources complémentaires). Les participants restent dans notre réseau et peuvent solliciter de l'aide.",
        },
        {
            question: "Les formations sont-elles certifiantes ?",
            answer: "Nous délivrons des attestations de participation, mais nous ne sommes pas un organisme de certification académique. Notre valeur est dans les compétences opérationnelles, pas les diplômes.",
        },
        {
            question: "Combien de temps dure un mentorat ?",
            answer: "Cela dépend de vos objectifs. En moyenne, un cycle de mentorat dure 3 à 6 mois avec des sessions bi-mensuelles. Certains mentorés continuent sur du long-terme selon leurs besoins.",
        },
        {
            question: "Les formations sont-elles adaptées au marché algérien ?",
            answer: "Absolument. Tous nos intervenants connaissent le marché algérien. Les cas pratiques, exemples et problématiques sont 100% localisés (réglementation, financement, culture business).",
        },
    ]

    return (
        <section ref={ref} className="py-32 bg-[#F9FAF9]">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F1A] tracking-tight mb-6">
                        Questions Fréquentes
                    </h2>
                    <p className="text-lg text-[#47534E] leading-relaxed">
                        Tout ce que vous devez savoir sur nos formations et notre mentorat.
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
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-white border-2 border-[#E7EBE9] hover:border-[#CA9BFA]/50 rounded-2xl px-8 data-[state=open]:border-[#CA9BFA] transition-all overflow-hidden"
                                >
                                    <AccordionTrigger className="text-left font-bold text-[#0D1F1A] hover:text-[#CA9BFA] hover:no-underline py-6 text-base">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#47534E] pb-6 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
