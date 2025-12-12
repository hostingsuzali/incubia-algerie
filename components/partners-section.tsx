export function PartnersSection() {
  const partners = [
    { name: "Hostinger", logo: "H" },
    { name: "HEC", logo: "HEC" },
    { name: "Université d'Alger", logo: "UA" },
    { name: "BNA Bank", logo: "BNA" },
    { name: "Sonatrach", logo: "S" },
    { name: "Algeria Venture", logo: "AV" },
  ]

  return (
    <section className="py-12 bg-white border-y border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-foreground/50 mb-10 uppercase tracking-wider font-medium">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-foreground/40 hover:text-foreground/70 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center font-bold text-sm">
                {partner.logo}
              </div>
              <span className="font-semibold hidden sm:block">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
