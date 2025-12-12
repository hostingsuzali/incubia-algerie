import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Qui peut postuler au programme d'incubation ?",
      answer:
        "Tout entrepreneur algérien ou résident en Algérie avec une idée de startup innovante peut postuler. Nous accueillons les projets à tous les stades, de l'idéation à la post-création.",
    },
    {
      question: "Combien de temps dure le programme ?",
      answer:
        "Notre programme d'incubation dure en moyenne 6 mois, avec un suivi post-incubation de 12 mois supplémentaires pour accompagner votre croissance.",
    },
    {
      question: "Le programme est-il payant ?",
      answer:
        "Nous proposons plusieurs formules adaptées à votre situation. Certains programmes sont gratuits grâce à nos partenaires institutionnels, d'autres sont payants avec des facilités de paiement.",
    },
    {
      question: "Comment puis-je financer ma startup ?",
      answer:
        "Nous vous accompagnons dans la préparation de vos dossiers pour les dispositifs ANSEJ, CNAC, ANDI, ainsi que pour les levées de fonds auprès d'investisseurs privés.",
    },
    {
      question: "Proposez-vous un espace de travail ?",
      answer:
        "Oui, nous proposons des espaces de coworking, des bureaux dédiés et des services de domiciliation pour nos startups incubées.",
    },
    {
      question: "Quels secteurs d'activité sont acceptés ?",
      answer:
        "Nous accompagnons des startups dans tous les secteurs : tech, agrotech, fintech, e-commerce, santé, éducation, énergie, et bien d'autres.",
    },
    {
      question: "Comment postuler ?",
      answer:
        "Remplissez le formulaire de candidature en ligne. Notre équipe examinera votre dossier et vous contactera sous 2 semaines pour un premier entretien.",
    },
  ]

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ backgroundColor: "oklch(0.96 0.03 60)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Questions fréquentes</h2>
          <p className="text-lg text-foreground/70">Tout ce que vous devez savoir pour démarrer avec Incubia.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-0 rounded-3xl px-8 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
